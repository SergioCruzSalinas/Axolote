<template>
  <div class="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-6 mt-20">

    <div class="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-5">

      <div class="flex items-center gap-2">
        <h2 class="text-xl text-[#140022] font-bold">Tema:</h2>
        <p class="text-lg text-gray-800">{{ examen.titulo }}</p>
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-lg font-medium text-gray-800">Descripción</h3>
        <p class="text-sm text-gray-500">
          {{ examen.descripcion }}
        </p>
      </div>

      <div
        v-for="pregunta in examen.preguntas"
        :key="pregunta.id"
        class="bg-gray-100 rounded-xl p-4"
      >
        <h4 class="font-semibold mb-3">
          {{ pregunta.id }}. {{ pregunta.pregunta }}
        </h4>

        <div class="flex flex-col gap-2">
          <label
            v-for="(opcion, letra) in pregunta.opciones"
            :key="letra"
            class="flex items-center gap-2"
          >
            <input
              type="radio"
              :name="'pregunta-' + pregunta.id"
              :value="letra"
              v-model="respuestas[pregunta.id]"
            />

            <span>{{ letra }}. {{ opcion }}</span>
          </label>
        </div>
      </div>

      <button
        @click="calificarExamen"
        class="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        Finalizar examen
      </button>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const examen = {
  titulo: 'Examen Diagnóstico de Matemáticas para Secundaria',
  descripcion:
    'Cuestionario de posicionamiento de conocimientos matemáticos para estudiantes de secundaria.',
  preguntas: [
    {
      id: 1,
      pregunta: '¿Cuál es el resultado de 125 + 87?',
      opciones: {
        A: '202',
        B: '212',
        C: '222',
        D: '232'
      },
      respuestaCorrecta: 'B'
    },
    {
      id: 2,
      pregunta: '¿Cuál es el resultado de 15 × 8?',
      opciones: {
        A: '100',
        B: '110',
        C: '120',
        D: '130'
      },
      respuestaCorrecta: 'C'
    },
    {
      id: 3,
      pregunta: '¿Cuál es el resultado de 144 ÷ 12?',
      opciones: {
        A: '10',
        B: '11',
        C: '12',
        D: '13'
      },
      respuestaCorrecta: 'C'
    },
    {
      id: 4,
      pregunta: '¿Cuál es la fracción equivalente a 0.5?',
      opciones: {
        A: '1/4',
        B: '1/2',
        C: '3/4',
        D: '2/3'
      },
      respuestaCorrecta: 'B'
    },
    {
      id: 5,
      pregunta: '¿Cuál es el 25% de 200?',
      opciones: {
        A: '25',
        B: '40',
        C: '50',
        D: '75'
      },
      respuestaCorrecta: 'C'
    },
    {
      id: 6,
      pregunta: 'Si x + 7 = 15, ¿cuál es el valor de x?',
      opciones: {
        A: '6',
        B: '7',
        C: '8',
        D: '9'
      },
      respuestaCorrecta: 'C'
    },
    {
      id: 7,
      pregunta:
        '¿Cuál es el área de un rectángulo de 8 cm de largo y 5 cm de ancho?',
      opciones: {
        A: '13 cm²',
        B: '26 cm²',
        C: '40 cm²',
        D: '45 cm²'
      },
      respuestaCorrecta: 'C'
    },
    {
      id: 8,
      pregunta: '¿Cuántos grados tiene un ángulo recto?',
      opciones: {
        A: '45°',
        B: '90°',
        C: '180°',
        D: '360°'
      },
      respuestaCorrecta: 'B'
    },
    {
      id: 9,
      pregunta: 'Una libreta cuesta $30. ¿Cuánto costarán 4 libretas?',
      opciones: {
        A: '$90',
        B: '$100',
        C: '$110',
        D: '$120'
      },
      respuestaCorrecta: 'D'
    },
    {
      id: 10,
      pregunta: 'El promedio de las calificaciones 8, 10 y 9 es:',
      opciones: {
        A: '8',
        B: '8.5',
        C: '9',
        D: '9.5'
      },
      respuestaCorrecta: 'C'
    }
  ]
}

const respuestas = ref({})

const calificarExamen = () => {
  const respondidas = Object.keys(respuestas.value).length

  if (respondidas < examen.preguntas.length) {
    alert('Debes responder todas las preguntas antes de continuar.')
    return
  }

  let total = 0

  examen.preguntas.forEach((pregunta) => {
    if (
      respuestas.value[pregunta.id] ===
      pregunta.respuestaCorrecta
    ) {
      total++
    }
  })

  // Guardar resultado para usarlo después
  localStorage.setItem('resultadoExamen', total)

  // Redirigir automáticamente
  router.push({ name: 'activities' })
}
</script>