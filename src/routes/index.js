import { createRouter, createWebHistory } from 'vue-router';
import AuthComponent from '../components/Auth';
import DashbaordComponent from '../components/Dashboard';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashbaordComponent
    },
    {
        path: '/auth',
        name: 'AuthComponent',
        component: AuthComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;