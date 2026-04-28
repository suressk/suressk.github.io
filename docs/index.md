---
# vitepress 0.20
# home: true
# title: 要么孤独，要么庸俗
# heroImage: ./images/raining.gif
# heroText: Keep calm and carry on!
# # metaTitle: 小K. 的小窝
# tagline: " "
# actionText: Come In →
# actionLink: "/mood/"

# vitepress 1.0.0 alpha
layout: home

title: K.island

hero:
  name: K.island
  text: 要么孤独，要么庸俗
  tagline: Keep calm and carry on!
  image:
    src: /images/avatar.png
    alt: K.island
  actions:
    - theme: brand
      text: ✨ Come In →
      link: /knowledge/
---

<script>
import Bubble from './components/Bubble.vue'

export default {
  components: { Bubble },
}
</script>

<div class="fixed-wrap">
  <Bubble />
</div>

<style scoped>
.fixed-wrap {
  position: fixed;
  right:0;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 999;
}
</style>
