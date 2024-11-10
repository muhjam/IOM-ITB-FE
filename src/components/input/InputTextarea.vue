<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <label class="text-sm capitalize">{{ label.replace(/_/g, " ") }}</label>
    <textarea
      v-model="inputValue"
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Write your thoughts here..."
      @input="updateValue"
    ></textarea>
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
      required: false,
      default: ''
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
