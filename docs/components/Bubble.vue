<template>
  <div class="bubble-wrap">
    <div class="bubble"></div>
    <div class="shadow"></div>
  </div>
</template>

<style>
.bubble-wrap {
  position: relative;
  margin-top: 50px;
}

.bubble {
  width: 100px;
  height: 100px;
  background-image: radial-gradient(circle at 75% 30%, #fff 5px, #ff21c0 8%, #5b5b5b 60%, #ff21c0 100%);
  border-radius: 50%;
  box-shadow: inset 0 0 10px #fff,
    inset 5px 0 23px #eaf5fc,
    inset 40px 0 30px #efcde6,
    inset -10px -30px 50px #f9f6de,
    inset 0 25px 70px #f9f6de,
    0 0 90px #fff;
  animation: bubble 3s ease-in-out infinite;
  margin: 0 auto;
}

.shadow {
  width: 100px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
  margin: 20px auto 0;
  filter: blur(5px);
  transform-origin: center;
  animation: scale 3s ease-in-out infinite;
}

@keyframes bubble {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

@keyframes scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
}
</style>