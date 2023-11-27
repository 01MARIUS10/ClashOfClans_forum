<script setup>
import {  reactive, ref, computed } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import Button from "@/components/Cells/Button.vue";

let slides = ref([
    {name:'hello'},{name:'hello'},{name:'hello'},
])
</script>

<template>
    <div class="w-full h-full relative">
        <Carousel
            :items-to-show="1"
            :wrap-around="true"
            :transition="1000"
            :autoplay="200000"
            :mouseDrag="false"
        >
            <Slide v-for="(projet,j) in slides" :key="j">
                <figure class="h-full flex px-12 pt-5 pb-3">
                    <div class="w-1/2">
                        <img src="" alt="" class="w-full h-full iii">
                    </div>
                    <figcaption class="w-1/2 flex flex-col justify-center">
                        <h1 class="text-7xl font-bold text-start">TITLE</h1>
                        <span class="hr-intro mt-5 mb-3"></span>
                        <p class="text-lg text-start mb-2">Lorem ipsum, dolor. Itaque quibusdam debitis maiores eligendi aperiam reprehenderit consectetur minima nulla totam? Nisi?</p>
                        <Button class="text-start" icon="/icons/ic22.png" color="orange" />
                    </figcaption>
                </figure>
            </Slide>
            <template #addons>
                <!-- <Navigation /> -->
                <Pagination :isSliding="true" />
            </template>
        </Carousel>
    </div>
</template>
<style >
section{
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 50px;
}
section .carousel__viewport ol{
    height: 100%;
}

.iii {
    background: url(/icons/img-ste1.png) no-repeat;
    display: block;
    width: 560px;
    height: 420px;
    background-size: contain;
}
p {
    /* margin: 40px 0; */
    /* color: #6c7d8e !important; */
}
.carousel__pagination{
    margin-top: -20px;
}
.carousel__pagination-button::after {
    display: block;
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    border-radius: 100%;
    background: #c4d3ea;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    opacity: 1;
    background: linear-gradient(to right, #5167d9 , #459df0);
    box-shadow: 0px 10px 45px 0px rgba(153, 153, 153, 0.45);
}

span.hr-intro {
    width: 142px;
    height: 3px;
    background: linear-gradient(to right, #5260d5 , #42a4f3);
    display: -webkit-box;
}

</style>