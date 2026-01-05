<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b pb-6">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900">Create New Post</h1>
          <p class="mt-1 text-sm text-gray-500">Draft your story and optimize it for search engines.</p>
        </div>
        <div class="mt-4 md:mt-0 flex gap-3">
          <button @click="resetForm" type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            Discard
          </button>
          <button @click="submitForm" :disabled="isSubmitting" class="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 disabled:opacity-50 flex items-center">
            <span v-if="isSubmitting" class="mr-2 animate-spin">🌀</span>
            {{ isSubmitting ? 'Publishing...' : 'Publish Post' }}
          </button>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Post Title *</label>
                <input v-model="form.title" type="text" placeholder="Enter a catchy title..." required
                  class="w-full border-gray-300 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg font-medium" />
                <p class="mt-1.5 text-xs text-gray-400">Permalinks: <span class="text-blue-500">yoursite.com/blog/{{ generatedSlug }}</span></p>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Content</label>
                <textarea v-model="form.description" rows="12" placeholder="Write your story here..."
                  class="w-full border-gray-300 border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"></textarea>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span class="mr-2">🔍</span> Search Engine Optimization (SEO)
            </h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input v-model="form.metaTitle" type="text" placeholder="How it appears in Google"
                  class="w-full border-gray-300 border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea v-model="form.metaDescription" rows="3" placeholder="Brief summary for search results..."
                  class="w-full border-gray-300 border px-3 py-2 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Publishing Settings</h3>
            
            <div class="space-y-5">
              <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Post Type</label>
                <select v-model="form.type" class="w-full border-gray-300 border px-3 py-2 rounded-md bg-gray-50 focus:bg-white">
                  <option :value="1">Article</option>
                  <option :value="2">Tutorial</option>
                  <option :value="3">News</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                <select v-model="form.categoryId" class="w-full border-gray-300 border px-3 py-2 rounded-md bg-gray-50">
                  <option :value="1">Technology</option>
                  <option :value="2">Lifestyle</option>
                  <option :value="3">Business</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Featured Image URL</label>
                <input v-model="form.featuredImage" type="url" placeholder="https://..."
                  class="w-full border-gray-300 border px-3 py-2 rounded-md text-sm" />
                <div v-if="form.featuredImage" class="mt-2 h-32 w-full rounded border bg-gray-100 overflow-hidden">
                  <img :src="form.featuredImage" class="w-full h-full object-cover" @error="handleImageError" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Tags</label>
                <input v-model="tagsInput" type="text" placeholder="dev, tech, vue..."
                  class="w-full border-gray-300 border px-3 py-2 rounded-md text-sm" />
                <p class="mt-1 text-xs text-gray-400 italic">Separate with commas</p>
              </div>
            </div>
          </div>

          <transition name="fade">
            <div v-if="message" class="p-4 bg-green-50 border-l-4 border-green-400 text-green-700 rounded shadow-sm">
               <p class="text-sm font-medium">{{ message }}</p>
            </div>
          </transition>
          <transition name="fade">
            <div v-if="error" class="p-4 bg-red-50 border-l-4 border-red-400 text-red-700 rounded shadow-sm">
               <p class="text-sm font-medium">{{ error }}</p>
            </div>
          </transition>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const form = ref({
  title: '',
  type: 1,
  categoryId: 1,
  authorId:1,
  featuredImage: '',
  tags: [],
  description: '',
  metaTitle: '',
  metaDescription: '',
})

const tagsInput = ref('')
const message = ref('')
const error = ref('')
const isSubmitting = ref(false)

// Computed slug for better UX
const generatedSlug = computed(() => {
  return form.value.title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
})

const resetForm = () => {
  form.value = {
    title: '',
    type: 1,
    categoryId: 1,
    featuredImage: '',
    tags: [],
    description: '',
    metaTitle: '',
    metaDescription: '',
  }
  tagsInput.value = ''
  message.value = ''
  error.value = ''
}

const submitForm = async () => {
  // Clean up tags
  form.value.tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(Boolean)
  
  // Add slug to the payload
  const payload = {
    ...form.value,
    slug: generatedSlug.value
  }

  message.value = ''
  error.value = ''
  isSubmitting.value = true

  try {
    const res = await fetch(`${BASE_URL}/api/blog/addblog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (res.ok) {
      message.value = '🎉 Blog post published successfully!'
      setTimeout(() => resetForm(), 2000)
    } else {
      error.value = data.message || 'Failed to submit blog post.'
    }
  } catch (err) {
    error.value = 'Connection error: ' + err.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>