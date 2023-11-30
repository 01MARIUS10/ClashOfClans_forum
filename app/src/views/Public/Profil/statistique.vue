<script setup>
import CardsMapHdv from './_Statistique/CardsMapHdv.vue'

import { getClanMembers } from '../../../services/clan'
// let props = defineProps({
//     data: {
//         type: Object,
//         default: {
//             "id": 48000009,
//             "name": "Gold League I"
//         },
//     }
// })
let members = getClanMembers()
</script>

<template>
  <div class="history">
    <div class="svg flex justify-center">
      <div class="stat w-full min-h-[1800px]">
        <template v-for="(item,index) in members">
          <CardsMapHdv :item="item" :isBegin="index%2==0" :noWay="index==0" :id="index" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat {
  background-image: url('/images/gazon.jpg');
}
</style>
