<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { auth } from './firebase';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['setUser']),
  },
  created() {
    auth.onAuthStateChanged((user) => {
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
