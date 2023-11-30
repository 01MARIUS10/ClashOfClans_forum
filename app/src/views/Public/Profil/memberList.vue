<script setup>
import { findTagByName } from '@/services/tags/http.js'
let props = defineProps({
    data: {
        type: Object,
        default: [
            {}
        ]
    }
})

let source = (tag)=>{
    let p = tag.iconUrls
    return (p)? (p.medium? p.medium:p.small) : (null)
}
</script>
<template>
    <div class="member">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" class="px-6 py-3">
                            role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            league
                        </th>
                        <th scope="col" class="px-6 py-3">
                            trophee
                        </th>
                        <th scope="col" class="px-6 py-3">
                            xp
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="player in props.data" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ player.name }}
                        </th>
                        <td class="px-6 py-4">
                            {{ player.role }}
                        </td>
                        <td class="px-6 py-4 gap-2">
                            <div class="flex items-center ">
                                <img class="h-7" :src="source(findTagByName(player.league.name))" alt="">
                                <span>
                                    {{ player.league.name }}
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4 gap-2">
                            <div class="flex items-center ">
                                <img class="h-7" :src="source(findTagByName('Trophy Pushing', 'clan'))" alt="">
                                <span>
                                    {{ player.trophies }}
                                </span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            {{ player.expLevel }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>