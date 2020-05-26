<template>
  <div
    class="rounded-full w-32 m-2 cursor-pointer hover:shadow-lg"
    @click="player.play()"
  >
    <svg
      fill="#4298e1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zm101.8 265l-149.4 96a10.6 10.6 0 01-10.8.4 10.7 10.7 0 01-5.6-9.4V160a10.7 10.7 0 0116.4-9l149.4 96a10.7 10.7 0 010 18z"
      />
    </svg>
  </div>
</template>

<script>
import { storage } from '@/firebase';

export default {
  props: {
    reference: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      player: new Audio(),
    };
  },

  async mounted() {
    this.player.src = await this.getUrl();
    this.player.volume = 0.75;
  },

  methods: {
    async getUrl() {
      const storageRef = storage.ref();
      const url = await storageRef.child(this.reference).getDownloadURL();
      return url;
    },
  },
};
</script>
