<template>

  <div class="flex flex-col bg-white max-w-md shadow-xl rounded-2xl p-6 gap-6">

    <div class="flex items-center justify-between">
      <h2 class="text-[#140022] font-bold text-xl">Materia:</h2>
      <p class="text-lg font-semibold text-gray-700">Asignatura de la materia</p>
    </div>

    <div class="flex flex-col gap-1">
      <h3 class="text-sm text-gray-500 uppercase tracking-wide">Tema</h3>
      <p class="text-lg font-medium text-gray-800">Nombre del tema</p>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-sm text-gray-500 uppercase tracking-wide">Progreso</h3>

      <ProgressBar/>
      
    </div>

    <RouterLink :to="{name:'activity'}">
      <button class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition">
        Continuar
      </button>
    </RouterLink>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProgressBar from './ProgressBar.vue';
</script>