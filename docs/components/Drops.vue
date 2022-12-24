<template>
  <div class="drops-wrap">
    <div class="drops">
      <span class="drop"></span>
      <span class="drop"></span>
      <span class="drop"></span>
      <span class="drop"></span>
    </div>
  </div>
</template>

<style>
/* :root.dark .drops-wrap {
  background-color: transparent;
}

:root.dark .drop {
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.1),
    15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(0, 0, 0, 0.2);
}

:root.dark .drop::before,
:root.dark .drop::after {
  background-color: rgba(0, 0, 0, 0.2);
} */

.drops-wrap {
  background-color: #edeeed;
  height: 300px;
  border-radius: 8px;
}

@keyframes wiggle {
  0%, 100% {
    border-radius: 35% 65% 69% 31% / 53% 53% 47% 47%;
  }
  25% {
    border-radius: 72% 28% 37% 63% / 31% 28% 72% 69%;
  }
  50% {
    border-radius: 47% 53% 37% 63% / 31% 40% 60% 69%;
  }
  75% {
    border-radius: 61% 39% 64% 36% / 43% 67% 33% 57%;
  }
}

.drops {
  position: relative;
  top: 60px;
  display: flex;
  justify-content: center;
  height: 100%;
  transform: scale(0.8);
}

.drop {
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 35% 65% 69% 31% / 53% 53% 47% 47%;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.1),
    15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.6);
  animation: wiggle 8s linear infinite;
}

.drop::before,
.drop::after {
  content: '';
  position: absolute;
  top: 25px;
  left: 35px;
  width: 20px;
  height: 20px;
  border-radius: 64% 36% 43% 57% / 39% 53% 47% 61%;
  background-color: #fff;
  filter: blur(2px);
}

.drop::after {
  width: 10px;
  height: 10px;
  top: 15px;
  left: 65px;
}

.drop:nth-child(2) {
  transform: scale(0.5) translate(-200px , 180px);
  border-radius: 68% 32% 52% 48% / 39% 57% 43% 61%;
  animation-delay: -2s;
}

.drop:nth-child(3) {
  transform: scale(0.5) translate(280px , 20px);
  border-radius: 35% 65% 63% 37% / 31% 47% 53% 69%;
  animation-delay: -4s;
}

.drop:nth-child(4) {
  transform: scale(0.35) translate(120px , -350px);
  border-radius: 38% 62% 54% 46% / 39% 67% 33% 61%;
  animation-delay: 2s;
}
</style>