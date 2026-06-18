<template>

  <div class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 mt-20">

    <!-- CONTENIDO PRINCIPAL -->
    <div class="md:col-span-2">
      <div class="flex flex-col bg-white shadow-xl rounded-2xl p-6 gap-6">

        <div class="flex items-center justify-between">
          <h2 class="text-[#140022] font-bold text-xl">Materia:</h2>
          <p class="text-lg font-semibold text-gray-700">
            {{ course.materia }}
          </p>
        </div>

        <div class="flex flex-col gap-1">
          <h3 class="text-sm text-gray-500 uppercase tracking-wide">Tema</h3>
          <p class="text-lg font-medium text-gray-800">
            {{ course.tema }}
          </p>
        </div>
 
        <div class="flex flex-col gap-2">
          <h3 class="text-sm text-gray-500 uppercase tracking-wide">Progreso</h3>
          <ProgressBar :value="course.progreso" />
        </div>

        <RouterLink :to="{ name:'activity' }">
          <button class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition">
            Continuar con el curso
          </button>
        </RouterLink>

      </div>
    </div>

    <!-- TEMARIO -->
    <div class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 h-fit">

      <h3 class="text-lg font-bold text-[#140022]">
        Temario
      </h3>

      <div class="flex flex-col gap-4">

        <div 
          v-for="(subtema, i) in course.subtemas" 
          :key="i"
          class="flex flex-col gap-2 border-b pb-3 last:border-none"
        >
          <p class="font-semibold text-gray-800">
            {{ subtema.nombre }}
          </p>

          <div class="flex flex-col gap-1 pl-3">
            <RouterLink 
              v-for="(leccion, k) in subtema.lecciones"
              :key="k"
              :to="{ name:'activity' }"
              class="text-sm text-gray-600 hover:text-[#7c3aed] cursor-pointer transition"
            >
              • {{ leccion }}
            </RouterLink>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProgressBar from '../components/ProgressBar.vue';

const course = {
  materia: "Matemáticas",
  tema: "Álgebra",
  progreso: 35,
  subtemas: [
    {
      nombre: "Introducción al Álgebra",
      lecciones: [
        "¿Qué es el álgebra?",
        "Variables y constantes",
        "Expresiones algebraicas"
      ]
    },
    {
      nombre: "Operaciones Algebraicas",
      lecciones: [
        "Suma de expresiones",
        "Resta de expresiones",
        "Multiplicación de monomios"
      ]
    },
    {
      nombre: "Productos Notables",
      lecciones: [
        "Cuadrado de un binomio",
        "Binomios conjugados",
        "Cubo de un binomio"
      ]
    },
    {
      nombre: "Factorización",
      lecciones: [
        "Factor común",
        "Diferencia de cuadrados",
        "Trinomios"
      ]
    }
  ]
};
</script>