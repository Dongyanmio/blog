// https://vitepress.dev/guide/custom-theme
import { h } from "vue";

import "./styles/index.css";
import 'virtual:group-icons.css'

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData, useRoute } from "vitepress";

import giscusTalk from "vitepress-plugin-comment-with-giscus";
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
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
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
} satisfies Theme;
