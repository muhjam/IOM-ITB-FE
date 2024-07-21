<template>
  <div class="bg-white pt-[100px] pb-[32px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Kegiatan Terbaru</h2>
    <img :src="require('@/assets/image/kegiatan-terkini.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20 block md:hidden">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="w-full text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">Donasi Buku IOM-ITB</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main opacity-60 whitespace-pre-line mb-[24px]">
          05 Juni 2024 | 3 jam yang lalu
        </p>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line mb-[24px]">
          {{ ' Selamat Hari Lingkungan Hidup Sedunia!\nBapak/Ibu Orangtua Mahasiswa ITB yang terhormat, yuk ajak Mahasiswa untuk mendonasikan buku-buku kuliahnya\n (Terutama buku TPB) yang sudah tidak terpakai, untuk dapat digunakan lagi oleh Mahasiswa lainnya.\n Dengan mendonasikan buku-buku, selain memperpanjang manfaat buku-buku tersebut dan membantu Mahasiswa lainnya, kita juga berperan untuk mengurangi jumlah pohon yang ditebang untuk pembuatan kertas.\n Untuk drop point, informasi donasi dan juga mendapatkan buku yang dibutuhkan silakan hubungi kami:\n- Whatsapp: 0856-2465-4990\n- Student Center Timur ITB Lantai 2\n- Jl. Ganesha 10, Bandung' }}
        </p>
        <a href="https://www.instagram.com/p/C70RubxByTG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" class="inline-flex items-center px-3 py-2 text-[18px] font-medium text-center text-white bg-main rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
            Baca Selengkapnya
          </a>
      </div>
      <img :src="require('@/assets/image/kegiatan-terkini.png')" alt="IOM-ITB" class="w-full md:w-1/2 px-4 md:px-20 hidden md:block">
    </div>
  </div>


  <div class="bg-white p-[16px] md:p-[24px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px]">Kegiatan Lainnya</h2>
    <div class="flex overflow-x-auto gap-4 snap-x">
      <div v-for="(v, i) in activity" :key="i" class="min-w-[250px] md:min-w-[300px] bg-main text-white border border-gray-200 rounded-lg shadow snap-center">
        <a href="#">
          <img class="rounded-t-lg" :src="require(`@/assets/image/${v.image}`)" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-xl md:text-2xl font-bold tracking-tight text-white">{{ truncateText(v.title, 20) }}</h5>
          </a>
          <span class="text-[14px] font-[600] text-white">{{ v.date }}</span>
          <p class="mb-3 text-[14px] mt-2 text-white">{{ truncateText(v.description, 200) }}</p>
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
      activity:[
      {
        image: "kegiatan1.png",
        title: "Selamat Ulang Tahun IOM-ITB yang ke-56!" ,
        date: "24 Juli 2024",
        description: "Selamat pagi, selamat berakhir pekan.\nDengan penuh rasa syukur, hari ini tanggal 14 Juli 2024, IOM-ITB genap berusia 56 tahun sejak pertama kali didirikan pada tanggal 14 Juli 1968.",
        url: "/"
      },
      {
        image: "kegiatan2.png",
        title: "Pertemuan antara Pengurus Baru dan Mantan Pengurus IOM-ITB di Ruang",
        date: "10 Juni 2024",
        description: "Rektor ITB Prof. Reini Wirahadikusumah, Ph. D. (ke-4 kiri) didampingi Sekretaris Institut Prof. Dr. Ing. Ir. Widjaja Martokusumo (ke-2 kiri) dan Direktur Direktorat Kemahasiswaan",
        url: "/"
      },
      {
        image: "kegiatan3.png",
        title: "Webinar Spesialisasi Kriya di FSRD ITB",
        date: "01 Juli 2024",
        description: "Halo para mahasiswa baru FSRD, atau siswa SMA yang akan kuliah di FSRD dan juga para orang tua yang putra/putrinya kuliah/akan kuliah di FSRD\n\nIngin tau lebih banyak tentang Spesialisasi Kriya di FSRD ITB?",
        url: "/",
      },
      {
        image: "kegiatan4.png",
        title: "DIKPUS 2024 untuk Mahasiswa ITB 2023",
        date: "25 Juni 2024",
        description: "Menjadi Mahasiswa salah satunya adalah membuka kesempatan untuk berjejaring. \n\nDan mengikuti serta aktif di Organisasi Kemahasiswaan adalah langkah awal yang baik untuk memperluas",
        url: "/"
      },
    ]
    };
  },
  computed: {},
  methods: {
    truncateText(text, maxLength) {
      if (text && text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
  }
};
</script>

<style scoped>
.blue {
  border-color: #003A6E;
}
</style>
