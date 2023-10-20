import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebaseConfig';
import AppComponent from '../App';
import AuthComponent from '../components/Auth';
import DashbaordComponent from '../components/Dashboard';

let user = null;

auth.onAuthStateChanged((authUser) => {
    user = authUser;
});

const routes = [
    {
        path: '/',
        name: 'App',
        component: AppComponent,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashbaordComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/auth',
        name: 'AuthComponent',
        component: AuthComponent,
        meta: {
            requiresAuth: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (!user && to.meta.requiresAuth) {
        next('Dashboard');
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => { 
    if (user && !to.meta.requiresAuth) {
        next('Auth');
    } else {
        next();
    }
});

export default router;