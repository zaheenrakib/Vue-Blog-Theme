<template>
  <!-- <Navbar /> -->
   <!-- <Navigation /> -->
    <NavigationDemo />
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
import Navigation from "./Navigation.vue";
import  NavigationDemo from "./NavigationMenuDemo.vue";
</script>
