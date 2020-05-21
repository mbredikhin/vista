import { db, auth } from '@/firebase';
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
    async signOut({ commit, state }) {
      try {
        await auth.signOut();
        state.user = {
          loggedIn: false,
          email: null,
          name: null,
          uid: null,
        }
      } catch( error ) {
        console.log('Sign out error', error);
      }
    },

    async signIn({ commit, state }, { email, password }) {
      state.signInError = null;
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
    },

    async signUp({ dispatch, state }, { email, password, name }) {
      state.errorMessage = null;
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
        dispatch('addUserToDb', credential.user);
      }
    },

    async addUserToDb(context, { email, displayName, uid }) {
      db.collection(`users`).add({
        name: displayName,
        email,
        uid
      })
    },
  },
};
