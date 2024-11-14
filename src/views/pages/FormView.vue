<template>
     <Container>
      <FormRegister v-if="pathPage == '/form1'" />
      <FormHelp v-else-if="pathPage == '/form2'" />
      <DonationView v-else-if="pathPage == '/form3'" />
    </Container>
  </template>
  
  <script>
  import FormRegister from "@/components/form/FormRegister.vue";
  import FormHelp from "@/components/form/FormHelp.vue";
  import Container from "@/components/ContainerItem.vue";
  import DonationView from "@/views/pages/DonationTest.vue";
  
  export default {
    components: {
        FormRegister,
        FormHelp,
        Container,
        DonationView
    },
    setup() {
      return {};
    },
    data() {
      return {
      };
    },
    computed: {
    pathPage() {
      return this.$route.path;
    }
  },
    methods: {}
  };
  </script>
  
  <style scoped>
  .blue {
    border-color: #003A6E;
  }
  </style>
  