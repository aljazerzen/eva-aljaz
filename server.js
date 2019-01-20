const mongodb = require('mongodb');
const { ObjectId } = require('bson');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('webapp/dist'));

process.env.API_PORT = process.env.API_PORT || 8000;

async function start() {
  const mongo = await mongodb.connect('mongodb://localhost:27017/poroci-me', { useNewUrlParser: true });
  const darilaCollection = mongo.db().collection('darila');
  const gostiCollection = mongo.db().collection('gosti');

  async function list(gost) {
    const darila = darilaCollection.find({ rezerviran: { $exists: false } }).toArray();
    const rezervirana = gost ? darilaCollection.find({ rezerviran: gost }).toArray() : [];
    return { darila: await darila, rezervirana: await rezervirana };
  }

  function parseGost(req) {
    return ObjectId.isValid(req.query.gost) ? ObjectId(req.query.gost) : null;
  }

  app.get('/darila', async (req, res) => {
    const gost = parseGost(req);
    res.send(await list(gost));
  })

  app.get('/rezerviraj', async (req, res) => {
    const gost = parseGost(req);

    if (gost && ObjectId.isValid(req.query.id)) {
      const _id = ObjectId(req.query.id);

      const darilo = await darilaCollection.findOne({ _id });

      if (darilo) {
        if (!darilo.rezerviran) {
          await darilaCollection.updateOne({ _id }, { $set: { rezerviran: gost } });
        } else if (darilo.rezerviran.equals(gost)) {
          await darilaCollection.updateOne({ _id }, { $unset: { rezerviran: 1 } });
        }
      }
    }
    res.send(await list(gost));
  });

  app.post('/pridem', async (req, res) => {
    let { ime, pridem, gosti, sporocilo } = req.body;
    if (ime) {
      ime = ime.toLowerCase();

      await gostiCollection.updateOne({ ime }, { $set: { ime, pridem, gosti, sporocilo } }, { upsert: true });
      const gost = await gostiCollection.findOne({ ime });

      res.send({ id: gost._id });
    } else {
      res.status(400).send({});
    }
  });

  app.get('/pridem', async (req, res) => {
    const _id = parseGost(req);
    
    if (_id) {
      const gost = await gostiCollection.findOne({ _id });
      res.send({ gost });
    } else {
      res.status(404).send({});
    }
  });

  await app.listen(+process.env.API_PORT);
  console.log(`listening on port ${+process.env.API_PORT}`)
}

start();