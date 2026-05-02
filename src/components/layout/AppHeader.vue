<template>
  <header class="app-header">
    <p class="header-text full-text">
      CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) 
      <span class="separator">|</span> 
      FREE SHIPPING on orders > $200 
      <span class="separator">|</span> 
      easy 45 day return window
    </p>

    <p class="header-text short-text">
      FREE SHIPPING on orders > $200
    </p>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.app-header {
  background: $peach;
  color: rgba(86, 86, 86, 0.5);
  text-align: center;
  font-family: $font-serif;
  font-size: 11px;
  line-height: 35px;
  letter-spacing: 0.08em;
  padding: 0;
  overflow: hidden;
}

.header-text {
  margin: 0;
  padding: 0 10px;
}

.separator {
  padding: 0 8px;
}

.full-text {
  display: block;
}

.short-text {
  display: none;
}

@media (max-width: 480px) {
  .full-text {
    display: none;
  }
  .short-text {
    display: block;
  }
}

@media (max-width: 360px) {
  .app-header {
    font-size: 10px;
    line-height: 32px;
  }
}
</style>