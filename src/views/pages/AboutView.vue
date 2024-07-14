<template>
  <div class="bg-white pt-[80px]">
    <h2 class="text-main px-[30px] md:px-[70px] font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px]">Latar Belakang</h2>
      <div class="w-full px-[30px] md:px-[70px]">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700]">Sejak 1974 IOM-ITB Telah Banyak Membantu Mahasiswa yang Kesulitan Finansial</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
        {{ about }}
        </p>
      </div>
  </div>

  <div class="bg-white p-[16px] md:p-[24px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Kegiatan</h2>
    <div class="flex overflow-x-auto gap-4 snap-x">
      <div v-for="(v, i) in activity" :key="i" class="min-w-[250px] md:min-w-[300px] bg-main text-white border border-gray-200 rounded-lg shadow snap-center">
        <a href="#">
          <img class="rounded-t-lg" :src="require(`@/assets/image/${v.image}`)" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-white">{{ v.title }}</h5>
          </a>
          <p class="mb-3 font-normal text-white">{{ v.description }}</p>
          <a :href="v.url" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-main bg-white rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
            Baca Selengkapnya
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-colorSecond py-[50px] md:py-[104px] px-[20px] md:px-[42px] text-center">
    <div class="mb-[16px] md:mb-[24px]">
      <h4 class="text-[32px] md:text-[50px] text-center text-main font-[800]">Visi</h4>
      <p class="text-[24px] md:text-[40px] text-center text-main max-w-[981px] font-[400] mx-auto">Bersama ITB, melahirkan anak bangsa yang cerdas, tangguh dan berakhlak mulia.</p>
    </div>
    <div class="mb-[16px] md:mb-[24px] text-center">
      <h4 class="text-[32px] md:text-[50px] text-center text-main font-[800]"> MISI</h4>
      <p class="text-[24px] md:text-[40px] text-center text-main max-w-[981px] font-[400] mx-auto">Memotivasi dan membantu mahasiswa ITB untuk mengatasi kendala dalam studinya serta berperan aktif dalam pembinaan watak, kepedulian sosial dan budaya.</p>
    </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";

export default {
  components: {
    HeaderItem,
  },
  setup() {
    return {};
  },
  data() {
    return {
      about:"BANDUNG, itb.ac.id--Setiap tahunnya, Institut Teknologi Bandung menerima ribuan mahasiswa dari berbagai provinsi di Indonesia. \nMereka masuk ke ITB melalui tiga jalur penerimaan, di antaranya SBMPTN, SNMPTN, dan Seleksi Mandiri ITB. \n\nPara mahasiswa yang diterima di ITB memiliki latar belakang ekonomi yang berbeda. \nOleh karena itu, ITB tidak ingin membatasi kesempatan belajar mahasiswa Indonesia terutama karena masalah finansial. \nUntuk itu, berbagai fasilitas beasiswa disediakan untuk membantu mahasiswa yang kesulitan di bidang ekonomi, salah satunya beasiswa IOM. \n\nIkatan Orangtua Mahasiswa (IOM) didirikan oleh para orangtua mahasiswa ITB untuk membantu mahasiswa yang kesulitan dari sisi finansial. \nIOM disahkan pada 16 Desember 1974 dan saat ini diketuai oleh Delyuzar Ilahude, alumni ITB angkatan '76. \n\"Alasan dibentuk IOM sendiri karena zaman dahulu mahasiswa banyak kesulitan finansial. \nSampai sekarang berjalan dengan lancar dan banyak mahasiswa tertolong oleh IOM ini. \nJadi tujuannya untuk memberikan bantuan kepada mahasiswa yang kesulitan dari sisi finansial,\" ujarnya saat diwawancara Humas ITB, Jumat (23/10/2020)."
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.blue {
  border-color: #003A6E;
}
</style>
