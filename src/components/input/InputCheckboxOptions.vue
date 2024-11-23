<template>
    <div class="mt-2">
      <label class="text-sm capitalize font-[600]">{{ label.replace(/_/g, " ") }} <RequiredItem v-if="required"/></label>
      <div v-for="(option, index) in options" :key="index" class="flex items-center space-x-2">
        <input
          type="checkbox"
          :value="option"
          v-model="checked"
          @change="updateValue"
          class="text-blue-500 rounded focus:ring-blue-500 focus:border-blue-500"
        />
        <span>{{ option }}</span>
      </div>
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
        type: Array,
        required: false,
        default: () => []
      },
      options: {
        type: Array,
        required: true
      },
      required: {
        type: Boolean,
        required: false
      }
    },
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
  