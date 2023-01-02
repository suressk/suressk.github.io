<template>
  <VPTeamMembers class="my-intro" size="small" :members="members" />
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

<style>
.my-intro .item {
  padding: 0;
  width: auto;
  height: auto;
  color: var(--vp-c-text-1);
}
</style>
