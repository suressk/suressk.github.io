<template>
  <div class="custom-block" :class="[cls]">
    <p class="custom-block-title">{{ props.title }}</p>
    <p>{{ props.content }}</p>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const typeMap = {
  success: 'tip',
  danger: 'danger',
  info: 'info'
}
const props = defineProps({
  type: String,
  title: String,
  content: String,
})

const cls = computed(() => typeMap[props.type] || 'info')
</script>