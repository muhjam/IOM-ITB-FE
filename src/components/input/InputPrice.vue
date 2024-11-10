<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize">{{ label.replace(/_/g, " ") }}</label>
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        :value="formattedValue"
        @input="onInput"
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
        type: [String, Number],
        required: false,
        default: ''
      }
    },
    emits: ['update'],
    computed: {
      formattedValue() {
        const numberValue = parseInt(this.value.toString());
        if (isNaN(numberValue)) return '';
  
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(numberValue);
      }
    },
    methods: {
      onInput(event) {
        const input = event.target;
        let rawValue = input.value.replace(/\D/g, '');
  
        if (rawValue === '') {
          this.$emit('update', { key: this.keyValue || this.label, value: '' });
          return;
        }
  
        this.$emit('update', { key: this.keyValue || this.label, value: parseInt(rawValue, 10) });
  
        input.value = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(parseInt(rawValue, 10));
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style custom Anda di sini jika diperlukan */
  </style>
  