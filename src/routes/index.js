import { createRouter, createWebHistory } from 'vue-router';
import AppComponent from '../App';
import AuthComponent from '../components/Auth';
import DashbaordComponent from '../components/Dashboard';

const routes = [
    {
        path: '/',
        name: 'App',
        component: AppComponent
    },
    {
        path: '/dashboard',
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