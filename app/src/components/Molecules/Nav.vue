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
            <div class="navigation flex">
                <LinkPage to="#" :active="true" text="Home"/>
                <LinkPage to="#" :active="true" text="Tutorial"/>
                <LinkPage to="#" :active="true" text="Forum"/>
            </div>
            <div class="account">
                <RouterLink  to="#">
                    <Button />
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
 
</style>