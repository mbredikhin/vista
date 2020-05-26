import { db } from '@/firebase';

export default {
  state: {
    tests: {
      structure: [],
      response: [],
    },
  },
  
  getters: {
    getStructureTest(state) {
      return (n) =>
        state.tests.structure.sort(() => 0.5 - Math.random()).slice(0, n);
    },

    getResponseTest(state) {
      return (n) =>
        state.tests.response.sort(() => 0.5 - Math.random()).slice(0, n);
    },
  },

  actions: {
    async fetchTests({ state }) {
      let snapshot = await db.ref(`/structureTest`).once('value');
      state.tests.structure = snapshot.val();
      snapshot = await db.ref(`/responseTest`).once('value');
      state.tests.response = snapshot.val();
      return true;
    },
  },
};

// async putData({ state }) {
//   db.ref(`/responseTest/`).set(state.tests.response);
// },
