import { defineConfig } from "vitepress";

import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冬烟 の 博客",
  description: "你猜，我猜你肯定猜不到嘿嘿...",
  srcDir: "./src",
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Dongyanmio" }],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
