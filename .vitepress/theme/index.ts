// https://vitepress.dev/guide/custom-theme
import { h } from "vue";

// CSS 样式文件
import "./styles/index.css";
import "virtual:group-icons.css";

// VitePress 官方包
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";

// VitePress 插件
import giscusTalk from "vitepress-plugin-comment-with-giscus";

import PostPage from "./pages/PostPage.vue";
import FriendList from "./pages/FriendList.vue";

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("PostPage", PostPage);
    app.component("FriendList", FriendList);
  },
  setup() {
    const route = useRoute();
    const { frontmatter } = useData();

    giscusTalk(
      {
        repo: "Dongyanmio/blog",
        repoId: "R_kgDONgikzw",
        category: "评论", // default: `General`
        categoryId: "DIC_kwDONgikz84Claee",
        mapping: "pathname", // default: `pathname`
        lightTheme: "light",
        darkTheme: "dark",
      },
      {
        frontmatter,
        route,
      },
      // 默认值为 true，表示已启用，此参数可以忽略；
      // 如果为 false，则表示未启用
      // 您可以使用 “comment:true” 序言在页面上单独启用它
      true,
    );
  },
} satisfies Theme;
