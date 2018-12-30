<template>
  <section>
    <div id="overlay"></div>

    <h1>Eva &amp; Aljaž</h1>

    <p>7. September 2019 &bullet; Škofja Loka</p>

    <div class="spacer"></div>
  </section>
</template>
<style scoped>
section {
  position: relative;
  background: center no-repeat;
  background-image: url("../assets/storzic.jpg");
  background-size: cover;

  color: #333;
  display: flex;
  align-content: center;
  flex-direction: column;
}
section h1 {
  font-family: "Amatic SC", cursive;
  font-size: 54px;
  margin: 0;
  margin-top: 50px;
  text-align: center;
  z-index: 1;
}
section p {
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
}

#overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>