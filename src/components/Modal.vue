<template>
  <div
    class="absolute mx-auto mt-40 bg-white rounded shadow-lg p-8 text-center"
  >
    <span class="font-medium text-xl">{{ header }}</span>
    <p class="py-3">{{ text }}</p>
    <div>
      <button
        class="px-4 py-1 rounded bg-white mx-4 my-2 shadow"
        @click="$emit('decline')"
      >
        Cancel
      </button>
      <button
        class="px-4 py-1 rounded bg-blue-400 mx-4 my-2 text-white font-medium shadow"
        @click="$emit('submit')"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header', 'text', 'declineText', 'SubmitText'],
};
</script>

<style></style>
