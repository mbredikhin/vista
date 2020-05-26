<template>
  <div>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <p class="font-medium pt-2 pb-4">{{ count }}. {{ sentence }}</p>

      <div
        class="flex p-2 rounded bg-white my-4 shadow cursor-pointer hover:shadow-md "
        id="answer"
        v-for="answer in answers"
        :key="answer"
        @click="onAnswerClick(answer)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
          class="w-6 mr-3"
        >
          <path
            d="M225.9 331.3a30 30 0 01-21.3-8.9l-45.1-45.2a30.1 30.1 0 0142.6-42.6l25.4 25.5 84.2-72.2a30.1 30.1 0 0139.2 45.2l-105.4 90.4a30.1 30.1 0 01-19.6 7.8z"
            fill="#ffffff"
          />
          <path
            fill="#eeeeee"
            d="M256 512a256 256 0 110-512 256 256 0 010 512zm0-451.8a195.8 195.8 0 100 391.6 195.8 195.8 0 000-391.6z"
          />
        </svg>
        <span class="leading-8 select-none">{{ answer }}</span>
      </div>
    </div>

    <button
      class="float-right py-2 px-6 bg-blue-500 rounded-md shadow text-white font-medium hover:shadow-md mt-8 select-none focus:outline-none"
      @click="$emit(`onButtonClick`)"
    >
      Далее
    </button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
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

  name: 'test',
  methods: {
    onAnswerClick(answer) {
      const answers = document.querySelectorAll('#answer');
      answers.forEach((el) => el.classList.remove('bg-blue-400'));
      event.currentTarget.classList.toggle('bg-blue-400');

      const isCorrect = answer === this.correct;
      this.$emit('onAnswerClick', isCorrect);
    },
  },
};
</script>
