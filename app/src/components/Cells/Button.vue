<script setup>
import { computed } from 'vue';
let props = defineProps({
    icon:{
        default: '/icons/ic26.png'
    },
    text:{
        default: 'template'
    },
    color:{
        default: 'blue'
    },
})
const propsColorSet = {
    'blue':['#5260d5','#42a4f3'],
    'orange':['#ffa857','#fe5a73']
}
let background = computed(()=>{
    let colorUse = propsColorSet[props.color]? propsColorSet[props.color]:'blue';
    return `background : linear-gradient(to right, ${colorUse[0]}, ${colorUse[1]});`;
})
</script>

<template>
    <button class="px-5 py-4 flex items-center" :style="background">
        <img :src="props.icon" alt="icon" class="w-1/3 p-3">
        <span class="w-2/3">{{ props.text }}</span>
    </button>
</template>

<style scoped>
button{
    padding: 0px 10px;
    color: #fff;
    border-radius: 3px;
    width: 190px;
    height: 53px;
    border-bottom: 5px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0px 10px 65px 0px #ccd4e0;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    float: left;
    transition: .5s;
    line-height: 45px;
    text-align: -webkit-center;
}

</style>