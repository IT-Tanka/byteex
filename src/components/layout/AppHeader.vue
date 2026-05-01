<template>
  <header class="app-header">
    <div class="announcement-bar">
      CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.
    </div>
    
  </header>
</template>

<script setup>
</script>

<style scoped lang="scss">
.app-header {
  .announcement-bar {
    background: #f5efe8;
    color: #6b6b6b;
    text-align: center;
    padding: 8px 20px;
    font-size: 12px;
    letter-spacing: 0.2px;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: #ffffff;
    border-bottom: 1px solid #e8e0d8;
  }

  .logo {
    font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #1a1f5e;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  .nav-links a {
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: #2d3494;
  }

  .burger {
    display: none;
    width: 32px;
    height: 28px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
  }

  .burger span {
    display: block;
    height: 3px;
    width: 100%;
    background: #1a1f5e;
    border-radius: 2px;
  }
}

@media (max-width: 768px) {
  .app-header .header-inner {
    padding: 16px 20px;
  }

  .app-header .nav-links {
    display: none;
  }

  .app-header .burger {
    display: flex;
  }
}
</style>
