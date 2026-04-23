<template>
  <div class="max-w-5xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="md:col-span-2 space-y-4">
        <h2 class="text-2xl font-bold text-[#140022]">Mis datos</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          
          <div>
            <p class="text-sm text-gray-500">Nombre del alumno</p>
            <p class="font-semibold">Nombre completo</p>
          </div>

          <div>
            <p class="text-sm text-gray-500">Grado escolar</p>
            <p class="font-semibold">Segundo de secundaria</p>
          </div>

          <div>
            <p class="text-sm text-gray-500">Escuela</p>
            <p class="font-semibold">Nombre de la escuela</p>
          </div>

          <div>
            <p class="text-sm text-gray-500">Correo electrónico</p>
            <p class="font-semibold">xxxxxx@gmail.com</p>
          </div>

        </div>
      </div>

      <div class="flex flex-col justify-start md:items-end gap-4">
        
        <RouterLink to="/perfil/editar">
          <button class="w-full md:w-auto bg-[#140022] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            Editar datos
          </button>
        </RouterLink>

        <button class="w-full md:w-auto border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
          Cerrar sesión
        </button>

      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>