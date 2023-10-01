<script setup>
let props = defineProps({
    icon:{
        default: '/icons/ic26.png'
    },
    text:{
        default: 'template'
    },
    color:{
        default: ''
    },
})
</script>
<template>
    <button class="px-5 py-4 flex items-center">
        <img :src="props.icon" alt="icon" class="w-1/3 p-3">
        <span class="w-2/3">{{ props.text }}</span>
    </button>
</template>

<style scoped>
button{
    background: linear-gradient(to right, #ffa857, #fe5a73);
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
    /* display: block; */
    float: left;
    transition: .5s;
    line-height: 45px;
    text-align: -webkit-center;
}

</style>