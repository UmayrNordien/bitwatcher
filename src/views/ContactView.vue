<template>
    <NavBar></NavBar>
    <div>
    <ContactC></ContactC>
    </div>
    <FooterC></FooterC>
</template>
  
<script>
import NavBar from '@/components/NavBar.vue';
import ContactC from '@/components/ContactC.vue';
import FooterC from '@/components/FooterC.vue'

export default {
    components: {
        NavBar,
        ContactC,
        FooterC

    },
}
</script>
  
<style scoped>
</style>