import { createRouter, createWebHistory } from 'vue-router';
import App from '../App';
import Auth from '../components/Auth';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: App
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;