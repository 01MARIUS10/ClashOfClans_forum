<script setup>
import Chips from '@/components/Cells/Chips.vue';
import { getAllClanTag,findTagByName } from "@/services/tags";

let props = defineProps({
    clan: {
        type: Object,
        default: {
           
        }
    }
})

let myTag = getAllClanTag()[0]

let createTag = (img,text)=>{
    return {"id": null,
        "name": text,
        "iconUrls": {
            "small": img,
            "medium": img
        }}
}
// let a = findTagByName(props.clan.capitalLeague.name)
// console.log('ooo',a)
</script>

<template>
    <div class="profil_head relative z-10 h-96 w-screen flex flex-col justify-end items-center gap-1 pb-3 text-white">
        <img :src="props.clan.badgeUrls.large" alt="" class="h-40 w-40">
        <p class="clan_name font-medium text-6xl">{{ props.clan.name }}</p>
        
        <div class="flex gap-5">
        </div>
        <div class="flex gap-5">
            <Chips :tag="{...findTagByName(`Builder Base`,'clan'),name:`${props.clan.members} members`}"/>
            <Chips :tag="{name:props.clan.tag}"/>
            <Chips :tag="{...findTagByName(`Trophy Pushing`,'player'),name:`Trophy ${props.clan.trophies}` }"/>
            <Chips :tag="{name:props.clan.location.name}"/>
            <Chips :tag="{...findTagByName(`Donations`,'player'),name:`Donations`}"/>
        </div>
        <div class="flex gap-5">
            
            <Chips :tag="{...findTagByName(`Clan Capital`,'clan'),name:`level ${props.clan.clanLevel}`}"/>
            <Chips :tag="{...findTagByName(`Clan Games`,'clan'),name:`point ${props.clan.clanPoints}`}"/>

            
            <Chips :tag="{...findTagByName(props.clan.capitalLeague.name),name:'Capital League'}"/>
            <Chips :tag="{...findTagByName(props.clan.warLeague.name),name:'War League'}"/>
            
            
        </div>
    </div>
</template>
<style scoped>
.profil_head::before {
    position: absolute;
    content: ' ';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('https://www.clashofstats.com/_nuxt/img/player-background-2.19dfc04.jpg');
    background-size: cover;
    backdrop-filter: brightness(120%);
    z-index: 1;
    filter: blur(0px) brightness(60%);
}
.profil_head *{
    z-index: 2;
}
</style>