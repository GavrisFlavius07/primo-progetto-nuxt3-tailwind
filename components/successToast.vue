<template>
  <div
    v-if="visible"
    class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded shadow-lg transition-opacity duration-500"
  >
    ✅ {{ message }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string
}>()

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 3000) // chiudi dopo 3 secondi
})
</script>
