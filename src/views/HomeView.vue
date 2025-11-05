<script setup>
import BlogList from '@/views/BlogList.vue';
import HeroBanner from '@/components/HeroSection/HeroBanner.vue';
import NewsLetter from '@/components/NewsLetter/NewsLetter.vue';
import AboutView from './AboutView.vue';
</script>

<template>
  <main>
    <HeroBanner />
    <BlogList />
    <AboutView />
  </main>
</template>
