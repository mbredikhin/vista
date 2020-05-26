<template>
  <div
  @click="toggleFullScreen"
    class="w-screen bg-white flex justify-around items-center shadow py-2 px-40 space-x-8"
  >
    <div class="flex items-center ">
      <img class="h-8 mr-2" :src="require('@/assets/' + image + '')" />
      <span class="font-medium">{{ name }}</span>
    </div>
    <div class="flex-grow bg-gray-200 h-2 rounded ">
      <div
        :class="`bg-blue-400 inline-block duration-200 h-2 rounded`"
        :style="{ width: `${(current / all) * 100}%` }"
      >
        &#8203;
      </div>
    </div>
    <span class="font-medium">{{ time }}</span>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    all: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },
  },
};
</script>

<style></style>
