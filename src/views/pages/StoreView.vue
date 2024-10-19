<template>
  <div class="bg-colorSecond pt-[100px] pb-[32px] px-[18px] md:px-[70px] flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(merchandise, idx) in merchandises?.data"
        :key="merchandise.id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
      >
        <div class="w-full h-[300px] overflow-hidden">
          <img
            v-if="merchandise.image"
            :src="merchandise.image"
            :alt="merchandise.name"
            class="rounded-t-lg object-cover"
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
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ merchandise.name }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ merchandise.description }}
          </p>
          <p class="mb-3 font-bold text-main">
            {{ formatPrice(merchandise.price) }}
          </p>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Stok: {{ merchandise.stock }}
          </p>
          <div v-if="merchandise.stock > 0">
            <a
              :href="`store/${merchandise.id}`"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Beli Sekarang
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
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";
import { GET_MERCHANDISES } from "@/store/merchandise.module";

export default {
  components: {
    HeaderItem,
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    merchandises() {
      return this.$store.getters.merchandises;
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
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
