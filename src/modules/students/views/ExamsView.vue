<template>
  <div class="flex justify-center mt-20">
    <h1 class="text-3xl text-[#140022] font-bold">
      ¿Qué quiero aprender?
    </h1>
  </div>

  <div class="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">

    <div
      v-for="(materia, index) in materias"
      :key="index"
      class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5 hover:shadow-2xl transition"
    >

      <!-- Título -->
      <div class="flex items-center gap-2">
        <h2 class="text-xl text-[#140022] font-bold">
          {{ materia.nombre }}
        </h2>
      </div>

      <!-- Descripción -->
      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-medium text-gray-800">
          Ruta de aprendizaje
        </h3>
        <p class="text-sm text-gray-500">
          {{ materia.descripcion }}
        </p>
      </div>

      <!-- Botón -->
      <RouterLink :to="{ name: 'exam' }">
        <button
          class="w-full bg-[#140022] text-white py-2 rounded-xl font-semibold hover:bg-[#2a004a] transition"
        >
          Iniciar examen
        </button>
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

/**
 * JSON de materias
 */
const materias = [
  {
    nombre: "Matemáticas",
    descripcion: "Aprende álgebra, geometría y aritmética para resolver problemas del mundo real."
  },
  {
    nombre: "Español",
    descripcion: "Mejora tu comprensión lectora, ortografía y habilidades de escritura."
  },
  {
    nombre: "Ciencias Naturales",
    descripcion: "Explora el cuerpo humano, la energía, el universo y la naturaleza."
  },
  {
    nombre: "Historia",
    descripcion: "Conoce los hechos históricos más importantes de México y el mundo."
  },
  {
    nombre: "Geografía",
    descripcion: "Aprende sobre países, mapas, clima y recursos naturales."
  },
  {
    nombre: "Formación Cívica",
    descripcion: "Desarrolla valores, ciudadanía y convivencia social."
  },
  {
    nombre: "Inglés",
    descripcion: "Aprende vocabulario y gramática básica del idioma inglés."
  },
  {
    nombre: "Tecnología",
    descripcion: "Introducción a herramientas digitales y pensamiento computacional."
  }
]
</script>