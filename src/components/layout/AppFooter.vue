<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-brand">BYTEEX</div>
      <div class="footer-links">
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="footer-copy">© 2024 Byteex. All rights reserved.</div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background: #1a1f5e;
  color: #ffffff;
  padding: 32px 20px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
}

.footer-brand {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-links a {
  color: #ffffff;
  font-size: 14px;
}

.footer-copy {
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    gap: 16px;
  }
}
</style>
