<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
    
    <header class="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.50),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.950),transparent)]"></div>
      
      <div class="max-w-7xl mx-auto px-6 text-center">
        <span class="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-900/20 rounded-full">
          Our Story
        </span>
        <h1 class="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 dark:from-white dark:via-indigo-300 dark:to-white">
          About Safollo Path
        </h1>
        <p class="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          More than just a blog—it's a journey through code, cuisine, and the world. 
          Discover the mission driving every word we write.
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 pb-24 space-y-32">
      
      <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
          <h2 class="text-3xl font-bold sticky top-8">Our <span class="text-indigo-600">Mission</span></h2>
        </div>
        <div class="md:col-span-2 space-y-8">
          <p class="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            We believe that the best parts of life happen at the intersection of 
            <span class="font-semibold text-indigo-600">logic and creativity</span>. 
            Safollo Path was born from a desire to bridge the gap between technical excellence and lifestyle exploration.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 transition-colors">
              <div class="text-2xl mb-3">🚀</div>
              <h4 class="font-bold mb-1">Vue.js Mastery</h4>
              <p class="text-sm text-gray-500">Deep dives into modern frontend development and clean code.</p>
            </div>
            <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 transition-colors">
              <div class="text-2xl mb-3">🌍</div>
              <h4 class="font-bold mb-1">Global Travel</h4>
              <p class="text-sm text-gray-500">Stories and guides from the most vibrant corners of the globe.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="relative p-8 md:p-12 rounded-3xl bg-indigo-600 dark:bg-indigo-700 text-white overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div class="relative flex flex-col lg:flex-row items-center gap-12">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div class="relative w-48 h-60 md:w-56 md:h-72 rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-inner flex items-center justify-center">
               <span class="text-gray-400 text-xs font-mono">IMAGE_ZAHEEN</span>
            </div>
          </div>

          <div class="flex-1 text-center lg:text-left">
            <h2 class="text-sm font-bold tracking-widest uppercase opacity-80 mb-2">The Person Behind the Path</h2>
            <h3 class="text-4xl font-extrabold mb-4">Zaheen Rakib</h3>
            <p class="text-lg text-indigo-100 leading-relaxed mb-6">
              Hi, I’m a Software Developer by trade and an explorer by heart. 
              Safollo Path is my digital home where I document my journey through 
              the ever-evolving world of web technology and the timeless joy of traveling.
            </p>
            <div class="flex flex-wrap justify-center lg:justify-start gap-3">
              <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">#VueJS</span>
              <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">#TravelBlogger</span>
              <span class="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">#Foodie</span>
            </div>
          </div>
        </div>
      </section>

      <section class="text-center bg-gray-50 dark:bg-gray-900 py-16 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
        <h2 class="text-3xl font-bold mb-4">Join the Conversation</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Got a project in mind or just want to discuss the latest Vue updates? I'm always open to a chat.
        </p>
        <router-link to="/contact" class="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg">
          Let's Get in Touch
        </router-link>
      </section>

    </main>
  </div>
</template>

<style scoped>
/* Optional: Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}
</style>