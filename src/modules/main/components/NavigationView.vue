<template>
  <nav class="bg-[#140022] w-full">

    <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

      <div class="flex items-center">
        <img 
          src="/public/img/logo_axolote.png" 
          alt="Inventia Logo" 
          class="h-10 w-auto object-contain"
        >
      </div>

      <div class="hidden md:flex items-center gap-8">
        <RouterLink :to="{name: 'home'}" class="text-white font-medium hover:text-[#b30086] transition">
          Home
        </RouterLink>

        <RouterLink :to="{name: 'about'}" class="text-white font-medium hover:text-[#b30086] transition">
          Nosotros
        </RouterLink>

        <RouterLink :to="{name: 'contact'}" class="text-white font-medium hover:text-[#b30086] transition">
          Contáctanos
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">

        <RouterLink :to="{name:'login'}">
          <button class="text-white font-medium hover:text-[#b30086] transition">
            Ingresar
          </button>
        </RouterLink>

        <RouterLink :to="{name:'register'}">
          <button class="bg-[#9400ff] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#b30086] transition">
            Regístrate
          </button>
        </RouterLink>

      </div>

    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>