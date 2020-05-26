import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Registration from '@/views/Registration.vue';
import Quick from '@/views/Quick.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/login',
    name: 'Login Page',
    component: Login,
  },

  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },

  {
    path: '/quick',
    name: 'Quick testing',
    component: Quick,
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
