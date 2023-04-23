<template>
    <NavBar></NavBar>
  <div>
    <GeneralC></GeneralC>
  </div>
    <FooterC></FooterC>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import GeneralC from '@/components/GeneralC.vue';
  import FooterC from '@/components/FooterC.vue'
  
  export default {
    components: {
      NavBar,
      GeneralC,
      FooterC
  },
  }
  </script>
  
  <style scoped>
  </style>