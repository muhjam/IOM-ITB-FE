<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-xs capitalize">{{ label.replace(/_/g, " ") }}</label>
      <input
        v-model="inputValue"
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        min="0"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        @input="updateValue"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      keyValue: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    },
    emits: ['update'],
    data() {
      return {
        inputValue: this.value
      };
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue;
      }
    },
    methods: {
      updateValue() {
        this.$emit('update', { key: this.keyValue || this.label, value: this.inputValue });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style custom Anda di sini jika diperlukan */
  </style>
  