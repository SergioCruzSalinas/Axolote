<template>
  <div class="max-w-5xl mx-auto p-6 space-y-6 mt-20">

    <div class="bg-white rounded-2xl shadow p-6 space-y-4">
      <h1 class="text-2xl font-bold text-[#140022]">Diagnóstico general</h1>

      <div class="grid md:grid-cols-3 gap-4">
        <div>
          <h2 class="font-semibold text-gray-600">Nivel general</h2>
          <p class="text-lg font-bold">Básico</p>
          <ProgressBar :value="40" />
        </div>

        <div>
          <h2 class="font-semibold text-gray-600">Tipo de estudiante</h2>
          <p class="text-lg font-bold">Visual</p>
        </div>

        <div>
          <h2 class="font-semibold text-gray-600">Descripción</h2>
          <p class="text-sm text-gray-700">
            Buen desempeño en lectura, pero presenta dificultades en resolución de problemas matemáticos.
          </p>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-gray-600 mb-2">Nivel por materia</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="border rounded-xl p-4">
            <h3 class="font-bold">Matemáticas</h3>
            <p>Nivel: Medio</p>
          </div>

          <div class="border rounded-xl p-4">
            <h3 class="font-bold">Español</h3>
            <p>Nivel: Alto</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 class="text-xl font-bold text-[#140022]">Análisis global</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="border rounded-xl p-4">
          <h3 class="font-semibold">Tendencia</h3>
          <p class="text-sm text-gray-700">Ha mejorado en las últimas semanas</p>
        </div>

        <div class="border rounded-xl p-4">
          <h3 class="font-semibold">Tiempo de estudio</h3>
          <p class="text-sm text-gray-700">6 horas por semana</p>
        </div>

        <div class="border rounded-xl p-4">
          <h3 class="font-semibold">Mejor materia</h3>
          <p class="text-sm text-gray-700">Español</p>
        </div>

        <div class="border rounded-xl p-4">
          <h3 class="font-semibold">Área de mejora</h3>
          <p class="text-sm text-gray-700">Matemáticas</p>
        </div>

        <div class="border rounded-xl p-4 md:col-span-2">
          <h3 class="font-semibold">Patrones de error</h3>
          <p class="text-sm text-gray-700">
            Falla en problemas que requieren varios pasos o análisis detallado.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow p-6 space-y-4">
      <h2 class="text-xl font-bold text-[#140022]">Recomendaciones inteligentes</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="border rounded-xl p-4 space-y-2">
          <h3 class="font-semibold">¿Qué estudiar?</h3>
          <p class="text-sm">
            <span class="font-bold text-red-600">Alta prioridad:</span> Reforzar fracciones
          </p>

          <RouterLink :to="{name:'exam'}">
            <button class="mt-2 bg-[#140022] text-white px-4 py-2 rounded-lg hover:opacity-90">
              Practicar ahora
            </button>
          </RouterLink>
        </div>

        <div class="border rounded-xl p-4 space-y-2">
          <h3 class="font-semibold">Reforzamiento</h3>
          <p class="text-sm text-gray-700">
            Repasa temas anteriores antes de avanzar a nuevos contenidos.
          </p>
        </div>

        <div class="border rounded-xl p-4 md:col-span-2">
          <h3 class="font-semibold">Sugerencia del día</h3>
          <p class="text-sm text-gray-700">
            Dedica 20 minutos a practicar matemáticas para mejorar tu rendimiento general.
          </p>
          
          <RouterLink :to="{name:'activity'}">
            <button class="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90">
                Continuar aprendizaje
            </button>
          </RouterLink>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProgressBar from '../components/ProgressBar.vue';
</script>
