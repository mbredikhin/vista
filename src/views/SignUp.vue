<template>
  <div class="wrap">
    <div class="sign-up">
      <router-link to="/" tag="h1" class="home-link">Vista</router-link>
      <span class="header">Sign Up to Vista.</span>
      <br />
      <span class="new">Already registered? </span>
      <router-link to="/login" class="link">Sign In</router-link>

      <form
        class="form"
        @submit.prevent="onSubmit"
        @input="$store.state.auth.signUpError = null"
      >
        <label for="first-name" class="label">First name </label>
        <input
          required
          type="text"
          id="first-name"
          class="input"
          placeholder="First name"
          v-model="firstName"
          minlength="3"
        />

        <label for="last-name" class="label">Last name </label>
        <input
          required
          type="text"
          id="last-name"
          class="input"
          placeholder="Last name"
          v-model="lastName"
          minlength="3"
        />

        <label for="email" class="label">Email </label>
        <input
          required
          type="email"
          id="email"
          placeholder="Enter email"
          class="input"
          v-model="email"
          minlength="6"
        />

        <label for="password" class="label">Password </label>
        <input
          required
          type="password"
          id="password"
          class="input"
          placeholder="Password (at least 6 characters)"
          v-model="password"
          minlength="6"
        />

        <input type="submit" value="Sign Up" class="submit" />

        <p class="error-message">{{ this.$store.state.auth.signUpError }}</p>
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

.sign-up {
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
