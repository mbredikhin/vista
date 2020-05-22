<template>
  <div class="quick-test">
    <App-Header></App-Header>
    <div class="container">
      <WelcomeCard
        :testName="`Quick English Check`"
        :sectionLength="7.5"
        @submit="startTest"
        v-if="isStartPopupVisible"
      />
      <div v-else>
        {{ this.current }}
        <ReadingTask
          :sentence="readingTasks[current].sentence"
          :answers="readingTasks[current].answers"
          :correct="readingTasks[current].correct"
          @onAnswerClick="onAnswerClick"
        ></ReadingTask>
        <button @click="nextTask">Next Task</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from '@/components/AppHeader';
import WelcomeCard from '@/components/WelcomeCard';
import ReadingTask from '@/components/ReadingTask';

export default {
  components: {
    AppHeader,
    WelcomeCard,
    ReadingTask,
  },
  props: {
    // startPopup: {
    //   type: Boolean,
    //   required: true
    // }
  },
  data() {
    return {
      isStartPopupVisible: true,
      readingTasks: null,
      readingAnswers: [],
      current: 0,
    };
  },
  computed: {
    ...mapGetters(['getReadingTasks']),
  },
  beforeMount() {
    this.readingTasks = this.getReadingTasks(10);
  },
  methods: {
    startTest() {
      this.isStartPopupVisible = false;
    },
    nextTask() {
      if (this.readingTasks[this.current + 1]) {
        this.current++;
      } else {
        console.log(this.readingAnswers);
      }
    },
    onAnswerClick(isCorrect) {
      this.readingAnswers[this.current] = isCorrect;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 3rem 0;
  background-color: #79b4f8;
  font-family: 'Roboto', sans-serif;
}
</style>
