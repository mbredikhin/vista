<template>
  <div class="task">
    <p class="task__sentence">{{ sentence }}</p>
    <div
      class="task__answer"
      v-for="answer in answers"
      :key="answer"
      @click="onAnswerClick(answer)"
    >
      {{ answer }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sentence: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
    },
    correct: {
      type: String,
      required: true,
    },
  },

  methods: {
    onAnswerClick(answer) {
      const answers = document.querySelectorAll('.task__answer');
      answers.forEach((el) => el.classList.remove('task__answer--active'));
      event.target.classList.toggle('task__answer--active');

      const isCorrect = answer === this.correct;
      this.$emit('onAnswerClick', isCorrect);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  width: 26rem;
  padding: 2rem;
  background: #f3f3ff;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
}

.task__sentence {
  font-weight: 500;
  line-height: 1.5;
  padding-bottom: 1rem;
}

.task__answer {
  line-height: 3.5;
  margin: 0.5rem 0;
  padding: 0 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 8px #dadada;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 8px #b9b9b9;
  }
}

.task__answer--active {
  background-color: rgb(124, 181, 255);
  color: #fff;
  font-weight: 500;
}
</style>
