<template>
    <div class="relative mt-2 rounded-md shadow-sm">
      <label class="text-sm capitalize">{{ label.replace(/_/g, " ") }}</label>
  
      <!-- Input untuk upload gambar -->
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
  
      <!-- Preview Gambar -->
      <div v-if="imageUrl" class="mt-4">
        <img :src="imageUrl" alt="Image preview" class="rounded-md shadow-lg w-32 h-32 object-cover" />
      </div>
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
        required: true
      }
    },
    emits: ['update'],
    data() {
      return {
        imageUrl: null
      };
    },
    methods: {
      onFileChange(event) {
        const fileInput = event.target;
        if (fileInput.files && fileInput.files[0]) {
          const file = fileInput.files[0];
          const reader = new FileReader();
  
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
            this.$emit('update', { key: this.keyValue || this.label, value: file });
          };
  
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style custom Anda di sini jika diperlukan */
  </style>
  