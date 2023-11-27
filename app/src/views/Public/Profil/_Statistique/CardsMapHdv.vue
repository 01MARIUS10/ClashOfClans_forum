<script setup>
import { computed, reactive, ref } from 'vue'
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
        name: 'valdo'
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

    donation: props.item.donation,
    donationRecu: props.item.donationReceived,

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
  <div class="px-28 my-12">
    <div class="flex mb-1" :class="itemClass">
      <div class="mx-12" v-if="!props.noWay">
        <img :src="itemWayImage" alt="" width="450" />
      </div>
    </div>
    <div class="flex" :class="itemHdvClass">
      <div class="w-[180px] relative">
        <div class="" @click="() => handleClickInfo()">
          <img src="images/HDV/hdv12.webp" alt="" width="180" class="" />
        </div>
        <Transition name="bounce">
          <div class="absolute min-w-[180px]" :class="itemInfoClass" v-if="showInfo">
            <div class="block bg-slate-100 p-4 rounded my-2">
              <div class='card-title'>
                <p>{{ infoMember.name }}</p>
              </div>
              <div class='card-text'>
                <p>{{ infoMember.leagueName }}</p>
                <p>{{ infoMember.leagueName }}</p>
                <p>{{ infoMember.leagueName }}</p>
                <p>{{ infoMember.leagueName }}</p>
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
