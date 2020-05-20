import firebase from 'firebase';
import router from '@/router';

export default {
  state: {
    user: {
      loggedIn: false,
      email: null,
      name: null,
      uid: null,
    },
    signInError: null,
    signUpError: null,
  },

  mutations: {
    setUser({ user }, { email, displayName, uid }) {
      user.loggedIn = true;
      user.email = email;
      user.name = displayName;
      user.uid = uid;
    },
  },

  actions: {
    signOut({ commit, state }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          state.user.loggedIn = false;
          state.user.email = null;
          state.user.name = null;
          state.user.uid = null;
          state.errorMessage = null;
        })
        .catch(function(error) {
          console.log('Sign out error', error);
        });
    },

    async signIn({ commit, state }, { email, password }) {
      state.signInError = null;
      const auth = firebase.auth();
      let credential = null;

      try {
        credential = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        state.signInError = error.message;
      }
      if (credential) {
        const { user } = credential;
        state.user = {
          loggedIn: true,
          email: user.email,
          name: user.displayName,
          uid: user.uid,
        };
        state.signInError = null;
        router.push('/');
      }
      console.log(state);
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then((user) => {
      //     state.user.loggedIn = true;
      //     state.user.email = user.email;
      //     state.user.name = user.displayName;
      //     state.user.uid = user.uid;
      //     state.errorMessage = null;
      //     router.push('/');
      //   })
      //   .catch((error) => {
      //     state.errorMessage = error.message;
      //   });
    },

    async signUp({ dispatch, state }, { email, password, name }) {
      state.errorMessage = null;
      const auth = firebase.auth();
      let credential = null;
      try {
        credential = await auth.createUserWithEmailAndPassword(email, password);
      } catch (error) {
        state.signUpError = error.message;
      }
      if (credential) {
        await credential.user.updateProfile({ displayName: name });
        state.user.name = credential.user.displayName;
        router.push('/');
        dispatch('addUserToDatabase', credential.user);
      }
    },

    async addUserToDatabase(context, { email, displayName, uid }) {
      const database = firebase.database();
      database.ref(`users/${uid}`).set({
        name: displayName,
        email,
      });
    },
  },
};
