import { defineConfig } from "vitepress";

// markdown-it 插件
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { footnote } from "@mdit/plugin-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冬烟 の 博客",
  description: "你猜，我猜你肯定猜不到嘿嘿...",
  lang: "zh-Hans",
  srcDir: "./src",
  cleanUrls: true,
  markdown: {
    config: (md) => {
      md.use(groupIconMdPlugin), md.use(footnote);
    },
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "<i class='bi bi-house-fill'></i> 首页", link: "/" },
      {
        text: "<i class='bi bi-file-post'></i> 文章",
        link: "/posts/",
        activeMatch: "/posts/",
      },
      {
        text: "<i class='bi bi-link-45deg'></i> 友情链接",
        link: "/pages/friends",
      },
      {
        text: "<i class='bi bi-folder-fill'></i> 项目",
        items: [
          { text: "<i class='bi bi-globe'></i> D453-DN42", link: "/projects/dn42" },
        ]
      },
      {
        text: "<i class='bi bi-file-person-fill'></i> 关于",
        link: "/pages/about",
      }
    ],

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "取消",
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "bilibili", link: "https://space.bilibili.com/549736250" },
      { icon: "sinaweibo", link: "https://weibo.com/u/7615101076" },
      { icon: "github", link: "https://github.com/Dongyanmio" },
    ],

    outline: {
      label: "页面导航",
    },

    editLink: {
      pattern: "https://github.com/Dongyanmio/blog/edit/main/src/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    returnToTopLabel: "回到顶部",

    footer: {
      message: `本网站由 <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral'><img src='../assets/pagefoot/upy_logo.png' alt='又拍云' class='pristine-pagefoot-upylogo'></a> 提供云存储服务<br>
      <img src='../assets/pagefoot/icp_moe.png' alt='萌备' class='pristine-pagefoot-moelogo'></a> | <a href='https://icp.gov.moe/?keyword=20240453' target='_blank'>萌ICP备20240453号</a><br>
      本站由 <a href='https://vitepress.dev/'>VitePress</a> 强力驱动丨搭配 Pristine 主题使用`,
      copyright: "版权所有 © 2023 - 2025 冬烟mio",
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
