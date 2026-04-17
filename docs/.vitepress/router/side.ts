/**
 * Knowledge sidebarList
 * @returns
 */
const knowledgeSidebar = [
  {
    text: 'Study Note',
    items: [
      { text: 'JS EventLoop', link: '/knowledge/study/jsEventLoop' },
      { text: 'Promise', link: '/knowledge/study/promise' },
      { text: 'Vue NextTick', link: '/knowledge/study/vueNextTick' },
      { text: 'ParseExcel', link: '/knowledge/study/parseExcel' },
    ],
  },
  {
    text: 'React',
    items: [
      { text: 'React 笔记 - 掘金', link: '/knowledge/react/index' },
      { text: 'React Fiber', link: '/knowledge/react/fiber' },
    ],
  },
  {
    text: 'Vite',
    items: [
      { text: 'Vite 原理简介', link: '/knowledge/vite/intro' },
      { text: 'vite → createServer', link: '/knowledge/vite/vitejs' },
      { text: 'resolveConfig', link: '/knowledge/vite/resolveConfig' },
      { text: '依赖预构建', link: '/knowledge/vite/esbuild' },
      { text: '插件机制', link: '/knowledge/vite/plugin' },
      { text: '热更新机制', link: '/knowledge/vite/hmr' },
    ],
  },
  {
    text: 'Engineering',
    items: [
      { text: 'webpack', link: '/knowledge/engineering/webpack' },
      {
        text: 'webpack Loader & plugin',
        link: '/knowledge/engineering/loader',
      },
      { text: 'webpack Tapable', link: '/knowledge/engineering/tapable' },
      { text: 'webpack 热更新', link: '/knowledge/engineering/hotUpdate' },
      { text: 'webpack 打包优化', link: '/knowledge/engineering/wpOpt' },
      { text: '代码规范', link: '/knowledge/engineering/lint' },
      { text: '打包工具对比', link: '/knowledge/engineering/compare' },
      { text: 'tsconfig 配置一览', link: '/knowledge/engineering/tsconfig' },
    ],
  },
  {
    text: 'Optimization',
    items: [
      { text: '大文件分片上传', link: '/knowledge/optimization/chunkUpload' },
      { text: '前端缓存', link: '/knowledge/optimization/feCache' },
      { text: 'H5 性能优化', link: '/knowledge/optimization/h5Opt' },
      { text: '性能监控', link: '/knowledge/optimization/monitor' },
    ],
  },
];

/**
 * Interview sidebarList
 * @returns
 */
const interviewSidebar = [
  {
    text: 'Interview Summary',
    items: [
      { text: 'JavaScript 基础', link: '/interview/summary/basis' },
      { text: '网络基础', link: '/interview/summary/internet' },
      { text: '实战面试题', link: '/interview/summary/actual' },
      { text: '面试题简记', link: '/interview/summary/strands' },
      { text: '性能优化', link: '/interview/summary/optimization' },
    ],
  },
];

/**
 * Algorithm sidebarList
 * @returns
 */
const algorithmSidebar = [
  {
    text: 'Algorithm Summary',
    items: [
      { text: '面试 - 算法题', link: '/algorithm/summary/inter' },
      { text: '复杂度与简单排序', link: '/algorithm/summary/complexity' },
      { text: '排序 - N·log(N)', link: '/algorithm/summary/merge' },
      { text: '堆 & 栈', link: '/algorithm/summary/stack' },
    ],
  },
];

/**
 * Sidebar generator
 * @returns
 */
const generateSidebar = () => ({
  '/knowledge/': knowledgeSidebar,
  '/interview/': interviewSidebar,
  '/algorithm/': algorithmSidebar,
  '/poker/': [
    {
      text: 'Poker',
      items: [{ text: 'Poker Game Marker', link: '/poker/game' }],
    },
  ],
});

export default generateSidebar;
