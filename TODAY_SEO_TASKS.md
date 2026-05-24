# BuildCost.site 今日 SEO 完成清单

目标：今天把站点从“已初步改好”推进到“可以重新构建、上线、提交 GSC 观察”的状态。不要继续拆成多天计划，以下任务今天一次性处理完。

## 1. 先修构建和类型检查

### 1.1 清理 `.next` 后重新验证

当前 `npx tsc --noEmit` 报错是因为 `.next/types` 里有旧的缺失引用，先清理缓存。

执行：

```bash
Remove-Item -Recurse -Force .next
npx tsc --noEmit
npm run build
```

如果 build 仍失败，再看真实错误。不要基于旧 `.next/types` 报错判断源码有问题。

### 1.2 检查 Next 配置

文件：

- `next.config.ts`

当前应保持：

```ts
const nextConfig = {
  serverExternalPackages: [],
};
```

不要再使用：

```ts
experimental.serverComponentsExternalPackages
```

---

## 2. 修所有会影响 SEO 的坏链接

### 2.1 首页尺寸链接

文件：

- `app/page.tsx`

确认这些链接是当前真实路由格式：

```txt
/size/10/x10/concrete/slab
/size/10/x12/concrete/slab
/size/12/x12/concrete/slab
/size/20/x20/concrete/slab
```

不要使用：

```txt
/size/10x10/concrete/slab
```

### 2.2 Calculator 页城市链接

文件：

- `app/[category]/[tool]/page.tsx`

检查：

```tsx
href={`/${category}/${tool}/l/${city.stateSlug}/${city.slug}`}
```

不要写死：

```tsx
href={`/concrete/${tool}/l/${city.stateSlug}/${city.slug}`}
```

除非该区块只在 `category === "concrete"` 下渲染。

### 2.3 删除不存在的列表页链接

检查所有这种链接：

```txt
/concrete/slab/l
/concrete/footing/l
/concrete/wall/l
```

如果没有对应列表页，就删除 “View all cities” 链接。

保留已存在的 roofing 列表页：

```txt
/roofing/shingle/l
```

---

## 3. Sitemap 和索引策略必须收敛

### 3.1 只保留动态 sitemap

文件：

- `app/sitemap.ts`
- `public/sitemap.xml`

要求：

- `public/sitemap.xml` 必须不存在
- 只保留 `app/sitemap.ts`

### 3.2 不提交大量城市组合页

文件：

- `app/sitemap.ts`

`return` 里只能包含这些：

```ts
return [
  ...staticPages,
  ...categoryPages,
  ...calculatorPages,
  ...conversionPages,
  ...comparisonPages,
  ...dimensionPages,
  ...faqPages,
  ...diyVsProPages,
  ...materialGuidePages,
  ...costPages,
];
```

不要返回：

```ts
...localizedPages,
...localizedCostPages,
...sizeCityPages,
```

### 3.3 删除无用的城市 sitemap 生成代码

虽然现在 `localizedPages`、`localizedCostPages`、`sizeCityPages` 没有返回，但仍然在函数里生成，浪费 build 时间，也容易以后误加回去。

今天直接删掉这些变量和循环：

- `localizedPages`
- `localizedCostPages`
- `sizeCityPages`
- `maxLocalizedPages`
- `maxLocalizedCostPages`
- `maxSizeCityPages`
- `commonSizes`

`extendedCities` 如果只用于这些循环，也从 import 里删掉。

---

## 4. 本地化页面要修 category-specific 数据

### 4.1 Localized calculator pages

文件：

- `app/[category]/[tool]/l/[stateSlug]/[citySlug]/page.tsx`

检查并修正：

```ts
const materialKey =
  category === "roofing" ? "roofing" :
  category === "flooring" ? "flooring" :
  "concrete";

const materialMultiplier = city.materialCosts[materialKey];
```

不要所有页面都用：

```ts
city.materialCosts.concrete
```

本地注意事项也要按类目：

```ts
const localConsiderations =
  category === "roofing"
    ? city.considerations?.roofing
    : category === "concrete"
      ? city.considerations?.concrete
      : city.considerations?.general;
```

页面文案不要在 roofing/flooring 页面显示 concrete-specific wording。

### 4.2 Localized cost pages

文件：

- `app/cost/[projectId]/l/[stateSlug]/[citySlug]/page.tsx`

今天先做保守修复：把所有 `city.materialCosts.concrete` 集中到一个变量。

```ts
const materialMultiplier = city.materialCosts.concrete;
```

然后所有本地价格都用：

```ts
city.laborRate * materialMultiplier
```

这样以后扩 roofing/flooring cost project 时，只需要改 material mapping。

---

## 5. Concrete 核心页 SEO 再检查一遍

这些页面是 GSC 已经给信号的页面，今天必须检查完。

### 5.1 `/concrete/slab`

文件：

- `data/calculators/concrete.ts`
- `data/seo-content.ts`
- `data/faq-data.ts`
- `app/[category]/[tool]/page.tsx`

必须包含：

- Title: `Concrete Slab Calculator - Estimate Yards, Bags & Cost`
- Description 包含：
  - cubic yards
  - cubic feet
  - 80lb bags
  - 60lb bags
  - length / width / thickness / waste factor
- Formula:
  - `Volume = Length × Width × Thickness`
  - `Cubic Yards = Cubic Feet ÷ 27`
- Quick answer or example:
  - 10x10 slab
  - 10x12 slab
  - 12x12 slab
  - 20x20 slab
- FAQ：
  - 10x10 slab needs
  - 80lb bags per yard
  - slab thickness
  - ready-mix vs bags
  - extra concrete / waste

### 5.2 `/concrete/footing`

必须包含：

- Title: `Concrete Footing Calculator - Estimate Yards, Bags & Footing Size`
- Deck footings
- Post footings
- Foundation footings
- Frost line reminder
- Footing depth FAQ

### 5.3 `/concrete/wall`

必须包含：

- Title: `Concrete Wall Calculator - Estimate Poured Wall Volume & Cost`
- Retaining wall
- Basement wall
- Foundation wall
- Length × height × thickness formula
- Rebar / formwork / drainage reminder

---

## 6. SEOBlock 渲染检查

文件：

- `components/seo/SEOBlock.tsx`

确认支持：

- `##` section
- `###` subheading
- `-` list
- `*` list
- bold text
- italic text

今天不引入 `react-markdown`，不大重构。

手动打开：

```txt
/concrete/slab
/concrete/footing
/concrete/wall
```

检查 SEO 内容是否不是一坨纯段落，列表和小标题必须正常显示。

---

## 7. 首页 SEO 检查

文件：

- `app/page.tsx`

首页今天必须满足：

- H1 清楚：
  - `Construction Calculators and Cost Guides for U.S. Projects`
  - 或同等含义
- 首屏强调 concrete-first
- Popular calculators 优先：
  - Slab
  - Footing
  - Wall
  - Driveway
- 数字准确：
  - 31 calculators
  - 17 concrete calculators
  - 74 city pages
  - 6 cost guides
  - 20+ project guides
- 有 Concrete Slab Quick Answers
- 有 Cost Planning Resources
- 有 Local Cost Estimates
- 有 estimate-only disclaimer

---

## 8. About / Contact / Terms / Privacy 检查

### 8.1 About

文件：

- `app/about/page.tsx`

必须有：

- U.S. homeowners
- DIYers
- contractors
- builders
- formulas explanation
- waste factors explanation
- local multiplier explanation
- disclaimer:
  - estimates only
  - not quotes
  - not bids
  - not guarantees
  - not professional advice
  - verify with supplier / contractor / building department

数字必须准确：

- Concrete 17
- Roofing 7
- Flooring 7
- Total 31
- Cities 74
- Cost guides 6

### 8.2 Contact

文件：

- `app/contact/page.tsx`

必须包含：

- `contact@buildcost.site`
- calculator corrections
- outdated price notes
- data suggestions
- partnership inquiries

### 8.3 Terms

文件：

- `app/terms/page.tsx`

必须明确：

- calculators are estimates only
- user must verify before buying materials
- not engineering / architectural / legal / contractor advice
- no liability for project decisions

### 8.4 Privacy

文件：

- `app/privacy/page.tsx`

必须覆盖：

- AdSense
- cookies
- analytics
- third-party advertising
- contact

---

## 9. Robots 检查

文件：

- `app/robots.ts`
- `public/robots.txt`

可以保留 `app/robots.ts`。

如果 `public/robots.txt` 和 `app/robots.ts` 同时存在，内容必须一致。

建议最终只保留动态 `app/robots.ts`，避免以后两处维护。

---

## 10. 今天最终验证

### 10.1 命令验证

先清理：

```bash
Remove-Item -Recurse -Force .next
```

再跑：

```bash
npm run build
npx tsc --noEmit
```

如果 `tsc` 因为 `.next/types` 报错，先以 `npm run build` 为准，因为 Next 会重新生成 `.next/types`。

### 10.2 手动访问

必须打开：

```txt
/
/about
/contact
/privacy
/terms
/concrete
/concrete/slab
/concrete/footing
/concrete/wall
/size/10/x10/concrete/slab
/size/10x10/l/texas/houston
/cost/concrete-driveway
/convert
/compare
/sitemap.xml
/robots.txt
```

检查：

- 无 404
- 无 NaN
- 无 undefined
- 无乱码
- H1 正确
- footer / navbar 链接可点
- SEO 内容格式正常
- sitemap 不包含大量城市组合页

---

## 今天完成标准

今天结束时必须达到：

- build 通过
- 核心页面可访问
- 首页不再有错误数字
- sitemap 已收敛
- public sitemap 不存在
- city pages 不再提交进 sitemap
- concrete / roofing / flooring 本地页不再全部使用 concrete multiplier
- `/concrete/slab`、`/concrete/footing`、`/concrete/wall` 内容足够强
- About / Terms / Privacy / Contact 可以支撑 AdSense 审核

完成这些后，再去 GSC 提交：

- `/`
- `/concrete/slab`
- `/concrete/footing`
- `/concrete/wall`
- `/sitemap.xml`
