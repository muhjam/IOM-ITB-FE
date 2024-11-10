<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize flex items-center space-x-2">
        <input
          type="checkbox"
          class="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
          v-model="checked"
          @change="updateValue"
        />
        <span>{{ label.replace(/_/g, " ") }}</span>
      </label>
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
        type: Boolean,
        required: false
      }
    },
    emits: ['update'],
    data() {
      return {
        checked: this.value
      };
    },
    watch: {
      value(newValue) {
        this.checked = newValue;
      }
    },
    methods: {
      updateValue() {
        this.$emit('update', { key: this.keyValue || this.label, value: this.checked });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style custom Anda di sini jika diperlukan */
  </style>
  