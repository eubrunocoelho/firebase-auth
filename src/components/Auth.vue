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
                <input type="text" id="email" name="email" placeholder="Entre com seu endereço de e-mail...">
            </div>
            <div class="form-control">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Entre com sua senha...">
            </div>
            <div class="recovery">
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <button type="submit" class="btn">Logar-se</button>
        </form>
        <div class="alert alert--success">
            <p>Mensagem de sucesso.</p>
        </div>
        <div class="alert alert--danger">
            <p>Mensagem de erro.</p>
        </div>
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