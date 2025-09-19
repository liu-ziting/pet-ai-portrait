<template>
  <header class="sticky top-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200/50 shadow-sm">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo and Brand -->
        <RouterLink 
          to="/" 
          class="flex items-center space-x-3 group transition-all duration-200 hover:scale-105"
        >
          <div class="relative">
            <div class="text-2xl group-hover:animate-bounce">🐾</div>
            <div class="absolute -inset-1 bg-gray-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-bold text-gray-900">
              Pet AI Prompt
            </h1>
            <p class="text-xs text-gray-600 font-medium hidden sm:block">AI宠物写真提示词库</p>
          </div>
        </RouterLink>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink 
            to="/" 
            class="nav-link"
            active-class="nav-link-active"
            exact-active-class="nav-link-active"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
            </svg>
            <span>提示词库</span>
          </RouterLink>
          
          <RouterLink 
            to="/about" 
            class="nav-link"
            active-class="nav-link-active"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>使用指南</span>
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="打开菜单"
        >
          <svg 
            class="w-5 h-5 text-gray-600 transition-transform duration-200" 
            :class="{ 'rotate-90': showMobileMenu }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <nav class="px-4 py-4 space-y-3">
            <RouterLink
              to="/"
              class="mobile-nav-link"
              active-class="mobile-nav-link-active"
              exact-active-class="mobile-nav-link-active"
              @click="closeMobileMenu"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
              </svg>
              <span>提示词库</span>
            </RouterLink>
            
            <RouterLink
              to="/about"
              class="mobile-nav-link"
              active-class="mobile-nav-link-active"
              @click="closeMobileMenu"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>使用指南</span>
            </RouterLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mobile menu state
const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}
</script>

<style scoped>
/* Navigation Link Styles */
.nav-link {
  @apply flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50;
}

.nav-link-active {
  @apply text-gray-900 bg-gray-100;
}

.mobile-nav-link {
  @apply flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50;
}

.mobile-nav-link-active {
  @apply text-gray-900 bg-gray-100;
}
</style>