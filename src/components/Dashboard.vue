<template>
    <section class="container" v-if="true">
        <div class="dashboard-heading">
            <h1><span>#</span>Dashboard</h1>
        </div>
        <div class="summary">
            <p>Olá, Bruno Coelho!</p>
            <button class="btn">Sair</button>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { auth } from '../firebaseConfig';

export default {
    name: 'DashboardComponent',
    setup() {
        const store = useStore();
        const router = useRouter();

        auth.onAuthStateChanged(user => {
            store.dispatch('fetchUser', user);
        });

        const user = computed(() => {
            return store.getters.user;
        });

        const signOut = async () => {
            await store.dispatch('logOut')
            router.push('/');
        };

        return { user, signOut };
    }
}
</script>

<style scoped>
@import '../assets/css/dashboard.css';
</style>