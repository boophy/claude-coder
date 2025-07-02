# 国际化 (i18n) 使用指南

本项目已完成国际化配置，支持英语和简体中文两种语言。

## 功能特性

### 前端 WebView 国际化
- ✅ 完整的 React 组件国际化支持
- ✅ 动态语言切换
- ✅ 类型安全的翻译键
- ✅ 支持变量插值（如：`{{count}}` 占位符）

### VS Code 扩展国际化
- ✅ 扩展名称和描述的本地化
- ✅ 命令标题的本地化
- ✅ 活动栏标题的本地化

## 支持的语言

- **English** (en)
- **简体中文** (zh-cn)

## 如何使用

### 在 React 组件中使用翻译

```tsx
import { useTranslation } from "@/hooks/useTranslation"

function MyComponent() {
  const { t, lang, changeLanguage } = useTranslation()
  
  return (
    <div>
      <h1>{t("settings.title")}</h1>
      <p>{t("files.totalFiles", { count: 5 })}</p>
      
      {/* 语言切换 */}
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
    </div>
  )
}
```

### 语言切换

用户可以通过以下方式切换语言：

1. **设置页面**：在扩展的设置页面中有语言选择器
2. **编程方式**：使用 `changeLanguage()` 函数

### 添加新的翻译

#### 1. 在翻译文件中添加新的键值对

**英文** (`webview-ui-vite/src/i18n/locales/en.ts`):
```typescript
export const en = {
  translation: {
    // 现有翻译...
    newSection: {
      title: "New Feature",
      description: "This is a new feature"
    }
  }
}
```

**中文** (`webview-ui-vite/src/i18n/locales/zh.ts`):
```typescript
export const zh = {
  translation: {
    // 现有翻译...
    newSection: {
      title: "新功能",
      description: "这是一个新功能"
    }
  }
}
```

#### 2. 在组件中使用新翻译

```tsx
const { t } = useTranslation()

return (
  <div>
    <h2>{t("newSection.title")}</h2>
    <p>{t("newSection.description")}</p>
  </div>
)
```

### VS Code 扩展本地化

VS Code 扩展的本地化通过以下文件实现：

- `package.nls.json` - 英文翻译
- `package.nls.zh-cn.json` - 中文翻译

这些文件中的翻译会自动根据用户的 VS Code 语言设置进行加载。

## 技术实现

### 前端架构

1. **i18n 核心** (`webview-ui-vite/src/i18n/index.ts`)
   - 自定义 i18n 实现
   - 支持嵌套键访问
   - 变量插值支持
   - 语言切换监听

2. **React Hook** (`webview-ui-vite/src/hooks/useTranslation.ts`)
   - 提供 `t()` 翻译函数
   - 当前语言状态
   - 语言切换函数

3. **翻译文件**
   - 结构化的 JSON 对象
   - 支持嵌套分组
   - TypeScript 类型安全

### 语言检测

系统会按以下优先级检测语言：

1. 用户手动设置的语言
2. 浏览器语言设置
3. 默认语言（中文）

### 类型安全

项目使用 TypeScript 提供翻译键的类型安全：

```typescript
type TranslationKey = NestedKey<(typeof resources)["en"]["translation"]>
```

这确保了只能使用存在的翻译键，避免运行时错误。

## 最佳实践

1. **保持翻译文件同步**：确保所有语言文件都有相同的键结构
2. **使用描述性的键名**：如 `settings.language` 而不是 `lang`
3. **分组相关翻译**：将相关的翻译放在同一个对象下
4. **测试所有语言**：确保在不同语言下界面显示正常
5. **处理长文本**：考虑不同语言的文本长度差异

## 故障排除

### 翻译不显示
- 检查翻译键是否正确
- 确认翻译文件中存在对应的键
- 验证组件是否正确使用 `useTranslation` hook

### 语言切换不生效
- 确认 `changeLanguage()` 函数被正确调用
- 检查组件是否订阅了语言变化事件

### 类型错误
- 确保翻译键存在于英文翻译文件中
- 重新构建项目以更新类型定义