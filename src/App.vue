<script setup lang="ts">
    import Header from './components/Header.vue';
    import NavBar from './components/NavBar.vue';
</script>

<template>
    <div>
        <Header />
        <NavBar />
        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<style scoped>
    .content {
        max-width: 960px;
        margin: 0 auto;
        padding: 0 1rem;
    }
</style>
