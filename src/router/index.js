import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import QuickTest from '@/views/QuickTest.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login Page',
    component: SignIn,
  },
  {
    path: '/registration',
    name: 'Register Page',
    component: SignUp,
  },
  {
    path: '/quick-test',
    name: 'Quick test',
    component: QuickTest,
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
