<template>
  <div class="flex flex-col px-6 py-10 max-w-4xl mx-auto gap-6 mt-10">
    <h2 class="text-[#1c1a1f] font-bold text-2xl">
      Próxima actividad:
    </h2>

    <div class="flex flex-col items-center gap-6">
      <ActivityCard />
    </div>
  </div>

  <div class="flex flex-col px-6 py-10 max-w-5xl mx-auto gap-6">
    <h2 class="text-[#1c1a1f] font-bold text-2xl">
      Materias en curso:
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

      <RouterLink 
        v-for="i in 8" 
        :key="i" 
        :to="{name:'subject'}"
        class="w-full"
      >
        <div class="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition cursor-pointer">
          <p class="font-semibold text-gray-800">Materia {{ i }}</p>
        </div>
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
import ActivityCard from '../components/ActivityCard.vue';
import { RouterLink } from 'vue-router';
</script>