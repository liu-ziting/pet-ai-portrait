# 提示词数据管理指南

## 概述

本项目现在支持两种数据源：

1. **JSON 文件** (推荐) - `prompts-data.json`
2. **README.md 解析** (备用) - 从 README.md 动态解析

系统会优先尝试从 JSON 文件加载数据，如果失败则回退到 README.md 解析。

## JSON 数据结构

### 完整结构示例

```json
{
    "version": "1.0.0",
    "lastUpdated": "2025-01-04",
    "description": "Awesome Nano Banana Images 提示词数据集",
    "totalCases": 100,
    "cases": [
        {
            "caseNumber": 100,
            "title": "实物与手绘涂鸦创意广告",
            "author": "azed_ai",
            "sourceUrl": "https://x.com/azed_ai/status/1923016036120658122",
            "category": "创意设计",
            "tags": ["创意", "广告", "手绘", "涂鸦"],
            "images": {
                "gemini": "https://example.com/gemini-image.png",
                "gpt4o": "https://example.com/gpt4o-image.png"
            },
            "prompt": "提示词内容...",
            "notes": "使用说明或注意事项",
            "requiresUpload": false,
            "createdAt": "2025-01-04T00:00:00Z",
            "updatedAt": "2025-01-04T00:00:00Z"
        }
    ],
    "categories": [
        {
            "id": "creative-design",
            "name": "创意设计",
            "description": "创意十足的设计作品",
            "icon": "💡"
        }
    ]
}
```

### 字段说明

#### 案例对象 (Case)

- `caseNumber`: 案例编号 (数字)
- `title`: 案例标题 (字符串)
- `author`: 作者名称 (字符串)
- `sourceUrl`: 原文链接 (字符串)
- `category`: 分类名称 (字符串)
- `tags`: 标签数组 (字符串数组)
- `images`: 图片对象
    - `gemini`: Gemini 生成的图片链接 (可选)
    - `gpt4o`: GPT-4o 生成的图片链接 (可选)
- `prompt`: 提示词内容 (字符串)
- `notes`: 使用说明或注意事项 (可选字符串)
- `requiresUpload`: 是否需要上传参考图片 (布尔值)
- `createdAt`: 创建时间 (ISO 8601 格式)
- `updatedAt`: 更新时间 (ISO 8601 格式)

#### 分类对象 (Category)

- `id`: 分类ID (字符串，kebab-case)
- `name`: 分类名称 (字符串)
- `description`: 分类描述 (字符串)
- `icon`: 分类图标 (emoji 字符串)

## 数据管理工作流

### 1. 从 README.md 转换到 JSON

使用提供的转换脚本：

```bash
# 运行转换脚本
node scripts/convert-readme-to-json.js
```

这会：

- 解析 README.md 中的所有案例
- 自动分类和标签提取
- 生成 `prompts-data.json` 文件

### 2. 手动维护 JSON 文件

直接编辑 `prompts-data.json` 文件：

```bash
# 使用你喜欢的编辑器
code prompts-data.json
# 或
vim prompts-data.json
```

### 3. 添加新案例

在 `prompts-data.json` 的 `cases` 数组中添加新对象：

```json
{
    "caseNumber": 101,
    "title": "新案例标题",
    "author": "作者名",
    "sourceUrl": "https://example.com/source",
    "category": "创意设计",
    "tags": ["标签1", "标签2"],
    "images": {
        "gemini": "图片链接1",
        "gpt4o": "图片链接2"
    },
    "prompt": "提示词内容",
    "notes": "使用说明",
    "requiresUpload": false,
    "createdAt": "2025-01-04T00:00:00Z",
    "updatedAt": "2025-01-04T00:00:00Z"
}
```

### 4. 更新现有案例

直接修改 JSON 文件中对应的案例对象，记得更新 `updatedAt` 字段。

### 5. 管理分类

在 `categories` 数组中添加或修改分类：

```json
{
    "id": "new-category",
    "name": "新分类",
    "description": "新分类的描述",
    "icon": "🆕"
}
```

## 自动分类规则

系统会根据标题和提示词内容自动分类：

- **3D艺术**: 包含 "3d", "立体", "三维"
- **动漫风格**: 包含 "动漫", "卡通", "anime"
- **写实摄影**: 包含 "写实", "摄影", "照片"
- **艺术插画**: 包含 "艺术", "绘画", "插画"
- **创意设计**: 包含 "创意", "设计", "广告"
- **可爱风格**: 包含 "可爱", "萌", "q版"
- **未来科幻**: 包含 "未来", "科幻", "cyberpunk"
- **复古怀旧**: 包含 "复古", "怀旧", "vintage"
- **极简风格**: 包含 "极简", "简约", "minimalist"
- **游戏风格**: 包含 "游戏", "像素", "game"
- **其他**: 不匹配以上任何规则

## 自动标签提取

系统会根据内容自动提取标签：

- 3D, 动漫, 写实, 艺术, 创意, 可爱, 未来, 复古, 极简, 游戏
- 黑白, 肖像, 剪影, 玻璃, 针织, 玩偶, 手办, 定制

## 数据验证

确保数据质量的检查项：

1. **必填字段**: `caseNumber`, `title`, `author`, `prompt`
2. **唯一性**: `caseNumber` 应该唯一
3. **分类匹配**: `category` 应该在 `categories` 中存在
4. **URL 格式**: `sourceUrl` 和图片链接应该是有效的 URL
5. **时间格式**: 时间字段应该是 ISO 8601 格式

## 最佳实践

1. **版本控制**: 每次更新数据时，更新 `version` 和 `lastUpdated` 字段
2. **备份**: 定期备份 JSON 文件
3. **测试**: 更新后在本地测试应用是否正常加载
4. **文档**: 为复杂的提示词添加详细的 `notes`
5. **一致性**: 保持作者名称、分类名称的一致性

## 故障排除

### JSON 文件加载失败

- 检查 JSON 语法是否正确
- 确保文件位于项目根目录
- 查看浏览器控制台的错误信息

### 数据显示异常

- 验证必填字段是否完整
- 检查分类是否在 categories 中定义
- 确认图片链接是否可访问

### 转换脚本问题

- 确保 README.md 格式符合预期
- 检查案例标题格式是否正确
- 验证提示词代码块格式

## 开发工具

### VS Code 扩展推荐

- JSON Tools: JSON 格式化和验证
- JSON Schema: JSON 结构验证
- Prettier: 代码格式化

### 在线工具

- [JSONLint](https://jsonlint.com/): JSON 语法验证
- [JSON Formatter](https://jsonformatter.org/): JSON 格式化

## 贡献指南

如果你想为项目贡献新的提示词案例：

1. Fork 项目
2. 在 `prompts-data.json` 中添加新案例
3. 确保数据格式正确
4. 提交 Pull Request
5. 在 PR 描述中说明添加的案例内容

---

通过这套数据管理系统，你可以更方便地维护和扩展提示词数据库，同时保持数据的结构化和一致性。
