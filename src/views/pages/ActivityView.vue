<template>
  <div class="bg-white pt-[80px] pb-[32px] px-[18px] md:px-[70px]">
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
      history:"IOM-ITB merupakan perkumpulan Orang Tua Mahasiswa ITB yang menjadi salah satu mitra Institut Teknologi Bandung.\n\nBerdiri sejak tanggal 14 Juli 1968, dan digagas oleh istri-istri dosen ITB atas dasar kepedulian terhadap kondisi mahasiswa yang terkendala biaya dalam melaksanakan studinya selama perkuliahan berlangsung.\n\nDISAHKAN SEBAGAI BADAN HUKUM : Pada tanggal 16 Desember 1974 berdasarkan: \nSurat Keputusan  Pengadilan Negeri Kelas I Bandung \nNo: 1/1974/PBH/Bdg.\n\n",
      functionality:"IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.\n\n",
      goals:"IOM-ITB bermaksud dan bertujuan ikut serta membina mahasiswa, dengan menjalin hubungan antar sesama orangtua mahasiswa, menghimpun, menampung dan menyalurkan daya dan usaha.",
      activity:[
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2021" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2023" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2021" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2023" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2021" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
      {
        image: "slide1.png",
        title: "Noteworthy technology acquisition 2023" ,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        url: "/"
      },
    ]
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
