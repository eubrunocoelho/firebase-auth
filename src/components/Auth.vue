<template>
    <header class="tab-header">
        <nav class="tab-navigation">
            <a href="#" class="active">Login</a>
            <a href="#">Cadastro</a>
        </nav>
    </header>
    <section class="container">
        <div class="title">
            <h1>Logar-se</h1>
        </div>
        <form action="#" class="form">
            <div class="form-control">
                <label for="email">Endereço de E-mail</label>
                <input type="text" id="email" name="email">
            </div>
            <div class="form-control">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password">
            </div>
            <div class="recovery">
                <a href="#">Esqueceu sua senha?</a>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'AuthComponent'
};
</script>

<style scoped>
@import '../assets/css/auth.css';
</style>