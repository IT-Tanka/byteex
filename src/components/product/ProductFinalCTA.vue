<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HeroCarousel from '../ui/HeroCarousel.vue'
import BaseButton from '../ui/BaseButton.vue'

import model3 from '@/assets/images/model-3.png'
import model2 from '@/assets/images/model-2.png'
import model1 from '@/assets/images/model-1.png'

const ctaImages = [model3, model2, model1]

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1280)

function onResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const carouselProps = computed(() => {
  if (windowWidth.value <= 640) {
    return {
      centerWidth: 139,
      centerHeight: 211,
      sideWidth: 105,
      sideHeight: 152,
      sideBorder: '1px solid rgba(240, 238, 239, 1)',
      sideOverlap: -5,
      rectWidth: 67,
      rectHeight: 95,
    }
  }
  return {
    centerWidth: 246,
    centerHeight: 373,
    sideWidth: 209,
    sideHeight: 317,
    sideBorder: '1px solid rgba(240, 238, 239, 1)',
    sideOverlap: -5,
    rectWidth: 139,
    rectHeight: 196,
  }
})
</script>

<template>
  <section class="product-final-cta">

    <div class="cta__header">
      <h2 class="cta__title">Find something you love.</h2>
      <p class="cta__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
        facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
      </p>
    </div>

    <div class="cta__gallery">
      <HeroCarousel
        :images="ctaImages"
        v-bind="carouselProps"
      />
    </div>

    <div class="cta__action">
      <BaseButton label="Customize Your Outfit" />

      <div class="cta__shipping-row">
        <span class="cta__ships-badge">
          <span class="cta__ships-dot"></span>
          Ships in 1–2 Days
        </span>
        <img src="@/assets/images/payments.png" alt="Payment methods" class="cta__payments" />
      </div>
    </div>

    <div class="cta__trust">
      <div class="cta__trust-item">
        <div class="cta__trust-icon">
          <img src="@/assets/icons/car.svg" alt="" />
        </div>
        <p class="cta__trust-text">FREE Shipping on<br />Orders over $200</p>
      </div>
      <div class="cta__trust-item">
        <div class="cta__trust-icon">
          <img src="@/assets/icons/shield.svg" alt="" />
        </div>
        <p class="cta__trust-text">Over 500+ 5 Star<br />Reviews Online</p>
      </div>
      <div class="cta__trust-item">
        <div class="cta__trust-icon">
          <img src="@/assets/icons/busket.svg" alt="" />
        </div>
        <p class="cta__trust-text">Made ethically<br />and responsibly.</p>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
.product-final-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 24px 48px;
  background: linear-gradient(0deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%);
}

.cta__header {
  text-align: center;
  margin-bottom: 32px;
  max-width: 560px;
}

.cta__title {
  font-family: $font-serif;
  font-size: 32px;
  font-weight: 400;
  color: $navy;
  margin: 0 0 14px;
  letter-spacing: -0.3px;
  line-height: 1.2;
}

.cta__subtitle {
  font-family: $font-sans;
  font-size: 14px;
  line-height: 1.6;
  color: $text-dark;
  margin: 0;
}

.cta__gallery {
  margin-bottom: 40px;
}

.cta__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}

.cta__shipping-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.cta__ships-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: $font-sans;
  font-size: 12px;
  color: #3a8a3a;
  font-weight: 500;
}

.cta__ships-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3a8a3a;
  flex-shrink: 0;
}

.cta__payments {
  height: 18px;
  width: auto;
  object-fit: contain;
}

.cta__trust {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  max-width: 600px;
}

.cta__trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.cta__trust-icon {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: rgba(#666666, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    opacity: 0.65;
  }
}

.cta__trust-text {
  font-family: $font-sans;
  font-size: 12px;
  line-height: 1.5;
  color: $text-dark;
  margin: 0;
}

@media (max-width: 640px) {
  .product-final-cta {
    padding: 40px 16px 40px;
  }

  .cta__title {
    font-size: 26px;
  }

  .cta__gallery {
    padding-bottom: 16px;
    margin-bottom: 0;
    min-height: unset;
  }

  .cta__action {
    width: 100%;
    align-items: stretch;
  }

  .cta__trust {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta__trust-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 0 0 calc(33% - 12px);
  }

  .cta__trust-text {
    font-size: 11px;
  }
}
</style>
