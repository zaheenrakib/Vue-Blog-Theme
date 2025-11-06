<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 md:p-12 space-y-8">

      <section class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          About Safollo Path
        </h1>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Welcome! Here's a little about our mission and the person behind the posts.
        </p>
      </section>

      <hr class="border-gray-200 dark:border-gray-700" />

      <section>
        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Our Mission
        </h2>
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our goal is to provide the most insightful, practical, and engaging content about 
          <strong>Vue.js Development, Modern Gastronomy, Global Travel</strong>.
          We believe in the power of sharing knowledge and stories to inspire, educate, 
          and foster a vibrant community.
        </p>
        <p class="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether you're a beginner just starting out or a seasoned expert, 
          you'll find valuable articles, tutorials, and perspectives here.
        </p>
      </section>

      <section>
        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
          Meet the Author
        </h2>
        
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div class="flex-shrink-0 w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <span class="text-gray-500 dark:text-gray-400 text-sm">Image</span>
          </div>
          
          <div class="text-center sm:text-left">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Zaheen Rakib
            </h3>
            <p class="text-md text-indigo-500 dark:text-indigo-400 font-medium">
              Creator & Lead Writer
            </p>
            <p class="mt-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm Zaheen Rakib, a <strong>Software Developer</strong> with a deep passion for 
              <strong>Software Developer</strong>. I started this blog to share my journey and connect 
              with others who love [Your Topic] as much as I do. When I'm not writing, you can 
              find me whatsapps.
            </p>
          </div>
        </div>
      </section>

      <section class="text-center pt-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Join the Conversation
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Got questions or just want to say hi? Feel free to reach out.
        </p>
        <router-link to="/contact" class="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition duration-300">
          Get in Touch
        </router-link>
      </section>

    </div>
  </div>
</template>

<style>

</style>