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
          Actividades
        </RouterLink>

        <RouterLink :to="{name: 'about'}" class="text-white font-medium hover:text-[#b30086] transition">
          Examenes
        </RouterLink>

        <RouterLink :to="{name: 'contact'}" class="text-white font-medium hover:text-[#b30086] transition">
          Perfil academico
        </RouterLink>

        <RouterLink :to="{name: 'contact'}" class="text-white font-medium hover:text-[#b30086] transition">
          Perfil
        </RouterLink>

        <RouterLink :to="{name: 'contact'}" class="text-white font-medium hover:text-[#b30086] transition">
          salir
        </RouterLink>
      </div>

    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>