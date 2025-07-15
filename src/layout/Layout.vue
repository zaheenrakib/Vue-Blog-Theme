<template>
  <Navbar />
  <main>
    <div class="">
      <router-view />
    </div>
  </main>
</template>

<script setup>


import { ref, reactive, watch } from 'vue';
import Navbar from './Navbar.vue'
</script>
