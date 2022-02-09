module.exports = {
  lang: "en-US",
  title: "K.island ✨",
  description: "K.'s island",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "64x64" }],
    [
      "link",
      {
        rel: "apple-touch-icon-precomposed",
        href: "/favicon.ico",
        sizes: "64x64",
      },
    ],
    [
      "link",
      {
        rel: "msapplication-square64x64logo",
        href: "/favicon.ico",
        sizes: "64x64",
      },
    ],
  ],

  themeConfig: {
    repo: "suressk",
    docsDir: "docs",
    docsBranch: "deploy",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",

    nav: [
      { text: "Home", link: "/", activeMatch: "^/$|^/home/" },
      {
        text: "Mood",
        link: "/mood/index",
        activeMatch: "^/mood/",
      },
      {
        text: "Knowledge",
        link: "/knowledge/index",
        activeMatch: "^/knowledge/",
      },
    ],

    sidebar: {
      "/mood/": getMoodSidebar(),
      "/knowledge/": getKnowledgeSidebar(),
      "/": [],
    },
  },
};

/**
 * 心情文章列表
 * @returns nav[]
 */
function getMoodSidebar() {
  return [
    {
      text: "孤独与庸俗",
      link: "/mood/loneliness",
    },
    {
      text: "感与叹",
      link: "/mood/feels",
    },
    {
      text: "入秋",
      link: "/mood/autumn",
    },
    {
      text: "典籍里的中国",
      link: "/mood/chinaInTheClassics",
    },
    {
      text: "端午",
      link: "/mood/dragonBoatFestival",
    },
    {
      text: "Christmas",
      link: "/mood/christmas",
    },
    {
      text: "Year-End",
      link: "/mood/yearEnd",
    },
    {
      text: "风过无痕",
      link: "/mood/wind",
    },
    {
      text: "Spring Festival",
      link: "/mood/spring",
    },
  ];
}

/**
 * 知识点文章列表
 * @returns nav[]
 */
function getKnowledgeSidebar() {
  return [
    {
      text: "Introduction",
    },
    {
      text: "Study Note",
      children: [
        { text: "JS EventLoop", link: "/knowledge/study/jsEventLoop" },
        { text: "Promise", link: "/knowledge/study/promise" },
        { text: "Vue NextTick", link: "/knowledge/study/vueNextTick" },
        { text: "Algorithm", link: "/knowledge/study/algorithm" },
      ],
    },
    {
      text: "Vite",
      children: [
        { text: "Vite 原理简介", link: "/knowledge/vite/index" },
        { text: "从 vite 到 createServer", link: "/knowledge/vite/vitejs" },
        { text: "resolveConfig", link: "/knowledge/vite/resolveConfig" },
        { text: "依赖预构建", link: "/knowledge/vite/esbuild" },
      ],
    },
    {
      text: "React",
      children: [
        { text: "React 笔记文章 - 掘金", link: "/knowledge/react/index" },
      ],
    },
  ];
}
