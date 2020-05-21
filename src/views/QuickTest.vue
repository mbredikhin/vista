<template>
  <div class="quick-test">
    <App-Header></App-Header>
    <div class="container">
      <WelcomeCard
        :testName="`Quick English Check`"
        :sectionLength="7.5"
        @submit="startTest"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import WelcomeCard from '@/components/WelcomeCard';

export default {
  components: {
    AppHeader,
    WelcomeCard,
  },
  data() {
    return {};
  },
  methods: {
    startTest() {
      console.log('Starting!');
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 3rem 0;
  background-color: #79b4f8;
  font-family: 'Roboto', sans-serif;
}
</style>
