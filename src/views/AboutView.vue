<template>
  <div class="space-y-8">
    <!-- Page Header -->
    <section class="text-center py-12 border-b border-gray-200">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">关于项目</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto px-4">
        专为AI宠物写真设计的提示词工具，帮你轻松创作出令人惊叹的宠物艺术作品
      </p>
    </section>

    <!-- Recommended AI Tools Section -->
    <section class="py-12 bg-white border border-gray-200 rounded-3xl shadow-sm">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">推荐AI工具</h2>
          <p class="text-gray-600 max-w-xl mx-auto">
            精选两个优质AI平台，让你轻松上手创作
          </p>
        </div>

        <!-- Featured Tools -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 豆包 -->
          <div class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                豆
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">豆包</h3>
                <p class="text-gray-600">字节跳动 • 免费使用</p>
              </div>
            </div>
            
            <div class="mb-6">
              <div class="flex items-center text-gray-700 mb-2">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Seedream4.0 模型</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>高质量图像生成</span>
              </div>
            </div>

            <a
              href="https://doubao.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              <span>立即使用</span>
              <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>

          <!-- LMArena -->
          <div class="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-bold mr-4">
                LM
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">LMArena</h3>
                <p class="text-gray-600">多模型对比 • 专业级</p>
              </div>
            </div>
            
            <div class="mb-6">
              <div class="flex items-center text-gray-700 mb-2">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Nanobanana 模型</span>
              </div>
              <div class="flex items-center text-gray-700">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>多模型同时生成</span>
              </div>
            </div>

            <a
              href="https://lmarena.ai"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              <span>立即使用</span>
              <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Divider -->
    <div class="flex items-center justify-center py-8">
      <div class="flex-1 border-t border-gray-200"></div>
      <div class="mx-6">
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
      <div class="flex-1 border-t border-gray-200"></div>
    </div>

    <!-- How to Use Section -->
    <section class="py-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-3xl">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">使用指南</h2>
          <p class="text-gray-600 max-w-xl mx-auto">
            三步轻松为你的宠物制作专属AI写真
          </p>
        </div>
    
        <!-- Step-by-step Guide -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">准备宠物照片</h3>
            <p class="text-gray-600 leading-relaxed">选择一张清晰、光线良好的宠物照片，表情生动的照片效果更佳</p>
          </div>
    
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">选择提示词</h3>
            <p class="text-gray-600 leading-relaxed">浏览我们精选的提示词库，选择适合你宠物类型和喜爱风格的提示词</p>
          </div>
    
          <div class="text-center">
            <div class="w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">AI生成写真</h3>
            <p class="text-gray-600 leading-relaxed">在AI绘画工具中上传照片，粘贴提示词，等待AI生成作品</p>
          </div>
        </div>
    
      </div>
    </section>

    <!-- Divider -->
    <div class="flex items-center justify-center py-8">
      <div class="flex-1 border-t border-gray-200"></div>
      <div class="mx-6">
        <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
      <div class="flex-1 border-t border-gray-200"></div>
    </div>

    <!-- Other Projects Section -->
    <section class="py-12 bg-white border border-gray-200 rounded-3xl shadow-sm">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">其他项目</h3>
          <p class="text-gray-600">更多实用的AI工具和项目</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://xhs.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white hover:bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-bold mr-4">
                解
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">小红书解析</h4>
                <p class="text-sm text-gray-600">无水印下载</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm">解析小红书图片和视频，获取无水印内容</p>
          </a>

          <a
            href="https://prompt.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white hover:bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-bold mr-4">
                AI
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Image To Prompt</h4>
                <p class="text-sm text-gray-600">图生提示词</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm">上传图片，智能生成AI绘画提示词</p>
          </a>

          <a
            href="https://eat.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white hover:bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-bold mr-4">
                饭
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">一饭封神</h4>
                <p class="text-sm text-gray-600">AI菜谱生成</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm">智能生成菜谱，涵盖八大菜系</p>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>