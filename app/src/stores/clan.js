import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClanStore = defineStore('clan', () => {
  const clan = ref({})
  
  return { clan}
})
