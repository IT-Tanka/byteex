<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || undefined"
    class="base-button"
  >
    <span>{{ label }}</span>
    <img src="@/assets/icons/arrow.svg" alt="arrow" />
  </component>
</template>

<style scoped lang="scss">
.base-button {
  height: 56px;
  width: 362px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 43px 22px;
  border-radius: 4px;
  border: none;
  background: $navy;
  color: $white;
  font-family: $font-sans;
  text-decoration: none;
  cursor: pointer;
  transition:
  transform 0.18s ease,
  background-color 0.18s ease;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 3%;
  text-align: center;
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
@media (max-width: 640px) {
  .base-button{
    width: 369px !important;
    margin: auto;
  }
}
</style>
