<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative">
    <AuthForm title="Login" buttonText="Entra" @submit="handleLogin">
      Non hai un account?
      <NuxtLink to="/register" class="text-blue-500 hover:underline">Registrati</NuxtLink>
      <NuxtLink to="/about" class="text-blue-500 hover:underline"> ABOUT</NuxtLink>
    </AuthForm>

    <SuccessToast v-if="showToast" message="Login effettuato!" />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '~/components/AuthForm.vue'
import SuccessToast from '~/components/successToast.vue'

const showToast = ref(false)

const handleLogin = (data: { email: string; password: string }) => {
  console.log('Login con:', data)
  showToast.value = true
}
</script>
