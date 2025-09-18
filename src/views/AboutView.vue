<template>
  <div class="space-y-8 md:space-y-12">
    

    <!-- Recommended AI Tools Section -->
    <section class="py-8  bg-white rounded-2xl">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">🎆 推荐AI工具</h2>
          <div class="max-w-2xl mx-auto text-gray-500 text-base md:text-lg">
            我们精选了两个最优质的AI平台，让你轻松上手，创作出令人惊叹的宠物艺术作品
          </div>
        </div>

        <!-- Featured Tools -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <!-- 豆包 -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 md:p-8 border border-blue-200 transition-all duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-bold mr-3 md:mr-4 shadow-lg">
                  豆
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-gray-900">豆包</h3>
                  <p class="text-sm md:text-base text-blue-600 font-medium">字节跳动出品 • 免费使用</p>
                </div>
              </div>
              
              <div class="space-y-3 mb-4 md:mb-6">
                <div class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Seedream4.0 模型</span>
                </div>
              
              </div>

              <a
                href="https://doubao.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-full space-x-2 md:space-x-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
                <span>立即使用豆包</span>
              </a>
            </div>
          </div>

          <!-- LMArena -->
          <div class="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 md:p-8 border border-purple-200 transition-all duration-300">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-lg md:text-xl font-bold mr-3 md:mr-4 shadow-lg">
                  LM
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-bold text-gray-900">LMArena</h3>
                  <p class="text-sm md:text-base text-purple-600 font-medium">多模型对比 • 专业级质量</p>
                </div>
              </div>
              
              <div class="space-y-3 mb-4 md:mb-6">
                <div class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Nanobanana 模型</span>
                </div>
               
              </div>

              <a
                href="https://lmarena.ai"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-full space-x-2 md:space-x-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                </svg>
                <span>立即使用 LMArena</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- How to Use Section -->
    <section class="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-xl md:text-2xl font-bold text-center text-gray-900 mb-4">📖 使用指南</h2>
        <p class="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          跟随下面的步骤，轻松为你的宠物制作专属AI写真
        </p>
    
        <!-- Step-by-step Guide -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div class="text-center group px-2 md:px-0">
            <div class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl font-bold mx-auto mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              1
            </div>
            <h3 class="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">📷 准备宠物照片</h3>
            <p class="text-xs md:text-sm lg:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed">选择一张清晰、光线良好的宠物照片，表情生动的照片效果更佳</p>
            
          </div>
    
          <div class="text-center group px-2 md:px-0">
            <div class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl font-bold mx-auto mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              2
            </div>
            <h3 class="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">🎨 选择提示词</h3>
            <p class="text-xs md:text-sm lg:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed">浏览我们精选的提示词库，选择适合你宠物类型和喜爱风格的提示词</p>
            
          </div>
    
          <div class="text-center group px-2 md:px-0 col-span-2 md:col-span-1">
            <div class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full flex items-center justify-center text-lg md:text-xl lg:text-2xl font-bold mx-auto mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              3
            </div>
            <h3 class="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-2 md:mb-3 lg:mb-4">✨ AI生成写真</h3>
            <p class="text-xs md:text-sm lg:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed">在AI绘画工具中上传照片，粘贴提示词，等待AI生成作品</p>
           
          </div>
        </div>
    
      </div>
    </section>


    <!-- Friendly Links Section -->
    <section class="px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <!-- AI Tools & Platforms -->
        <div class="mb-12">
          <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6 flex items-center">
            <span class="text-xl md:text-2xl mr-2 md:mr-3">🤖</span>
            其他网站
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <a
              href="https://xhs.lz-t.top/"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white hover:bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <div class="flex items-center space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-lg md:text-xl font-bold">
                  解
                </div>
                <div class="flex-1">
                  <h4 class="text-sm md:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">小红书解析</h4>
                  <p class="text-xs md:text-sm text-gray-500">解析无水印图片和视频</p>
                </div>
              </div>
            </a>


            <a
              href="https://prompt.lz-t.top/"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white hover:bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <div class="flex items-center space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-lg md:text-xl font-bold">
                  AI
                </div>
                <div class="flex-1">
                  <h4 class="text-sm md:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">Image To Prompt</h4>
                  <p class="text-xs md:text-sm text-gray-500">上传图片，获取AI生成提示词</p>
                </div>
              </div>
            </a>

            
            <a
              href="https://eat.lz-t.top/"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white hover:bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <div class="flex items-center space-x-3 md:space-x-4">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-lg md:text-xl font-bold">
                  饭
                </div>
                <div class="flex-1">
                  <h4 class="text-sm md:text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">一饭封神</h4>
                  <p class="text-xs md:text-sm text-gray-500">AI菜谱生成，八大菜系</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script setup lang="ts">
</script>