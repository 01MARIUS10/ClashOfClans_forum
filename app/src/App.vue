<script setup>

import { RouterView } from 'vue-router'
import Nav from './components/Molecules/Nav.vue';
</script>

<template>
  <div class="content">
    <div class="nav">
      <Nav />
    </div>
    <div class="routerLink">
      <RouterView />
    </div>
  </div>
</template>
