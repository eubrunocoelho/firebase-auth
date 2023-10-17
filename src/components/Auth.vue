<template>
    <header class="tab-header">
        <nav class="tab-navigation">
            <a href="#" :class="{ 'active': isActive }" @click="handleActive">Login</a>
            <a href="#" :class="{ 'active --red': !isActive }" @click="handleActive">Cadastro</a>
        </nav>
    </header>
    <LoginComponent v-if="isActive"></LoginComponent>
    <RegisterComponent v-if="!isActive"></RegisterComponent>
</template>

<script>
import RegisterComponent from './Register';
import LoginComponent from './Login';

export default {
    name: 'AuthComponent',
    components: {
        LoginComponent,
        RegisterComponent
    },
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        handleActive() {
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style>
@import '../assets/css/auth.css';
</style>