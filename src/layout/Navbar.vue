<template>
  <Disclosure as="nav" class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-3 items-center h-16 gap-4">
        
        <!-- Left Column: Logo -->
        <div class="flex justify-start">
          <div class="flex-shrink-0 flex items-center group">
            <router-link to="/" class="transform hover:scale-105 transition-transform duration-200">
              <img class=" transition-all duration-300 group-hover:brightness-110" 
                   src="@/assets/logos/main.png" 
                   alt="Logo" />
            </router-link>
          </div>
        </div>

        <!-- Center Column: Desktop Menu -->
        <div class="hidden sm:flex justify-center">
          <div class="flex items-center space-x-1 bg-gray-50 dark:bg-gray-800/50 rounded-full px-2 py-1 backdrop-blur-sm">
            <a v-for="item in navigation" 
               :key="item.name" 
               :href="item.href"
               class="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 group">
              {{ item.name }}
              <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
            </a>
          </div>
        </div>

        <!-- Right Column: Login Button -->
        <div class="hidden sm:flex justify-end">
          <button class="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative z-10 flex items-center space-x-2">
              <svg class="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <router-link to="/login">
                <span>Login</span>
              </router-link>
            </span>
            <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <!-- Mobile Hamburger -->
        <div class="sm:hidden flex justify-end">
          <DisclosureButton
            class="group inline-flex items-center justify-center p-2.5 rounded-xl text-gray-500 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-110">
            <Bars3Icon v-if="!open" class="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
            <XMarkIcon v-else class="h-6 w-6 transition-transform duration-300 group-hover:rotate-180" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Enhanced Mobile Menu -->
    <DisclosurePanel class="sm:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
      <div class="px-4 pt-4 pb-6 space-y-3">
        <!-- Mobile Navigation Links -->
        <div class="space-y-2">
          <a v-for="(item, index) in navigation" 
             :key="item.name" 
             :href="item.href"
             :style="`animation-delay: ${index * 100}ms`"
             class="group block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 rounded-xl transition-all duration-300 transform hover:translate-x-2 animate-slideIn">
            <div class="flex items-center space-x-3">
              <div class="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <span>{{ item.name }}</span>
            </div>
          </a>
        </div>
        
        <!-- Mobile Login Button -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button class="group w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative z-10 flex items-center justify-center space-x-2">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"></path>
              </svg>
              <span>Login to Your Account</span>
            </span>
            <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Add Blog', href: "/add-blog" }
]
</script>

<style scoped>
/* Smooth animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out forwards;
  opacity: 0;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

/* Enhanced focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Smooth backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>