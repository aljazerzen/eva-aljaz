<template>
  <section>
    <h2>Pogosta vprašanja</h2>
    
    <p>
      <b>Ali je parkirišče na gradu?</b>
      Ne, najbolje da parkiraš pri Tehniku ali na Peptovem klancu (na Grabnu).
    </p>
    <p>
      <b>Ali je parkirišče v Taboru?</b>
      Ja, parkiranje bo možno na igrišču doma. Za vstop pozvoni vratarju.
    </p>
    <p>
      <b>Kaj si želita za darilo?</b>
      Zabavne večere ob skavtskem ognju po dolgih poletnih dnevih. 
      Za bolj praktičen odgovor glej <a href="#/seznam-želja">seznam želja</a>.
    </p>
    <p>
      <b>Kje lahko spim?</b>
      Pri najnih prijateljih v Ljubljani ali kar v spalki v dvorani. 
      Če bo veliko zanimanja, bomo pa najeli še par sob v dijaškem domu.
    </p>
    <p>
      <b>Ali se bo našlo tudi kaj za vegeterjance in vegane?</b>
      Bo.      
    </p>
    <p>
      <b>Ali ima Eva že obleko?</b>
      Mislim da ja, ampak mi je noče pokazat.
    </p>
    
    <h2>Kontakt</h2>
    
    <div class=col><b>Eva</b><br>068 198 187</div>
    <div class=col><b>Aljaž</b><br>051 715 541</div>
    

  </section>
</template>

<style scoped>
section {
  max-width: 450px;
}
section h2 {
  text-align: center;
  margin: 2em 0 0 0;
  font-size: 20px;
}
section p {
  font-weight: 100;
  margin-top: 10px;
  color: #666;
  margin-left: 10px; 
  margin-right: 10px; 
}
section p b {
  display: block;
  font-weight: bold;
  color: rgb(51, 51, 51);
}
a {
  color: inherit !important;
}
select {
  margin: 10px;
}
.col {
  padding-top: 2em;
  width: 50%;
  display: inline-block;
  text-align: center;
}
.col b {
  margin: 0;
  font-size: 20px;
}
</style>