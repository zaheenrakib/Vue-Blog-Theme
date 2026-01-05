<template>
  <Navbar />

  <main>
    <div class="">
      <router-view />
    </div>
  </main>
  <Footer />
</template>

<script setup>
  
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>
