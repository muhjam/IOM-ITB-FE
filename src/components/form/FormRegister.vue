<template>
  <div class="bg-white w-full md:w-[80%] shadow-sm p-4 md:p-6 rounded-md mx-auto">
    <h1 class="text-[24px] md:text-[42px] font-[700] text-center md:text-left">Daftar Anggota Baru</h1>
    <div class="mt-4">
      <img :src="require('@/assets/image/banner-register.png')" title="Banner IOM" class="w-full h-auto object-cover"/>
    </div>
    <form @submit.prevent="handleSubmit" class="mt-6">
      <div class="flex flex-col md:flex-row md:justify-between gap-4">
        <InputText keyValue="parentName" label="Nama Orang Tua / Wali" class="w-full md:w-1/2" :required="true" @update="updateValue" />
        <InputText keyValue="noWhatsapp" label="No Whatsapp" class="w-full md:w-1/2" :required="true" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputText keyValue="childNim" label="NIM Anak" class="w-full md:w-1/2" :required="true" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputCheckboxOptions keyValue="staff" label="Bersedia menjadi Pengurus IOM?" class="w-full md:w-1/2" :required="true" :options="['Bersedia']" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputCheckboxOptions keyValue="foster" label="Bersedia menjadi Orang Tua Asuh?" class="w-full md:w-1/2" :required="true" :options="['Bersedia']" @update="updateValue" />
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <InputFile keyValue="file" label="Upload Scan PDF Surat Pernyataan Ketersediaan Menjadi Orang Tua Asuh" subLabel="Download template [disini](https://docs.google.com/document/u/1/export?format=docx&id=1yNNx0t2hfm2mDpaVjMPRH-MOpnKtrIzA9PYnwxmewgM&token=AC4w5VikJY28576IyLc9CmsUssgm4S-ySA%3A1723506902118&includes_info_params=true&usp=docs_home&cros_files=false&inspectorResult=%7B%22pc%22%3A1%2C%22lplc%22%3A31%7D)." format="file" class="w-full" :required="true" @update="updateValue" />
      </div>
      <!-- Submit and Cancel Buttons -->
      <div class="flex flex-col-reverse md:flex-row justify-end gap-4 mt-6">
        <button type="submit" :disabled="isLoading" class="px-4 py-2 text-sm text-white bg-main rounded-md focus:outline-none w-full md:w-auto">
          {{ isLoading ? 'Loading...' : 'Kirim' }}
        </button>
      </div>
    </form>
  </div>
</template>

  
<script>
import InputText from "@/components/input/InputText.vue";
import InputCheckboxOptions from "@/components/input/InputCheckboxOptions.vue";
import InputFile from "@/components/input/InputFile.vue";
import { useStore } from 'vuex';
import { POST_MEMBER, PUT_MEMBER } from "@/store/members.module";
import Swal from 'sweetalert2';

export default {
  components: {
    InputText,
    InputCheckboxOptions,
    InputFile,
  },
  props: {
    id: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      isLoading: false,
      data: {
        parentName: "",
        childNim: "",
        noWhatsapp: "",
        staff: false,
        foster: false,
        file: null,
      }
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
  methods: {
    closeModal() {
      this.isLoading = false;
      this.$emit('close');
    },
    updateValue({ key, value }) {
      this.data[key] = value;
    },
    async handleSubmit() {
      this.isLoading = true;
      try {
        const payload = {
          id: this.id,
          data: { ...this.data },
        };

        if (this.id) {
          await this.store.dispatch(PUT_MEMBER, payload);
        } else {
          await this.store.dispatch(POST_MEMBER, payload);
        }
        Swal.fire({
          title: 'Berhasil!',
          text: 'Data berhasil dikirimkan successfully.',
          icon: 'success',
          confirmButtonColor: '#7066e0',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.reload();
        });
        this.isLoading = false;
        this.closeModal();
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: 'Data gagal dikirim.',
          icon: 'error',
          confirmButtonColor: '#7066e0',
          confirmButtonText: 'Coba lagi'
        });
        this.isLoading = false;
      }
    }
  },
  watch: {
    data: {
      deep: true,
      handler(newData) {
        this.$emit('update', newData);
      }
    }
  },
};
</script>