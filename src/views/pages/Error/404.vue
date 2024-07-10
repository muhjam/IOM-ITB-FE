<template>
  <div class="h-[100vh]">
    <div class="w-full h-full pt-[200px] text-center align-middle">
      <h1 class="mb-4 text-4xl font-bold">404</h1>
      <h2 class="text-xl font-normal">Ups... Halaman tidak ditemukan ;(</h2>
    </div>
  </div>
</template>
<script>
import { useMeta } from "vue-meta";
export default {
  setup() {
    useMeta({ title: "Page Not Found" });
  },
  name: "PageNotFound",
  components: {},
};
</script>
