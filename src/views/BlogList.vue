<template>
  <div class="max-w-7xl mx-auto p-4 flex items-center flex-col">
    <!-- 🔍 Search & Filters -->
    <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <input v-model="searchQuery" placeholder="Search blog posts..." class="p-2 border rounded w-full" />
      <select v-model="selectedTag" class="p-2 border rounded w-full">
        <option value="">All Categories</option>
        <option v-for="tag in uniqueTags" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </select>
    </div>

    <!-- 📰 Blog Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div v-for="post in filteredPosts.slice(0, visibleCount)" :key="post.id"
        class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        <img :src="post.featuredImage || fallbackImage" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 text-sm mb-2 line-clamp-3">{{ post.description }}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="tag in post.tags" :key="tag" class="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
              {{ tag }}
            </span>
          </div>
          <router-link :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline">
            See more →
          </router-link>
        </div>
      </div>
    </div>

    <!-- 🔄 Load More Button -->
    <div class="text-center mt-8">
      <button @click="loadMore" v-if="visibleCount < filteredPosts.length"
        class="px-4 py-2 text-white rounded bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all duration-300 ease-in-out">
        Load More
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const posts = ref([])
const visibleCount = ref(6)
const searchQuery = ref('')
const selectedTag = ref('')
const fallbackImage = 'http://localhost:5000/api/blog/getblog'

onMounted(async () => {
  try {
    const res = await fetch('https://api.mirazmart.com/api/blog/getblog')
    const json = await res.json()
    console.log('✅ API response:', json)

    const blogList = Array.isArray(json) ? json : []
    console.log('📦 Blog List:', blogList)

    posts.value = blogList.map((post) => {
      // Parse tags if it's a JSON string
      if (typeof post.tags === 'string') {
        try {
          post.tags = JSON.parse(post.tags)
        } catch (e) {
          post.tags = []
        }
      }

      // Ensure tags is always an array
      post.tags = Array.isArray(post.tags) ? post.tags : []

      // Fallback for tag_list for compatibility
      post.tag_list = post.tags

      return post
    })
    // Debug: log posts and tags
    console.log('📦 Posts after mapping:', posts.value)
    posts.value.forEach((post, idx) => {
      console.log(`Post #${idx + 1} title:`, post.title, '| tags:', post.tags)
    })
  } catch (err) {
    console.error('Error fetching blog posts:', err)
  }
})

const uniqueTags = computed(() => {
  const tags = new Set()
  posts.value.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesTag = selectedTag.value === '' || post.tags.includes(selectedTag.value)
    return matchesSearch && matchesTag
    
  })
 
})

watch(filteredPosts, (newVal) => {
  console.log('🔍 Filtered posts:', newVal.length, 'posts found')
})

function loadMore() {
  visibleCount.value += 6
}
</script>

<style scoped>
input,
select {
  outline: none;
}
</style>
