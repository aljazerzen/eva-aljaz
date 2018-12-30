import Vue from 'vue';
import Router from 'vue-router';

import Darila from './views/Darila';
import Poroka from './views/Poroka';
import Slike from './views/Slike';
import Časovnica from './views/Časovnica';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/poroka' },
    {
      path: '/poroka',
      name: 'poroka',
      component: Poroka
    },
    {
      path: '/slike',
      name: 'slike',
      component: Slike
    },
    {
      path: '/časovnica',
      name: 'časovnica',
      component: Časovnica
    },
    {
      path: '/darila',
      name: 'darila',
      component: Darila
    }
  ]
})
