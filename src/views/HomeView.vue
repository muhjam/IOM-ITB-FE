<template>
  <div class="overflow-hidden">
    <HeaderItem />
  </div>
  <div class="bg-white">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Tentang Kami</h2>
    <div class="flex flex-col md:flex-row justify-between items-center">
      <img :src="require('@/assets/image/iom-itb.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20">
      <div class="w-full md:w-[45%] bg-main rounded-l-[50px] py-[40px] md:py-[61px] px-[30px] md:px-[70px]">
        <h4 class="text-[24px] md:text-[26px] capitalize text-white font-[700]">Ikatan Orang Tua Mahasiswa</h4>
        <h5 class="text-[18px] md:text-[20px] capitalize text-white font-[600]">Institut Teknologi Bandung</h5>
        <br>
        <p class="font-[500] text-[14px] md:text-[16px] text-white">IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
        <br>
        <p class="font-[500] text-[14px] md:text-[16px] text-white">IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
        <br>
        <br>
        <a href="/tentang-kami" class="bg-white text-main font-[600] text-[16px] md:text-[18px] rounded-full p-[10px] md:p-[12px] hover:opacity-[0.8]">Baca Selengkapnya</a>
      </div>
    </div>
  </div>

  <div class="bg-white p-[16px] md:p-[24px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Kegiatan</h2>
    <div class="flex overflow-x-auto gap-4 snap-x">
      <div v-for="(v, i) in activity" :key="i" class="min-w-[250px] md:min-w-[300px] bg-main text-white border border-gray-200 rounded-lg shadow snap-center">
        <a href="#">
          <img class="rounded-t-lg h-[200px] w-full object-cover" :src="require(`@/assets/image/${v.image}`)" alt="" />
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

  <div class="bg-white py-[50px] md:py-[104px] px-[20px] md:px-[42px] text-center">
    <GraphicItem/>
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

  <div class="bg-main pt-[24px] pb-[34px]">
    <h2 class="text-[32px] md:text-[50px] capitalize text-white font-[800] text-center mb-[24px] md:mb-[42px]">Video</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      <div class="text-center">
        <hr class="blue mb-4">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/Rp6d9zQJsjk?si" allowfullscreen></iframe>
      </div>
      <div class="text-center">
        <hr class="blue mb-4">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/SjcNKHzNb98?si" allowfullscreen></iframe>
      </div>
      <div class="text-center">
        <hr class="blue mb-4">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/C8yc-4VEkJo" allowfullscreen></iframe>
      </div>
      <div class="text-center">
        <hr class="blue mb-4">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/AvrMUHcEAgQ?si=Jr0M8Ehnp34DFFMQ?rel=0&amp;autoplay=1&amp;mute=1" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";
import GraphicItem from "@/components/item/GraphicItem.vue";

export default {
  components: {
    HeaderItem,
    GraphicItem
  },
  setup() {
    return {};
  },
  data() {
    return {
      activity:[
      {
        image: "kegiatan-terkini.png",
        title: "Kegiatan Terbaru",
        date: "24 Juli 2024",
        description: "Sebagaimana layaknya menyambut anggota baru yang hadir dalam keluarga, Ikatan Orangtua Mahasiswa ITB (IOM-ITB) melaksanakan acara Penerimaan Anggota Baru (PAB) yang menjadi bagian dari rangkaian kegiatan Penyambutan Mahasiswa Baru (PMB) ITB 2024.\n\nAcara akan dilaksanakan pada :\nJumat, 26 Juli 2024\n13:30 - 16:00 WIB\nDilaksanakan secara Hybrid Meeting\nONLINE : Link Zoom akan diberikan sehari sebelum waktu pelaksanaan\n\nSelain Upacara Penerimaan, acara ini akan diisi oleh 2 _Talkshow_ :\n💎 KEMAHASISWAAN :\nBERBAGI PERAN DAN SINERGI ANTARA ITB DAN ORANG TUA, bersama\n- Bapak D.Arch .G.P. Adhitama,S.Sn.,M.Sn (Direktur Direktorat Kemahasiswaan ITB)\n- Bapak Prof. Brian Yuliarto., S.T., M.Eng.,Ph.D. (Dekan FTI-ITB, Perwakilan Alumni Beswan IOM-ITB)\n- Bapak Hendro Setyanto, M.Si (Ketua Umum IOM-ITB 2024-2027)\n\n💎 MENYIAPKAN GENERASI EMAS TANPA CEMAS BERSAMA IOM-ITB*,\nbersama Pembicara Utama :\n*Bapak Ir. Arcandra Tahar, M.Sc.,Ph.D.\n\nKedua _Talkshow_ akan dipandu oleh\n- Bapak D.Sc. (Tech) Imam Santoso, S.T. M. Phil (Staff Pengajar FTTM ITB, Penulis, Motivator Pendidikan)\n- Fidella Marwa Huwaida (Presiden Keluarga Mahasiswa ITB periode 2024-2025)\n\nMari bersama kita hadir untuk memaknai penerimaan menjadi bagian dari Keluarga Besar Ikatan Orangtua Mahasiswa ITB (IOM-ITB)",
        url: "/"
      },
      {
        image: "kegiatan5.png",
        title: "Donasi Buku IOM-ITB",
        date: "05 Juni 2024",
        description: "Selamat Hari Lingkungan Hidup Sedunia!\nBapak/Ibu Orangtua Mahasiswa ITB yang terhormat, yuk ajak Mahasiswa untuk mendonasikan buku-buku kuliahnya\n (Terutama buku TPB) yang sudah tidak terpakai, untuk dapat digunakan lagi oleh Mahasiswa lainnya.\n Dengan mendonasikan buku-buku, selain memperpanjang manfaat buku-buku tersebut dan membantu Mahasiswa lainnya, kita juga berperan untuk mengurangi jumlah pohon yang ditebang untuk pembuatan kertas.\n Untuk drop point, informasi donasi dan juga mendapatkan buku yang dibutuhkan silakan hubungi kami:\n- Whatsapp: 0856-2465-4990\n- Student Center Timur ITB Lantai 2\n- Jl. Ganesha 10, Bandung",
        url: "/"
      },
      {
        image: "kegiatan4.png",
        title: "DIKPUS 2024 untuk Mahasiswa ITB 2023",
        date: "25 Juni 2024",
        description: "Menjadi Mahasiswa salah satunya adalah membuka kesempatan untuk berjejaring. \n\nDan mengikuti serta aktif di Organisasi Kemahasiswaan adalah langkah awal yang baik untuk memperluas",
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
        image: "kegiatan2.png",
        title: "Pertemuan antara Pengurus Baru dan Mantan Pengurus IOM-ITB di Ruang",
        date: "10 Juni 2024",
        description: "Rektor ITB Prof. Reini Wirahadikusumah, Ph. D. (ke-4 kiri) didampingi Sekretaris Institut Prof. Dr. Ing. Ir. Widjaja Martokusumo (ke-2 kiri) dan Direktur Direktorat Kemahasiswaan",
        url: "/"
      },
      {
        image: "kegiatan1.png",
        title: "Selamat Ulang Tahun IOM-ITB yang ke-56!" ,
        date: "24 Juli 2024",
        description: "Selamat pagi, selamat berakhir pekan.\nDengan penuh rasa syukur, hari ini tanggal 14 Juli 2024, IOM-ITB genap berusia 56 tahun sejak pertama kali didirikan pada tanggal 14 Juli 1968.",
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
