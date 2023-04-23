<template>
  <NavBar></NavBar>
<div>
<BusinessC></BusinessC>
</div>
  <FooterC></FooterC>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BusinessC from '@/components/BusinessC.vue';
import FooterC from '@/components/FooterC.vue'

export default {
  components: {
    NavBar,
    BusinessC,
    FooterC
},
}
</script>

<style scoped>
</style>