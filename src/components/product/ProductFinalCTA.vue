<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="final-cta">
    <div class="final-cta__inner">
      <div class="final-cta__copy">
        <h2>Find something you love.</h2>
        <p>Discover consciously made loungewear designed for everyday comfort, effortless style, and lasting quality.</p>
        <BaseButton label="Customize Your Outfit →" />
      </div>

      <div class="final-cta__visual">
        <div class="image-grid">
          <div class="image-card image-card--left">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" alt="Woman wearing loungewear" loading="lazy" />
          </div>
          <div class="image-card image-card--center">
            <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80" alt="Comfortable lounge outfit" loading="lazy" />
          </div>
          <div class="image-card image-card--right">
            <img src="https://images.unsplash.com/photo-1514995669114-9cbf9e54a47e?auto=format&fit=crop&w=800&q=80" alt="Relaxed home style" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <div class="final-cta__support">
      <div class="final-cta__meta">
        <span class="meta-item">FREE Shipping on orders over $200</span>
        <span class="meta-item">Over 500+ 5 Star Reviews Online</span>
        <span class="meta-item">Made ethically and responsibly</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.final-cta {
  padding: 80px 20px;
  background: #f5efe8;
}

.final-cta__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.final-cta__copy {
  text-align: left;
}

.final-cta__copy h2 {
  margin: 0 0 22px;
  font-size: 42px;
  line-height: 1.05;
  color: #1a1f5e;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.final-cta__copy p {
  margin: 0 0 28px;
  color: #6b6b6b;
  font-size: 16px;
  line-height: 1.8;
  max-width: 520px;
}

.final-cta__visual {
  width: 100%;
}

.image-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 18px;
  align-items: end;
}

.image-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(26, 31, 94, 0.08);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-card--left {
  transform: translateY(32px);
}

.image-card--center {
  grid-row: span 2;
  min-height: 520px;
}

.image-card--right {
  transform: translateY(18px);
}

.final-cta__support {
  margin-top: 56px;
}

.final-cta__meta {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.meta-item {
  color: #1a1f5e;
  font-weight: 600;
  font-size: 14px;
}

@media (max-width: 1024px) {
  .final-cta__inner {
    gap: 32px;
  }

  .image-card--center {
    min-height: 420px;
  }
}

@media (max-width: 768px) {
  .final-cta {
    padding: 48px 16px;
  }

  .final-cta__inner {
    grid-template-columns: 1fr;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .image-card {
    transform: none !important;
  }

  .image-card--center {
    min-height: 360px;
  }

  .final-cta__meta {
    gap: 16px;
    text-align: center;
  }
}
</style>
