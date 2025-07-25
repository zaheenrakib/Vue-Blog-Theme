<template>
  <div v-if="post" class="max-w-3xl mx-auto p-6">
    <img
      :src="post.featuredImage"
      alt="cover"
      class="w-full h-64 object-cover rounded mb-6"
    />
    <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
    <p class="text-gray-500 text-sm mb-4">By {{ post.user?.name }}</p>
    <div class="prose prose-lg max-w-none" v-html="post?.description"></div>
    <div>{{ post.metaDescription }}</div>
    <router-link to="/" class="inline-block mt-8 text-blue-600 hover:underline">← Back to blog</router-link>
  </div>
  <div v-else class="text-center py-12 text-gray-500">Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const route = useRoute()
const post = ref(null)

onMounted(async () => {
  const res = await fetch(`${BASE_URL}/blog/getslug/${route.params.id}`)
  post.value = await res.json();
  console.log(post.value)
})

</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/@tailwindcss/typography/dist/typography.min.css';
</style>
