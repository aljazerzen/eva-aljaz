<template>
  <section>
    <div id="card">
      <header>Prideš?
        <div>Sporoči do 12. avgusta</div>
      </header>

      <div>
        <label>Ime in priimek</label>
        <input type="text" placeholder v-model="data.ime" :class="{ 'done-icon': saved }" @keypress="saved=false">
      </div>

      <div style="flex-direction: row; align-items: center; height: 3em">
        <input type="checkbox" id="pridem" v-model="data.pridem" @change="saved=false">
        <label for="pridem">{{ data.pridem ? 'Pridem' : 'Ne pridem' }}</label>

        <div style="flex-grow: 1"></div>

        <label v-if="data.pridem" for="gosti">Število gostov</label>
        <select v-if="data.pridem" id="gosti" v-model="data.gosti" @keypress="saved=false">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </div>

      <div v-if="data.pridem">
        <label>Napiši nama nekaj lepega</label>
        <textarea style="resize: none;" v-model="data.sporocilo" @change="saved=false" ></textarea>
      </div>

      <button @click="send">Pošlji</button>
    </div>
  </section>
</template>
<script>
const initialData = () => ({
  ime: "",
  pridem: false,
  gosti: 1,
  sporocilo: ""
});
export default {
  data: () => ({
    saved: false,
    data: initialData()
  }),
  async mounted() {
    const gost = this.$localStorage.get('gost');
    const res = await this.$http.get(`pridem?gost=${gost || ''}`);
    if(res.status == 200 && res.body) {
      this.data = res.body.gost;
      this.saved = true;
    }
  },
  methods: {
    async send() {
      const res = await this.$http.post(`pridem`, { ...this.data });
      if (res.body.id) {
        this.saved = true;
        this.$localStorage.set('gost', res.body.id);
      }
    }
  }
};
</script>

<style scoped>
section {
  max-width: 400px;
}
#card {
  margin-top: 2em;
  background-color: #274156;
  border-radius: 3px;
  color: #eee;
  padding: 1em;
}
header {
  text-align: center;
  font-size: 20px;
  margin: 1em 0 2em 0;
}
header div {
  font-size: 18px;
  font-weight: normal;
}

input[type="text"],
textarea,
select {
  border: none;
  margin: 5px 0;
  border-radius: 3px;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.1);
  color: #eee;
}

.done-icon {
  background: url('../assets/done.svg') right no-repeat;
  background-size: 3em 2em;
  padding-left: 17px;
}

select {
  padding: 0.5em;
  outline: none;
}

select:active {
  color: #222;
}

#card > div {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}

label {
  margin-right: 1em;
  vertical-align: middle;
}

button {
  color: #fff;
  border: none;
  font: inherit;
  background-color: #bc0808;
  border-radius: 2px;
  padding: 3px 10px;
  appearance: none;
}
</style>