<template>
    <section class="container">
        <div class="title">
            <h1 class="--red">Cadastrar</h1>
        </div>
        <form action="#" class="form">
            <div class="form-control">
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" class="--red" placeholder="Entre com seu nome...">
            </div>
            <div class="form-control">
                <label for="email">Endereço de E-mail</label>
                <input type="email" id="email" name="email" class="--red" placeholder="Entre com seu endereço de e-mail...">
            </div>
            <div class="form-control mb--0">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" class="--red" placeholder="Entre com sua senha...">
            </div>
            <button type="submit" class="btn --red">Cadastrar</button>
        </form>
        <div class="alert">
            <p>Mensagem padrão.</p>
        </div>
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
    name: 'RegisterComponent'
};
</script>