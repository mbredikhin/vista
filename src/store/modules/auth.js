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
    errorMessage: null,
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

    signIn({ commit, state }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          state.user.loggedIn = true;
          state.user.email = user.email;
          state.user.name = user.displayName;
          state.user.uid = user.uid;

          state.errorMessage = null;
          router.push('/');
        })
        .catch((error) => {
          state.errorMessage = error.message;
        });
    },

    signUp({ commit, state }, { email, password, name }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user) => {
            user.user
              .updateProfile({
                displayName: name,
              })
              .then(() => {
                state.user.name = user.user.displayName;
                firebase
                  .database()
                  .ref('users/' + user.user.uid)
                  .set({
                    name: user.user.displayName,
                    email: user.user.email,
                  });
              })
              .catch((err) => console.log(err));

            state.errorMessage = null;
            router.push('/');
          },
          (error) => {
            state.errorMessage = error.message;
          },
        );
    },
  },
};
