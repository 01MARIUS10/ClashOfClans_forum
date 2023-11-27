<script setup>
import Button from '@/components/Cells/Button.vue';
import Date from '@/components/Cells/Date.vue';
let props = defineProps({
    img:{
        default:'/img/post.png'
    },
    title:{
        default:'Lorem ipsum dolor sit.'
    },
    text:{
        default:`
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Aperiam enim aut illo ullam 
            ad suscipit odio maiores eum dolorem est?
            llam 
            ad suscipit odio maiores eum dolorem est?
            llam 
            ad suscipit odio maiores eum dolorem est?
            llam 
            ad suscipit odio maiores eum dolorem est?`
    },
    date:{
        default:'22/04/23'
    }
})
</script>

<template>
    <div class="flex article bg-white rounded-md px-6 py-3">
        <img :src="props.img" alt="">
        <div class="flex flex-col justify-center gap-3 my-6">
            <div class="h-10">
                <h1 class="text-2xl">{{ props.title }}</h1>
                <!-- <Tag /> -->
            </div>
            <p class="h-full">{{ props.text }}</p>
            <div class="h-14 flex justify-between items-center">
                <Date />
                <Button />
            </div>
        </div>
    </div>
</template>

<style scoped>
.article{
    box-shadow: 0px 10px 65px 0px #dae0e8;
}
h1{
    font-weight: 600;
    color: #292a2d;
    font-family: 'ProximaNova', sans-serif;
}
p{
    color:#6c7d8e !important
}
</style>