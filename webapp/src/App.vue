<template>
  <div id="app">
    <header>
      <img class=curly src="./assets/image.png">
    </header>
    <nav>
      <router-link exact to='/'>DOMOV</router-link>
      <router-link exact to='/o-nama'>O NAMA</router-link>
      <router-link exact to='/prideš'>PRIDEŠ?</router-link>
      <router-link exact to='/seznam-želja'>SEZNAM ŽELJA</router-link>
      <router-link exact to='/info'>INFO</router-link>
    </nav>

    <router-view class="content-main"/>

    <footer>
      <img class=curly src="./assets/image.png" style="transform: scaleY(-1);">
    </footer>    
  </div>
</template>

<style>
body {
  margin: 0;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #333;
}
footer,header {
  flex: 100px 0 0;
  overflow: hidden;
}
.curly {
  padding: 25px;
  width: 300px;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-main {
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
}

nav {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  
  /*margin: 0.1em 1em;*/
}

nav a {
  padding: 12px 20px;
  color: inherit;
  text-decoration: none;
  outline: none;
  /* padding: 0 5px; */
}

nav a:hover, nav a.router-link-active {
  border-bottom: 3px solid #bc0808;
  padding-bottom: 9px;
}
</style>
<style>
.spacer {
  flex-grow: 10000;
}
</style>
