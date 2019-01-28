<template>
  <div>
    <section id=hero>
      <div id="overlay">
        <img id="fingerprints" src="../assets/fingerprints_small.png">
      </div>

      <div class="spacer"></div>
      
      <h1>Eva &amp; Aljaž</h1>

      <p>7. September 2019</p>      
    </section>
    <casovnica style="margin: auto"/>
  </div>
</template>
<script>
import Casovnica from './Časovnica'

export default {
  components: { Casovnica },
}
</script>

<style scoped>
#hero {
  position: relative;
  background: center no-repeat;
  background-image: url("../assets/storzic.jpg");
  background-size: cover;

  min-height: 400px;

  /* color: #333; */
  color: #fff;
  display: flex;
  align-content: center;
  flex-direction: column;
}
#hero h1 {
  font-family: "Amatic SC", cursive;
  font-size: 54px;
  margin: 0;
  margin-top: 50px;
  text-align: center;
  z-index: 1;
}
#hero p {
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
}
#hero>p, #hero>h1 {
  text-shadow: 0 0 10px #000;
}

#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  text-align: center;
}
#fingerprints {
  max-width: 300px;
  max-height: 100px;
}
</style>