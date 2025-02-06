<template>
    <div v-if="active" class="h-[80dvh] flex justify-center items-center">
    <Loading :active="active" />
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";

export default {
  components:{
    Loading
  },
  name: "Loading Item",
  props:{
    active:{
        type: Boolean,
        default: false,
    }
  }
};
</script>