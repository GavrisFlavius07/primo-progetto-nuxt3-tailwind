<template>
  <p class="text-lg text-gray-700 italic">{{ msg }}</p>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
