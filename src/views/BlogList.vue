<template>
  <div class="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="post in posts"
      :key="post.id"
      class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img :src="post.cover_image || fallbackImage" alt="cover" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600 text-sm mb-4">{{ post.description }}</p>
        <router-link
          :to="`/blog/${post.id}`"
          class="text-blue-600 hover:underline font-medium"
        >
          See more →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const fallbackImage = 'https://via.placeholder.com/640x360?text=No+Image'

onMounted(async () => {
  const res = await fetch('https://dev.to/api/articles?per_page=9')
  posts.value = await res.json()
})
</script>
