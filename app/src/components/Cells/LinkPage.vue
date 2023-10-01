<script setup>
import { RouterLink } from 'vue-router';

let props = defineProps({
    text:{
        default:'template',
    },
    active:{
        default:true ,
    },
    to:{
        default:'#'
    }
})
</script>
<template>
    <RouterLink :to="props.to" class="flex items-center">
        <p class="mr-4" :class="props.active? 'border border-0 border-b-4 border-neutral-400':''">
            <span>{{ props.text }}</span>
        </p>
    </RouterLink>
</template>
<style scoped>
p{
    font-size: 14px;
    font-weight: 600;
}
</style>