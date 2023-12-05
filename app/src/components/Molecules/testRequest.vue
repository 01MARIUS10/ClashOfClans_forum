<script setup>
import { ref,watch,onMounted } from 'vue'
import axios from 'axios'

let token = ref("")

watch(token,()=>{
    console.log(token.value)
    token.value = token.value.trim()
})

onMounted(()=>{
    token.value = "Hello world"
})

const sendRequest = async (token) => {
let tag = '#2LVPJRGLV'
  let url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(tag)}`
  let response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log('response is', response)
}
</script>

<template>
  <form id="login_form" @submit.prevent="(e) =>sendRequest(token)" method="POST" class="flex flex-col justify-center">
    <label class="text-sm font-medium">token</label>
    <textarea
      class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
      name="messages"
      rows="16"

      v-model="token"
    ></textarea>
    <button
      class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
      type="submit"
    >
      <span id="login_process_state" class="hidden">Sending :)</span>
      <span id="login_default_state">Donate<span id="subtotal"></span></span>
    </button>
  </form>
</template>
