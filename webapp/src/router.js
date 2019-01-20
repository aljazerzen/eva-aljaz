import Vue from 'vue';
import Router from 'vue-router';

import Darila from './views/Darila';
import Info from './views/Info';
import Poroka from './views/Poroka';
import Prideš from './views/Prideš';
import Slike from './views/Slike';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'poroka',
      component: Poroka
    },
    {
      path: '/o-nama',
      name: 'o-nama',
      component: Slike
    },
    {
      path: '/seznam-želja',
      name: 'seznam-želja',
      component: Darila
    },
    {
      path: '/prideš',
      name: 'prideš',
      component: Prideš
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
