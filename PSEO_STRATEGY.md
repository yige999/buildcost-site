# BuildCost.site - 程序化SEO (pSEO) 策略汇总

## 📊 页面数量统计

| 页面类型 | URL 模式 | 数量 | 状态 |
|----------|----------|------|------|
| **基础页面** | | | |
| 主页、分类、关于 | / | ~10 | ✅ 已有 |
| **计算器页面** | | | |
| 基础计算器 | /{category}/{tool} | 15 | ✅ 已有 |
| **3D SEO 矩阵** | | | |
| 计算器 × 城市 | /{cat}/{tool}/l/{state}/{city} | 15 × 50 = **750** | ✅ 已创建 |
| **Answer Engine** | | | |
| 常见尺寸问题 | /size/{W}x{L}/{cat}/{tool} | 20 | ✅ 已创建 |
| **成本估算** | | | |
| 项目成本页面 | /cost/{project} | 10 | ✅ 已创建 |
| **对比页面** | | | |
| 材料对比 | /compare/{A}-vs-{B} | 20+ | ✅ 已创建 |
| **单位转换** | | | |
| 转换页面 | /convert/{unit}-to-{unit} | 15 | ✅ 已创建 |
| **标准尺寸** | | | |
| 尺寸参考 | /dimensions/{project} | 10 | ✅ 已创建 |
| **季节性指南** | | | |
| 施工建议 | /guide/{topic} | 15+ | ✅ 已创建 |
| **国际化** | | | |
| 西班牙语 | /es/* | 以上所有 × 1 | ✅ 已创建 |

## 🎯 核心pSEO文件列表

### 1. Schema Markup (JSON-LD)
```
components/seo/JsonLd.tsx          # SoftwareApplication, FAQPage, Breadcrumb, HowTo Schema
data/faq-data.ts                   # FAQ数据用于Schema
```

### 2. 扩展城市数据
```
data/extended-city-data.ts         # 50+ 城市，材料成本系数，气候数据
```

### 3. 本地化页面 (3D SEO)
```
app/[category]/[tool]/l/[stateSlug]/[citySlug]/page.tsx
```

### 4. Answer Engine 页面
```
app/size/[width]x[dimension]/[category]/[tool]/page.tsx
data/common-sizes.ts
```

### 5. PDF 导出
```
components/calculator/ExportPDFButton.tsx
```

### 6. Widget 嵌入
```
components/calculator/EmbedWidgetButton.tsx
```

### 7. 单位转换
```
app/convert/cubic-yards-to-cubic-feet/page.tsx
components/calculator/unit-converters/CubicYardsToFeet.tsx
```

### 8. 成本估算
```
app/cost/concrete-driveway/page.tsx
data/cost-estimates.ts
```

### 9. 材料对比
```
app/compare/concrete-vs-pavers/page.tsx
```

### 10. 标准尺寸
```
app/dimensions/standard-driveway-sizes/page.tsx
```

### 11. 季节性指南
```
app/guide/pouring-concrete-in-winter/page.tsx
```

### 12. 国际化
```
app/es/page.tsx
data/translations.ts
```

## 📈 可扩展的pSEO策略

### 尚未实施的策略

| 策略 | 页面类型 | 潜在页面数 |
|------|----------|-----------|
| 成本 × 城市 | /cost/{project}/l/{state}/{city} | 10 × 50 = **500** |
| Answer Engine × 城市 | /size/{W}x{L}/l/{state}/{city} | 20 × 50 = **1,000** |
| 标准尺寸 × 项目 | /dimensions/{project-type} | ~15 |
| 季节性 × 城市 | /guide/{topic}/l/{state}/{city} | 10 × 50 = **500** |
| DIY vs Pro | /diy-vs-pro/{project} | ~10 |
| 材料选择指南 | /materials/{material-type} | ~20 |
| 施工步骤 | /how-to/{project} | ~15 |
| 常见问题 | /faq/{topic} | ~30 |
| 承包商目录 | /contractors/{state}/{city} | 50 × 50 = **2,500** |

## 🚀 总潜力: 10,000+ 页面

## 实施优先级

### Phase 1: 高优先级 (立即实施)
- ✅ Schema Markup
- ✅ 本地化页面 (计算器 × 城市)
- ✅ Answer Engine 页面

### Phase 2: 中优先级 (流量增长)
- ✅ 成本估算页面
- ✅ 材料对比页面
- ✅ 单位转换页面

### Phase 3: 扩展阶段 (规模化)
- ⏳ 成本 × 城市 (500 页)
- ⏳ 标准尺寸参考
- ⏳ 季节性指南

### Phase 4: 高级策略 (长期)
- ⏳ 承包商目录
- ⏳ DIY vs Pro 对比
- ⏳ 完整西班牙语翻译

## 技术实现要点

1. **静态生成**: 使用 `generateStaticParams` 预生成所有页面
2. **增量构建**: Next.js 支持 ISR (增量静态再生成)
3. **Sitemap 分割**: 超过50k URL时分割sitemap
4. **内部链接**: 自动生成相关页面链接
5. **Schema 优化**: 每种页面类型使用合适的Schema类型

## 预期流量

基于关键词研究和页面数量：
- 第一阶段 (1000 页): 1000-3000 月访问量
- 第二阶段 (5000 页): 5000-15000 月访问量
- 第三阶段 (10000+ 页): 20000-50000+ 月访问量

主要流量来源：
- Google Organic (70%)
- Google Images (15%)
- Direct (10%)
- Other (5%)
