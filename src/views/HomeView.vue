<template>
  <div class="overflow-hidden">
   <HeaderItem />
  </div>
 
  <!-- Ikon Media Sosial -->
  <div class="absolute bottom-0 left-0 right-0 bg-[#003b6f] p-[6px] z-20">
    <div class="flex justify-center w-full gap-2 h-[48px] p-[4px]">
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/instagram.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/whatsapp.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/twitter.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/line.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/tiktok.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/youtube.svg')"></a>
      <a href="#" class="flex justify-center items-center text-center bg-[#08477e] cursor-pointer" style="width:14.2%"><img class="w-[20px]" :src="require('@/assets/image/facebook.svg')"></a>
    </div>
  </div>

  <div class="bg-white">
    <div class="flex items-center">
      <img :src="require('@/assets/image/logo.png')" alt="IOM-ITB" class="w-1/2 object-cover">
      <div class="w-[45%]">
        <h4 class="text-[32px] capitalize text-[#003a6e] font-semibold">Ikatan Orang Tua Mahasiswa</h4>
        <h5 class="text-[24px] capitalize text-[#003a6e]">Institut Teknologi Bandung</h5>
        <br>
        <p>IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
        <br>
        <p>IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
      </div>
    </div>
  </div>

  <div class="bg-[#f2f7fc] py-[64px]">
    <nav class="bg-[#f2f7fc] shadow mb-8">
      <div class="mx-auto px-6">
        <div class="flex items-center py-4 gap-6">
          <div class="text-lg font-semibold text-blue-800">BERITA</div>
          <div class="flex space-x-4 text-gray-700">
            <a href="#" class="hover:text-blue-800">SEMUA</a>
            <a href="#" class="hover:text-blue-800">PRESTASI</a>
            <a href="#" class="hover:text-blue-800">BEASISWA</a>
            <a href="#" class="hover:text-blue-800">PENGUMUMAN</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[24px]">
      <!-- Card Berita -->
      <!-- Gunakan v-for untuk iterasi data berita -->
      <!-- Contoh hardcoded data, ganti dengan iterasi data dari backend -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <img :src="require('@/assets/image/news1.png')" alt="Title" class="w-full h-48 object-cover">
        <div class="p-4">
          <div class="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span>12 Jan 2023</span>
            <span class="flex items-center"><i class="fas fa-eye mr-1"></i>123</span>
          </div>
          <h3 class="text-blue-800 font-semibold">Judul Berita</h3>
          <p class="text-gray-700 mt-2">Excerpt berita</p>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center">
      <a href="#" class="bg-[#f2f7fc] border border-[#003b6f] text-[#003b6f] px-4 py-2 rounded hover:bg-[#003b6f] hover:text-white cursor-pointer duration-150">Selengkapnya</a>
    </div>
  </div>

  <div class="bg-white py-[104px] px-[42px] text-center">
    <div class="mb-[24px]">
      <h4 class="text-[42px] capitalize text-[#003a6e] font-semibold">VISI </h4>
      <p class="text-[22px] capitalize text-[#003a6e]">Bersama ITB, melahirkan anak bangsa yang cerdas, tangguh dan berakhlak mulia.</p>
    </div>
    <div class="mb-[24px]">
      <h4 class="text-[42px] capitalize text-[#003a6e] font-semibold"> MISI</h4>
      <p class="text-[22px] capitalize text-[#003a6e]">Memotivasi dan membantu mahasiswa ITB untuk mengatasi kendala dalam studinya serta berperan aktif dalam pembinaan watak, kepedulian sosial dan budaya.</p>
    </div>
  </div>

  <div class="bg-[#003b6f] py-[64px]">
    <h2 class="text-[24px] capitalize text-white font-semibold text-center mb-[42px]">VIDEO</h2>
    <div class="flex justify-center gap-8">
      <div class="col-md-3 text-center">
        <hr class="blue">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/Rp6d9zQJsjk?si" allowfullscreen></iframe>
      </div>
      <div class="text-center">
        <hr class="blue">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/SjcNKHzNb98?si" allowfullscreen></iframe>
      </div>
      <div class="col-md-3 text-center">
        <hr class="blue">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/C8yc-4VEkJo" allowfullscreen></iframe>
      </div>
      <div class="text-center">
        <hr class="blue">
        <iframe width="100%" height="180px" class="embed-responsive-item" src="https://www.youtube.com/embed/AvrMUHcEAgQ?si=Jr0M8Ehnp34DFFMQ?rel=0&amp;autoplay=1&amp;mute=1" allowfullscreen></iframe>
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
    return {};
  },
  computed: {},
  methods: {}
};
</script>

