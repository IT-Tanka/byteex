<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import ecoStylist from "@/assets/images/logos/eco_stylist.png";
import canadianLiving from "@/assets/images/logos/canadian_living.png";
import jillianHarris from "@/assets/images/logos/jillian_harris.png";
import theEcoHub from "@/assets/images/logos/the_eco_hub.png";
import trendhunter from "@/assets/images/logos/trendhunter.png";

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const imageEdges = computed(() => props.product?.images?.edges || []);
const images = computed(() => imageEdges.value.map((edge) => edge.node.url));

const currentIndex = ref(0);

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
}

function selectImage(index) {
  currentIndex.value = index;
}

const logos = [
  { src: ecoStylist, alt: "ECO-STYLIST", width: 178, height: 22 },
  { src: canadianLiving, alt: "Canadian Living", width: 111, height: 52 },
  { src: jillianHarris, alt: "JILLIAN HARRIS", width: 271, height: 53 },
  { src: theEcoHub, alt: "THE ECO HUB", width: 194, height: 37 },
  { src: trendhunter, alt: "TRENDHUNTER", width: 192, height: 58 },
];

function getLogosPerSlide() {
  return window.innerWidth <= 640 ? 3 : 4;
}

const logosPerSlide = ref(getLogosPerSlide());
const logoSlideIndex = ref(0);

const totalLogoSlides = computed(() =>
  Math.ceil(logos.length / logosPerSlide.value)
);

const visibleLogos = computed(() =>
  logos.slice(
    logoSlideIndex.value * logosPerSlide.value,
    logoSlideIndex.value * logosPerSlide.value + logosPerSlide.value
  )
);

function onResize() {
  const next = getLogosPerSlide();
  if (next !== logosPerSlide.value) {
    logosPerSlide.value = next;
    logoSlideIndex.value = 0;
  }
}

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));
</script>

<template>
  <section class="product-benefits">
    <div class="seen-in container">
      <p>as seen in</p>

      <!-- Desktop: все логотипы сразу -->
      <div class="seen-in-list seen-in-list--desktop">
        <img
          src="@/assets/images/logos/eco_stylist.png"
          alt="ECO-STYLIST"
          style="width: 178px; height: 22px"
        />
        <img
          src="@/assets/images/logos/canadian_living.png"
          alt="Canadian Living"
          style="width: 111px; height: 52px"
        />
        <img
          src="@/assets/images/logos/jillian_harris.png"
          alt="JILLIAN HARRIS"
          style="width: 271px; height: 53px"
        />
        <img
          src="@/assets/images/logos/the_eco_hub.png"
          alt="THE ECO HUB"
          style="width: 194px; height: 37px"
        />
        <img
          src="@/assets/images/logos/trendhunter.png"
          alt="TRENDHUNTER"
          style="width: 192px; height: 58px"
        />
      </div>

      <!-- Mobile: слайдер по 3 логотипа -->
      <div class="seen-in-slider">
        <div class="seen-in-slider__track">
          <img
            v-for="logo in visibleLogos"
            :key="logo.alt"
            :src="logo.src"
            :alt="logo.alt"
            :style="{ width: logo.width + 'px', height: logo.height + 'px' }"
          />
        </div>
        <div class="seen-in-slider__dots">
          <button
            v-for="i in totalLogoSlides"
            :key="i"
            type="button"
            class="logo-dot"
            :class="{ active: logoSlideIndex === i - 1 }"
            @click="logoSlideIndex = i - 1"
            :aria-label="`Slide ${i}`"
          />
        </div>
      </div>
    </div>

    <div class="benefits-inner container">
      <div class="benefits-copy">
        <p class="section-label first">Loungewear you can be proud of.</p>

        <ul class="benefits-list">
          <li>
            <div class="benefit-icon">
              <img src="@/assets/icons/busket.svg" alt="icon" />
            </div>
            <div>
              <strong>Ethically sourced.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li>
            <div class="benefit-icon">
              <img src="@/assets/icons/leaf.svg" alt="icon" />
            </div>
            <div>
              <strong>Responsibly made.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li>
            <div class="benefit-icon">
              <img src="@/assets/icons/sun_moon.svg" alt="icon" />
            </div>
            <div>
              <strong>Made for living in.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li>
            <div class="benefit-icon">
              <img src="@/assets/icons/wave.svg" alt="icon" />
            </div>
            <div>
              <strong>Unimaginably comfortable.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="benefits-slider">
        <p class="section-label hidden">Loungewear you can be proud of.</p>
        <div class="slider-wrap">
          <button
            class="slider-arrow slider-arrow--prev"
            type="button"
            @click="prevImage"
            aria-label="Previous image"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path
                d="M9 1L1 9L9 17"
                stroke="#888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div class="slider-frame">
            <img
              v-if="images.length"
              :src="images[currentIndex]"
              :alt="`Product image ${currentIndex + 1}`"
              class="slider-frame__img"
              loading="lazy"
              :key="currentIndex"
            />
            <div v-else class="slider-placeholder">No image available</div>

            <div class="thumbnail-row" v-if="images.length > 1">
              <button
                v-for="(src, index) in images"
                :key="src + index"
                type="button"
                class="thumbnail"
                :class="{ active: index === currentIndex }"
                @click="selectImage(index)"
                :aria-label="`Go to image ${index + 1}`"
              >
                <img
                  :src="src"
                  :alt="`Thumbnail ${index + 1}`"
                  loading="lazy"
                />
              </button>
            </div>
          </div>

          <button
            class="slider-arrow slider-arrow--next"
            type="button"
            @click="nextImage"
            aria-label="Next image"
          >
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path
                d="M1 1L9 9L1 17"
                stroke="#888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <p class="product-name" v-if="props.product?.title">
          {{ props.product.title }}
        </p>
      </div>
    </div>
  </section>
  <div class="mobile-footer">
        <BaseButton label="Customize Your Outfit" />
        <div class="mobile-rating">
          <span class="stars">★★★★★</span>
          <span>Over 500+ 5 Star Reviews Online</span>
        </div>
      </div>
</template>

<style scoped lang="scss">
.seen-in {
  text-align: center;
}

.seen-in p {
  margin: 0 0 16px;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 3%;
  color: #868787;
}

.seen-in-list {
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 100px;

  img {
    max-height: 40px;
    object-fit: contain;
  }
}
.mobile-footer{
  display: none;
}

.seen-in-slider {
  display: none;
}

.seen-in-slider__track {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;
  min-height: 60px;

  img {
    max-height: 40px;
    max-width: 120px;
    object-fit: contain;
  }
}

.seen-in-slider__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
}

.logo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background 0.2s;

  &.active {
    background: #555;
  }
}

.product-benefits {
  padding: 70px 20px;
  background: linear-gradient(
    180deg,
    #f9f0e5 0%,
    rgba(249, 240, 229, 0.18) 43.05%,
    rgba(249, 240, 229, 0) 100%
  );
}

.benefits-inner {
  max-width: 1464px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  padding-left: 110px;
}

.benefits-copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-label {
  font-family: $font-sans;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 4%;
  color: $navy;
  margin-bottom: 85px;
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
  gap: 32px;
  align-items: start;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 3%;
}

.benefit-icon {
  width: 42px;
  height: 42px;
  background: $cream;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
}

.benefits-list strong {
  display: block;
  color: $navy;
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 4%;
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
}

.slider-wrap {
  display: flex;
  align-items: center;
  gap: 31px;
}

.slider-arrow {
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

  &:hover {
    opacity: 1;
  }
}

.slider-frame {
  position: relative;
  width: 433px;
  height: 648px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  background: #f0eeef;
}

.slider-frame__img {
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

.thumbnail-row {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
}

.thumbnail {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid rgba(240, 238, 239, 1);
  padding: 0;
  cursor: pointer;
  background: none;
  opacity: 0.65;
  transition: all 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.active {
    opacity: 1;
    border-color: $white;
    outline: 1px solid rgba(255, 255, 255, 0.7);
  }

  &:hover {
    opacity: 1;
  }
}

.product-name {
  font-family: $font-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 3%;
  text-align: center;
  margin-top: 13px;
}
.hidden {
  display: none;
}

@media (max-width: 1024px) {
  .benefits-inner {
    gap: 32px;
  }

  .slider-frame {
    width: 360px;
    height: 540px;
  }
}

@media (max-width: 860px) {
  .product-benefits{
    padding-top: 90px;
  }
  .first{
    display: none;
  }
  .hidden {
    display: block;
  }
  .benefits-inner {
    grid-template-columns: 1fr;
    padding-left: 0;
  }

  .section-label {
    margin-bottom: 32px;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
  }

  .benefits-slider {
    align-items: center;
    order: 1;
  }
  .benefits-copy {
    order: 2;
  }
  .slider-wrap {
    gap: 25px;
  }
  .benefits-list li {
    grid-template-columns: none;
    text-align: center;
    margin: auto;
    padding: 10px 30px 20px;
    
     &:not(:last-child)  {
      border-bottom: 1px solid rgba(237, 237, 237, 1);
      padding: 10px 30px 50px;
    }
  }
  .benefit-icon{
    margin: auto;
  }
  .slider-frame {
    width: 303px;
    height: 453px;
  }

  .thumbnail {
    width: 23px;
    height: 23px;
  }
  .mobile-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .mobile-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  margin: auto;
  text-align: center;
  margin-bottom: 43px;
  
}

.stars {
  color: rgba(255, 184, 1, 1);
  letter-spacing: 2px;
}

}

@media (max-width: 960px) {
  .seen-in-list--desktop {
    display: none;
  }

  .seen-in-slider {
    display: block;
  }
}

@media (max-width: 640px) {
  .product-benefits {
    padding: 110px 16px;
  }

  .benefits-list li {
    gap: 16px;
  }

  .benefits-list strong {
    font-size: 18px;
  }
  .mobile-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  flex-wrap: wrap;
  flex-direction: column;
}



}
</style>