<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-12 bg-gradient-to-br from-violet-50 via-blue-50 to-pink-50 rounded-2xl border border-violet-100/50 shadow-sm">
            <div class="max-w-4xl mx-auto px-4">
                <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    AI宠物写真提示词
                </h1>
                <p class="text-gray-600 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
                    精选高质量AI宠物写真提示词，一键复制直接使用
                </p>
                <div class="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <div class="w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-pulse"></div>
                    <span>高质量提示词 • 快速复制 • 持续更新</span>
                    <div class="w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>

        <!-- Prompts Section -->
        <section id="prompts">
            <!-- Simple Divider -->
            <div class="flex items-center gap-6 mb-10">
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div class="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                    <div class="w-8 h-8 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm font-bold">{{ prompts.length }}</span>
                    </div>
                    <span class="text-gray-700 font-medium">个精选提示词</span>
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>

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
