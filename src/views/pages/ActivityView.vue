<template>
  <Loading :active="isLoading" />
  <div v-if="!isLoading">
  <div class="bg-white pt-[10px] pb-[32px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">{{thisPathHaveSlug ? "Detail Kegiatan" : "Kegiatan Terbaru"}}</h2>
    <img :src="activity?.image" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20 block md:hidden">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="w-full text-justify">
        <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">{{ activity?.title }}</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main opacity-60 whitespace-pre-line mb-[24px]">
          {{ formatDate(activity?.date) }}
        </p>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line mb-[24px]">
          {{ thisPathHaveSlug ? activity?.description : truncate(activity?.description, 850) }}
        </p>
        <a :href="thisPathHaveSlug ? '/kegiatan' : getUrl(activity?.url)" class="inline-flex items-center px-4 py-2 text-[18px] font-medium text-center text-white bg-main rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span v-if="thisPathHaveSlug" class="flex items-center gap-1">
            <img :src="require('@/assets/icon/arrow-left.svg')" class="w-[18px]"/> Kembali
          </span> 
          <span v-else>
            Baca Selengkapnya
          </span> 
          </a>
      </div>
      <img :src="activity?.image" alt="IOM-ITB" class="w-full md:w-1/2 md:h-1/2 px-4 md:px-20 hidden md:block">
    </div>
  </div>

  <div class="bg-white p-[16px] md:p-[24px] px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px]">Kegiatan Lainnya</h2>
    <ActivitiesItem />
  </div>
</div>
</template>

<script>
import { GET_DETAIL_ACTIVITY, GET_ACTIVITIES } from "@/store/activities.module";
import HeaderItem from "@/components/header/HeaderItem.vue";
import ActivitiesItem from "@/components/card/ActivitiesItem.vue";
import { getUrl, truncate } from "@/utils";
import Loading from "@/components/loading/LoadingItem.vue"

export default {
  components: {
    HeaderItem,
    ActivitiesItem,
    Loading,
  },
  setup() {
    return {};
  },
  data() {
    return {
      activity: [],
      isLoading: true,
    };
  },
  computed:{
    activities(){
      return this.$store.getters.activities;
    },
    activity(){
      return this.$route.path.split("/").filter(Boolean).length > 1 ? this.$store.getters.detailActivity : this.$store.getters.activities?.[0];
    },
    thisPathHaveSlug() {
      return this.$route.path.split("/").filter(Boolean).length > 1;
    }
  },
  async mounted(){
   await this.getData();
    this.isLoading = false;
  },
  methods: {
    truncate,
    getUrl,
    async getData() {
      try {
        if(this.$route.params.slug){
          await this.$store.dispatch(GET_DETAIL_ACTIVITY, {
            slug: this.$route.params.slug
          });
        }
        await this.$store.dispatch(GET_ACTIVITIES, {
          search: "",
          limit: 1000,
          page: 1,
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
