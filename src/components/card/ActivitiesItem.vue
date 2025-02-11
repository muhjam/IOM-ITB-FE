<template>
   <div class="flex overflow-x-auto gap-4 snap-x h-full">
      <div v-for="(v, i) in activities" :key="i" class="max-w-[250px] min-w-[250px] md:min-w-[300px] md:max-w-[300px] bg-main text-white border border-gray-200 rounded-lg shadow snap-center flex flex-col justify-between">
        <a :href="getUrl(v?.url)">
          <img class="rounded-t-lg h-[200px] w-full object-cover" :src="v?.image" alt="" />
        </a>
        <div class="p-5">
          <a :href="getUrl(v?.url)">
            <h5 class="text-xl md:text-2xl font-bold tracking-tight text-white">{{ truncate(v.title, 20) }}</h5>
          </a>
          <span class="text-[14px] font-[600] text-white">{{ formattedDate(v?.date) }}</span>
          <p class="mb-3 text-[14px] mt-2 text-white">{{ truncate(v?.description, 200) }}</p>
        </div>
        <a :href="getUrl(v?.url)" class="inline-flex items-center px-3 py-2 mt-auto w-fit mx-[12px] mb-[24px] text-sm font-medium text-center text-main bg-white rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
            Baca Selengkapnya
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderItem from "@/components/header/HeaderItem.vue";
import { truncate, formattedDate, getUrl } from "@/utils";
  
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
    computed: {
        activities() {
          const allActivities = this.$store.getters.activities;
          const pathSegments = this.$route.path.split("/").filter(Boolean);
          const isKegiatanPath = pathSegments[0] === "kegiatan";
          const slug = pathSegments[1] || null;

          if (isKegiatanPath && !slug) {
            // Jika path berada di "/kegiatan", mulai dari index 1
            return allActivities?.slice(1);
          }

          if (isKegiatanPath && slug) {
            // Jika path berada di "/kegiatan/:slug", tampilkan semua kecuali yang url-nya sama dengan slug
            return allActivities?.filter((activity) => activity.url !== slug);
          }

          // Jika bukan di "/kegiatan", tampilkan semua
          return allActivities;
        }
    },
    methods: {
      truncate,
      formattedDate,
      getUrl,
      getImageBase64 (buffer) {
      const byteArray = new Uint8Array(buffer);
      let binary = '';
      byteArray.forEach((byte) => binary += String.fromCharCode(byte));
      return `data:image/jpeg;base64,${btoa(binary)}`;
    },
    }
  };
  </script>
  
  
  <style scoped>
  .blue {
    border-color: #003A6E;
  }
  </style>
  