<template>
  <div class="w-screen h-screen g-blue flex justify-center items-center">
    <div class="w-1/4 bg-white shadow-md rounded p-8 flex flex-col">
      <router-link to="/" tag="h2" class="link--home">Vista</router-link>
      <span class="font-medium">Welcome back to Vista.</span>
      <span
        >New here?
        <router-link
          to="/registration"
          class="text-blue-700 font-medium underline"
          >Create an account</router-link
        ></span
      >

      <form
        @submit.prevent="onSubmit"
        @input="$store.state.auth.signInError = null"
      >
        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          id="email"
          v-model="email"
          placeholder="jane@example.com"
          minlength="6"
          required
        />

        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="password"
          >Password
        </label>
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          id="password"
          v-model="password"
          placeholder="******"
          minlength="6"
          required
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline mt-8 float-right"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
        v-if="this.error"
      >
        <span class="block sm:inline">{{ this.error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    error() {
      return this.$store.state.auth.signInError;
    },
  },
  methods: {
    ...mapActions(['signIn']),
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };
      if (user.email && user.password) {
        this.signIn(user);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.g-blue {
  background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
}

.link--home {
  display: inline-block;
  font-family: 'Damion', sans-serif;
  color: #3f2b96;
  font-size: 3rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
