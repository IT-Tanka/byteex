<script setup>
import BaseButton from '../ui/BaseButton.vue'
import StarRating from '../ui/StarRating.vue'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const imageEdges = computed(() => props.product?.images?.edges || [])
const heroImages = computed(() => imageEdges.value.slice(0, 3).map(edge => edge.node.url))
const logoText = 'BYTEEX'
</script>

<template>
  <section class="product-hero">
    
    <div class="hero-content">
      
      <div class="hero-copy">
         <img src="../../assets/images/LOGO.png" alt="BYTEEX Logo" class="byteex-logo" loading="lazy" />
        <h1>Don't apologize for being comfortable.</h1>

        <ul class="hero-list">
          <li>
            <span class="icon">✓</span>
            Beautiful, comfortable loungewear for day or night.
          </li>
          <li>
            <span class="icon">✓</span>
            No wasteful extras, like tags or plastic packaging.
          </li>
          <li>
            <span class="icon">✓</span>
            Our signature fabric is incredibly comfortable — unlike anything you've ever felt.
          </li>
        </ul>

        <BaseButton label="Customize Your Outfit →" />

        <div class="testimonial-card">
          <div class="testimonial-avatar">J</div>
          <div>
            <div class="testimonial-header">
              <strong>Jane, S.</strong>
              <StarRating rating="5" reviewCount="One of 500+ 5 Star Reviews Online" />
            </div>
            <p>Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.</p>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="image-stack">
          <div class="image-card image-card--left" v-if="heroImages[0]">
            <img :src="heroImages[0]" alt="Product image 1" loading="lazy" />
          </div>
          <div class="image-card image-card--center" v-if="heroImages[1]">
            <img :src="heroImages[1]" alt="Product image 2" loading="lazy" />
          </div>
          <div class="image-card image-card--right" v-if="heroImages[2]">
            <img :src="heroImages[2]" alt="Product image 3" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <div class="seen-in">
      <p>as seen in</p>
      <div class="seen-in-list">
        <span>ECO-STYLIST</span>
        <span>Canadian Living</span>
        <span>JILLIAN HARRIS</span>
        <span>THE ECO HUB</span>
        <span>TRENDHUNTER</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-hero {
  background: $white;
  padding: 80px 20px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  .byteex-logo{
    width: 200px;
    height: 35px;
  }
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.hero-brand {
  display: inline-block;
  font-size: 14px;
  letter-spacing: 3px;
  color:$navy;
  text-transform: uppercase;
}

h1 {
  font-size: 38px;
  line-height: 45px;
  max-width: 592px;
  color:$navy;
  margin: 0;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.hero-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.hero-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 1.7;
}

.icon {
  display: inline-flex;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:$navy;
  color: #ffffff;
  font-size: 14px;
}

.hero-copy > .base-button {
  width: fit-content;
}

.testimonial-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 14px 40px rgba(26, 31, 94, 0.08);
  max-width: 620px;
}

.testimonial-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background:$navy;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.testimonial-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.testimonial-card p {
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
  line-height: 1.75;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.image-stack {
  position: relative;
  width: min(620px, 100%);
  min-height: 440px;
}

.image-card {
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-card--center {
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  z-index: 2;
}

.image-card--left {
  top: 24px;
  left: 0;
  width: 58%;
  height: 62%;
  z-index: 1;
}

.image-card--right {
  bottom: 0;
  right: 0;
  width: 52%;
  height: 58%;
  z-index: 1;
}

.seen-in {
  margin-top: 60px;
  text-align: center;
}

.seen-in p {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 3px;
  color: #6b6b6b;
  text-transform: uppercase;
}

.seen-in-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .hero-content {
    gap: 32px;
  }
}

@media (max-width: 860px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    order: -1;
  }

  .image-card--left {
    left: 6%;
    top: 14%;
    width: 44%;
    height: 46%;
  }

  .image-card--center {
    width: 100%;
    height: 420px;
  }

  .image-card--right {
    right: 8%;
    bottom: -8%;
    width: 42%;
    height: 42%;
  }
}

@media (max-width: 640px) {
  .product-hero {
    padding: 48px 16px;
  }

  .hero-copy {
    gap: 22px;
  }

  .hero-list li {
    font-size: 15px;
  }

  .testimonial-card {
    padding: 20px;
  }

  .image-stack {
    min-height: 360px;
  }

  .image-card--left,
  .image-card--right {
    display: none;
  }

  .image-card--center {
    position: relative;
    transform: none;
  }
}
</style>
