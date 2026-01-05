<template>
  <Disclosure as="nav" v-slot="{ open }" class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-2 group">
            <div class="w-9 h-9 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg">
              <span class="text-white font-bold text-xl">S</span>
            </div>
            <span class="hidden md:block font-black text-xl tracking-tighter text-gray-900 dark:text-white uppercase">
              Safollo<span class="text-blue-600">Path</span>
            </span>
          </router-link>
        </div>

        <div class="hidden lg:flex items-center space-x-1">
          <router-link 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.href"
            class="px-3 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-md transition-colors relative group"
            active-class="text-blue-600 dark:text-white"
          >
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
          </router-link>
        </div>

        <div class="flex items-center space-x-3">
          <button class="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <router-link to="/login" class="hidden sm:block px-5 py-2 text-sm font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:bg-blue-600 dark:hover:bg-blue-100 transition-all shadow-md active:scale-95">
            Sign In
          </router-link>

          <div class="lg:hidden">
            <DisclosureButton class="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              <span class="sr-only">Open menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" />
              <XMarkIcon v-else class="block h-6 w-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <DisclosurePanel class="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div class="px-4 pt-2 pb-6 space-y-1">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="router-link"
            :to="item.href"
            class="block px-4 py-3 text-base font-bold text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl"
          >
            {{ item.name }}
          </DisclosureButton>
          <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <router-link to="/login" class="block w-full text-center py-4 bg-blue-600 text-white font-black rounded-xl shadow-lg">
              Sign In to SafolloPath
            </router-link>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tech', href: '/category/tech' },
  { name: 'News', href: '/category/news' },
  { name: 'Travel', href: '/category/travel' },
  { name: 'Popular', href: '/popular' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
</script>

<style scoped>
/* Scoped styles for the sticky behavior and refined shadows */
nav {
  /* This ensures the backdrop blur is high quality */
  -webkit-backdrop-filter: blur(12px);
}

</style>