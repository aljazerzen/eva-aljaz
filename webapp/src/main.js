import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
import VueResource from 'vue-resource';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.url.options.root = process.env.VUE_APP_API_URL;

Vue.use(VueLocalStorage);

new Vue({
  router,
  localStorage: {
    gost: { type: String, default: '' }
  },
  render: function (h) { return h(App) }
}).$mount('#app')
