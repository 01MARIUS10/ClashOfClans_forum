<script setup>

let props = defineProps({
    text:{
        default:'18.05.18 12:42'
    }
})
</script>

<template>
    <p class="text-center px-3 py-2 text-sm bg-gray-100 text-gray-900 w-[120px]">
        {{ props.text }}
    </p>
</template>