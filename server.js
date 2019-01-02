const mongodb = require('mongodb');
const { ObjectId } = require('bson');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('webapp/dist'));

process.env.API_PORT = process.env.API_PORT || 8000;

async function start() {
  const mongo = await mongodb.connect('mongodb://localhost:27017/poroci-me', { useNewUrlParser: true });
  const collection = mongo.db().collection('darila');

  async function list(ip) {
    const darila = collection.find({ rezerviran: { $exists: false } }).toArray();
    const rezervirana = collection.find({ rezerviran: ip }).toArray();
    return { darila: await darila, rezervirana: await rezervirana };
  }

  function ip(req) {
    return req.headers['x-real-ip'] || req.ip
  }

  app.get('/darila', async (req, res) => {
    res.send(await list(ip(req)));
  })

  app.get('/rezerviraj', async (req, res) => {
    if (ObjectId.isValid(req.query.id)) {
      const _id = ObjectId(req.query.id);

      const darilo = await collection.findOne({ _id });

      if (darilo) {
        if (!darilo.rezerviran) {
          await collection.updateOne({ _id }, { $set: { rezerviran: ip(req) } });
        } else if (darilo.rezerviran == ip(req)) {
          await collection.updateOne({ _id }, { $unset: { rezerviran: 1 } });
        }
      }
    }
    res.send(await list(ip(req)));
  });

  await app.listen(+process.env.API_PORT);
  console.log(`listening on port ${+process.env.API_PORT}`)
}

start();