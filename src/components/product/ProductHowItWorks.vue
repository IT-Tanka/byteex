<script setup>
import { ref } from 'vue'
import BaseButton from "../ui/BaseButton.vue";
import busketIcon from '@/assets/icons/busket.svg'
import CarIcon from '@/assets/icons/car.svg'
import sunMoonIcon from '@/assets/icons/sun_moon.svg'

const cards = [
  {
    icon: busketIcon,
    title: 'You save.',
    text: 'Browse our store and find something you love.',
    highlight: false,
  },
  {
    icon: CarIcon,
    title: 'We ship.',
    text: 'We ship your items within 1–2 days of receiving your order.',
    highlight: true,
  },
  {
    icon: sunMoonIcon,
    title: 'You enjoy!',
    text: 'Wear harness around the house, out on the town, or in bed.',
    highlight: false,
  },
]

const mobileIndex = ref(0)
const prevCard = () => { mobileIndex.value = (mobileIndex.value - 1 + cards.length) % cards.length }
const nextCard = () => { mobileIndex.value = (mobileIndex.value + 1) % cards.length }
</script>

<template>
  <section class="product-how-it-works container">
    <div class="how-inner">

      <div class="how-header">
        <p>Comfort made easy</p>
      </div>

      <div class="how-cards how-cards--desktop">
        <article
          v-for="card in cards"
          :key="card.title"
          class="how-card"
          :class="{ 'how-card--highlight': card.highlight }"
        >
          <img :src="card.icon" alt="icon" class="how-icon" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>

      <div class="how-cards--mobile">
        <button class="how-arrow" @click="prevCard" aria-label="Previous">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1L1 9L9 17" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <article
          class="how-card how-card--mobile-single"
          :class="{ 'how-card--highlight': cards[mobileIndex].highlight }"
        >
          <img :src="cards[mobileIndex].icon" alt="icon" class="how-icon" />
          <h3>{{ cards[mobileIndex].title }}</h3>
          <p>{{ cards[mobileIndex].text }}</p>
        </article>

        <button class="how-arrow" @click="nextCard" aria-label="Next">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M1 1L9 9L1 17" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="how-footer">
        <BaseButton label="Customize Your Outfit" />
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
  padding: 80px 20px 74px 20px;
  background: $white;
}

.how-inner {
  max-width: 1464px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.how-header p {
  margin: 0 auto;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.04em;
  text-align: center;
  color: $navy;
}

.how-cards--desktop {
  display: grid;
  grid-template-columns: repeat(3,346px);
  gap: 41px;
  margin: auto;
}

.how-cards--mobile {
  display: none;
}

.how-card {
  padding: 75px 24px 18px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 346px;
  height: 321px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(237, 237, 237, 1);
  background: rgba(240, 238, 239, 1);
}

.how-card--highlight {
  background: $peach;
}

.how-icon {
  min-width: 50px;
}

.how-card h3 {
  margin: 0;
  color: $navy;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 0.04em;
  text-align: center;
}

.how-card p {
  margin: 0;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #6b6b6b;
}

.how-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  flex-wrap: wrap;
  flex-direction: column;
}

.how-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  margin: auto;
}

.stars {
  color: #f4a623;
  letter-spacing: 2px;
}

.how-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &:hover { opacity: 1; }
  svg { display: block; }
}

@media (max-width: 1200px) {
  .how-cards--desktop {
    display: none;
  }

  .how-cards--mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .how-card--mobile-single {
    width: 288px;
    height: 288px;
    padding: 24px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid rgba(237, 237, 237, 1);
  }

  .how-footer {
    flex-direction: column;
    align-items: stretch;
    margin: auto;
  }
}

@media (max-width: 640px) {
  .product-how-it-works {
    padding: 48px 16px;
  }

  .how-header p {
    font-size: 26px;
    line-height: 34px;
  }

  .how-footer {
    gap: 16px;
  }
}
</style>
