<script setup>
import { computed, reactive, ref } from 'vue'
import { getDonationIcon ,getTrophyIcon , getClanIcon } from '@/services/tags/index.js'


let props = defineProps({
  id: {
    type: Number,
    required: true
  },
  isBegin: {
    type: Boolean,
    default: true
  },
  noWay: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default() {
      return {
        expLevel: 200,
        name: "valdo"
      }
    }
  }
})

let showInfo = ref(false)

let itemClass = reactive({
  'flex-row-reverse  pb-2': props.isBegin
})
let itemHdvClass = reactive({
  'flex-row-reverse': !props.isBegin
})
let itemWayImage = computed(() => {
  return props.isBegin ? 'images/itineraire/it3.svg' : 'images/itineraire/it2.svg'
})
let itemInfoClass = reactive({
  'top-0 left-0 translate-x-[-100%]': props.isBegin,
  'top-0 right-0 translate-x-[100%]': !props.isBegin
})
let infoMember = computed(() => {
  return {
    name: props.item.name,
    tag: props.item.tag,
    role: props.item.role,
    rang: props.item.clanRank,
    xp: props.item.expLevel,
    trophies: props.item.trophies,
    donation: props.item.donations,
    donationRecu: props.item.donationsReceived,
    leagueName: props.item.league.name,
    leagueImage: props.item.league.iconUrls.small,
    leagueOuvrierName: props.item.league.name
  }
})

let handleClickInfo = () => {
  console.log('click hdv')
  showInfo.value = !showInfo.value
  console.log('item', props.item)
}



</script>

<template>
  <div class="mx-12 px-28 my-12 ">
    <div class="flex mb-1 w-[calc(100%-180px)]" :class="itemClass">
      <div class="w-full ml-[calc(180px*0.9)]" v-if="!props.noWay">
        <img :src="itemWayImage" alt="" class="w-full" />
      </div>
    </div>
    <div class="flex" :class="itemHdvClass">
      <div class="w-[180px] relative">
        <div class="" @click="() => handleClickInfo()">
          <img src="/images/HDV/hdv12.webp" alt="" width="180" class="" />
        </div>
        <p class="text-center font-semibold text-2xl text-gray-800">{{ infoMember.name }}</p>
        <Transition name="bounce">
          <div class="absolute min-w-[255px] bg-gray-800 p-4 rounded-xl" :class="itemInfoClass" v-if="showInfo">
            <div class="block border-slate-600 border-2 p-4 rounded-lg my-1 text-slate-300">
              <div class='card-title mb-4 flex justify-between'>
                <div class="">
                  <p class="font-semibold text-2xl text-white">{{ infoMember.name }}</p>
                  <p class="text-red-400">{{ infoMember.role }}</p>
                  <p class="">{{ infoMember.tag }}</p>
                </div>
                <div class="">
                  <img :src="infoMember.leagueImage" alt="" width="40">
                </div>
              </div>
              <div class='card-text'>
                <p class="flex items-center	">
                  <span>
                    <img :src="getTrophyIcon().medium" alt="" width="20" height="20">
                  </span>
                  <span  class="ml-2">Trophies: </span>
                  <span>{{ infoMember.trophies }}</span>
                </p>
                <p class="flex items-center	">
                  <span>
                    <img :src="getClanIcon().medium" alt="" width="20" height="20">
                  </span>
                  <span  class="ml-2">XP : </span>
                  <span>{{ infoMember.xp }}</span>
                </p>
                
                <p class="flex items-center	">
                  <span>
                    <img :src="getDonationIcon().medium" alt="" width="20" height="20">
                  </span>
                  <span  class="ml-2">Donation :</span>
                  <span>{{ infoMember.donation }}</span>
                </p>
                <p class="flex items-center	">
                  <span>
                    <img :src="getDonationIcon().medium" alt="" width="20" height="20">
                  </span>
                  <span  class="ml-2">Donation recue:</span>
                  <span>{{ infoMember.donationRecu }}</span>
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity:0
  }
  50% {
    transform: scale(1.25);
    opacity:.4
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
