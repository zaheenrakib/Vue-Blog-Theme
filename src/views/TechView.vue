<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="max-w-2xl">
            <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl tracking-tight">
              Tech <span class="text-blue-600">Insights</span>
            </h1>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Exploring the frontiers of Vue.js, Cloud Architecture, and the future of Web Development.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <button v-for="tag in ['All', 'Vue.js', 'Tailwind', 'Node.js']" :key="tag"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
              :class="tag === 'All' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'">
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post.id" 
          class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col">
          
          <div class="relative aspect-video overflow-hidden">
            <img :src="post.image" :alt="post.title" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 rounded-lg shadow-sm">
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.readTime }} min read</span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-3 leading-snug">
              <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">
              {{ post.excerpt }}
            </p>

            <div class="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                  {{ post.author.charAt(0) }}
                </div>
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ post.author }}</span>
              </div>
              <button class="text-gray-400 hover:text-blue-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>

      <div class="mt-16 flex justify-center">
        <nav class="flex items-center space-x-2">
          <button class="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30">1</button>
          <button class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">2</button>
          <button class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">3</button>
          <button class="p-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </nav>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Mastering Vue 3 Composition API: A Deep Dive',
    slug: 'mastering-vue-3-composition-api',
    excerpt: 'Explore the power of Setup function, provide/inject, and how to build truly reusable composables for your large-scale applications.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    category: 'Vue.js',
    date: 'Oct 24, 2025',
    readTime: 12,
    author: 'Zaheen Rakib'
  },
  {
    id: 2,
    title: 'Tailwind CSS v4: What Developers Need to Know',
    slug: 'tailwind-css-v4-updates',
    excerpt: 'From the new zero-config engine to lightning fast builds. We break down the most impactful changes coming to the utility-first CSS world.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop',
    category: 'Design',
    date: 'Oct 20, 2025',
    readTime: 8,
    author: 'Zaheen Rakib'
  },
  {
    id: 3,
    title: 'Serverless Functions vs Containerized Apps',
    slug: 'serverless-vs-containers',
    excerpt: 'Deciding between AWS Lambda and Dockerized services? Learn the cost-to-performance ratio and when to pick one over the other.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Cloud',
    date: 'Oct 15, 2025',
    readTime: 15,
    author: 'Alex Dev'
  }
])
</script>

<style scoped>
/* Custom line clamp for the excerpt */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>