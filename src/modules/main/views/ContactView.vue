<template>
  <section class="py-5 px-6 bg-[#f8fafc]">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-6">
        <h1 class="text-4xl md:text-5xl font-bold text-[#172554]">
          Contáctanos
        </h1>
        <p class="text-gray-600 mt-4">
          ¿Tienes dudas o quieres comenzar? Estamos aquí para ayudarte.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <div class="bg-white p-8 rounded-2xl shadow-sm">
          <form class="space-y-6">

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Nombre
              </label>
              <input 
                type="text" 
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2563EB] outline-none"
                placeholder="Tu nombre"
              >
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input 
                type="email" 
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2563EB] outline-none"
                placeholder="correo@ejemplo.com"
              >
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea 
                rows="4"
                class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#2563EB] outline-none"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full bg-[#6300b0] text-white py-3 rounded-lg font-semibold hover:bg-[#7e22ce] transition">
              Enviar mensaje
            </button>

          </form>
        </div>

        <div class="flex flex-col justify-center space-y-2 pb-16">

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h2 class="text-lg font-semibold text-[#172554] mb-2">
              📧 Correo
            </h2>
            <p class="text-gray-600">
              contacto@axolote.com
            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h2 class="text-lg font-semibold text-[#172554] mb-2">
              📍 Ubicación
            </h2>
            <p class="text-gray-600">
              Tecnológico de Estudios Superiores de Chimalhuacán, C. Ópalo 18, 
              Sta Maria Nativitas,56335 Chimalhuacán, Méx.

            </p>
          </div>

          <div class="bg-white p-6 rounded-2xl shadow-sm">
            <h2 class="text-lg font-semibold text-[#172554] mb-2">
              ⏰ Horario
            </h2>
            <p class="text-gray-600">
              Lunes a Viernes: 9:00 AM - 6:00 PM
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>