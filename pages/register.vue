<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 relative">
    <AuthForm title="Registrazione" buttonText="Registrati" @submit="handleRegister">
      Hai già un account?
      <NuxtLink to="/" class="text-blue-500 hover:underline">Login</NuxtLink>
    </AuthForm>

    <SuccessToast v-if="showToast" message="Registrazione completata!" />
  </div>
</template>

<script setup lang="ts">
import AuthForm from '~/components/AuthForm.vue'
import SuccessToast from '~/components/successToast.vue'

const showToast = ref(false)

const handleRegister = (data: { email: string; password: string }) => {
  console.log('Registrazione per:', data)
  showToast.value = true
}
</script>
