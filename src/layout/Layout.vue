<template>
  <Navbar />
  <main>
    <div class="pt-17">
      <router-view />
    </div>
  </main>
</template>

<script setup>


import { ref, reactive, watch } from 'vue';
import Navbar from './navBar.vue'
</script>
