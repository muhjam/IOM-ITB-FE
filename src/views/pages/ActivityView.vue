<template>
  <div class="bg-white pt-[100px] pb-[32px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Kegiatan Terbaru</h2>
    <img :src="activities[0]?.image" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20 block md:hidden">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="w-full text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">{{ activities[0]?.title }}</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main opacity-60 whitespace-pre-line mb-[24px]">
          {{ formatDate(activities[0]?.date) }}
        </p>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line mb-[24px]">
          {{ truncateText(activities[0]?.description, 850) }}
        </p>
        <a :href="activities[0]?.url" class="inline-flex items-center px-3 py-2 text-[18px] font-medium text-center text-white bg-main rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
            Baca Selengkapnya
          </a>
      </div>
      <img :src="getImageBase64(activities[0]?.image?.data)" alt="IOM-ITB" class="w-full md:w-1/2 md:h-1/2 px-4 md:px-20 hidden md:block">
    </div>
  </div>

  <div class="bg-white p-[16px] md:p-[24px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px]">Kegiatan Lainnya</h2>
    <ActivitiesItem />
  </div>
</template>

<script>
import { GET_ACTIVITIES } from "@/store/activity.module";
import HeaderItem from "@/components/header/HeaderItem.vue";
import ActivitiesItem from "@/components/card/ActivitiesItem.vue";

export default {
  components: {
    HeaderItem,
    ActivitiesItem,
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
      return this.$store.getters.activities;
    },
  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData() {
      try {
        await this.$store.dispatch(GET_ACTIVITIES, {
          query: "",
        });
      } catch (err) {
        console.error(err);
      }
    },
   getImageBase64 (buffer) {
      const byteArray = new Uint8Array(buffer);
      let binary = '';
      byteArray.forEach((byte) => binary += String.fromCharCode(byte));
      return `data:image/jpeg;base64,${btoa(binary)}`;
    },
    truncateText(text, maxLength) {
      if (text && text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
    formatDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  }
};
</script>


<style scoped>
.blue {
  border-color: #003A6E;
}
</style>
