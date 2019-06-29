<template>
  <section>
    <div id="card">
      <header>
        Prideš?
        <div>Sporoči do 21. avgusta</div>
      </header>

      <div v-if="!saved">
        <div>
          <label>Ime in priimek</label>
          <input type="text" placeholder v-model="data.ime" @keypress="saved=false">
        </div>

        <div style="flex-direction: row;">
          <input type="radio" id="pridem" :value="true" v-model="data.pridem">
          <label for="pridem">Pridem</label>

          <div style="flex-grow: 1"></div>

          <input type="radio" id="ne-pridem" :value="false" v-model="data.pridem">
          <label for="ne-pridem">Ne pridem</label>
        </div>

        <div>
          <label v-if="data.pridem" for="gosti">Število gostov</label>
          <select v-if="data.pridem" id="gosti" v-model="data.gosti" @keypress="saved=false">
            <option value="1">pridem sam</option>
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
          <textarea style="resize: none;" v-model="data.sporocilo" @change="saved=false"></textarea>
        </div>

        <button @click="send" v-if="!saved">Pošlji</button>
      </div>
      <div v-else style="text-align: center">
        Hvala, se vidimo!  
        <a @click="saved=false" style="font-size: 12px; text-decoration: underline">Uredi</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    saved: false,
    data: {
      ime: "",
      pridem: true,
      gosti: 1,
      sporocilo: ""
    }
  }),
  async mounted() {
    const gost = this.$localStorage.get("gost");
    const res = await this.$http.get(`pridem?gost=${gost || ""}`);
    if (res.status == 200 && res.body && res.body.gost) {
      this.data = res.body.gost;
      this.saved = true;
    }
  },
  methods: {
    async send() {
      const res = await this.$http.post(`pridem`, { ...this.data });
      if (res.body.id) {
        this.saved = true;
        this.$localStorage.set("gost", res.body.id);
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
  margin: 2em 5px 0 5px;
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

select {
  padding: 0.5em;
  outline: none;
}

select:active {
  color: #222;
}

#card > div > div {
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