<script setup lang="ts">
    import { useProjects } from '../composables/useProjects';
    import { yearOnly } from '../utils/DateUtils';
    import '../styles/_cards.css';

    const { projects } = useProjects();
</script>

<template>
    <div class="projects-grid">
        <div v-for="item in projects" :key="item.title + item.startDate" class="card project-card">
            <div class="card-content">
                <h3 class="title">{{ item.title }}</h3>
                <p class="company">{{ item.company }}</p>
                <p class="date">
                    {{ yearOnly(item.startDate) }}
                    {{ item?.startDate && item?.endDate ? ' - ' : '' }}
                    {{ item?.endDate ? yearOnly(item.endDate) : '' }}
                </p>
                <div class="description">{{ item.description }}</div>
            </div>

            <a v-if="item.link" class="card-link" :href="item.link" target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    </div>
</template>

<style scoped>
    .projects-grid {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .project-card {
        border-left: 6px solid #2f5d50;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    .card-link {
        margin-top: auto;
        align-self: flex-start;
        font-weight: bold;
        color: #2f5d50;
        text-decoration: underline;
    }

    .card-link:hover {
        color: #1e3c33;
    }
</style>
