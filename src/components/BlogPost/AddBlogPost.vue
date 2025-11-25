<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-6xl mx-auto bg-white p-8 shadow rounded">
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Add Blog Post</h1>

      <form @submit.prevent="submitForm" class="space-y-6">
        <div class="grid grid-cols-2 gap-5">
          <!-- Title -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input v-model="form.title" type="text" required
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Type -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Type *</label>
            <select v-model="form.type"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="1">Article</option>
              <option value="2">Tutorial</option>
              <option value="3">News</option>
            </select>
          </div>

          <!-- Category ID -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Category ID *</label>
            <input v-model.number="form.categoryId" type="number" required
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Featured Image -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Featured Image URL</label>
            <input v-model="form.featuredImage" type="url"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Tags -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
            <input v-model="tagsInput" type="text"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
            <input v-model="form.metaTitle" type="text"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <!-- Description  -->
          <div>
            <label class=" text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea v-model="form.description" rows="3"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
            <textarea v-model="form.metaDescription" rows="3"
              class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-4 pt-6">
          <button type="button" @click="resetForm"
            class="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100 text-gray-700">Reset</button>
          <button type="submit" :disabled="isSubmitting"
            class="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
          </button>
        </div>

        <!-- Feedback -->
        <div v-if="message" class="mt-4 p-3 bg-green-50 border border-green-300 rounded text-green-800">
          {{ message }}
        </div>
        <div v-if="error" class="mt-4 p-3 bg-red-50 border border-red-300 rounded text-red-800">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const form = ref({
  title: '',
  type: 1,
  slug:title?.toLowerCase().split(" ").join("-") || "",
  categoryId: 1,
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
  form.value.tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(Boolean)
  // formData.append("slug", value.title?.toLowerCase().split(" ").join("-") || "");
  message.value = ''
  error.value = ''
  isSubmitting.value = true

  try {
    const res = await fetch(`${BASE_URL}/api/blog/addblog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    const data = await res.json()

    if (res.ok) {
      message.value = 'Blog post submitted successfully!'
      resetForm()
    } else {
      error.value = data.message || 'Failed to submit blog post.'
    }
  } catch (err) {
    error.value = err.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.ck-editor__editable {
  min-height: 200px;
  border: 1px solid #d1d5db !important;
  /* Match your input field border */
  border-radius: 0.375rem !important;
  /* rounded */
  padding: 0.5rem 0.75rem !important;
  /* px-3 py-2 */
}

.ck-editor__editable:focus {
  outline: none !important;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5) !important;
  /* focus:ring-2 focus:ring-blue-500 */
  border-color: #3b82f6 !important;
  /* focus:border-blue-500 */
}
</style>