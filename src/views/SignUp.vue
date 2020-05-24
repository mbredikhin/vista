<template>
  <div class="w-screen h-screen g-blue flex justify-center items-center">
    <div class="w-1/4 bg-white shadow-md rounded p-8 flex flex-col">
      <router-link to="/" tag="h2" class="link--home">Vista</router-link>
      <span class="font-medium">Register in to Vista.</span>
      <span
        >Already have an account?
        <router-link to="/login" class="text-blue-700 font-medium underline"
          >Sign In</router-link
        ></span
      >

      <form
        @submit.prevent="onSubmit"
        @input="$store.state.auth.signUpError = null"
      >
        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="first-name"
        >
          First name
        </label>
        <input
          required
          type="text"
          id="first-name"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          v-model="firstName"
          placeholder="Jane"
          minlength="3"
        />
        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="last-name"
        >
          Last name
        </label>
        <input
          required
          type="text"
          id="last-name"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          v-model="lastName"
          placeholder="Plain"
          minlength="3"
        />

        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="email"
          >Email</label
        >
        <input
          required
          type="email"
          id="email"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          v-model="email"
          placeholder="jane@example.com"
          minlength="6"
        />

        <label
          class="block text-gray-700 text-sm font-bold mt-6 mb-2"
          for="email"
          >Password</label
        >
        <input
          required
          type="password"
          id="password"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          v-model="password"
          placeholder="******"
          minlength="6"
        />

        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline mt-8 float-right"
          type="submit"
        >
          Sign Up
        </button>

        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
          v-if="this.error"
        >
          <span class="block sm:inline">{{ this.error }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
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
    ...mapActions(['signUp']),
    onSubmit() {
      const user = {
        name: `${this.firstName} ${this.lastName}`,
        email: this.email,
        password: this.password,
      };
      if (user.name && user.email && user.password) {
        this.signUp(user);
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
