<!-- pages/dashboard.vue -->
<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Ciao, {{ user.name }} 👋</h1>

    <div class="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto space-y-4">
      <div>
        <h2 class="text-xl font-semibold text-gray-700">📧 Email</h2>
        <p class="text-gray-600">{{ user.email }}</p>
      </div>

      <div>
        <h2 class="text-xl font-semibold text-gray-700">📅 Registrato il</h2>
        <p class="text-gray-600">{{ user.registeredAt }}</p>
      </div>

      <button
        @click="logout"
        class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = {
  name: '',
  email: '',
  registeredAt: '',
}

const logout = () => {
  alert('Logout eseguito')
  navigateTo('/') // torna alla home o login
}
</script>
