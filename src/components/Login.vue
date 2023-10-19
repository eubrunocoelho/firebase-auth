<template>
    <section class="container">
        <div class="title">
            <h1>Logar</h1>
        </div>
        <form action="#" class="form" @submit.prevent="Login">
            <div class="form-control">
                <label for="email">Endereço de E-mail</label>
                <input type="text" id="email" name="email" placeholder="Entre com seu endereço de e-mail..." value
                    v-model="email">
            </div>
            <div class="form-control">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Entre com sua senha..."
                    v-model="password">
            </div>
            <div class="recovery">
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit" class="btn">Logar</button>
        </form>
        <div class="alert alert--danger" v-if="error">
            <p>{{ error }}</p>
        </div>
    </section>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
    name: 'LoginComponent',
    setup() {
        const email = ref('');
        const password = ref('');
        const error = ref(null);

        const store = useStore();
        const router = useRouter();

        watchEffect(() => { 
            // if (store.getters.user.loggedIn) {
                // router.push('/');
                console.log(store.getters.user.loggedIn);
            // }
        });

        const Login = async () => {
            try {
                await store.dispatch('logIn', {
                    email: email.value,
                    password: password.value
                })
                router.push('/');
            }
            catch (err) {
                error.value = err.message;
            }
        }

        return { Login, email, password, error };
    }
}
</script>