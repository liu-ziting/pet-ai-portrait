<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Title -->
        <RouterLink to="/" class="flex items-center space-x-3">
          <div class="text-2xl">🍌</div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Nano Banana</h1>
            <p class="text-sm text-gray-500">提示词导航站</p>
          </div>
        </RouterLink>

        <!-- Navigation -->
        <!-- <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            to="/"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            首页
          </RouterLink>
          <RouterLink
            to="/favorites"
            class="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            收藏夹
          </RouterLink>
        </nav> -->

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
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>