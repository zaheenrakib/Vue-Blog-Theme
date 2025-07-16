<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

      <!-- Brand & About -->
      <div>
        <h2 class="text-2xl font-bold mb-4">SafolloPath</h2>
        <p class="text-sm text-gray-400">
          Stay inspired with the latest tech insights, tutorials, and startup stories.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="/" class="hover:text-white">Home</a></li>
          <li><a href="/about" class="hover:text-white">About</a></li>
          <li><a href="/contact" class="hover:text-white">Contact</a></li>
          <li><a href="/blog" class="hover:text-white">Blog</a></li>
        </ul>
      </div>

      <!-- Newsletter Signup -->
      <div class="md:col-span-2">
        <h3 class="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
        <form class="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            class="px-4 py-2 rounded text-black w-full"
            required
          />
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
      <p>&copy; {{ currentYear }} SafolloPath. All rights reserved.</p>
      <div class="mt-2 flex justify-center gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="text-gray-400 hover:text-white"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Dynamic year
const currentYear = new Date().getFullYear()

// Social media config
const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
  { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin-in' }
]
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
</style>
