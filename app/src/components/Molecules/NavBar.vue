<script setup>
import { RouterLink } from 'vue-router';

import Button from '../Cells/Button.vue';
import LinkPage from '../Cells/LinkPage.vue';
</script>

<template>
    <nav class="flex justify-between w-full border border-slate-300" >
        <div class="logo">
            <img src="" alt="LOGO">
        </div>
        <div class="flex">
            <div class="flex">
                <LinkPage to="/" :active="true" text="Home"/>
                <LinkPage to="/ranking" :active="false" text="Ranking"/>
                <LinkPage to="/profil" :active="false" text="Profil"/>
            </div>
            <div class="ml-6">
                <RouterLink  to="/ui">
                    <Button color="orange" class="me-4" icon="/icons/ic22.png" text="Voir la Tutoriel"/>
                    <Button text="Se connecter"/>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>