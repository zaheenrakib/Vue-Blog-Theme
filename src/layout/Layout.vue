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


import { ref, reactive, watch } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>
