<template>
  <div class="mt-2">
    <div class="flex flex-col">
      <label class="text-sm capitalize font-[600]">{{ label?.replace(/_/g, " ") }} <RequiredItem v-if="required"/></label>
      <label v-if="subLabel" class="text-sm capitalize font-[400]" v-html="formattedSubLabel"></label>
    </div>
    <div v-if="file.length" class="flex items-center gap-2 mt-2 w-full h-[80px] border border-gray-400 border-dashed rounded-[8px] p-2">
        <img
          v-if="file[0].type.startsWith('image')"
          :src="generateURL(file[0] || '')"
          alt="Preview"
          class="w-[50px] h-[50px] object-cover"
        />
        <img
          v-else
          :src="require('@/assets/icon/empty-file.svg')"
          alt="Preview"
          class="w-[50px] h-[50px] object-cover"
        />
        <span class="flex-grow text-sm truncate">{{ file[0].name }}</span>
        <div class="flex h-full items-start">
        <button @click="removeFile" class="text-red-500 text-xl font-bold">×</button>
      </div>
      </div>
    <label
      v-else
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
      for="file-upload"
      :class="`cursor-pointer hover:opacity-[0.8] ${ isDragging ? 'opacity-[0.8]' : ''}`"
    >
      <div class="mt-1 w-full h-[120px] border border-gray-400 border-dashed rounded-[8px] flex justify-center items-center">
        <div class="text-center">
          <p class="text-gray-600 text-[14px] flex items-center gap-2 font-[600] justify-center">
            <img :src="require('@/assets/icon/upload.svg')" alt="icon" class="rounded-lg w-[14px] h-auto" />
            Upload {{ labelText }}
          </p>
          <p class="text-gray-600 text-[11px]">Accepts {{ acceptedFormatsText }} files</p>
          <p class="text-gray-600 text-[11px]">Size limit: 5 MB</p>
        </div>
      </div>
    </label>

    <input
      type="file"
      ref="file"
      id="file-upload"
      @change="onChange"
      class="hidden"
      :accept="acceptedFormats"
      :required="required"
    />
  </div>
</template>


<script>
import Swal from 'sweetalert2';
import RequiredItem from "@/components/input/helper-input/RequiredItem.vue";

export default {
  components: {
      RequiredItem,
  },
  props: {
    value: {
      type: Array,
      required: false,
      default: () => [],
    },
    label: {
      type: String,
      required: false,
      default: () => [],
    },
    subLabel: {
      type: String,
      required: false,
      default: () => [],
    },
    keyValue: {
      type: String,
      required: true, // The key to store the file under in the payload
    },
    format: {
      type: String,
      required: false,
      default: 'all', // Can be 'image', 'file', or 'all'
    },
    required: {
        type: Boolean,
        required: false
      }
  },
  data() {
    return {
      file: this.value,
      isDragging: false,
      acceptedFormats: '',
    };
  },
  computed: {
    labelText() {
      return this.keyValue || 'Click to choose a file or drag here'; // Default label text if no keyValue provided
    },
    formattedSubLabel() {
      // Convert Markdown-style link to HTML
      if (this.subLabel) {
        return this.subLabel.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g, // Regex to find markdown links [label](url)
          '<a href="$2" target="_blank" class="text-blue-500">$1</a>'
        );
      }
      return '';
    },
    acceptedFormatsText() {
      // Set the acceptable file format text based on the `format` prop
      if (this.format === 'image') {
        return '.png, .jpg, .jpeg';
      } else if (this.format === 'file') {
        return '.pdf';
      } else {
        return '.png, .jpg, .jpeg, .pdf'; // For "all"
      }
    },
  },
  watch: {
    format: "setAcceptedFormats",
    value(newValue) {
      this.file = newValue;
    },
  },
  methods: {
    setAcceptedFormats() {
        // Set the accepted file types based on the format prop
        if (this.format === 'image') {
          this.acceptedFormats = 'image/png, image/jpg, image/jpeg';
        } else if (this.format === 'file') {
          this.acceptedFormats = 'application/pdf';
        } else {
          this.acceptedFormats = 'image/png, image/jpg, image/jpeg, application/pdf';
        }
      },
      onChange() {
        const incomingFiles = Array.from(this.$refs.file.files);
        const isValid = this.isValidFile(incomingFiles);

        if (!isValid) {
          Swal.fire({
            title: "Upload File",
            text: `File must be a valid ${this.format === 'image' ? 'image' : 'PDF'}.`,
            icon: "warning",
            confirmButtonColor: '#7066e0',
          });
          return;
        }

        // Check if only one file is uploaded
        if (incomingFiles.length > 1 || this.file.length === 1) {
          Swal.fire({
            title: "Upload File",
            text: "Only 1 file can be uploaded at a time.",
            icon: "warning",
            confirmButtonColor: '#7066e0',
          });
          return;
        }

        // Check if file already exists
        const fileExist = this.file.some((r) =>
          incomingFiles.some((file) => file.name === r.name && file.size === r.size)
        );
        if (fileExist) {
          Swal.fire({
            title: "Upload File",
            text: "A file with the same name already exists.",
            icon: "warning",
            confirmButtonColor: '#7066e0',
          });
          return;
        }

        // Set the uploaded file
        this.file = incomingFiles;
        this.$emit('update', { key: this.keyValue || this.label, value: incomingFiles[0] }); 
      },
      isValidFile(files) {
        // Check if the file matches the accepted formats
        const validTypes = this.acceptedFormats.split(', ').map(type => type.trim());
        return (
          files.length === 1 &&
          validTypes.includes(files[0].type) &&
          files[0].size <= 5 * 1024 * 1024 // Limit size to 5 MB
        );
      },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    generateURL(file) {
      let fileSrc = URL.createObjectURL(file);
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
      }, 1000);
      return fileSrc;
    },
    isValidFile(files) {
      // Check if file is valid based on accepted formats
      const validTypes = this.acceptedFormats.split(', ').map(type => type.trim());
      return (
        files.length === 1 &&
        validTypes.includes(files[0].type) &&
        files[0].size <= 5 * 1024 * 1024 // Limit size to 5 MB
      );
    },
    showErrorMessage() {
      Swal.fire({
        icon: 'error',
        title: 'Invalid file',
        text: 'The file type or size is not acceptable. Please upload a valid file.',
        confirmButtonText: 'Okay'
      });
    },
    removeFile() {
    this.file = [];  // Clear the file array when removing the file
  },
  },
  mounted() {
    this.setAcceptedFormats(); // Initialize accepted formats when the component is mounted
  },
};
</script>

<style scoped>
.bg-colorSecond {
  background-color: #f3f4f6;
}
.bg-main {
  background-color: #1c3faa;
}
.text-main {
  color: #1c3faa;
}
</style>