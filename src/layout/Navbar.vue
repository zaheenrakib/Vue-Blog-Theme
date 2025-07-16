<template>
  <Disclosure as="nav" class="bg-white dark:bg-gray-900 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left: Logo -->
        <div class="flex-shrink-0 flex items-center text-xl font-bold text-blue-600 dark:text-blue-400">
          <router-link to="/">
            <img class="h-44" src="@/assets/logos/main.png" alt="" />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-6">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-sm font-medium">
            {{ item.name }}
          </a>
        </div>

        <!-- Right: Login (Desktop) -->
        <div class="hidden sm:flex sm:items-center">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Login
          </button>
        </div>

        <!-- Mobile Hamburger -->
        <div class="sm:hidden flex items-center">
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Bars3Icon v-if="!open" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <DisclosurePanel class="sm:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">
      <a v-for="item in navigation" :key="item.name" :href="item.href"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-base font-medium">
        {{ item.name }}
      </a>
      <button class="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
        Login
      </button>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '#about' },
  { name: 'Blog', href: '/blog' },
  // { name: 'Contact', href: '#contact' },
]
</script>

<style scoped>
/* Optional: Add custom styles or transitions */
</style>
