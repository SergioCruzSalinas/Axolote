<template>
  <div class="max-w-9xl mx-auto px-6 py-10 flex flex-col gap-6 mt-20">

    <div class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5">

      <div class="flex items-center gap-2">
        <h2 class="text-xl text-[#140022] font-bold">Tema:</h2>
        <p class="text-lg text-gray-800">Nombre del tema</p>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-medium text-gray-800">Subtema</h3>
        <p class="text-sm text-gray-500 uppercase">Nombre del subtema</p>
      </div>

      <div class="bg-gray-100 rounded-xl p-4 text-center text-gray-600">
        Preguntas del examen
      </div>

      <RouterLink :to="{name:'activity'}">
        <button class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition">
           Siguiente lección
        </button>
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>