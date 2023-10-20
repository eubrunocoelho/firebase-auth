<template>
    <section class="container">
        <div class="title">
            <h1 class="--red">Cadastrar</h1>
        </div>
        <form action="#" class="form" @submit.prevent="Register">
            <div class="form-control">
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" class="--red" placeholder="Entre com seu nome..." value v-model="name" />
            </div>
            <div class="form-control">
                <label for="email">Endereço de E-mail</label>
                <input type="email" id="email" name="email" class="--red" placeholder="Entre com seu endereço de e-mail..." value v-model="email" />
            </div>
            <div class="form-control mb--0">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" class="--red" placeholder="Entre com sua senha..." v-model="password" />
            </div>
            <button type="submit" class="btn --red">Cadastrar</button>
        </form>
        <div class="alert alert--danger" v-if="error">
            <p>{{ error }}</p>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: "RegisterComponent",
    setup() {
        const name = ref("");
        const email = ref("");
        const password = ref("");
        const error = ref(null);

        const store = useStore();
        const router = useRouter();

        const Register = async () => {
            try {
                await store.dispatch("register", {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                });

                router.push("/dashboard");
            } catch (err) {
                error.value = err.message;
            }
        };

        return { Register, name, email, password, error };
    },
};
</script>