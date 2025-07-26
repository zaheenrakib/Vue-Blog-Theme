<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name -->
        <div>
          <label for="name" class="block text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="block text-gray-700 mb-1">Phone</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            name="phone"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-gray-700 mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            name="password"
            required
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const form = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
});

const handleSubmit = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/user/register`, {
      method: 'POST',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });

    const data = await res.json();
    console.log("✅ Response:", data);

    if (!res.ok) {
      alert(data.message || "Registration failed");
    } else {
      alert("Registration successful!");
      // reset form
      form.value = {
        name: "",
        email: "",
        phone: "",
        password: "",
      };
    }
  } catch (error) {
    console.error("❌ Error:", error);
    alert("Something went wrong");
  }
};
</script>

<style scoped>
/* Custom focus states */
.focus\:ring-blue-500:focus {
  --tw-ring-color: rgb(59 130 246 / 0.5);
}

/* Smooth transitions */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
