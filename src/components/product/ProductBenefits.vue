<script setup>
import { computed, ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => ({}),
  },
})

const imageEdges = computed(() => props.product?.images?.edges || [])
const images = computed(() => imageEdges.value.map(edge => edge.node.url))
const currentIndex = ref(0)

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

function selectImage(index) {
  currentIndex.value = index
}
</script>

<template>
  <section class="product-benefits">
    <div class="benefits-inner">
      <div class="benefits-copy">
        <p class="section-label">Loungewear you can be proud of.</p>
        <h2>Comfort without compromise.</h2>

        <ul class="benefits-list">
          <li>
            <span class="benefit-icon">🌿</span>
            <div>
              <strong>Ethically sourced.</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
            </div>
          </li>
          <li>
            <span class="benefit-icon">🤝</span>
            <div>
              <strong>Responsibly made.</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
            </div>
          </li>
          <li>
            <span class="benefit-icon">✨</span>
            <div>
              <strong>Made for living in.</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
            </div>
          </li>
          <li>
            <span class="benefit-icon">〰️</span>
            <div>
              <strong>Unimaginably comfortable.</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="benefits-slider">
        <div class="slider-frame">
          <button class="slider-nav slider-nav--left" type="button" @click="prevImage" aria-label="Previous image">‹</button>
          <div class="slider-image">
            <img
              v-if="images.length"
              :src="images[currentIndex]"
              :alt="`Product image ${currentIndex + 1}`"
              loading="lazy"
            />
            <div v-else class="slider-placeholder">No image available</div>
          </div>
          <button class="slider-nav slider-nav--right" type="button" @click="nextImage" aria-label="Next image">›</button>
        </div>

        <div class="thumbnail-row">
          <button
            v-for="(src, index) in images"
            :key="src + index"
            type="button"
            class="thumbnail"
            :class="{ active: index === currentIndex }"
            @click="selectImage(index)"
          >
            <img :src="src" :alt="`Thumbnail ${index + 1}`" loading="lazy" />
          </button>
        </div>

        <p class="slider-caption">White Robe</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-benefits {
  padding: 80px 20px;
  background: #ffffff;
}

.benefits-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.benefits-copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-label {
  margin: 0;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1a1f5e;
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
  color: #1a1f5e;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.benefits-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 22px;
}

.benefits-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
}

.benefit-icon {
  font-size: 20px;
  min-width: 36px;
  min-height: 36px;
  display: grid;
  place-items: center;
  background: #e8e0d8;
  border-radius: 12px;
}

.benefits-list strong {
  display: block;
  color: #1a1f5e;
  font-size: 16px;
  margin-bottom: 6px;
}

.benefits-list p {
  margin: 0;
  color: #6b6b6b;
  line-height: 1.7;
  font-size: 15px;
}

.benefits-slider {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.slider-frame {
  position: relative;
  display: grid;
  place-items: center;
  background: #f8f6f2;
  border-radius: 24px;
  overflow: hidden;
  min-height: 420px;
}

.slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slider-placeholder {
  padding: 60px;
  color: #6b6b6b;
  font-size: 16px;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(26, 31, 94, 0.9);
  color: #ffffff;
  font-size: 26px;
  cursor: pointer;
  display: grid;
  place-items: center;
}

.slider-nav--left {
  left: 18px;
}

.slider-nav--right {
  right: 18px;
}

.thumbnail-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.thumbnail {
  width: 76px;
  height: 76px;
  border: 2px solid transparent;
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
}

.thumbnail.active {
  border-color: #1a1f5e;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slider-caption {
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .benefits-inner {
    gap: 32px;
  }
}

@media (max-width: 860px) {
  .benefits-inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .product-benefits {
    padding: 48px 16px;
  }

  .slider-frame {
    min-height: 300px;
  }

  .slider-nav {
    width: 40px;
    height: 40px;
    font-size: 22px;
  }

  .thumbnail {
    width: 62px;
    height: 62px;
  }
}
</style>
