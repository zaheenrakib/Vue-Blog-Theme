<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Add New Blog Post</h1>
        <p class="text-gray-600">Fill out the form below to create a new blog post</p>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <form @submit.prevent="submitForm">
          
          <!-- Three Column Layout -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Column 1: Basic Info -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Basic Information
              </h3>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input 
                  v-model="form.title" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter blog title"
                  required 
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                <input 
                  v-model="form.slug" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="blog-post-slug"
                  required 
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                <select 
                  v-model.number="form.type" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="1">Article</option>
                  <option value="2">Tutorial</option>
                  <option value="3">News</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Category ID *</label>
                <input 
                  v-model.number="form.categoryId" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  required 
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Author ID</label>
                <input 
                  v-model.number="form.authorId" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
            </div>

            <!-- Column 2: Content -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                Content
              </h3>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea 
                  v-model="form.description" 
                  rows="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="Enter blog description"
                  required
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                <input 
                  v-model="form.featuredImage" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input 
                  v-model="tagsInput" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Published At</label>
                <input 
                  v-model="form.publishedAt" 
                  type="date" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <!-- Column 3: SEO & Settings -->
            <div class="space-y-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                SEO & Settings
              </h3>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                <input 
                  v-model="form.metaTitle" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="SEO title"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                <textarea 
                  v-model="form.metaDescription" 
                  rows="3"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="SEO description"
                ></textarea>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">View Count</label>
                <input 
                  v-model.number="form.viewCount" 
                  type="number" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  placeholder="0"
                />
              </div>

              <div class="space-y-4">
                <div class="flex items-center">
                  <input 
                    v-model="form.isFeatured" 
                    type="checkbox" 
                    id="featured"
                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label for="featured" class="ml-2 text-sm text-gray-700">Featured Post</label>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select 
                    v-model.number="form.status" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Buttons -->
          <div class="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            <button 
              type="button" 
              @click="resetForm"
              class="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit' }}
            </button>
          </div>

          <!-- Messages -->
          <div v-if="message" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p class="text-green-800">{{ message }}</p>
          </div>
          
          <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p class="text-red-800">{{ error }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  title: '',
  slug: '',
  type: 1,
  description: '',
  featuredImage: '',
  metaTitle: '',
  metaDescription: '',
  categoryId: 4,
  tags: [],
  publishedAt: '',
  authorId: '',
  viewCount: 0,
  isFeatured: false,
  status: 1,
})

const tagsInput = ref('')
const message = ref('')
const error = ref('')
const isSubmitting = ref(false)

const resetForm = () => {
  form.value = {
    title: '',
    slug: '',
    type: 1,
    description: '',
    featuredImage: '',
    metaTitle: '',
    metaDescription: '',
    categoryId: 4,
    tags: [],
    publishedAt: '',
    authorId: '',
    viewCount: 0,
    isFeatured: false,
    status: 1,
  }
  tagsInput.value = ''
  message.value = ''
  error.value = ''
}

const submitForm = async () => {
  message.value = ''
  error.value = ''
  isSubmitting.value = true
  
  // Convert tags input to array
  form.value.tags = tagsInput.value.split(',').map(t => t.trim()).filter(Boolean)
  
  try {
    const res = await fetch('https://api.mirazmart.com/api/blog/addblog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    const data = await res.json()
    
    if (res.ok) {
      message.value = 'Blog post added successfully!'
      resetForm()
    } else {
      error.value = data.message || 'Failed to add blog post.'
    }
  } catch (err) {
    error.value = 'Error: ' + err.message
  } finally {
    isSubmitting.value = false
  }
}
</script>