import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyDoGt3tbkZnUbvAWT-k2FgP6QsNd43kdSk',
  authDomain: 'vista-2b697.firebaseapp.com',
  databaseURL: 'https://vista-2b697.firebaseio.com',
  projectId: 'vista-2b697',
  storageBucket: 'vista-2b697.appspot.com',
  messagingSenderId: '525332139677',
  appId: '1:525332139677:web:18af11266355736eb40e74',
  measurementId: 'G-CEX6NPX4TV',
};

firebase.initializeApp(firebaseConfig);
// let database = firebase.database();

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
