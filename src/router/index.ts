import { createRouter, createWebHistory } from 'vue-router';
import Career from '../pages/Career.vue';
import Projects from '../pages/Projects.vue';

const routes = [
    {
        path: '/',
        redirect: '/career' // default route
    },
    {
        path: '/career',
        name: 'Career',
        component: Career
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
