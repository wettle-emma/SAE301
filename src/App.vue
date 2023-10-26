<script setup>
import { useRouter } from 'vue-router'
const router = useRouter() 


import { RouterView, RouterLink } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

import Homepage from './pages/Homepage.vue';

</script>

<template>
  <HeaderPage />
  <RouterView />
  <FooterPage />
</template>