<template>
  <header class="app-header">
    <router-link to="/" tag="div" class="brand">
      <!-- <img src="@/assets/logo.svg" class="brand__logo" /> -->
      Vista
    </router-link>

    <nav class="menu">
      <div class="menu__item">
        <span class="menu-text">
          Our tests
        </span>
        <ul class="dropdown">
          <router-link tag="li" to="/quick-test" class="dropdown__item"
            >Quick check (15 min)</router-link
          >
          <router-link tag="li" to="/full-test" class="dropdown__item"
            >Full test (50 min)</router-link
          >
        </ul>
      </div>

      <div class="menu__item">
        <span class="menu-text">
          About tests
        </span>
        <ul class="dropdown">
          <router-link tag="li" to="/about-test" class="dropdown__item"
            >About the test</router-link
          >
          <router-link tag="li" to="/score-scale" class="dropdown__item"
            >Score scale</router-link
          >
        </ul>
      </div>

      <div class="menu__item" v-if="loggedIn">
        <span class="menu-text">
          My Profile
        </span>
        <ul class="dropdown">
          <li class="dropdown__header">My results</li>
          <router-link tag="li" to="/" class="dropdown__item"
            >Quick check (15 min)</router-link
          >
          <router-link tag="li" to="/" class="dropdown__item"
            >Full test (50 min)</router-link
          >
          <hr class="dropdown__split" />
          <li class="dropdown__header">Take a free test</li>
          <router-link tag="li" to="/" class="dropdown__item"
            >Quick check (15 min)</router-link
          >
          <router-link tag="li" to="/" class="dropdown__item"
            >Full test (50 min)</router-link
          >
          <hr class="dropdown__split" />
          <li class="dropdown__item dropdown__item--logout" @click="signOut">
            Logout
            <svg
              class="logout-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M510.371 226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165 0-8.341 8.341-8.341 21.845 0 30.165l27.584 27.584H320.013c-11.797 0-21.333 9.557-21.333 21.333s9.536 21.333 21.333 21.333h119.168l-27.584 27.584c-8.341 8.341-8.341 21.845 0 30.165 4.16 4.181 9.621 6.251 15.083 6.251s10.923-2.069 15.083-6.251l63.979-63.979c1.984-1.963 3.541-4.331 4.629-6.955a21.356 21.356 0 000-16.296z"
              />
              <path
                d="M362.68 298.667c-11.797 0-21.333 9.557-21.333 21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437l-74.091-22.229h174.635v106.667c0 11.776 9.536 21.333 21.333 21.333s21.333-9.557 21.333-21.333v-128C384.013 9.557 374.477 0 362.68 0H21.347c-.768 0-1.451.32-2.197.405-1.003.107-1.92.277-2.88.512a21.476 21.476 0 00-6.165 2.645c-.469.299-1.045.32-1.493.661-.172.129-.236.364-.407.492-2.325 1.834-4.266 4.074-5.674 6.741-.299.576-.363 1.195-.597 1.792-.683 1.621-1.429 3.2-1.685 4.992-.107.64.085 1.237.064 1.856-.021.427-.299.811-.299 1.237V448c0 10.176 7.189 18.923 17.152 20.907l213.333 42.667c1.387.299 2.795.427 4.181.427a21.31 21.31 0 0013.525-4.843 21.354 21.354 0 007.808-16.491v-21.333H362.68c11.797 0 21.333-9.557 21.333-21.333V320c0-11.776-9.536-21.333-21.333-21.333z"
              />
            </svg>
          </li>
        </ul>
      </div>

      <router-link to="/login" tag="div" class="menu__item" v-else
        ><span class="menu-text">Login</span></router-link
      >
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.user.loggedIn;
    },
  },
  methods: {
    ...mapActions(['signOut']),
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  z-index: 10;
  height: 4.5rem;
  padding: 0 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 6px 0px 12px rgba(0, 0, 0, 0.5);
}

.brand {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Damion', sans-serif;
  font-size: 2.75rem;
  color: #2d4081;
}

.brand__logo {
  width: 2rem;
  margin: 0 0.5rem -0.25rem 0;
}

.menu {
  display: flex;
  justify-content: flex-end;
  width: 60%;
}

.menu__item {
  display: inline-block;
  width: 12rem;
  height: 3rem;
  text-align: end;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:hover > .dropdown {
    display: inline-block;
  }
}

.menu-text {
  line-height: 3rem;
  font-family: 'Roboto', sans-serif;
}

.dropdown {
  display: none;
  list-style: none;
  position: relative;
  text-align: start;
  z-index: 10;
  left: -1rem;
  width: auto;
  height: auto;
  border-radius: 4px;
  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15), -1px -1px 4px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 1rem;
}

.dropdown__header {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.dropdown__item {
  width: 13rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 0.5rem 0;
  &:hover {
    background: #ececec;
    color: rgb(52, 85, 146);
  }
}

.dropdown__split {
  height: 1px;
  border: none;
  background-color: #dbdbdb;
  margin: 1rem 0;
}

.logout-icon {
  fill: #515153;
  width: 1rem;
  float: right;
}
</style>
