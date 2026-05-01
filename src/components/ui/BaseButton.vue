<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    class="base-button"
  >
    <span>{{ label }}</span>
    <span class="arrow">→</span>
  </component>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 4px;
  border: none;
  background: #1a1f5e;
  color: #ffffff;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.18s ease, background-color 0.18s ease;
}

.base-button:hover {
  background: #2d3494;
  transform: translateY(-1px);
}

.base-button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
}

.arrow {
  display: inline-block;
  transform: translateX(1px);
}
</style>
