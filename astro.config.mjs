import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 部署时把 site 改成你的正式域名，例如 https://yourname.com
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
