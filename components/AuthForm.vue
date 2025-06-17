<template>
  <form @submit.prevent="onSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">{{ title }}</h2>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input v-model="email" type="email" required placeholder="Email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="password" type="password" required placeholder="Password"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
    </div>

    <button type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
      {{ buttonText }}
    </button>

    <p class="text-center mt-4 text-sm text-gray-600">
      <slot />
    </p>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  buttonText: string
}>()

const emit = defineEmits<{
  (e: 'submit', data: { email: string; password: string }): void
}>()

const email = ref('')
const password = ref('')

const onSubmit = () => {
  emit('submit', { email: email.value, password: password.value })
}
</script>
