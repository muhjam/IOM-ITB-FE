<template>
  <div class="bg-white pt-[100px] pb-[32px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Kegiatan Terbaru</h2>
    <img :src="require(`@/assets/image/${activities[0].image}`)" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20 block md:hidden">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="w-full text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">{{ activities[0].title }}</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main opacity-60 whitespace-pre-line mb-[24px]">
          {{ activities[0].date }}
        </p>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line mb-[24px]">
          {{ truncateText(activities[0].description, 850) }}
        </p>
        <a :href="activities[0].url" class="inline-flex items-center px-3 py-2 text-[18px] font-medium text-center text-white bg-main rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
            Baca Selengkapnya
          </a>
      </div>
      <img :src="require(`@/assets/image/${activities[0].image}`)" alt="IOM-ITB" class="w-full md:w-1/2 md:h-1/2 px-4 md:px-20 hidden md:block">
    </div>
  </div>


  <div class="bg-white p-[16px] md:p-[24px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px]">Kegiatan Lainnya</h2>
    <div class="flex overflow-x-auto gap-4 snap-x">
      <div v-for="(v, i) in activities.filter((_, index) => index !== 0)" :key="i" class="min-w-[250px] md:min-w-[300px] bg-main text-white border border-gray-200 rounded-lg shadow snap-center">
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
      activity: []
    };
  },
  computed:{
    activities(){
      // Create a new reversed array without mutating the original
      return [...this.$store.getters.activities].reverse();
    },
  },
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
