import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Dashboard from '../views/Dashboard.vue';
// @ts-ignore
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
