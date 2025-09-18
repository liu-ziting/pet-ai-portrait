# 🐾 AI宠物写真提示词合集

> 精选的AI宠物写真提示词合集，帮助您为可爱的宠物生成专属写真。支持多种宠物类型和艺术风格，提供一键复制功能，让AI绘画变得更简单！

## ✨ 项目特点

- 📱 **移动端优化**: 完美适配手机、平板等各种设备
- 📋 **一键复制**: 点击即可复制提示词到剪贴板
- ⚡ **极速加载**: 静态数据驱动，无需网络请求
- 🔍 **智能筛选**: 按宠物类型和艺术风格快速筛选
- 🎯 **TypeScript**: 完整的类型安全支持
- 🌙 **现代设计**: 基于Tailwind CSS的精美UI设计

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/pet-ai-portrait.git
cd pet-ai-portrait

# 安装依赖
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用

### 构建生产版本

```bash
# 类型检查 + 构建
npm run build

# 预览构建结果
npm run preview
```

## 📦 技术栈

### 核心技术
- **Vue 3** - 渐进式JavaScript框架
- **TypeScript** - 类型安全的JavaScript超集
- **Vite** - 下一代前端构建工具
- **Tailwind CSS** - 实用优先的CSS框架

### 状态管理与路由
- **Pinia** - Vue 3官方推荐的状态管理库
- **Vue Router** - Vue.js官方路由管理器

### 开发工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Vitest** - 单元测试框架
- **PostCSS** - CSS后处理器

## 📁 项目结构

```
pet-ai-portrait/
├── src/
│   ├── components/          # Vue组件
│   │   ├── common/         # 公共组件
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── ImagePreview.vue
│   │   │   └── LoadingSpinner.vue
│   │   └── prompt/         # 提示词相关组件
│   │       ├── PetPromptCard.vue
│   │       └── PetPromptGrid.vue
│   ├── data/               # 静态数据
│   │   └── petPrompts.ts   # 提示词数据
│   ├── stores/             # Pinia状态管理
│   │   └── petPrompts.ts   # 提示词store
│   ├── types/              # TypeScript类型定义
│   │   └── prompt.ts       # 提示词类型
│   ├── utils/              # 工具函数
│   │   ├── clipboard.ts    # 剪贴板操作
│   │   ├── debounce.ts     # 防抖函数
│   │   └── storage.ts      # 本地存储
│   ├── views/              # 页面组件
│   │   ├── HomeView.vue    # 首页
│   │   └── AboutView.vue   # 关于页
│   ├── router/             # 路由配置
│   │   └── index.ts
│   ├── App.vue             # 根组件
│   ├── main.ts             # 应用入口
│   └── style.css           # 全局样式
├── public/                 # 静态资源
├── docs/                   # 文档
│   ├── DATA_MANAGEMENT.md  # 数据管理指南
│   └── USAGE.md           # 使用说明
├── package.json            # 项目配置
├── vite.config.ts          # Vite配置
├── tailwind.config.js      # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── README.md              # 项目说明
```

## 🎯 使用指南

### 浏览提示词

1. 打开应用，浏览精选的AI宠物写真提示词
2. 使用筛选功能按宠物类型或艺术风格查找
3. 查看示例图片预览生成效果
4. 点击"复制提示词"按钮一键复制到剪贴板

### 在AI绘画工具中使用

1. 复制心仪的提示词
2. 在您喜欢的AI绘画工具中粘贴（如Midjourney、Stable Diffusion、DALL-E等）
3. 根据需要调整参数和权重
4. 生成您宠物的专属写真

## 🔧 开发命令

```bash
# 开发服务器
npm run dev

# 构建生产版本（包含类型检查）
npm run build

# 预览构建结果
npm run preview

# 运行测试
npm run test




<div align="center">
  <p>如果这个项目对您有帮助，请给个 ⭐ Star 支持一下！</p>
  <p>Made with ❤️ by AI Art Community</p>
</div>