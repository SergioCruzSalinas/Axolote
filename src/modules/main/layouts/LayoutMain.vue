<template>
    <nav  class="fixed top-0 left-0 w-full z-50">
        <NavigationStudentView v-if="authenticate"/>
        <NavigationView v-else/>
    </nav>

    <main class="relative z-10 pt-20">
        <RouterView/>
    </main>

</template>

<script setup>
import { RouterView } from 'vue-router';
import NavigationView from '../components/NavigationView.vue';
import NavigationStudentView from '@/modules/students/components/NavigationStudentView.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

const authenticate = ref(false)

onMounted(() =>{
    const userAutheticate = localStorage.getItem('authenticate')
    authenticate.value = !!userAutheticate
})

</script>

<style>
body {
    background: #ece4ff;
}
</style>


