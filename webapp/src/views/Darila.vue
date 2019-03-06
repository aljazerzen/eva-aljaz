<template>
  <section>
    <p>
      Pri poročnih darilih se je ponavadi težko skoordinirati.
      Ker sva se iz napak najnih staršev naučila, da ne potrebujeva treh jedilnih servisov,
      sva sestavila seznam stvari, ki bi jih bila najbolj vesela.
    </p>

    <p v-if="!gost" style="background-color: #eee; padding: 1rem 0.5rem; border-radius: 3px;">
      Če želiš darilo rezervirati, najprej potrdi, da prideš.
    </p>

    <div id=moja class="list-container" v-if=moja.length>
      <article style="border: none"><h3>Tvoja rezervirana darila:</h3></article>
      <article v-for="(darilo, index) in moja" :key="index">
        <div>  
          <h3>{{darilo.name}} <img src="../assets/done.svg" height="20"></h3>
          <p v-if=darilo.description >{{ darilo.description }}</p>
        </div>
        <a :href="darilo.link" v-if="darilo.link">Link</a>
        <button @click="rezerviraj(darilo)">Odstrani</button>
      </article>
    </div>

    <div class="list-container">
      <article v-for="(darilo, index) in darila" :key="index">
        <div>
          <h3>{{darilo.name}}</h3>
          <p v-if=darilo.description >{{ darilo.description }}</p>
        </div>
        <a :href="darilo.link" v-if="darilo.link">Link</a>
        <button @click="rezerviraj(darilo)">Rezerviraj</button>
      </article>
      <article v-if="!darila.length" style="margin-top: 20px">
        <p style="color: #999">Idej je zmankalo, mogoče jih še kaj dodava...</p>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    darila: [],
    moja: [],
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
      this.moja = res.body.moja;
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
section > * {
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
  padding: 0.7rem 0;

  border-bottom: 1px solid #ddd;
}
article:last-child {
  border: none;
}

article > div {
  flex-grow: 1;
  margin-right: 8px;
}
article h3 {
  margin: 0; 
}
article h3 image {
  vertical-align: bottom;
}
article p {
  color: #777;
  margin: 0.5rem 0 0 0;
}
article a {
  margin-right: 8px;
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
#moja {
  margin-bottom: -1px;
  border-bottom: 1px solid #666;
  background-color: #274156;
  border-radius: 3px;
  color: #eee;
  padding: 0 10px 10px 10px;
}
#moja article {
  border-color: #2e4e68;
}
#moja article a {
  border-color: #eee; 
  color: #eee; 
}
#moja article p {
  color: #bbb; 
}
#moja button {
  background-color: #bc0808; 
  /* color: #eee;  */
}
</style>