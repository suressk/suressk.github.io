<template>
  <VPTeamMembers size="small" :members="members" />
</template>

<script setup>
import { VPTeamMembers } from "vitepress/theme";
const members = [
  {
    avatar: "https://www.github.com/suressk.png",
    name: "小 K. 同学",
    title: "Author",
    links: [
      { icon: "github", link: "https://github.com/suressk" },
      {
        icon: 'facebook',
        link: "https://juejin.cn/user/3940246036945822",
      },
    ],
  },
];
</script>
