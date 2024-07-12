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
        <a href="#" class="bg-white text-main font-[600] text-[16px] md:text-[18px] rounded-full p-[10px] md:p-[12px] hover:opacity-[0.8]">Baca Selengkapnya</a>
      </div>
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
            <h5 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ v.title }}</h5>
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
