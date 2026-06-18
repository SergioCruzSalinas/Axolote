<template>
  <nav class="fixed top-0 left-0 w-full z-50">

    <NavigationStudentView v-if="authenticate" />
    <NavigationView v-else />

  </nav>

  <main class="relative z-10">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavigationView from '../components/NavigationView.vue'
import NavigationStudentView from '@/modules/students/components/NavigationStudentView.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const authenticate = ref(false)

const updateAuth = () => {
  authenticate.value = localStorage.getItem('authenticate') === 'true'
}

onMounted(() => {
  updateAuth()

  window.addEventListener('storage', updateAuth)

  window.addEventListener('auth-change', updateAuth)
})

onBeforeUnmount(() => {
  window.removeEventListener('storage', updateAuth)
  window.removeEventListener('auth-change', updateAuth)
})
</script>

<style>
body {
  background: #ece4ff;
}
</style>