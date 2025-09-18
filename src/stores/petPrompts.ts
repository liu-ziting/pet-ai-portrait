import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PetPrompt } from '@/types/prompt'
import { petPrompts } from '@/data/petPrompts'

export const usePetPromptsStore = defineStore('petPrompts', () => {
    const prompts = ref<PetPrompt[]>([...petPrompts].reverse())
    const isLoading = ref(false)

    const getAllPrompts = () => {
        return prompts.value
    }

    return {
        prompts,
        isLoading,
        getAllPrompts
    }
})