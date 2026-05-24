# BuildCost.site 完整整改规划

> 目标：把当前半成品 pSEO 工具站，整理成一个可收录、可通过 AdSense 审核、以 concrete 搜索流量为第一增长点的英文建筑成本计算器站。

## 当前判断

GSC 已经给出明确信号：Google 目前主要把站点理解为 concrete slab / concrete calculator / slab calculator 方向。

当前最有价值页面：

- `/concrete/slab`：曝光最多，但排名靠后，CTR 为 0
- `/concrete/footing`：平均排名较好，最容易先拿点击
- `/concrete/wall`：已有点击，值得继续增强
- 首页和 About 页已有少量曝光，但不是当前主战场

所以第一阶段不要继续泛泛扩张 roofing / flooring / random pSEO 页面，而是先把 Concrete 类目做强。

---

## P0：必须先修的错误

### 1. 城市尺寸页运行时 bug

文件：

- `app/size/[width]x[depth]/l/[stateSlug]/[citySlug]/page.tsx`

要改：

- `city.laborCost` 改成 `city.laborRate`
- `city.localConsiderations` 改成 `city.considerations`
- `city.considerations` 是对象，不是数组，需要按字段渲染
- 只渲染 `concrete` 和 `general`，不要在 concrete slab 页面渲染 `roofing`
- 处理 `laborDelta === 0`
- 删除未使用 imports：
  - `getExtendedUniqueStates`
  - `getAllCalculators`
  - `getCalculatorBySlug`
  - `ShoppingCart`

验证：

- 打开 `/size/10x10/l/texas/houston`
- Labor 不显示 NaN
- Local Considerations 正常显示
- 无控制台错误

### 2. 前台数字不一致

文件：

- `app/about/page.tsx`
- `app/page.tsx`
- 其他写死数量的文案

当前真实数据：

- Concrete calculators：17
- Roofing calculators：7
- Flooring calculators：7
- Total calculators：31
- Extended city data：74
- Cost projects：6
- Unit conversions：12
- Comparison pages：6

要改：

- 不要写 `106 U.S. City Pages`
- 不要写 `7 Cost Guides`
- 不要写 `Concrete (16)` 或 `Flooring (8)`
- 不要写 `200+ cities`，除非真正扩到 200+

### 3. 构建和类型检查

要跑：

```bash
npx tsc --noEmit
npm run build
```

如果本地缺依赖，先跑：

```bash
npm install
```

---

## P1：首页重做

文件：

- `app/page.tsx`

首页目标：

- 一进来就知道这是 construction calculators + cost guides
- 重点推 Concrete，而不是平均推所有类目
- 把已有 SEO 内容入口露出来
- 让首页不像空壳站或 AI 批量页

### 首屏

H1 建议：

- `Free Construction Calculators and Cost Guides`

或：

- `Construction Calculators and Cost Guides for U.S. Projects`

首屏副标题要包含：

- concrete calculators
- roofing calculators
- flooring calculators
- material estimates
- waste factors
- local cost estimates
- U.S. projects

首屏按钮：

- Primary：`Concrete Slab Calculator` → `/concrete/slab`
- Secondary：`View Cost Guides` → `/cost/concrete-driveway`

### 首页热门入口

优先放 GSC 有信号的页面：

- `/concrete/slab`
- `/concrete/footing`
- `/concrete/wall`
- `/concrete/driveway`

暂时不要把 roofing/flooring 放在最强位置。

### 首页新增区块

建议首页顺序：

1. Hero
2. Popular Concrete Calculators
3. Browse by Category
4. Concrete Slab Quick Answers
5. Cost Planning Resources
6. Local Cost Estimates
7. Disclaimer / estimate-only note

### Concrete Slab Quick Answers

新增内部链接：

- 10x10 slab
- 10x12 slab
- 12x12 slab
- 20x20 slab

链接到：

- `/size/10x10/l/texas/houston` 或通用尺寸页
- 如果通用尺寸页路径是 `/size/[width]x[dimension]/[category]/[tool]`，则优先链接通用尺寸页

---

## P1：导航和页脚

### Navbar

文件：

- `components/layout/Navbar.tsx`

当前问题：

- 原先只突出 Home + 类目，不够像完整站
- 如果链接太多，顶部会拥挤

建议导航：

- Calculators 或 Concrete
- Cost Guides
- Conversions
- Compare
- Materials
- FAQ

可选：

- Roofing / Flooring 放在下拉菜单或 Footer，不一定占主导航

如果要做下拉菜单：

- Calculators
  - Concrete
  - Roofing
  - Flooring
  - Concrete Slab
  - Footing
  - Wall

### Footer

文件：

- `components/layout/Footer.tsx`

建议分组：

1. Calculators
2. Cost Guides
3. Resources
4. Company

Footer 必放链接：

- `/concrete/slab`
- `/concrete/footing`
- `/concrete/wall`
- `/concrete/driveway`
- `/roofing/shingle`
- `/flooring/laminate`
- `/cost/concrete-driveway`
- `/convert`
- `/compare`
- `/dimensions`
- `/materials`
- `/diy-vs-pro`
- `/faq`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

---

## P1：Concrete 核心页面优化

相关文件：

- `data/calculators/concrete.ts`
- `data/seo-content.ts`
- `app/[category]/[tool]/page.tsx`
- `components/calculator/CalculatorFactory.tsx`
- `components/seo/SEOBlock.tsx`

### `/concrete/slab`

GSC 状态：

- 曝光最多
- 排名大约第 4 页
- CTR 为 0

必须增强。

要改：

- `seoTitle`
- `seoDescription`
- H1 附近 intro
- Quick answer
- Formula
- Examples
- FAQ
- Related sizes
- Internal links

建议 title：

- `Concrete Slab Calculator - Estimate Yards, Bags & Cost`

建议 description：

- `Calculate concrete for a slab in cubic yards, cubic feet, 80lb bags, and 60lb bags. Enter length, width, thickness, and waste factor for an instant estimate.`

页面应新增内容：

- How to calculate concrete for a slab
- Formula:
  - `cubic feet = length × width × thickness`
  - `cubic yards = cubic feet ÷ 27`
  - 如果 thickness 用 inches，需要先除以 12
- Common slab thickness:
  - Patio：4 inches
  - Walkway：4 inches
  - Driveway：5-6 inches
  - Garage：6 inches
- Examples:
  - 10x10 slab
  - 10x12 slab
  - 12x12 slab
  - 20x20 slab
- Ready-mix vs bags
- Waste factor guidance

FAQ：

- How much concrete do I need for a 10x10 slab?
- How many 80lb bags of concrete are in a yard?
- How thick should a concrete slab be?
- Should I order ready-mix concrete or use bags?
- How much extra concrete should I order?

### `/concrete/footing`

GSC 状态：

- 平均排名接近第一页
- 最容易先拿到自然点击

要改：

- title 和 description 加强
- 内容覆盖 deck footing / post footing / foundation footing
- 加 frost line reminder
- 加 footing size examples
- 加 rebar / inspection / code disclaimer

建议 title：

- `Concrete Footing Calculator - Estimate Yards, Bags & Footing Size`

FAQ：

- How deep should concrete footings be?
- How much concrete for deck footings?
- Do footings need to be below frost line?
- What size footing do I need for a post?

### `/concrete/wall`

GSC 状态：

- 已有点击
- 排名中等，有优化价值

要改：

- 覆盖 retaining wall / basement wall / foundation wall
- 加 wall thickness table
- 加 height × length × thickness formula
- 加 vertical pour 注意事项
- 加 formwork / reinforcement / drainage reminder

建议 title：

- `Concrete Wall Calculator - Estimate Poured Wall Volume & Cost`

FAQ：

- How do you calculate concrete for a wall?
- How thick should a concrete wall be?
- How much concrete for a retaining wall?
- Do I need rebar in a concrete wall?

---

## P1：Calculator 页面模板增强

文件：

- `app/[category]/[tool]/page.tsx`
- `components/calculator/CalculatorFactory.tsx`

当前问题：

- 页面顶部直接进入 calculator，SEO 解释弱
- 不同 calculator 缺少统一的 quick answer / formula / examples

建议新增：

### Calculator intro block

放在 calculator 上方：

- H1
- 1-2 句说明
- 适用场景
- estimate-only 小提示

### Formula block

对 concrete 类目优先做：

- slab formula
- wall formula
- footing formula
- column formula

### Common examples

对 slab / footing / wall 做静态示例。

### Last updated

页面底部或 intro 下方：

- `Last updated: May 2026`

### Estimate disclaimer

简短：

- `These estimates are for planning only. Verify quantities and code requirements with a local supplier or contractor.`

---

## P1：About 页面可信度增强

文件：

- `app/about/page.tsx`

要改：

### Hero subtitle

建议：

- `Free construction calculators and cost planning resources for U.S. homeowners, DIYers, and contractors. Estimate materials, compare costs, and plan your next project with confidence.`

### Who this site serves

新增或强化：

- U.S. homeowners
- DIYers
- Contractors
- Builders
- People comparing materials before purchase

### How Our Estimates Work

分 3 个小节：

1. Standard Formulas
   - area = length × width
   - volume = length × width × depth
   - cubic yards = cubic feet ÷ 27
   - 60lb bag ≈ 0.45 ft³
   - 80lb bag ≈ 0.6 ft³
   - roofing squares = 100 ft²

2. Waste Factors
   - default 5-10%
   - covers spillage, cuts, breakage, uneven surfaces

3. Local Cost Adjustments
   - national averages
   - city labor multiplier
   - material cost multiplier
   - climate notes

### Disclaimer

必须强化：

- Estimates only
- Not quotes
- Not bids
- Not guarantees
- Not engineering, architectural, legal, or contractor advice
- Verify with:
  - local supplier
  - licensed contractor
  - local building department

---

## P1：Contact / Privacy / Terms

### Contact

文件：

- `app/contact/page.tsx`

要改：

- 文案更真实
- 明确接收：
  - calculator corrections
  - outdated price notes
  - data suggestions
  - partnership inquiries
- 保留邮箱

### Privacy

文件：

- `app/privacy/page.tsx`

要检查：

- 是否提到 Google AdSense
- 是否提到 cookies
- 是否提到 analytics
- 是否有 contact

### Terms

文件：

- `app/terms/page.tsx`

要强化：

- calculators are estimates only
- user must verify before buying materials
- not professional advice
- no liability for project decisions

---

## P2：pSEO 页面质量控制

### Localized calculator pages

文件：

- `app/[category]/[tool]/l/[stateSlug]/[citySlug]/page.tsx`

要改：

- 本地化内容不能只是城市名替换
- 对 concrete 页面显示 concrete-specific tips
- 对 roofing 页面显示 roofing-specific tips
- 对 flooring 页面显示 flooring/material-specific tips
- 不要所有类目都默认显示 concrete considerations

需要检查：

- 是否所有本地页都用了 `city.materialCosts.concrete`
- roofing 应该用 `city.materialCosts.roofing`
- flooring 应该用 `city.materialCosts.flooring`
- labor 使用 `city.laborRate`

### Localized cost pages

文件：

- `app/cost/[projectId]/l/[stateSlug]/[citySlug]/page.tsx`

要改：

- 不要所有项目都用 `city.materialCosts.concrete`
- 如果 project 是 roofing，要用 roofing multiplier
- 如果 project 是 flooring，要用 flooring multiplier
- 增加 estimate-only disclaimer
- 增加 local supplier / permit reminder

### Size city pages

文件：

- `app/size/[width]x[depth]/l/[stateSlug]/[citySlug]/page.tsx`

要改：

- 已修属性错误后，继续增强：
  - title 更贴 query
  - quick answer 更靠前
  - common slab thickness
  - ready-mix vs bags
  - local climate note
  - related common sizes

---

## P2：数据文件整改

### Calculator data

文件：

- `data/calculators/concrete.ts`
- `data/calculators/roofing.ts`
- `data/calculators/flooring.ts`

要改：

- 每个 calculator 的 `seoTitle` 更像搜索结果标题
- 每个 `seoDescription` 包含核心查询
- description 不要太泛
- icon 是否都存在于 icon map
- engine 是否都有实现

重点先改：

- concrete slab
- footing
- wall
- driveway
- rebar
- sonotube

### SEO content

文件：

- `data/seo-content.ts`

要改：

- Slab 内容必须精修
- Footing 内容必须精修
- Wall 内容必须精修
- 清理过长、重复、低价值段落
- 增加 FAQ 语义
- 增加例子
- 增加表格时注意 `SEOBlock` 是否支持 Markdown 表格

注意：

- 当前 `SEOBlock` 只是简单转段落，不支持完整 Markdown 表格和列表语义
- 如果要展示表格/列表，需要改 `SEOBlock`

### FAQ data

文件：

- `data/faq-data.ts`
- `data/faq-hub.ts`

要改：

- 增加 slab calculator 相关 FAQ
- 增加 footing calculator 相关 FAQ
- 增加 wall calculator 相关 FAQ
- FAQ 要和 GSC query 对齐

---

## P2：SEOBlock 渲染能力

文件：

- `components/seo/SEOBlock.tsx`

当前问题：

- Markdown 支持很弱
- 表格、列表、三级标题可能显示不好
- 内容长了会像一堆段落

要改：

- 支持 `###` 标题
- 支持 `-` 列表
- 支持简单 Markdown 表格，或改用结构化内容组件
- 避免 `dangerouslySetInnerHTML` 太粗糙

替代方案：

- 使用 `react-markdown`
- 或者把 SEO 内容改成结构化数组

短期建议：

- 先增强 `formatContent`
- 支持 lists 和 headings

---

## P2：内链系统

要新增/增强：

### Related calculators

文件：

- `app/[category]/[tool]/page.tsx`

当前已有，但可以更强：

- 对 slab 链接 footing / wall / rebar / driveway
- 对 footing 链接 sonotube / post-hole / rebar
- 对 wall 链接 footing / rebar / slab

### Related sizes

新增：

- 10x10 slab
- 10x12 slab
- 12x12 slab
- 16x20 slab
- 20x20 slab

### Related cost pages

新增：

- concrete driveway cost
- concrete patio cost
- concrete slab cost

### Footer 内链

已列在 P1。

---

## P2：Sitemap 和索引策略

文件：

- `app/sitemap.ts`
- `public/sitemap.xml`
- `app/robots.ts`
- `public/robots.txt`

要检查：

- 是否同时存在动态 sitemap 和静态 sitemap
- robots 指向的是哪个
- 动态 sitemap 是否包含真实页面
- 是否把低质量批量页全部提交

当前风险：

- pSEO 页太多但质量不均，可能导致 Crawled - currently not indexed
- 城市页如果内容重复，可能拖累整体质量

建议：

- 第一阶段 sitemap 优先放：
  - 首页
  - 类目页
  - calculator 页
  - core cost pages
  - conversion pages
  - comparison pages
  - high-quality size pages
  - 少量城市页

暂缓大量提交：

- 所有 calculator × city 页
- 所有 cost × city 页
- 所有 size × city 页

除非这些页面已增强。

---

## P2：AdSense 准备

暂时不要猛加广告位，先确保审核基础。

要做：

- About 可信
- Contact 可用
- Privacy 完整
- Terms 完整
- 页面有真实功能
- 内容不是纯模板
- 无乱码
- 无 broken UI
- 无 NaN / undefined

Ad placement 后续建议：

### Calculator pages

- Calculator 下方一个广告
- SEO 内容中段一个广告
- FAQ 前一个广告

### Content pages

- 首屏后
- 正文中段
- 结尾前

不要放：

- 表单中间
- 按钮旁边误导点击
- 页面顶部过多广告

---

## P3：扩展方向

第一阶段做强 concrete。

第二阶段再做：

- Roofing
- Flooring
- Cost guides
- City pages

### Concrete 后续扩展

新增或增强：

- concrete patio cost
- concrete slab cost
- concrete driveway cost
- concrete sidewalk cost
- stamped concrete cost
- concrete bags calculator
- rebar spacing calculator
- sonotube calculator

### Roofing 后续扩展

等 concrete 起量后：

- roof shingle calculator
- metal roofing calculator
- roof pitch calculator
- roof replacement cost
- shingle bundles by square

### Flooring 后续扩展

等前两类稳定后：

- laminate flooring calculator
- tile calculator
- vinyl plank calculator
- flooring cost by room size

---

## 今日建议执行顺序

1. 修城市尺寸页 bug
2. 修 About / 首页中的错误数字
3. 首页改为 concrete-first
4. Navbar / Footer 完成内链整理
5. `/concrete/slab` SEO title / description / content / FAQ
6. `/concrete/footing` SEO title / description / content / FAQ
7. `/concrete/wall` SEO title / description / content / FAQ
8. Calculator 页面模板加 intro / formula / disclaimer
9. Sitemap 策略检查
10. 跑类型检查和 build

---

## 验收清单

必须通过：

- 首页定位清楚
- About 页面可信
- `/concrete/slab` 内容明显强于原版
- `/concrete/footing` 能承接第一页附近关键词
- `/concrete/wall` 更贴近用户搜索
- 城市尺寸页无 NaN / undefined
- Footer 有足够内链
- Terms/Privacy/Contact 完整
- `npx tsc --noEmit` 通过
- `npm run build` 通过

手动访问：

- `/`
- `/about`
- `/contact`
- `/concrete`
- `/concrete/slab`
- `/concrete/footing`
- `/concrete/wall`
- `/size/10x10/l/texas/houston`
- `/cost/concrete-driveway`
- `/convert`
- `/compare`

---

## 核心原则

不要再把这个站当成泛工具站做。

第一阶段定位：

> BuildCost.site 是一个面向美国用户的建筑材料和成本估算站，先以 Concrete Calculators 为核心获取 SEO 信号，再扩展到 Roofing 和 Flooring。

当前 GSC 已经证明 Google 愿意测试 concrete slab 方向，所以今天所有整改都应该优先服务这个方向。
