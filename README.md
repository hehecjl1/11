# 个人网站（方案 C）

基于 **Astro 5 + Content Collections** 的内容驱动个人站，适合长期写博客与管理项目。CMS（Notion / Sanity）可在后期接入。

## 技术栈

| 能力 | 实现 |
|------|------|
| 框架 | Astro 5 |
| 内容 | Content Collections（`blog`、`projects`） |
| 博客 RSS | `@astrojs/rss` → `/rss.xml` |
| 站点地图 | `@astrojs/sitemap` |
| 样式 | 原生 CSS + 系统暗色模式 |

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:4321

```bash
npm run build    # 生产构建
npm run preview  # 预览构建结果
```

## 目录结构

```
src/
├── content/
│   ├── blog/          # 博客 Markdown
│   └── projects/      # 项目 Markdown
├── content.config.ts  # Collection 与 Zod 校验
├── components/
├── layouts/
├── pages/
└── styles/
public/                # 静态资源
```

## 新增内容

**博客**：在 `src/content/blog/` 新建 `.md`，参考 `hello-world.md` 的 frontmatter。

**项目**：在 `src/content/projects/` 新建 `.md`，`featured: true` 会出现在首页精选区。

**草稿**：设置 `draft: true` 后不会出现在列表与构建路由中。

## 上线前修改

1. `astro.config.mjs` 中的 `site` 改为你的域名  
2. `public/robots.txt` 中的 Sitemap URL  
3. `Header.astro`、`Footer.astro`、首页与联系页中的姓名、邮箱、社交链接  

## 部署

推荐 [Vercel](https://vercel.com)、[Cloudflare Pages](https://pages.cloudflare.com) 或 [Netlify](https://netlify.com)：连接 Git 仓库，构建命令 `npm run build`，输出目录 `dist`。

## 后期扩展（方案 C 路线图）

- [ ] Notion / Sanity CMS 同步到 `content/`  
- [ ] Giscus 评论（GitHub Discussions）  
- [ ] 标签归档页 `/blog/tags/[tag]`  
- [ ] 站内搜索（Pagefind）  
- [ ] 多语言 i18n  
