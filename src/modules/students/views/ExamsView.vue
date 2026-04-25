<template>
  <div class="flex justify-center mt-20">
    <h1 class="text-3xl text-[#140022] font-bold">Mis exámenes</h1>
  </div>
  <div class="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">

    <div 
      v-for="i in 8" 
      :key="i"
      class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 hover:shadow-2xl transition"
    >

      <div class="flex items-center gap-2">
        <h2 class="text-xl text-[#140022] font-bold">
          Examen general
        </h2>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-medium text-gray-800">
          Ruta de aprendizaje
        </h3>
        <p class="text-sm text-gray-500 uppercase">
          Examen para conocer tu nivel académico
        </p>
      </div>

      <RouterLink :to="{ name: 'exam' }">
        <button class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition">
          Iniciar examen
        </button>
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>