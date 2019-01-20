<template>
  <section>

    <div>
      <h2>Civilna poroka</h2>
      <h3>17:30</h3>
      <p>
      Grajski vrt v Škofji Loki <br>
      Grajska pot 14 <br>
      4220 Škofja Loka
      </p>

    </div>
    <div>
      <h2>Večerja in žurka</h2>
      <h3>20:00</h3>
      <p>
      Dijaški dom Tabor<br>
      Kotinkova ulica 4<br>
      1000 Ljublajna
      </p>
    </div>

    <!-- <div>
      <h2>Žurka</h2>
      <h3>24:00</h3>
      <p>
      Dijaški dom Tabor<br>
      Kotinkova ulica 4<br>
      1000 Ljublajna
      </p>
    </div>
   -->
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