<script setup>
import Caroussels from './Home/Caroussels.vue';
import CardPopUp from '@/components/Cells/CardPopUp.vue';
import Article from './Home/Article.vue';
</script>

<template>
  <main class="max-w-screen-xl ">
    <div class="border border-red-400 flex h-[450px] gap-10 mb-11">
        <div class="caroussel w-9/12 border border-gray-500 h-full">
          <Caroussels class=""/> 
        </div>
        <div class="popUp w-3/12 flex flex-col justify-center gap-4 border border-blue-400 h-full">
            <CardPopUp v-for="i in 2"/>
        </div>
    </div>
    <div class="border border-red-400 flex gap-10 pt-0">
        <div class="caroussel w-9/12 border border-gray-500 h-full">
          <Article v-for="i in 4" class="mb-11" /> 
        </div>
        <div class="popUp w-3/12 flex flex-col justify-center gap-4 border border-blue-400 h-full">
            <CardPopUp v-for="i in 2"/>
        </div>
    </div>
  </main>
</template>

<style >
main::before {
  content:'';
    width: 100%;
    height: 600px;
    top:0;
    left: 0;
    display: block;
    background: url(/img/bg-left.png) no-repeat;
    position: absolute;
}
</style>
