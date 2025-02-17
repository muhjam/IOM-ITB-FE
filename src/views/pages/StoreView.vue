<template>
  <div class="bg-colorSecond pt-[10px] pb-[32px] px-[4px] sm:px-[18px] md:px-[70px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] leading-tight md:leading-[65.1px] py-[16px] text-center md:text-start">Merchandise</h2>
  <div class="flex justify-center">
    <Loading :active="isLoading" class="mt-20" />
    <div v-if="!isLoading" class="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-4">
      <div
        v-for="(merchandise, idx) in merchandises?.data"
        :key="merchandise.id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
      >
        <div class="w-full h-[200px] overflow-hidden">
          <img
            v-if="merchandise.image"
            :src="merchandise.image"
            :alt="merchandise.name"
            class="rounded-t-lg h-48 w-96 object-cover"
          />
          <img
            v-else
            :src="require('@/assets/image/default.png')"
            alt="No Image"
            class="rounded-t-lg"
          />
        </div>
        <div class="p-5 bg-white">
          <a href="#">
            <h5 class="mb-2 text-sm md:text-2xl font-bold tracking-tight text-gray-900">
              {{ merchandise.name }}
            </h5>
          </a>
          <p class="mb-3 text-sm  font-normal text-gray-700 dark:text-gray-400">
            {{ truncate(merchandise.description) }}
          </p>
          <p class="mb-3 font-bold text-main text-sm md:text-lg">
            {{ formatPrice(merchandise.price) }}
          </p>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-sm md:text-sm">
            Stok: {{ merchandise.stock }}
          </p>
          <div v-if="merchandise.stock > 0">
            <a
              :href="merchandise?.link || `/merchandise/${merchandise.id}`"
              target="_blank"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Beli
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div v-else>
            <button
              disabled
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-400 rounded-lg cursor-not-allowed"
            >
              Sold Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";
import { GET_MERCHANDISES } from "@/store/merchandises.module";
import { truncate } from "@/utils/index"
import Loading from "vue-loading-overlay";

export default {
  components: {
    HeaderItem,
    Loading
  },
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  computed: {
    merchandises() {
      return this.$store.getters.merchandises;
    },
  },
  async mounted() {
   await this.getData();
    this.isLoading = false;
  },
  methods: {
    truncate,
    async getData() {
      try {
        await this.$store.dispatch(GET_MERCHANDISES, {
          query: "",
        });
      } catch (err) {
        console.error(err);
      }
    },
    formatPrice(price) {
      return parseFloat(price).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
    },
  },
};
</script>

<style scoped>
.bg-colorSecond {
  background-color: #f3f4f6;
}
.bg-main {
  background-color: #1c3faa;
}
.text-main {
  color: #1c3faa;
}
</style>
