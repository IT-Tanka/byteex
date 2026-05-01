<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="product-how-it-works">
    <div class="how-inner">
      <div class="how-header">
        <p>Comfort made easy</p>
      </div>

      <div class="how-cards">
        <article class="how-card">
          <div class="how-icon">🛒</div>
          <h3>You save.</h3>
          <p>Browse our comfort sets and save 15% when you bundle.</p>
        </article>

        <article class="how-card how-card--highlight">
          <div class="how-icon">🚚</div>
          <h3>We ship.</h3>
          <p>We ship your items within 1–2 days of receiving your order.</p>
        </article>

        <article class="how-card">
          <div class="how-icon">☀️</div>
          <h3>You enjoy!</h3>
          <p>Wear harness around the house, out on the town, or in bed.</p>
        </article>
      </div>

      <div class="how-footer">
        <BaseButton label="Customize Your Outfit →" />
        <p class="how-subtext">Click below to browse our collection and save 15% on your set.</p>
        <div class="how-rating">
          <span class="stars">★★★★★</span>
          <span>Over 500+ 5 Star Reviews Online</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-how-it-works {
  padding: 80px 20px;
  background: #ffffff;
}

.how-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.how-header p {
  margin: 0 auto;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #1a1f5e;
  font-weight: 700;
}

.how-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.how-card {
  padding: 32px;
  border-radius: 20px;
  background: #ede5d8;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 240px;
}

.how-card--highlight {
  background: #f5efe8;
}

.how-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: #1a1f5e;
  color: #ffffff;
  font-size: 22px;
}

.how-card h3 {
  margin: 0;
  font-size: 20px;
  color: #1a1f5e;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.how-card p {
  margin: 0;
  color: #6b6b6b;
  line-height: 1.8;
  font-size: 15px;
}

.how-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.how-subtext {
  margin: 0;
  max-width: 520px;
  color: #6b6b6b;
  font-size: 15px;
  line-height: 1.75;
  text-align: center;
}

.how-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
}

.stars {
  color: #f4a623;
  letter-spacing: 2px;
}

@media (max-width: 860px) {
  .how-cards {
    grid-template-columns: 1fr;
  }

  .how-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .how-footer BaseButton {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .product-how-it-works {
    padding: 48px 16px;
  }

  .how-card {
    padding: 24px;
  }

  .how-footer {
    gap: 16px;
  }
}
</style>
