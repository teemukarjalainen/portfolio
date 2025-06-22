<script setup lang="ts">
    import { useCareer } from '../composables/useCareer';
    import CareerTree from '../components/CareerTree.vue';

    const { career } = useCareer();
</script>

<template>
    <main>
        <h2 class="heading">My career journey so far...</h2>
        <CareerTree :items="career" />
    </main>
</template>

<style scoped>
    .heading {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
        color: #2f5d50;
    }
</style>
