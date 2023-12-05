<script setup>
import { getAllTags } from '@/services/tags/http.js'
import { getHdvImage } from '@/services/hdv/http'

import testRequestVue from '@/components/Molecules/testRequest.vue';


import { getClan } from '@/services/clan/http';
import { onMounted } from 'vue';

// onMounted(()=>{
//   let data = getClan('#2LVPJRGLV')
//   console.log(data)
// })
let t = getAllTags()

// import {getTag} from "@/services/tags.js"
// console.log('getTag',getTag('clan',57000000),getAllTags())
</script>

<template>
  <div class="w-full">
    <div
      v-for="(e, i) in t"
      class="w-full flex flex-col my-10 border border-red-500 flex-wrap justify-center items-center"
    >
      <p class="text-center text-lg font-bold">{{ i }}</p>
      <div class="flex flex-wrap">
        <div v-for="i in e" class="border border-slate-800 min-w-[300px] flex h-10 px-2 py-1">
          <img class="h-full" :src="i.iconUrls.medium" alt="" />
          <span>{{ i.name }}</span>
        </div>
      </div>
    </div>
    <div class="test bg-gray-500 p-24">
      <div class="border-red-200">io
        <img :src="getHdvImage(10)" alt="" width="600"/>
      </div>
    </div>
    <div class="m-auto p-5 max-w-[400px]">
      <testRequestVue />
    </div>
  </div>
</template>
