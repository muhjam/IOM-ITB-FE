<template>
     <Container>
      <FormRegister v-if="pathPage == '/form1'" />
      <FormHelp v-else-if="pathPage == '/form2'" />
    </Container>
  </template>
  
  <script>
  import FormRegister from "@/components/form/FormRegister.vue";
  import FormHelp from "@/components/form/FormHelp.vue";
  import Container from "@/components/ContainerItem.vue";
  
  export default {
    components: {
        FormRegister,
        FormHelp,
        Container
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
  