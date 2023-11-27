<script setup>
let props = defineProps({
    img:{
        default:'/img/block-1s.png'
    },
    title:{
        default:'Lorem ipsum dolor sit.'
    },
    text:{
        default:`Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Similique ut accusamus 
                 sed`
    }
})
</script>
<template>
    <div class="flex h-[110px] w-[270px] border border-red-600 z-10" :style="`background:url(${props.img}) no-repeat;background-size:containt`"> 
        <div class="ml-[85px] p-1 pb-3 pr-5 flex flex-col justify-center">
            <h1 class="text-sm mb-2">{{props.title}}</h1>
            <p class="text-xs mb-2">{{ props.text }}</p>
        </div>
    </div>
</template>