<template>
 <nav class="fixed top-0 left-0 right-0 bg-[#003b6f] text-[#ffffff99] py-2 z-50">
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <a href="#" class="text-sm hover:text-white">EN</a>
      <a href="#" class="text-sm hover:text-white">ID</a>
    </div>
    <div class="flex items-center space-x-4">
      <a href="#" class="text-sm hover:text-white">My ITB</a>
      <a href="#" class="text-sm hover:text-white"><i class="fa fa-envelope"></i> Email</a>
      <a href="#" class="text-sm hover:text-white"><i class="fa fa-search"></i> Search</a>
    </div>
  </div>
</nav>

<nav class="fixed top-[36px] left-0 right-0 bg-white shadow-lg px-4 py-3 z-50">
  <div class="container mx-auto flex items-center justify-between">
    <a class="text-[#003b6f] font-bold flex items-center" href="/">
      <img :src="require('@/assets/image/logo.png')" alt="IOM ITB Logo" class="w-16 h-auto mr-3">
      <div>
        <p class="text-lg font-bold leading-tight">Ikatan Orang Tua Mahasiswa</p>
        <p class="text-sm leading-tight">Institut Teknologi Bandung</p>
      </div>
    </a>
    <button class="text-[#003b6f] lg:hidden" id="navbarToggle" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
      <ul class="flex flex-col lg:flex-row lg:space-x-4 uppercase">
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">Tenrang Kami</a>
        </li>
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">Kegiatan</a>
        </li>
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="/register">Pendaftaran</a>
        </li>
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">Donasi</a>
        </li>
        <!-- <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">LAPORAN</a>
        </li>
        <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">ARSIP</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="text-[#003b6f] hover:opacity-80 px-3 py-2" aria-current="page" href="#">LOGIN</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { PURGE_AUTH } from "@/store/auth.module";
import config from "@/ConfigProvider";
import { mapGetters } from "vuex";

export default {
  name: "HeaderDashboard",
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
    };
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
    menuItems() {
      return [
        { text: "Lihat Profile", href: `${this.feURL}/employee/profile` },
        { text: "Ubah Password", href: `${this.feURL}/employee/setting` },
        { text: "Pilih Desain CV", href: `${this.feURL}/employee/cv` },
        { text: "Lamaran Saya", href: `${this.feURL}/employee/application` },
        { text: "Clubs", href: "/clubs" },
        { text: "Track", href: "/track-career-all" },
        { text: "Keluar", href: `${this.feURL}/logout`, onClick: this.logout },
      ];
    },
    feURL() {
      return config.value("GETHIRED_WEB_URL");
    },
    currentUser() {
      const user = this.$store.getters.currentUser;
      return user;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    currentLocationUrl() {
      return window.location;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      console.log(this.isDropdownOpen);
    },
    handleClickOutside(event) {
      if (
        this.$refs.dropdown &&
        !this.$refs.dropdown.contains(event.target) &&
        this.$refs.dropdownMobile &&
        !this.$refs.dropdownMobile.contains(event.target)
      ) {
        this.isDropdownOpen = false;
      }
    },
    logout() {
      this.$store.dispatch(PURGE_AUTH);
      window.location.href = this.feURL;
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>
