#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * 将README.md内容转换为JSON格式的脚本
 */

// 解析README.md内容，提取案例数据
function parseReadmeContent(content) {
    const cases = []

    try {
        // 匹配案例模式
        const casePattern = /### 案例 (\d+)：(.+?) \(by (.+?)\)([\s\S]*?)(?=### 案例 \d+：|$)/g

        let match
        while ((match = casePattern.exec(content)) !== null) {
            const [, caseNumber, title, author, sectionContent] = match

            // 提取原文链接
            const sourceMatch = sectionContent.match(/\[原文链接\]\((.+?)\)/)
            const sourceUrl = sourceMatch ? sourceMatch[1] : ''

            // 提取图片链接
            const imageMatches = sectionContent.match(/<img src="([^"]+)"/g)
            let geminiImage = ''
            let gpt4oImage = ''

            if (imageMatches && imageMatches.length >= 1) {
                const firstImgMatch = imageMatches[0].match(/src="([^"]+)"/)
                if (firstImgMatch) geminiImage = firstImgMatch[1]

                if (imageMatches.length >= 2) {
                    const secondImgMatch = imageMatches[1].match(/src="([^"]+)"/)
                    if (secondImgMatch) gpt4oImage = secondImgMatch[1]
                }
            }

            // 提取提示词
            const promptMatch = sectionContent.match(/\*\*提示词\*\*\s*```\s*([\s\S]*?)\s*```/)
            const prompt = promptMatch ? promptMatch[1].trim() : ''

            // 提取注意事项
            const notesMatch = sectionContent.match(/\*注意[：:]\s*(.*?)(?=\n\n|\*\*|$)/s)
            const notes = notesMatch ? notesMatch[1].trim() : undefined

            // 检查是否需要上传图片
            const requiresUpload = sectionContent.includes('需上传参考图片') ||
                sectionContent.includes('**需上传参考图片**') ||
                prompt.includes('【上传图片】')

            if (caseNumber && title && prompt) {
                cases.push({
                    caseNumber: parseInt(caseNumber),
                    title: title.trim(),
                    author: cleanAuthor(author.trim()),
                    sourceUrl: sourceUrl.trim(),
                    geminiImage: geminiImage.trim(),
                    gpt4oImage: gpt4oImage.trim(),
                    prompt: prompt,
                    notes: notes,
                    requiresUpload: requiresUpload
                })
            }
        }
    } catch (error) {
        console.error('Error parsing README content:', error)
    }

    return cases.sort((a, b) => b.caseNumber - a.caseNumber) // 按案例号降序排列
}

// 清理作者名称
function cleanAuthor(author) {
    return author.replace(/[@\[\]]/g, '').trim()
}

// 根据标题和内容自动分类
function categorizePrompt(title, content) {
    const text = (title + ' ' + content).toLowerCase()

    if (text.includes('3d') || text.includes('立体') || text.includes('三维')) return '3D艺术'
    if (text.includes('动漫') || text.includes('卡通') || text.includes('anime')) return '动漫风格'
    if (text.includes('写实') || text.includes('摄影') || text.includes('照片')) return '写实摄影'
    if (text.includes('艺术') || text.includes('绘画') || text.includes('插画')) return '艺术插画'
    if (text.includes('创意') || text.includes('设计') || text.includes('广告')) return '创意设计'
    if (text.includes('可爱') || text.includes('萌') || text.includes('q版')) return '可爱风格'
    if (text.includes('未来') || text.includes('科幻') || text.includes('cyberpunk')) return '未来科幻'
    if (text.includes('复古') || text.includes('怀旧') || text.includes('vintage')) return '复古怀旧'
    if (text.includes('极简') || text.includes('简约') || text.includes('minimalist')) return '极简风格'
    if (text.includes('游戏') || text.includes('像素') || text.includes('game')) return '游戏风格'

    return '其他'
}

// 提取标签
function extractTags(title, content) {
    const tags = []
    const text = (title + ' ' + content).toLowerCase()

    const tagMap = {
        '3D': ['3d', '立体', '三维'],
        '动漫': ['动漫', '卡通', 'anime'],
        '写实': ['写实', '摄影', '照片'],
        '艺术': ['艺术', '绘画', '插画'],
        '创意': ['创意', '设计', '广告'],
        '可爱': ['可爱', '萌', 'q版'],
        '未来': ['未来', '科幻', 'cyberpunk'],
        '复古': ['复古', '怀旧', 'vintage'],
        '极简': ['极简', '简约', 'minimalist'],
        '游戏': ['游戏', '像素', 'game'],
        '黑白': ['黑白', '单色'],
        '肖像': ['肖像', '人像'],
        '剪影': ['剪影', '轮廓'],
        '玻璃': ['玻璃', '透明'],
        '针织': ['针织', '毛线'],
        '玩偶': ['玩偶', '娃娃'],
        '手办': ['手办', '模型'],
        '定制': ['定制', '个性化']
    }

    Object.entries(tagMap).forEach(([tag, keywords]) => {
        if (keywords.some(keyword => text.includes(keyword))) {
            tags.push(tag)
        }
    })

    return [...new Set(tags)] // 去重
}

// 将解析的案例转换为JSON格式
function convertCasesToJson(cases) {
    return cases.map(case_ => ({
        caseNumber: case_.caseNumber,
        title: case_.title,
        author: case_.author,
        sourceUrl: case_.sourceUrl,
        category: categorizePrompt(case_.title, case_.prompt),
        tags: extractTags(case_.title, case_.prompt),
        images: {
            gemini: case_.geminiImage || undefined,
            gpt4o: case_.gpt4oImage || undefined
        },
        prompt: case_.prompt,
        notes: case_.notes || undefined,
        requiresUpload: case_.requiresUpload || false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }))
}

// 获取分类定义
function getCategories() {
    return [
        {
            id: "3d-art",
            name: "3D艺术",
            description: "立体感强烈的三维艺术作品",
            icon: "🎨"
        },
        {
            id: "anime-style",
            name: "动漫风格",
            description: "日系动漫和卡通风格图像",
            icon: "🎭"
        },
        {
            id: "realistic-photography",
            name: "写实摄影",
            description: "逼真的摄影风格作品",
            icon: "📸"
        },
        {
            id: "art-illustration",
            name: "艺术插画",
            description: "富有艺术感的插画作品",
            icon: "🖼️"
        },
        {
            id: "creative-design",
            name: "创意设计",
            description: "创意十足的设计作品",
            icon: "💡"
        },
        {
            id: "cute-style",
            name: "可爱风格",
            description: "萌系可爱的Q版作品",
            icon: "🥰"
        },
        {
            id: "futuristic-scifi",
            name: "未来科幻",
            description: "充满科技感的未来主义作品",
            icon: "🚀"
        },
        {
            id: "retro-vintage",
            name: "复古怀旧",
            description: "怀旧复古风格作品",
            icon: "📻"
        },
        {
            id: "minimalist",
            name: "极简风格",
            description: "简约清新的极简主义作品",
            icon: "⚪"
        },
        {
            id: "game-style",
            name: "游戏风格",
            description: "游戏相关的像素和概念艺术",
            icon: "🎮"
        },
        {
            id: "other",
            name: "其他",
            description: "其他风格的精彩作品",
            icon: "✨"
        }
    ]
}

// 主函数
function main() {
    try {
        console.log('🚀 开始转换 README.md 到 JSON 格式...')

        // 读取README.md文件
        const readmePath = path.join(process.cwd(), 'README.md')
        if (!fs.existsSync(readmePath)) {
            console.error('❌ 找不到 README.md 文件')
            process.exit(1)
        }

        const readmeContent = fs.readFileSync(readmePath, 'utf-8')
        console.log('✅ 成功读取 README.md 文件')

        // 解析内容
        const parsedCases = parseReadmeContent(readmeContent)
        console.log(`📊 解析到 ${parsedCases.length} 个案例`)

        if (parsedCases.length === 0) {
            console.warn('⚠️  没有解析到任何案例，请检查 README.md 格式')
            process.exit(1)
        }

        // 转换为JSON格式
        const jsonCases = convertCasesToJson(parsedCases)

        const jsonData = {
            version: "1.0.0",
            lastUpdated: new Date().toISOString().split('T')[0],
            description: "Awesome Nano Banana Images 提示词数据集",
            totalCases: jsonCases.length,
            cases: jsonCases,
            categories: getCategories()
        }

        // 保存JSON文件
        const outputPath = path.join(process.cwd(), 'prompts-data.json')
        fs.writeFileSync(outputPath, JSON.stringify(jsonData, null, 2), 'utf-8')

        console.log(`✅ 成功生成 JSON 文件: ${outputPath}`)
        console.log(`📈 统计信息:`)
        console.log(`   - 总案例数: ${jsonData.totalCases}`)
        console.log(`   - 分类数: ${jsonData.categories.length}`)

        // 统计各分类的案例数量
        const categoryStats = {}
        jsonCases.forEach(case_ => {
            categoryStats[case_.category] = (categoryStats[case_.category] || 0) + 1
        })

        console.log(`   - 分类统计:`)
        Object.entries(categoryStats).forEach(([category, count]) => {
            console.log(`     * ${category}: ${count} 个案例`)
        })

        console.log('🎉 转换完成！')

    } catch (error) {
        console.error('❌ 转换过程中出现错误:', error.message)
        process.exit(1)
    }
}

// 运行脚本
if (require.main === module) {
    main()
}

module.exports = {
    parseReadmeContent,
    convertCasesToJson,
    getCategories
}