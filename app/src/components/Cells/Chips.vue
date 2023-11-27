<script setup>
import { getAllClanTag } from "../../services/tags";
import { computed } from "vue";
let props = defineProps({
    tag: {
        Type: Object,
        default: getAllClanTag()[0]
    }
})
console.log('props is',props.tag)
let icon = computed(()=>{
    let p = props.tag.iconUrls
    console.log('p is',p)
    return p.medium? p.medium : p.small ;
})
</script>

<template>
    <div  class="rounded-md border border-slate-800 flex h-10 items-center px-2 py-1">
        <img v-if="props.tag.iconUrls" class="h-full" :src="icon" alt="">
        <span>{{ props.tag.name }}</span>
    </div>
</template>