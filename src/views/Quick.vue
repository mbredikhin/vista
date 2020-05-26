<template>
  <div class="bg-blue-100 w-screen min-h-screen">
    <div class="flex" v-if="!isTestStarted">
      <Card
        class="mx-auto my-8 shadow-md"
        :testName="`Quick English Check`"
        :sectionLength="7.5"
        :isSubmitActive="isTestReady"
        @submit="startTest"
      />
    </div>

    <div v-else>
      <div
        v-if="currentTest === `structure`"
        class="flex flex-col items-center"
      >
        <Modal
          v-show="modal.show"
          :header="modal.header"
          :text="modal.text"
          @decline="modal.onDecline"
          @submit="modal.onSubmit"
        ></Modal>

        <ProgressBar
          name="Reading"
          :image="`open-book.png`"
          :all="structure.test.length"
          :current="structure.count + 1"
          :time="time"
        ></ProgressBar>

        <p class="font-medium pt-12" v-show="!structure.count">
          Вы прочитаете 12 предложений. <br />
          Выберите слово или фразу, которое подойдет для завершения предложения.
        </p>

        <Test
          class="mt-12 w-1/3"
          :count="structure.count + 1"
          :sentence="structure.test[structure.count].sentence"
          :answers="structure.test[structure.count].answers"
          :correct="structure.test[structure.count].correct"
          @onAnswerClick="onAnswerClick"
          @onButtonClick="nextTask"
        ></Test>
      </div>

      <div class="flex flex-col items-center" v-if="currentTest === `response`">
        <Modal
          v-show="modal.show"
          :header="modal.header"
          :text="modal.text"
          @decline="modal.onDecline"
          @submit="modal.onSubmit"
        ></Modal>

        <ProgressBar
          name="Listening"
          :image="`headphone.png`"
          :all="response.test.length"
          :current="response.count + 1"
          :time="time"
        ></ProgressBar>

        <div class="h-screen w-screen flex">
          <div class="w-1/2 flex justify-center items-center">
            <Audio-Player :reference="response.getAudioRef()"></Audio-Player>
          </div>
          <div class="w-1/2 flex justify-center items-center">
            <Test
              class="w-100"
              :count="response.count + 1"
              :sentence="`qwerty`"
              :answers="response.test[response.count].answers"
              :correct="response.test[response.count].correct"
              @onAnswerClick="onAnswerClick"
              @onButtonClick="nextTask"
            ></Test>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { storage } from '@/firebase';

import Card from '@/components/Card';
import Test from '@/components/Test';
import Modal from '@/components/Modal';
import ProgressBar from '@/components/ProgressBar.vue';
import AudioPlayer from '@/components/AudioPlayer.vue';

export default {
  name: 'quick',

  components: {
    Card,
    Test,
    Modal,
    ProgressBar,
    AudioPlayer,
  },

  data() {
    return {
      currentTest: 'structure',
      modal: {
        header: 'Перейти к следующему заданию?',
        text: 'Некоторые вопросы остались без ответа.',
        show: false,
        onSubmit: () => {
          const test = this[this.currentTest];
          test.answers[test.count] = false;
          this.modal.show = false;
          this.nextTask();
        },
        onDecline: () => {
          this.modal.show = false;
        },
      },

      isTestReady: false,

      isTestStarted: false,

      timer: 900,

      structure: {
        test: [],
        answers: [],
        count: 0,
        isComplete() {
          return this.count === this.test.length - 1;
        },
        isAnswerReady() {
          const answer = this.answers[this.count];
          if (answer === undefined) {
            return false;
          }
          return true;
        },
      },

      response: {
        test: [],
        answers: [],
        count: 0,
        getAudioRef() {
          console.log(this.test[this.count].storageRef);
          return this.test[this.count].storageRef;
        },
        isComplete() {
          return this.count === this.test.length - 1;
        },
        isAnswerReady() {
          const answer = this.answers[this.count];
          if (answer === undefined) {
            return false;
          }
          return true;
        },
      },
    };
  },
  computed: {
    ...mapGetters(['getStructureTest', 'getResponseTest']),

    time() {
      const min = Math.floor(this.timer / 60);
      let sec = Math.floor(this.timer - min * 60);
      sec = sec < 10 ? `0${sec}` : sec;
      const time = `${min}:${sec}`;
      return time;
    },
  },

  beforeMount() {
    this.fetchTests().then((val) => {
      this.isTestReady = val;
    });
  },

  methods: {
    ...mapActions(['fetchTests']),

    countDown() {
      if (this.timer) {
        return setTimeout(() => {
          --this.timer;
          this.countDown();
        }, 1000);
      }
      // GO TO NEXT SECTION
      // this.$router.push({ path: '/' });
    },

    startTest() {
      this.structure.test = this.getStructureTest(10);
      this.response.test = this.getResponseTest(10);

      this.isTestStarted = true;
      this.countDown();
    },

    nextTask() {
      if (this[this.currentTest].isComplete()) {
        if (this.currentTest === 'response') {
          console.log([...this.structure.answers, ...this.response.answers]);
          return;
        }
        this.currentTest = 'response';
      } else {
        if (this[this.currentTest].isAnswerReady()) {
          this[this.currentTest].count++;
        } else {
          this.modal.show = true;
        }
      }
    },

    onAnswerClick(isCorrect) {
      const { count, answers } = this[this.currentTest];
      answers[count] = isCorrect;
    },
  },
};
</script>
