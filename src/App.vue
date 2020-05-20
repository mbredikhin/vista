<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setUser']),
  },
  created() {
    // debug
    // this.$router.beforeEach((to, from, next) => {
    //   console.log(firebase.auth().currentUser);
    //   next();
    // });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user);
      } else {
        // console.log('No user is signed in.');
      }
    });
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
