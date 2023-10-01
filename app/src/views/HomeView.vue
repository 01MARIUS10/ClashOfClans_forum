<script setup>
import Caroussel from './Home/Caroussel.vue';
import CardPopUp from '../components/Cells/CardPopUp.vue';
import Article from './Home/Article.vue';
</script>

<template>
  <main >
    <div class="border border-red-400 flex h-[450px] gap-10 mb-11">
        <div class="caroussel w-9/12 border border-gray-500 h-full">
          <Caroussel class=""/> 
        </div>
        <div class="popUp w-3/12 flex flex-col justify-center gap-4 border border-blue-400 h-full">
            <CardPopUp v-for="i in 2"/>
        </div>
    </div>
    <div class="border border-red-400 flex gap-10 pt-3">
        <div class="caroussel w-9/12 border border-gray-500 h-full">
          <Article v-for="i in 4" class="mb-11"/> 
        </div>
        <div class="popUp w-3/12 flex flex-col justify-center gap-4 border border-blue-400 h-full">
            <CardPopUp v-for="i in 2"/>
        </div>
    </div>
  </main>
</template>
