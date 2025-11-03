<template>
  <section class="bg-gray-100 py-12 px-6 md:px-12 rounded-2xl text-center shadow-sm">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h2>
      <p class="text-gray-600 mb-6">
        Get the latest blog updates, tutorials, and insights directly in your inbox.
      </p>

      <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="flex-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Subscribe
        </button>
      </form>

      <p v-if="message" class="text-green-600 mt-4">{{ message }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        // Simulate successful subscription
        this.message = "Thank you for subscribing!";
        this.email = "";
      }
    },
  },
};
</script>
