<template>
    <div class="bg-white w-[80%] shadow-sm p-[24px] rounded-md mx-auto">
        <h1 class="text-[42px] font-[700]">Daftar Anggota Baru</h1>
        <div>
            <img :src="require('@/assets/image/banner-register.png')" title="Banner IOM" class="w-full h-full object-cover"/>
        </div>
        <div>
            <div class="flex justify-between gap-2">
                <InputText keyValue="name" label="Nama Orang Tua / Wali" class="w-1/2" :required="true"/>
                <InputText keyValue="name" label="No Whatsapp" :required="true" class="w-1/2"/>
            </div>
            <div class="flex justify-between gap-2">
                <InputText label="Nim Anak" class="w-1/2" :required="true"/>
            </div>
            <div class="flex justify-between gap-2">
                <InputCheckboxOptions label="Bersedia menjadi Pengurus IOM?" class="w-1/2" :required="true" :options="['Bersedia']"/>
            </div>
            <div class="flex justify-between gap-2">
                <InputCheckboxOptions label="Bersedia menjadi Orang Tua Asuh?" class="w-1/2" :required="true" :options="['Bersedia']"/>
            </div>
            <div class="flex flex-col justify-between gap-2 mt-2">
                <InputFile label="Upload Scan PDF Surat Pernyataan Ketersediaan Menjadi Orang Tua Asuh" subLabel="Download tamplate [disini](https://docs.google.com/document/u/1/export?format=docx&id=1yNNx0t2hfm2mDpaVjMPRH-MOpnKtrIzA9PYnwxmewgM&token=AC4w5VikJY28576IyLc9CmsUssgm4S-ySA%3A1723506902118&includes_info_params=true&usp=docs_home&cros_files=false&inspectorResult=%7B%22pc%22%3A1%2C%22lplc%22%3A31%7D)." format="file" class="w-full" :required="true" />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import InputText from "@/components/input/InputText.vue";
  import InputCheckboxOptions from "@/components/input/InputCheckboxOptions.vue";
  import InputFile from "@/components/input/InputFile.vue";

  export default {
    components: {
        InputText,
        InputCheckboxOptions,
        InputFile,
    },
    data() {
      return {
        data: {
            parentName: "",
            childNim: "",
            noWhatsApp: "",
            picture: "",
        }
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
  