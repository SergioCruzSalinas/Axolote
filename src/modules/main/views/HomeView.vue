<template>
  <section class="pt-20 px-6 bg-gradient-to-r from-[#140022] to-[#2a004a] text-white">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

      <div>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Aprende a tu ritmo con 
          <span class="text-[#c084fc]">inteligencia personalizada</span>
        </h1>

        <p class="text-lg mt-6 text-gray-300 max-w-xl">
          Evalúa tu nivel, mejora con contenido adaptado y recibe retroalimentación inteligente 
          en cada paso de tu aprendizaje.
        </p>

        <div class="flex flex-wrap gap-4 mt-8">
          <RouterLink :to="{name: 'about'}">
            <button class="px-6 py-3 bg-[#6300b0] rounded-lg font-semibold hover:bg-[#7e22ce] transition">
              Registrarme
            </button>
          </RouterLink>
          
          <RouterLink :to="{name: 'about'}">
            <button class="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Más información
            </button>
          </RouterLink>
        </div>
      </div>

      <div class="flex justify-center">
        <img 
          src="/img/logo_axolote.png" 
          class="w-full max-w-md drop-shadow-2xl"
          alt="Imagen app"
        >
      </div>

    </div>
  </section>


  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-[#140022]">
        ¿Por qué usar nuestra plataforma?
      </h2>
    </div>

    <div class="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

      <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 class="font-semibold mb-2">📊 Evaluación inicial</h3>
        <p class="text-gray-600 text-sm">
          Detectamos tu nivel para crear un camino de aprendizaje adecuado.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 class="font-semibold mb-2">🤖 Retroalimentación</h3>
        <p class="text-gray-600 text-sm">
          Recibe recomendaciones inteligentes para mejorar continuamente.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 class="font-semibold mb-2">🎯 Contenido adaptativo</h3>
        <p class="text-gray-600 text-sm">
          La dificultad se ajusta automáticamente según tu desempeño.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h3 class="font-semibold mb-2">📈 Progreso en tiempo real</h3>
        <p class="text-gray-600 text-sm">
          Visualiza tu avance y mantente motivado.
        </p>
      </div>

    </div>
  </section>


  <section class="py-20 px-6">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-[#140022] mb-12">
        ¿Cómo funciona?
      </h2>

      <div class="grid md:grid-cols-4 gap-6">

        <div class="p-4">
          <p class="font-semibold">1. Diagnóstico</p>
          <p class="text-sm text-gray-600">Evalúa tu nivel inicial</p>
        </div>

        <div class="p-4">
          <p class="font-semibold">2. Personalización</p>
          <p class="text-sm text-gray-600">Recibe tu plan adaptado</p>
        </div>

        <div class="p-4">
          <p class="font-semibold">3. Aprendizaje</p>
          <p class="text-sm text-gray-600">Contenido dinámico</p>
        </div>

        <div class="p-4">
          <p class="font-semibold">4. Mejora continua</p>
          <p class="text-sm text-gray-600">Feedback constante</p>
        </div>

      </div>
    </div>
  </section>

  <section class="py-20 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-[#140022]">
        Planes
      </h2>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <div class="bg-white p-6 rounded-2xl shadow text-center">
        <h3 class="font-bold text-xl">Gratis</h3>
        <p class="text-2xl my-4">$0</p>
        <ul class="text-sm space-y-2 text-gray-600">
          <li>Cursos básicos</li>
          <li>Exámenes</li>
          <li>Con anuncios</li>
        </ul>
      </div>

      <div class="bg-[#6300b0] text-white p-6 rounded-2xl shadow text-center scale-105">
        <h3 class="font-bold text-xl">Pro</h3>
        <p class="text-2xl my-4">$49 / mes</p>
        <ul class="text-sm space-y-2">
          <li>+ Juegos</li>
          <li>+ Pistas inteligentes</li>
          <li>Menos anuncios</li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow text-center">
        <h3 class="font-bold text-xl">Premium</h3>
        <p class="text-2xl my-4">$749 / año</p>
        <ul class="text-sm space-y-2 text-gray-600">
          <li>Sin anuncios</li>
          <li>Biblioteca completa</li>
          <li>Pistas ilimitadas</li>
        </ul>
      </div>

    </div>
  </section>


  <section class="bg-[#140022] text-white py-20 text-center px-6">
    <h2 class="text-3xl font-bold mb-6">
      Empieza hoy tu aprendizaje inteligente
    </h2>

    <p class="mb-8 text-gray-300">
      Aprende de forma personalizada y mejora más rápido que nunca.
    </p>

    <button class="px-8 py-3 bg-[#6300b0] rounded-lg font-semibold hover:bg-[#7e22ce] transition">
      Crear cuenta gratis
    </button>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>