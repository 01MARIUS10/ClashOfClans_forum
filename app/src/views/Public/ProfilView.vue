<script setup>
import profil_head from './Profil/head.vue';
import memberList from './Profil/memberList.vue';
import statistique from './Profil/statistique.vue'

import { computed, ref } from 'vue';
import { getClan } from '@/services/clan';




let props = defineProps({
  clan: {
    type: Object,
    default: getClan()
  }
})


let tabs = [
  {
    name: 'member',
    data: props.clan.memberList,
    component: memberList
  },
  {
    name: 'statistique',
    data: props.clan.capitalLeague,
    component: statistique
  },
]

let activeTabs = ref('member');

let activeData = computed(() => {
  let a = tabs.find(e => e.name === activeTabs.value)
  console.log(a)
  return a.data
})

let activeComponent = computed(() => {
  let a = tabs.find(e => e.name === activeTabs.value)
  console.log(a)
  return a.component
})




function activeClass(str) {
  return activeTabs.value === str ? 'border border-slate-300' : ''
}


</script>


<template>
  <div class="profil h-full" >
    <profil_head :clan="props.clan" id="profil_content"/>
    <div class="px-5 py-6 " id="profil_content">
      <div class="flex justify-center gap-5">
        <p v-for="tab in tabs" @click="activeTabs = tab.name" :class="activeClass(tab.name)" class="px-3 py-1 text-white">{{ tab.name }}</p>
      </div>
      <div class="flex justify-center">
        <component :is="activeComponent" :data="activeData" :id="activeTabs" class="max-w-screen-xl w-full px-5 py-4 "/>
      </div>
    </div>
  </div>
</template>
  
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.profil{
  background: #343a4a !important;
}
</style>
  