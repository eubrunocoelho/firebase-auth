<template>
    <main class="app-container">
        <router-view></router-view>
    </main>
</template>

<script>
import { useRouter } from 'vue-router';
import { auth } from './firebaseConfig';

export default {
    name: 'AppComponent',
    setup() {
        const router = useRouter();

        auth.onAuthStateChanged(user => {
            if (user) {
                router.push('/dashboard');
            } else {
                router.push('/auth');
            }
        });
    }
};
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/global.css';
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
</style>
