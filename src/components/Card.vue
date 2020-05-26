<template>
  <div class="card">
    <h3 class="card__title">
      Welcome, you are about to start the {{ sectionLength * 2 }}-minute
      {{ testName }}
    </h3>

    <div class="schema">
      <div class="wrap">
        <img class="wrap__image" src="@/assets/open-book.png" />
        <span class="wrap__name">Reading</span>
        <b class="wrap__time">{{ sectionLength }} мин</b>
      </div>
      <b class="sign"> + </b>
      <div class="wrap">
        <img class="wrap__image" src="@/assets/headphone.png" />
        <span class="wrap__name">Listening</span>
        <b class="wrap__time">{{ sectionLength }} мин</b>
      </div>
      <b class="sign"> = </b>
      <div class="wrap">
        <img class="wrap__image" src="@/assets/stopwatch.png" />
        <span class="wrap__name">Всего</span>
        <b class="wrap__time">{{ sectionLength * 2 }} мин</b>
      </div>
    </div>

    <hr />

    <ul class="list-disc pl-5 my-6">
      <li class="leading-10">
        Тест состоит из двух разделов: Reading и Listening
      </li>
      <li class="leading-10">
        Вы начнете с {{ sectionLength }}-минутного теста из раздела Reading.
      </li>
      <li class="leading-10">
        Стараыйтесь следить за оставшимся временем.
      </li>
      <li class="leading-10">
        Вы не потеряете баллы за неверные ответы.
      </li>
    </ul>

    <button
      class="w-32 self-end bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg"
      @click="onSubmit"
      v-show="isSubmitActive"
    >
      Начать тест
    </button>
  </div>
</template>

<script>

export default {
  props: {
    testName: {
      type: String,
      required: true,
    },
    sectionLength: {
      type: Number,
      required: true,
    },
    isSubmitActive: {
      type: Boolean,
      required: true
    }
  },

  name: 'welcome',

  methods: {
    onSubmit() {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 36rem;
  height: auto;
  background: white;
  padding: 3rem;
  border-radius: 6px;
  display: flex;
  flex-flow: column nowrap;
}

.card__title {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5;
  text-align: center;
}

.schema {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
}

.wrap {
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 6rem;
}

.wrap__image {
  margin-bottom: 1rem;
  width: 4rem;
}

.wrap__name {
  line-height: 1.75;
}

.sign {
  font-size: 2.25rem;
}
</style>
