<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <section class="text-center py-6 border-b border-gray-200">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">关于项目</h1>
      <p class="text-gray-600 max-w-xl mx-auto px-4">
        专为AI宠物写真设计的提示词工具，帮你轻松创作出令人惊叹的宠物艺术作品
      </p>
    </section>

    <!-- Combined AI Tools & Guide Section -->
    <section class="py-8 bg-white border border-gray-200 rounded-2xl shadow-sm mx-4 xl:mx-8">
      <div class="px-6 xl:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          <!-- Left: AI Tools -->
          <div>
            <h2 class="text-xl font-bold text-gray-900 mb-6">推荐AI工具</h2>
            <div class="space-y-4">
              <!-- 豆包 -->
              <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                      豆
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">豆包</h3>
                      <p class="text-xs text-gray-600">字节跳动 • 免费</p>
                    </div>
                  </div>
                  <a
                    href="https://doubao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    使用
                  </a>
                </div>
                <p class="text-xs text-gray-600">Seedream4.0 模型，高质量图像生成</p>
              </div>

              <!-- LMArena -->
              <div class="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                      LM
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">LMArena</h3>
                      <p class="text-xs text-gray-600">多模型对比 • 专业级</p>
                    </div>
                  </div>
                  <a
                    href="https://lmarena.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    使用
                  </a>
                </div>
                <p class="text-xs text-gray-600">Nanobanana 模型，多模型同时生成</p>
              </div>
            </div>
          </div>

          <!-- Right: Usage Guide -->
          <div>
            <h2 class="text-xl font-bold text-gray-900 mb-6">使用指南</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">准备宠物照片</h3>
                  <p class="text-sm text-gray-600">选择一张清晰、光线良好的宠物照片，表情生动的照片效果更佳</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">选择提示词</h3>
                  <p class="text-sm text-gray-600">浏览我们精选的提示词库，选择适合你宠物类型和喜爱风格的提示词</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">AI生成写真</h3>
                  <p class="text-sm text-gray-600">在AI绘画工具中上传照片，粘贴提示词，等待AI生成作品</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <div class="flex items-center justify-center py-4">
      <div class="flex-1 border-t border-gray-200"></div>
      <div class="mx-4">
        <div class="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
      </div>
      <div class="flex-1 border-t border-gray-200"></div>
    </div>

    <!-- Other Projects Section -->
    <section class="py-6 bg-white border border-gray-200 rounded-2xl shadow-sm mx-4 xl:mx-8">
      <div class="px-6 xl:px-12">
        <h3 class="text-xl font-bold text-gray-900 mb-6">其他项目</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          <a
            href="https://xhs.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-100 transition-all duration-200"
          >
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                解
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">小红书解析</h4>
                <p class="text-xs text-gray-600">无水印下载</p>
              </div>
            </div>
            <p class="text-xs text-gray-600">解析小红书图片和视频，获取无水印内容</p>
          </a>

          <a
            href="https://prompt.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-100 transition-all duration-200"
          >
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                AI
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">Image To Prompt</h4>
                <p class="text-xs text-gray-600">图生提示词</p>
              </div>
            </div>
            <p class="text-xs text-gray-600">上传图片，智能生成AI绘画提示词</p>
          </a>

          <a
            href="https://eat.lz-t.top/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-100 transition-all duration-200"
          >
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                饭
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 text-sm">一饭封神</h4>
                <p class="text-xs text-gray-600">AI菜谱生成</p>
              </div>
            </div>
            <p class="text-xs text-gray-600">智能生成菜谱，涵盖八大菜系</p>
          </a>

          <!-- Placeholder for future projects on large screens -->
          <div class="bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-50 hidden xl:block">
            <div class="flex items-center mb-2">
              <div class="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                +
              </div>
              <div>
                <h4 class="font-semibold text-gray-600 text-sm">更多项目</h4>
                <p class="text-xs text-gray-500">即将推出</p>
              </div>
            </div>
            <p class="text-xs text-gray-500">正在开发更多实用的AI工具</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>