<template>
  <div v-if="show" :class="classes" role="alert">
    <div class="flex justify-between">
      <div class="flex items-center">
        <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="font-medium">{{ message }}</span>
      </div>
      <button @click="close" type="button" class="-mr-1 flex-shrink-0 self-center focus:outline-none">
        <svg class="w-4 h-4 fill-current text-gray-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.348 5.652a.5.5 0 10-.707-.708L10 9.293 6.36 5.652a.5.5 0 10-.707.708L9.293 10l-3.646 3.646a.5.5 0 00.707.708L10 10.707l3.646 3.647a.5.5 0 00.707-.708L10.707 10l3.647-3.646z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: "Email sent successfully."
    }
  },
  data() {
    return {
      classes: "px-4 py-3 rounded relative " +
        "mb-4 bg-green-100 border border-green-400 text-green-700"
    };
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
