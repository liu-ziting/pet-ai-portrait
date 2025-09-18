<template>
    <div id="app" class="min-h-screen bg-gray-50">
        <AppHeader />
        <main class="container mx-auto px-4 py-8">
            <RouterView />
        </main>
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>
