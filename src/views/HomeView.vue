<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-12">
            <div class="max-w-3xl mx-auto">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🐾 AI宠物写真提示词</h1>
                <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                    精选的AI宠物写真提示词合集<br />
                    为你的毛孩子生成专属的可爱写真
                </p>
            </div>
        </section>

     

        <!-- All Prompts -->
        <section>

            <div v-if="isLoading" class="flex justify-center py-12">
                <LoadingSpinner size="lg" text="加载中..." />
            </div>

            <div v-else>
                <PetPromptGrid :prompts="prompts" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PetPromptGrid from '@/components/prompt/PetPromptGrid.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { usePetPromptsStore } from '@/stores/petPrompts'
import type { PetPrompt } from '@/types/prompt'

const petPromptsStore = usePetPromptsStore()
const isLoading = ref(false)
const prompts = ref<PetPrompt[]>([])

onMounted(() => {
    prompts.value = petPromptsStore.getAllPrompts()
})
</script>
