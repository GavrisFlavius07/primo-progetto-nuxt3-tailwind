<template>
  <div>
    <h1>Home Page</h1>
    <HelloWorld msg="Ciao dalla pagina Index!" />
    <HelloWorld :msg="message"/>
    <NuxtLink to="/about">Vai a About</NuxtLink>
  </div>

  

  <div class="min-h-screen bg-slate-100 text-center p-10">
  <h1 class="text-4xl font-bold text-blue-600">tailwind funziona?</h1>
  </div>

</template>


<script setup lang="ts">

import { ref, onMounted } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'

const message = ref('caricamento...')

onMounted(async () => {
    const res = await fetch('/api/hello')
    const data = await res.json();
    message.value = data.message
})

</script>
