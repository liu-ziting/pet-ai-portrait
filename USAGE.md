# 使用说明

## 快速开始

### 1. 从 README.md 转换数据

如果你想将现有的 README.md 内容转换为 JSON 格式：

```bash
# 使用 npm 脚本
npm run convert-data

# 或直接运行脚本
node scripts/convert-readme-to-json.cjs
```

这会生成 `prompts-data.json` 文件，包含所有从 README.md 解析的提示词数据。

### 2. 启动开发服务器

```bash
npm run dev
```

应用会自动检测并优先使用 `prompts-data.json` 文件中的数据。

## 数据管理

### 添加新的提示词案例

1. **方法一：直接编辑 JSON 文件**

    在 `prompts-data.json` 的 `cases` 数组中添加新案例：

    ```json
    {
        "caseNumber": 101,
        "title": "你的案例标题",
        "author": "作者名",
        "sourceUrl": "https://example.com/source",
        "category": "创意设计",
        "tags": ["标签1", "标签2"],
        "images": {
            "gemini": "Gemini图片链接",
            "gpt4o": "GPT-4o图片链接"
        },
        "prompt": "你的提示词内容",
        "notes": "使用说明（可选）",
        "requiresUpload": false,
        "createdAt": "2025-01-04T00:00:00Z",
        "updatedAt": "2025-01-04T00:00:00Z"
    }
    ```

2. **方法二：更新 README.md 后重新转换**
    - 在 README.md 中按现有格式添加新案例
    - 运行 `npm run convert-data` 重新生成 JSON 文件

### 修改现有案例

直接编辑 `prompts-data.json` 文件中对应的案例对象，记得更新 `updatedAt` 字段。

### 管理分类

在 `prompts-data.json` 的 `categories` 数组中添加或修改分类定义。

## 数据结构说明

### 案例对象字段

- `caseNumber`: 案例编号（必填）
- `title`: 案例标题（必填）
- `author`: 作者名称（必填）
- `sourceUrl`: 原文链接
- `category`: 分类名称
- `tags`: 标签数组
- `images`: 图片对象
    - `gemini`: Gemini 生成的图片链接
    - `gpt4o`: GPT-4o 生成的图片链接
- `prompt`: 提示词内容（必填）
- `notes`: 使用说明或注意事项
- `requiresUpload`: 是否需要上传参考图片
- `createdAt`: 创建时间
- `updatedAt`: 更新时间

### 可用分类

- 3D艺术 🎨
- 动漫风格 🎭
- 写实摄影 📸
- 艺术插画 🖼️
- 创意设计 💡
- 可爱风格 🥰
- 未来科幻 🚀
- 复古怀旧 📻
- 极简风格 ⚪
- 游戏风格 🎮
- 其他 ✨

## 开发命令

```bash
# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 运行测试
npm run test

# 代码检查
npm run lint

# 代码格式化
npm run format

# 转换 README.md 到 JSON
npm run convert-data
```

## 故障排除

### 数据加载问题

1. **JSON 文件不存在或格式错误**
    - 检查 `prompts-data.json` 是否存在于项目根目录
    - 使用 JSON 验证工具检查语法
    - 运行 `npm run convert-data` 重新生成

2. **应用显示空白或错误**
    - 打开浏览器开发者工具查看控制台错误
    - 确认必填字段是否完整
    - 检查分类名称是否在 categories 中定义

3. **图片无法显示**
    - 确认图片链接是否可访问
    - 检查图片链接格式是否正确

### 转换脚本问题

1. **无法解析 README.md**
    - 确认 README.md 文件存在
    - 检查案例格式是否符合预期模式
    - 查看脚本输出的错误信息

2. **解析结果不完整**
    - 检查案例标题格式：`### 案例 X：标题 (by 作者)`
    - 确认提示词代码块格式：` ```提示词内容``` `
    - 验证图片链接格式

## 贡献指南

欢迎为项目贡献新的提示词案例！

1. Fork 项目
2. 添加新案例到 `prompts-data.json`
3. 确保数据格式正确
4. 测试应用是否正常工作
5. 提交 Pull Request

---

通过这套系统，你可以轻松管理和维护提示词数据库，同时保持良好的数据结构和用户体验。
