<template>
  <section>

    <div>
      <h2>Civilna poroka</h2>
      <h3>16:00</h3>
      <p>
      Grajski vrt v Škofji Loki <br>
      Grajska pot 14 <br>
      4220 Škofja Loka
      </p>

    </div>
    <div>
      <h2>Večerja in žurka</h2>
      <h3>18:00</h3>
      <p>
      Orehov gaj<br>
      Cesta 13. julija 32<br>
      1261 Ljubljana-Dobrunje
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'casovnica'
}
</script>

<style scoped>
* {
  text-align: center;
}
section {
  width: 100%;
  padding-top: 10px;
  /* background-color: #666;  */
}
section h2 {
  margin-top: 20px;
  margin-bottom: 0;
  font-size: 20px;
}
section h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 100;
  font-size: 20px;
  color: #666;
}
section p {
  margin-top: 10px;
  color: #666;
  
}

</style>