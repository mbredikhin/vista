<template>
  <div class="wrap">
    <div class="sign-in">
      <router-link to="/" tag="h1" class="home-link">Vista</router-link>
      <span class="header">Welcome back to Vista.</span>
      <br />
      <span class="new">New here? </span>
      <router-link to="/registration" class="link"
        >Create an account</router-link
      >

      <form
        class="form"
        @submit.prevent="onSubmit"
        @input="$store.state.auth.errorMessage = null"
      >
        <label for="email" class="label">Email </label>
        <input
          required
          type="email"
          id="email"
          v-model="email"
          class="input"
          placeholder="Enter email"
        />

        <label for="password" class="label">Password </label>
        <input
          required
          type="password"
          id="password"
          v-model="password"
          class="input"
          placeholder="Password"
          minlength="6"
        />

        <input type="submit" value="Sign In" class="submit" />

        <p class="error-message">{{ this.$store.state.auth.errorMessage }}</p>
      </form>
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
  mounted() {
    this.$store.state.auth.errorMessage = null;
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
.wrap {
  width: 100vw;
  height: 100vh;
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f2b96,
    #a8c0ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f2b96,
    #a8c0ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in {
  width: 28rem;
  height: auto;
  padding: 3rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.253);
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
}

.home-link {
  font-family: 'Damion', sans-serif;
  font-size: 3rem;
  color: #2d4081;
  margin-bottom: 1rem;
  line-height: 1;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
}

.header {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
}

.new {
  font-size: 0.85rem;
  color: #494949;
  font-weight: 500;
}

.link {
  font-size: 0.85rem;
  color: #5443a0;
  font-weight: 500;
}

.form {
  display: flex;
  flex-flow: column nowrap;
}

.label {
  color: #494949;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 1.5rem 0 0 0;
}

.input {
  outline: none;
  margin: 0.5rem 0;
  padding: 0.75rem 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  border: 2px solid #c5c5c5;

  &:focus {
    border-color: #494949;
  }
}

.submit {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: #5443a0;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  margin: 2.25rem 0 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
}

.error-message {
  font-size: 0.85rem;
  color: #eb7171;
  height: auto;
  padding: 1rem 0 0;
}
</style>
