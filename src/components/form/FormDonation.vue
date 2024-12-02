<template>
  <div>
    <div class="fixed w-full h-full bg-black top-0 bottom-0 left-0 right-0 z-[98] opacity-[0.6]" @click="closeModal"></div>
  <div class="fixed top-0 bottom-0 left-0 right-0 flex items-center z-[99]" @click="closeModal">
  <div class="bg-white h-[700px] w-full md:w-[80%] shadow-sm p-4 md:p-6 rounded-md mx-auto overflow-scroll my-2" @click.stop>
    <div class="flex justify-between items-center sticky">
    <h1 class="text-[24px] md:text-[42px] font-[700] text-center md:text-left">Donasi</h1>
    <img :src="require('@/assets/icon/icon-close.svg')" class="w-[24px] cursor-pointer" @click.native="closeModal"/>
    </div>
    <form @submit.prevent="handleSubmit" class="mt-6">
      <h1 class="text-[16px] md:text-[30px] font-[700] text-center md:text-left">Data Diri</h1>
      <div class="flex flex-col md:flex-row md:justify-between gap-4">
        <InputText keyValue="name" label="Nama" class="w-full md:w-1/2" :required="true" @update="updateValue" />
        <InputText keyValue="email" label="Email" class="w-full md:w-1/2" :required="true" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputText keyValue="noWhatsapp" label="No Whatsapp" class="w-full md:w-1/2" :required="true" @update="updateValue" />
        <div class="hidden md:block md:w-1/2"></div>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <h1 class="text-[16px] md:text-[30px] font-[700] text-center md:text-left">Pembayaran Donasi</h1>
        <p>Bapak - Ibu Orang Tua Mahasiswa ITB ysh.,</p>
        <p>Kami mengucapkan terima kasih atas partisipasi Bapak/Ibu selaku Orang Tua Mahasiswa ITB  yang telah turut berkontribusi untuk  membantu Mahasiswa ITB melalui IOM ITB. Kontribusi Bapak-Ibu sebagai anggota IOM kami kelompokkan menjadi :<br/>
            1. Iuran Sukarela (yang nominal maksimal sebesar Rp. 800.000,-)<br/>
            2. ⁠Sumbangan/Donasi
        </p>
        <p>Iuran Sukarela dari Bapak/Ibu tersebut akan kami salurkan selama 4 tahun dalam bentuk bantuan UKT, Tugas Akhir dan Biaya Hidup bagi mahasiswa yang membutuhkan. Hal ini dimaksudkan untuk keberlangsungan program bantuan kepada Mahasiswa.
Adapun Sumbangan/Donasi dari Bapak/Ibu disamping disalurkan untuk bantuan UKT, Tugas Akhir dan Biaya Hidup, juga dipergunakan untuk bantuan tak terduga bagi Mahasiswa, seperti biaya kesehatan, biaya penunjang pendidikan, dana talangan darurat dll.  
Sebagai mitra ITB, IOM ITB  senantiasa berkoordinasi dengan Direktorat kemahasiswaan  ITB dalam penyaluran bantuan. Oleh karenanya kontribusi Bapak/Ibu dalam membantu mahasiswa melalui IOM ITB akan sangat membantu para mahasiswa untuk mengatasi kendala biaya selama masa studinya.  Semoga partisipasi Bapak/Ibu menjadi amal jariyah & perwujudan rasa syukur kepada Tuhan atas segala nikmat telah kita terima.</p>
<p>Hormat Kami,<br/>
        an. Pengurus IOM ITB 2024 2027<br/>
        Hendro Setyanto<br/>
        Ketua Umum</p>
        <br/>
        <p>Donasi untuk Ikatan Orang Tua Mahasiswa (IOM) ITB dengan jumlah tidak ditentukan,Donasi ke IOM ITB:</p>
        <p>
          1. Kontribusi Iuran Sukarela (tambahkan kode unik <strong>011</strong>)<br/>
          2. Kontribusi Anggota (tambahkan kode unik <strong>022</strong>)<br/>
          3.⁠ ⁠Kontribusi Donatur (tambahkan kode unik <strong>033</strong>)<br/>
          4.⁠ ⁠Pembelian Merchandise (tambahkan kode unik <strong>044</strong>)<br/>
          5.⁠ ⁠Kontribusi Sukarela (tambahkan kode unik <strong>055</strong>)<br/>
          Semua donasi ditransfer ke: Rekening <strong>130.001-900-0366</strong> Bank Mandiri Kantor Kas Bandung ITB an. IOM ITB<br/>
          Kontak WA: <strong>081573598031</strong> (Ibu Ani Suliawaty).
        </p>
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4">
        <div class="w-full md:w-1/2">
          <h1 class="text-[16px] md:text-[30px] font-[700] text-center md:text-left">Mandiri QRIS</h1>
        <img :src="require('@/assets/image/mandiri-qris.png')"/>
      </div>
      <div class="w-full md:w-1/2">
          <h1 class="text-[16px] md:text-[30px] font-[700] text-center md:text-left">BSI QRIS</h1>
        <img :src="require('@/assets/image/bsi-qris-full.png')"/>
      </div>
      </div>
      <div class="flex flex-col gap-4 mt-4">
        <InputFile keyValue="proof" label="Upload Bukti Bayar" subLabel="" format="all" class="w-full" :required="true" @update="updateValue" />
      </div>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 mt-4">
        <InputCheckboxOptions keyValue="notification" label="Menerima notifikasi melalui?" class="w-full md:w-1/2" :required="true" :options="['Whatsapp', 'Email']" @update="updateValue" />
      </div>
      <!-- Submit and Cancel Buttons -->
      <div class="flex flex-col-reverse md:flex-row justify-end gap-4 mt-6">
        <button type="button" @click="closeModal" class="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none w-full md:w-auto">
          Cancel
        </button>
        <button type="submit" :disabled="isLoading" class="px-4 py-2 text-sm text-white bg-main rounded-md focus:outline-none w-full md:w-auto">
          {{ isLoading ? 'Loading...' : 'Kirim' }}
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</template>

  
<script>
import InputText from "@/components/input/InputText.vue";
import InputTextarea from "@/components/input/InputTextarea.vue";
import InputSelection from "@/components/input/InputSelection.vue";
import InputCheckboxOptions from "@/components/input/InputCheckboxOptions.vue";
import InputFile from "@/components/input/InputFile.vue";
import { useStore } from 'vuex';
import { POST_DONATION } from "@/store/donations.module";

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
        proof: null,
        notification: {},
      }
    };
  },
  setup() {
    const store = useStore();

    return { store };
  },
  mounted() {
    document.body.classList.add('no-scroll');
  },
  methods: {
    closeModal() {
      this.isLoading = false;
      document.body.classList.remove('no-scroll');
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
        await this.store.dispatch(POST_DONATION, payload);
        document.body.classList.remove('no-scroll');
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

<style>
.no-scroll {
  overflow: hidden;
}
</style>