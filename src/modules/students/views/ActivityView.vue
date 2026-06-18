<template>
  <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 mt-20">

    <div class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-6 border border-gray-100">

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <h2 class="text-xl text-[#140022] font-bold">Tema:</h2>
          <p class="text-lg text-gray-700 font-medium">Álgebra</p>
        </div>

        <span class="text-xs bg-purple-100 text-[#140022] px-3 py-1 rounded-full">
          Nivel básico
        </span>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-semibold text-gray-800">Subtema</h3>
        <p class="text-sm text-gray-500 uppercase tracking-wide">
          Nombre del subtema
        </p>
      </div>

      <div class="bg-gray-50 rounded-xl p-6 text-gray-700 leading-relaxed space-y-4">

        <p>
          El <span class="font-semibold">álgebra</span> es una rama de las matemáticas que estudia cantidades usando letras y símbolos para representar números desconocidos o variables.
        </p>

        <div class="bg-white border-l-4 border-[#140022] p-4 rounded-lg">
          <p class="font-semibold text-gray-800">Idea principal</p>
          <p class="text-sm mt-1">
            En lugar de trabajar solo con números, el álgebra usa letras como <span class="font-mono">x, y, z</span> para representar valores que pueden cambiar o que aún no conocemos.
          </p>
        </div>

        <div class="space-y-2">
          <p class="font-semibold">Ejemplo:</p>
          <p class="font-mono bg-gray-100 p-3 rounded-lg text-center">
            x + 5 = 12
          </p>
          <p class="text-sm">
            Aquí, <span class="font-semibold">x</span> es el número desconocido que debemos encontrar.
          </p>
          <p class="text-sm font-semibold text-[#140022]">
            Resultado: x = 7
          </p>
        </div>

        <div class="space-y-2">
          <p class="font-semibold">¿Para qué sirve?</p>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Resolver problemas con incógnitas</li>
            <li>Describir relaciones entre cantidades</li>
            <li>Crear fórmulas (física, economía, etc.)</li>
            <li>Modelar situaciones de la vida real</li>
          </ul>
        </div>

        <div class="bg-purple-50 border border-purple-100 p-4 rounded-lg">
          <p class="font-semibold text-[#140022]">Ejemplo cotidiano</p>
          <p class="text-sm mt-1">
            Si 1 cuaderno cuesta <span class="font-mono">x</span> pesos y compras 3 cuadernos, entonces:
          </p>
          <p class="font-mono bg-white p-2 rounded mt-2 text-center">
            3x
          </p>
        </div>

        <p class="text-sm text-gray-600">
          El álgebra te ayuda a traducir problemas del mundo real a lenguaje matemático para resolverlos más fácilmente.
        </p>

      </div>

      <RouterLink :to="{ name: 'activity' }">
        <button
          class="w-full bg-[#140022] text-white py-3 rounded-xl font-semibold hover:bg-[#2a004a] transition shadow-md"
        >
          Siguiente lección →
        </button>
      </RouterLink>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>