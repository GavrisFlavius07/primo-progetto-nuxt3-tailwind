<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-8">
    <h1 class="text-5xl font-extrabold text-blue-800 mb-4">Benvenuto su Sito</h1>
    <p class="text-lg text-blue-700 text-center mb-8 max-w-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam nulla minus beatae rem iure, officiis suscipit esse? Facilis voluptate expedita vero officiis eos, quae harum ex similique quas cum. Registrati, accedi e inizia subito!
    </p>

    <NuxtLink
      to="/login"
      class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
    >
      Vai al Login
    </NuxtLink>

    <NuxtLink
      to="/about"
      class="mt-6 text-blue-800 hover:underline text-sm"
    >
      Scopri di più su di noi
    </NuxtLink>
  </div>
</template>
