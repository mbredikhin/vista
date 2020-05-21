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
        <b class="wrap__time">{{ sectionLength }} mins</b>
      </div>
      <b class="sign"> + </b>
      <div class="wrap">
        <img class="wrap__image" src="@/assets/headphone.png" />
        <span class="wrap__name">Listening</span>
        <b class="wrap__time">{{ sectionLength }} mins</b>
      </div>
      <b class="sign"> = </b>
      <div class="wrap">
        <img class="wrap__image" src="@/assets/stopwatch.png" />
        <span class="wrap__name">Total time</span>
        <b class="wrap__time">{{ sectionLength * 2 }} mins</b>
      </div>
    </div>
    <hr />
    <ul class="info">
      <li class="info__item">
        This test has two sections: Reading and Listening
      </li>
      <li class="info__item">
        You will start with a {{ sectionLength }}-minute Reading section.
      </li>
      <li class="info__item">
        Pace yourself to avoid running out of time.
      </li>
      <li class="info__item">
        You will not lose points for wrong answers.
      </li>
      <li class="info__item">Once you click "Next" you cannot go back.</li>
    </ul>
    <button class="card__button" @click="onSubmit">Start the test</button>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

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
  },
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
  background: #f7f7ff;
  padding: 3rem;
  border-radius: 6px;
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

hr {
  border: none;
  height: 1px;
  background: #dddddd;
}

.info {
  padding: 2.5rem 1rem;
}

.info__item {
  line-height: 2.5;
}

.card__button {
  background: #79b4f8;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  transition: 0.2s;
  float: right;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 7px #dad8e4;
  }
}
</style>
