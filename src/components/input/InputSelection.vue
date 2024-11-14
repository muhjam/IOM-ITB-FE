<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize font-[600]">{{ label.replace(/_/g, " ") }} <RequiredItem v-if="required"/></label>
      <select 
        id="countries" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
        @change="updateValue"
        v-model="inputValue"
      >
        <option v-for="(v, i) in options" :key="i" :value="v">{{ v }}</option>
      </select>
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
        required: false,
        default: ''
      },
      options: {
        type: Array,
        required: false,
        default: () => []
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
    mounted() {
      this.inputValue = this.value;
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
  