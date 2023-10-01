<script setup>

import { RouterView } from 'vue-router'
import Nav from './components/Molecules/Nav.vue';
import Footer from './components/Molecules/Footer.vue';
</script>

<template>
  <div class="content w-100 ">
    <div class="nav flex px-20 border border-slate-500 py-5">
      <Nav />
    </div>
    <div class="px-20 border border-slate-500">
      <RouterView class="border border-slate-300"/>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<style >
.content{
  background-image: url('/img/pattern.png');
}
</style>
