<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const links = [
        { name: 'Career', path: '/career' },
        { name: 'Projects', path: '/projects' }
    ];

    const isActive = (path: string) => route.path === path;
</script>

<template>
    <nav class="nav">
        <div class="nav-content">
            <router-link
                v-for="link in links"
                :key="link.path"
                :to="link.path"
                :class="{ active: isActive(link.path) }"
                class="nav-link"
            >
                {{ link.name }}
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
    .nav {
        width: 100% !important;
        position: sticky;
        top: 0;
        background-color: #4a7a6a;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        z-index: 900;
        padding: 0.75rem 0;
        display: flex;
        justify-content: center;
    }

    .nav-content {
        max-width: 960px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .nav-link {
        color: #d7e6dd;
        font-weight: 600;
        font-size: 1.1rem;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        transition:
            border-color 0.2s,
            color 0.2s;
    }

    .nav-link:hover {
        color: #ffffff;
        border-bottom-color: #a0c9a3;
    }

    .nav-link.active {
        color: #ffffff;
        border-bottom-color: #c9f5df;
    }
</style>
