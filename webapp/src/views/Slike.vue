<template>
  <section>
    <article>
			<h2>O nama</h2>
    </article>
    <div class="row">
      <div class="col">
        <img src="../assets/images/0.jpg">
      </div>
      <div class="col">
        <img src="../assets/images/1.jpg">
      </div>
    </div>
    <div class="full">
      <img src="../assets/images/2.jpg">
    </div>
    <div class="row">
      <div class="col">
        <img src="../assets/images/3.jpg">
      </div>
      <div class="col">
        <img src="../assets/images/4.jpg">
      </div>
    </div>
    <div class="full">
      <img src="../assets/images/5.jpg">
    </div>
    <div class="row">
      <div class="col">
        <img src="../assets/images/6.jpg">
        <img src="../assets/images/8.jpg">
        <img src="../assets/images/10.jpg">
        <img src="../assets/images/12.jpg">
        <img src="../assets/images/14.jpg">
        <img src="../assets/images/16.jpg">
      </div>
      <div class="col">
        <img src="../assets/images/7.jpg">
        <img src="../assets/images/14_5.jpg">
        <img src="../assets/images/11.jpg">
        <img src="../assets/images/13.jpg">
        <img src="../assets/images/15.jpg">
        <img src="../assets/images/17.jpg">
      </div>
    </div>
    <div class="full">
      <img src="../assets/images/18.jpg">
    </div>
    <div class="row">
      <div class="col" style="flex: 40%">
        <img src="../assets/images/19.jpg">
        <img src="../assets/images/21.jpg">
        <img src="../assets/images/25.jpg">
        
        <img src="../assets/images/26.jpg">
        <img src="../assets/images/22.jpg">
      </div>
      <div class="col">
        <img src="../assets/images/20.jpg">
        <img src="../assets/images/24.jpg">
        <img src="../assets/images/23.jpg">
        
        <img src="../assets/images/27.jpg">
      </div>
    </div>
    <div class="full">
      <img src="../assets/images/28.jpg">
    </div>
  </section>
</template>
<style scoped>
article {
	text-align: center;
}
section img {
  width: 100%;
  height: auto;
  padding-bottom: 5px;
}
.row {
  display: flex;
}
.full {
  display: grid;
}
.col {
  display: flex;
  flex: 50%;
  flex-direction: column;
}
.col:first-child {
  padding-right: 5px;
}
</style>
