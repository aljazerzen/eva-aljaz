<template>
  <section>
    <p>
      Pri poročnih darilih se je ponavadi težko skoordinirati.
      Ker sva se iz napak najnih staršev naučila, da ne potrebujeva treh jedilnih servisov,
      sva sestavila seznam stvari, ki bi se jih najbolj veslila.
    </p>

    <div id=rezervirana class="list-container" v-if=rezervirana.length >
      <article v-for="(darilo, index) in rezervirana" :key="index">
        <h3>{{darilo.name}} &#x2713;</h3>
        <a :href="darilo.link" v-if="darilo.link">Link</a>
        <div class="spacer"></div>
        <button @click="rezerviraj(darilo)">Odstrani</button>
      </article>
    </div>

    <div class="list-container">
      <article v-for="(darilo, index) in darila" :key="index">
        <h3>{{darilo.name}}</h3>
        <a :href="darilo.link" v-if="darilo.link">Link</a>
        <div class="spacer"></div>
        <button @click="rezerviraj(darilo)">Rezerviraj</button>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    darila: [],
    rezervirana: []
  }),
  async mounted() {
    const res = await this.$http.get("darila");
    this.set(res);
  },
  methods: {
    set(res) {
      this.darila = res.body.darila;
      this.rezervirana = res.body.rezervirana;
    },
    async rezerviraj(darilo) {
      const res = await this.$http.get(`rezerviraj?id=${darilo._id}`);
      this.set(res);
    }
  }
};
</script>

<style scoped>
section {
  /* padding: 1em 10px 0 10px; */
  max-width: 600px;
}
p {
  margin: 8px 0;
  padding: 0 8px;
}
#rezervirana {
  margin-bottom: -1px;
  border-bottom: 1px solid #666;
}
.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
article {
  flex: 600px 0 1;
  display: flex;
  align-items: center;
}
article > * {
  /* display: inline-block; */
  margin-right: 8px;
}
article h3 {
  margin-left: 8px;
}
article > a {
  margin-left: 8px;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid #333;
  /* background-color: #333; */
  border-radius: 2px;
  padding: 3px 10px;
}
button {
  color: #fff;
  border: none;
  font: inherit;
  float: right;
  vertical-align: center;
  background-color: #333;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>