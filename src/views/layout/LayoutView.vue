<template>
  <div class="flex flex-col min-h-screen">
    <NavbarItem />
    <div class="flex-grow">
      <router-view />
    </div>
    <ButtonItem v-if="!['/pendataan-anggota', 'pengajuan-bantuan'].includes($route.path)" />
    <FooterItem />
  </div>
</template>

<script>
import NavbarItem from "@/components/navbar/NavbarItem.vue";
import FooterItem from "@/components/footer/FooterItem.vue";
import ButtonItem from "@/components/button/ButtonItem.vue";
// import { GET_USER } from "@/store/auth.module";

export default {
  name: "LayoutDashboard",
  components: {
    NavbarItem,
    FooterItem,
    ButtonItem
  },
  computed: {
    currentAppType() {
      return this.$store.getters.currentAppType;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  async beforeMount() {
    // await this.getData();
    // this.$store.dispatch(GET_USER)
  },
  methods: {
    async getData() {
      // if (!this.isAuthenticated) {
      // this.isLoading = true;
      // await this.$store.dispatch(GET_JWT);
      // }
      setTimeout(async () => {
        // await this.$store.dispatch(GET_USER);
        // this.isLoading = false;
      }, 100);
      // await this.$store.dispatch(GET_USER);
    },
  },
};
</script>
