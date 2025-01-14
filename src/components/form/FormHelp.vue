<template>
  <div class="bg-white w-full md:w-[80%] shadow-sm p-4 md:p-6 rounded-md mx-auto">
    <h1 class="text-[24px] md:text-[42px] font-[700] text-center md:text-left">Pengajuan Bantuan</h1>
    <div class="mt-4">
      <!-- <img :src="require('@/assets/image/banner-register.png')" title="Banner IOM" class="w-full h-auto object-cover"/> -->
    </div>
    <form @submit.prevent="handleSubmit" class="mt-6">
      <div class="flex flex-col md:flex-row md:justify-between gap-4">
        <InputText keyValue="name" label="Nama" class="w-full md:w-1/2" :required="true" @update="updateValue" />
        <InputText keyValue="noWhatsapp" label="No Whatsapp" class="w-full md:w-1/2" :required="true" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputText keyValue="nim" label="NIM" class="w-full md:w-1/2" :required="true" @update="updateValue" />
        <InputSelection keyValue="type" label="Jenis Bantuan" class="w-full md:w-1/2" :required="true" @update="updateValue" :options="['Biaya UKT', 'Biaya Hidup', 'Biaya Tugas Akhir', 'Biaya Kesehatan (Bagi yang membutuhkan dan bersifat darurat)', 'Bantuan Lainnya']" placeholder="Pilih Jenis Bantuan" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputTextarea keyValue="reason" label="Alasan kenapa memerlukan bantuan?" class="w-full" :required="true" :options="['Bersedia']" @update="updateValue" />
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <InputFile keyValue="file" label="Upload Berkas (Proposal Ajuan)" subLabel="" format="file" class="w-full" :required="true" @update="updateValue" />
      </div>
      <!-- Submit and Cancel Buttons -->
      <div class="flex flex-col-reverse md:flex-row justify-end gap-4 mt-6">
        <button type="button" class="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none w-full md:w-auto">
          Cancel
        </button>
        <button type="submit" :disabled="isLoading" class="px-4 py-2 text-sm text-white bg-main rounded-md focus:outline-none w-full md:w-auto">
          {{ isLoading ? 'Loading...' : 'Kirim' }}
        </button>
      </div>
    </form>
  </div>
</template>

  
<script>
import InputText from "@/components/input/InputText.vue";
import InputTextarea from "@/components/input/InputTextarea.vue";
import InputSelection from "@/components/input/InputSelection.vue";
import InputCheckboxOptions from "@/components/input/InputCheckboxOptions.vue";
import InputFile from "@/components/input/InputFile.vue";
import { useStore } from 'vuex';
import { POST_HELP_SUBMISSION } from "@/store/helpSubmissions.module";

export default {
  components: {
    InputText,
    InputCheckboxOptions,
    InputFile,
    InputSelection,
    InputTextarea
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
          data: { ...this.data },
        };

        await this.store.dispatch(POST_HELP_SUBMISSION, payload);
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