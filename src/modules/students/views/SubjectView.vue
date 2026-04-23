<template>

  <div class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 mt-20">

    <div class="md:col-span-2">
      <div class="flex flex-col bg-white shadow-xl rounded-2xl p-6 gap-6">

        <div class="flex items-center justify-between">
          <h2 class="text-[#140022] font-bold text-xl">Materia:</h2>
          <p class="text-lg font-semibold text-gray-700">
            Asignatura de la materia
          </p>
        </div>

        <div class="flex flex-col gap-1">
          <h3 class="text-sm text-gray-500 uppercase tracking-wide">Tema</h3>
          <p class="text-lg font-medium text-gray-800">
            Nombre del tema
          </p>
        </div>
 
        <div class="flex flex-col gap-2">
          <h3 class="text-sm text-gray-500 uppercase tracking-wide">Progreso</h3>
          <ProgressBar />
        </div>

        <RouterLink :to="{ name:'activity' }">
          <button class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition">
            Continuar con el curso
          </button>
        </RouterLink>

      </div>
    </div>

    <div class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 h-fit">

      <h3 class="text-lg font-bold text-[#140022]">
        Temario
      </h3>

      <div class="flex flex-col gap-4">

        <div 
          v-for="i in 4" 
          :key="i"
          class="flex flex-col gap-2 border-b pb-3 last:border-none">
          <p class="font-semibold text-gray-800">
            Subtema {{ i }}
          </p>

          <div class="flex flex-col gap-1 pl-3">
            <p 
              v-for="k in 3" 
              :key="k"
              class="text-sm text-gray-600 hover:text-[#7c3aed] cursor-pointer transition"
            >
            <RouterLink :to="{name:'activity'}">
                • Lección {{ k }}
            </RouterLink>
              
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProgressBar from '../components/ProgressBar.vue';
</script>