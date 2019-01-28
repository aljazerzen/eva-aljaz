<template>
  <section>
    <p>
      Pri poročnih darilih se je ponavadi težko skoordinirati.
      Ker sva se iz napak najnih staršev naučila, da ne potrebujeva treh jedilnih servisov,
      sva sestavila seznam stvari, ki bi jih bila najbolj vesela.
    </p>

    <p v-if="!gost">
      Če želiš darilo rezervirati, najprej potrdi, da prideš.
    </p>

    <div id=rezervirana class="list-container" v-if=rezervirana.length>
      <article><h3>Tvoja rezervirana darila:</h3></article>
      <article v-for="(darilo, index) in rezervirana" :key="index">
        <h3>{{darilo.name}} <img src="../assets/done.svg" height="20"></h3>
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
      <article v-if="!darila.length">
        <p style="color: #999">Idej nama je zmankalo...</p>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    darila: [],
    rezervirana: [],
    gost: null
  }),
  async mounted() {
    this.gost = this.$localStorage.get('gost');
    const res = await this.$http.get(`darila?gost=${this.gost || ''}`);
    this.set(res);
  },
  methods: {
    set(res) {
      this.darila = res.body.darila;
      this.rezervirana = res.body.rezervirana;
    },
    async rezerviraj(darilo) {
      const res = await this.$http.get(`rezerviraj?id=${darilo._id}&gost=${this.gost || ''}`);
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
article h3 image {
  vertical-align: bottom;
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
  appearance: none;
}
#rezervirana {
  margin-bottom: -1px;
  border-bottom: 1px solid #666;
  background-color: #274156;
  border-radius: 3px;
  color: #eee;
  padding: 0 10px;
}
#rezervirana article>a {
  border-color: #eee; 
  color: #eee; 
}
#rezervirana button {
  background-color: #bc0808; 
  /* color: #eee;  */
}
</style>