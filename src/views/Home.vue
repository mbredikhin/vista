<template>
  <main class="main">
    <Navigation></Navigation>
    <section class="section section--one">
      <div class="section__wrap">
        <h1 class="section__header section__header--one">
          The world's first free standardized English test.
        </h1>
        <p class="section__text section__text--one">
          Take our test and get an assessment of your reading and listening
          skills. Anytime, anywhere.
        </p>
        <router-link to="/" class="section__link"
          >Test your English</router-link
        >
      </div>
      <div class="section__wrap">
        <img class="section__img" src="@/assets/student.png" />
      </div>
    </section>

    <section class="section section--features">
      features
    </section>

    <section class="section section--test">
      <h2 class="section__header section__header--center">Test your English</h2>
      <div class="cards-wrapper">
        <div class="card">
          <h3 class="card__title">15 min quick check</h3>
          <hr class="card__separator" />
          <h4 class="card__subtitle">
            Start with a quick check of your English skills
          </h4>
          <ul class="list">
            <li class="list__item">No fees. No sign up. Start now</li>
            <li class="list__item">Quick estimate of English skills</li>
            <li class="list__item">Share your score on social media</li>
          </ul>
          <router-link to="/" class="section__link section__link--card"
            >Start 15 min test</router-link
          >
        </div>

        <div class="card">
          <h3 class="card__title">15 min quick check</h3>
          <hr class="card__separator" />
          <h4 class="card__subtitle">
            Start with a quick check of your English skills
          </h4>
          <ul class="list">
            <li class="list__item">No fees. No sign up. Start now</li>
            <li class="list__item">Quick estimate of English skills</li>
            <li class="list__item">Share your score on social media</li>
          </ul>
          <router-link to="/" class="section__link section__link--card"
            >Start 15 min test</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 14vh 10vw;
  display: flex;
}

.section--one {
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
}

.section--test {
  background: linear-gradient(to right, #ec6ead, #3494e6);
  display: flex;
  flex-flow: column nowrap;
  height: auto;
}

.section__wrap {
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.section__header {
  font-family: 'Roboto', sans-serif;
  font-size: 2.75rem;
  color: white;
}

.section__header--center {
  align-self: center;
}

.section__text {
  font-family: 'Roboto', sans-serif;
  color: white;
  line-height: 2rem;
  padding: 2rem 0;
}

.section__text--one {
  width: 65%;
}

.section__link {
  display: inline-block;
  width: 12rem;
  text-align: center;
  text-decoration: none;
  background: #fff;
  padding: 1rem 1.75rem;
  border-radius: 100px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15), -2px -2px 6px rgba(0, 0, 0, 0.15);
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: 0.2s;
  &:hover {
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.15),
      -6px -6px 8px rgba(0, 0, 0, 0.15);
  }
}

.section__link--card {
  background: #7678c2;
  color: white;
  margin-top: 1rem;
}

.section__img {
  width: 24rem;
  align-self: flex-end;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
}

.card {
  width: 29rem;
  min-width: 29rem;
  height: auto;
  margin: 4rem 2rem 0;
  background: white;
  border-radius: 6px;
  padding: 3rem;
  font-family: 'Roboto', sans-serif;
}

.card__title {
  font-size: 2.5rem;
  text-transform: capitalize;
}

.card__separator {
  margin: 1.5rem 0;
  border: none;
  height: 1px;
  background: #dfdfdf;
}

.card__subtitle {
  font-size: 1.25rem;
}

.list {
  padding: 1rem;
}

.list__item {
  line-height: 2rem;
}
</style>
