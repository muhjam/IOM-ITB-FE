<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize font-[600]">{{ label?.replace(/_/g, " ") }} <RequiredItem v-if="required"/></label>
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        v-model="inputValue"
        @input="updateValue"
        :required="required"
      />
    </div>
  </template>
  
  <script>
  import RequiredItem from "@/components/input/helper-input/RequiredItem.vue";

  export default {
    components: {
        RequiredItem,
    },
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
      },
      required: {
        type: Boolean,
        required: false
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
  