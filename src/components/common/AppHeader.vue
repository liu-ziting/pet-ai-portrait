<template>
  <header class="bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Title -->
        <RouterLink to="/" class="flex items-center space-x-3">
          <div class="text-2xl">🐾</div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Pet AI Portrait</h1>
            <p class="text-sm text-gray-500">宠物AI肖像提示词库</p>
          </div>
        </RouterLink>

        <!-- Usage Hint -->
        <div class="hidden md:flex items-center space-x-2 text-sm text-gray-600">
          <div class="flex items-center space-x-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
            <span>提示：点击卡片查看大图</span>
          </div>
        </div>

      </div>

      <!-- Mobile menu -->
      <!-- <div v-if="showMobileMenu" class="md:hidden py-4 border-t border-gray-200">
        <nav class="flex flex-col space-y-4">
          <RouterLink
            to="/"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
            @click="closeMobileMenu"
          >
            首页
          </RouterLink>
          <RouterLink
            to="/favorites"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
            @click="closeMobileMenu"
          >
            收藏夹
          </RouterLink>
        </nav>
      </div> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>