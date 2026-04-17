<template>
  <div class="min-h-screen flex items-center justify-center bg-[#ece4ff] pb-25">

    <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

      <div class="flex flex-col items-center gap-2 mb-6">
        <h2 class="text-3xl text-[#140022] font-semibold">
          Regístrate
        </h2>
        <p class="text-[#140022] italic">
          Donde el conocimiento florece 
        </p>
      </div>

      <form class="flex flex-col gap-4">

        <div class="flex flex-col">
          <label class="text-[#140022] font-semibold mb-1">
            Nombre
          </label>
          <input 
            type="text"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6300b0]"
            placeholder="Tu nombre"
          >
        </div>

        <div class="flex flex-col">
          <label class="text-[#140022] font-semibold mb-1">
            Correo electrónico
          </label> 
          <input 
            type="email"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6300b0]"
            placeholder="ejemplo@email.com"
          >
        </div>

        <div class="flex flex-col">
          <label class="text-[#140022] font-semibold mb-1">
            Contraseña
          </label> 
          <input 
            type="password"
            class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6300b0]"
            placeholder="••••••••"
          >
        </div>

        <button 
          class="mt-4 bg-[#6300b0] text-white py-2 rounded-lg font-semibold hover:bg-[#7e22ce] transition"
        >
          Registrarme
        </button>

      </form>

    </div>

  </div>
</template>