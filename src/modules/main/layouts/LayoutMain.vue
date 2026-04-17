<template>
    <nav  class="fixed top-0 left-0 w-full z-50">
        <NavigationView/>
    </nav>

    <main class="relative z-10 pt-20">
        <RouterView/>
    </main>

</template>

<script setup>
import { RouterView } from 'vue-router';
import NavigationView from '../components/NavigationView.vue';
</script>


