<template>
    <div class="pt-[100px] pb-[32px] px-[18px] md:px-[70px]">
     <FormRegister/>
    </div>
  </template>
  
  <script>
  import FormRegister from "@/components/form/FormRegister.vue";
  
  export default {
    components: {
        FormRegister,
    },
    setup() {
      return {};
    },
    data() {
      return {
      };
    },
    computed: {},
    methods: {}
  };
  </script>
  
  <style scoped>
  .blue {
    border-color: #003A6E;
  }
  </style>
  