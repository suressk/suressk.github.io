<template>
  <div class="container">
    <div class="restart" @click="restartGame">重开</div>
    <div ref="teamA" class="team line" @click="handleClick($event, 1)">
      <div class="team-title">♠️</div>
      <div
        v-for="(item, index) in team"
        :key="item"
        class="team-item"
        :class="{ active: index === team1ActiveIndex }"
      >
        {{ item }}
      </div>
    </div>
    <div ref="teamB" class="team" @click="handleClick($event, 2)">
      <div class="team-title team-title-r" style="left: 50vw">♥️</div>
      <div
        v-for="(item, index) in team"
        :key="item"
        class="team-item"
        :class="{ active: index === team2ActiveIndex }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useTemplateRef } from 'vue';

const team = ref([
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
]);

const team1ActiveIndex = ref(0);
const team2ActiveIndex = ref(0);
const teamARef = useTemplateRef('teamA');
const teamBRef = useTemplateRef('teamB');

const restartGame = () => {
  team1ActiveIndex.value = 0;
  team2ActiveIndex.value = 0;
  teamARef.value.scrollTo({ top: 0, behavior: 'smooth' });
  teamBRef.value.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleClick = (event, teamNumber) => {
  const itemElement = event.target.closest('.team-item');
  if (!itemElement || itemElement.classList.contains('active')) return;

  const index = Array.from(itemElement.parentNode.children).indexOf(
    itemElement,
  );
  if (teamNumber === 1) {
    team1ActiveIndex.value = index - 1;
  } else {
    team2ActiveIndex.value = index - 1;
  }
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f0d9d0;
}
.restart {
  position: fixed;
  left: 50vw;
  top: 10px;
  border: 1px solid #f5e6e0;
  z-index: 11;
  transform: translateX(-50%);
  padding: 10px 30px;
  background-color: #c83737;
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.2);
}
.team {
  width: 50vw;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  scrollbar-color: unset;
  scrollbar-width: 1;
  position: relative;
  padding-bottom: 40px;
  box-sizing: border-box;
  padding-top: 80px;
}
.line {
  border-right: 1px solid #f38b30;
}
.team-title,
.team-item {
  text-align: center;
  font-size: 20px;
}
.team-title {
  font-size: 24px;
  font-weight: bold;
  /* padding: 20px 0; */
  height: 72px;
  line-height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  background-color: #d47a5e;
  z-index: 10;
}
.team-title-r {
  left: 50vw;
}
.team-item {
  color: #f57c00;
  margin: 5px 0;
  padding: 0 40px;
  height: 56px;
  line-height: 56px;
  display: inline-block;
  background-color: rgba(227, 125, 125, 0.25);
  backdrop-filter: blur(12px);
  border-radius: 30px;
  box-shadow: 0 16px 40px rgba(211, 69, 69, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.team-item.active {
  background-image: radial-gradient(
    circle at 75% 30%,
    #fff 5px,
    #ff21c0 8%,
    #5b5b5b 60%,
    #ff21c0 100%
  );
  box-shadow:
    inset 0 0 10px #fff,
    inset 5px 0 23px #eaf5fc,
    inset 40px 0 30px #efcde6,
    inset -10px -30px 50px #f9f6de,
    inset 0 25px 70px #f9f6de,
    0 0 90px #fff;
  border-color: #f40;
  color: #f40;
  font-weight: 700;
  font-size: 24px;
}
</style>
