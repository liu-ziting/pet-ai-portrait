<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
    <PetPromptCard
      v-for="prompt in prompts"
      :key="prompt.id"
      :prompt="prompt"
    />
  </div>
</template>

<script setup lang="ts">
import PetPromptCard from './PetPromptCard.vue'
import type { PetPrompt } from '@/types/prompt'

interface Props {
  prompts: PetPrompt[]
}

defineProps<Props>()
</script>