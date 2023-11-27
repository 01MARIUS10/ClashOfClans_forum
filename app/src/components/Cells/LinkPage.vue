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
        <p class="mr-8 text-gray-400 " :class="props.active? 'border border-0 border-b-4 border-blue-500':''">
            <span>{{ props.text }}</span>
        </p>
    </RouterLink>
</template>
<style scoped>
p{
    font-size: 14px;
    font-weight: 600;
    font-family: var(--font-family);
}

</style>