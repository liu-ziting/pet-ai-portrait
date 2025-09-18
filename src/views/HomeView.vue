<template>
    <div class="space-y-8">
        <!-- Hero Section -->
        <section class="text-center py-8 bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl border border-violet-100">
            <div class="max-w-4xl mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    AI宠物写真提示词
                </h1>
                <p class="text-gray-600 mb-4 max-w-2xl mx-auto">
                    精选高质量AI绘画提示词，一键复制直接使用
                </p>
            </div>
        </section>

        <!-- Prompts Section -->
        <section id="prompts">
            <!-- Simple Divider -->
            <div class="flex items-center gap-4 mb-8">
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div class="flex items-center gap-2 text-sm text-gray-500">
                    <span class="text-lg">🎯</span>
                    <span>{{ prompts.length }} 个提示词可供选择</span>
                </div>
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
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
