<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize">{{ label.replace(/_/g, " ") }}</label>
      <input
        type="date"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        v-model="inputValue"
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
        type: String,
        required: false
      }
    },
    emits: ['update'],
    data() {
      return {
        inputValue: this.formatDate(this.value)
      };
    },
    watch: {
      value(newValue) {
        this.inputValue = this.formatDate(newValue);
      }
    },
    methods: {
      updateValue() {
        this.$emit('update', { key: this.keyValue || this.label, value: this.inputValue });
      },
      formatDate(isoString) {
        if (!isoString) return ''; 
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style custom Anda di sini jika diperlukan */
  </style>
  