import { createRouter, createWebHashHistory } from 'vue-router';
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
    history: createWebHashHistory(),
    routes
});

export default router;
