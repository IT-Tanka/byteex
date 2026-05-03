<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import StarRating from "../ui/StarRating.vue";
import HeroCarousel from "../ui/HeroCarousel.vue";

import model1 from "@/assets/images/model-1.png";
import model0 from "@/assets/images/model-0.png";
import model4 from "@/assets/images/model-4.png";

const heroImages = [model1, model0, model4];

const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1280);

function onResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));

const carouselProps = computed(() => {
  const w = windowWidth.value;
  if (w <= 860) {
    return {
      centerWidth: 136,
      centerHeight: 221,
      centerBorder: "2.5px solid rgba(240, 238, 239, 0.6)",
      sideWidth: 110,
      sideHeight: 166,
      sideOverlap: 28,
      rectWidth: 70,
      rectHeight: 99,
    };
  }
  if (w <= 1100) {
    return {
      centerWidth: 200,
      centerHeight: 325,
      centerBorder: "2.5px solid rgba(240, 238, 239, 0.6)",
      sideWidth: 160,
      sideHeight: 243,
      sideOverlap: 35,
      rectWidth: 100,
      rectHeight: 145,
    };
  }
  return {
    centerWidth: 260,
    centerHeight: 422,
    centerBorder: "2.5px solid rgba(240, 238, 239, 0.6)",
    sideWidth: 209,
    sideHeight: 317,
    sideOverlap: 43,
    rectWidth: 134,
    rectHeight: 189,
  };
});
</script>

<template>
  <section class="product-hero">
    <div class="hero-wrapper container">
      <img
        src="@/assets/images/LOGO.png"
        alt="BYTEEX Logo"
        class="byteex-logo"
        loading="lazy"
      />
      <h1 class="hidden">Don't apologize for being comfortable.</h1>
      <div class="hero-content">
        <div class="hero-copy">
          <h1 class="desktop">Don't apologize for being comfortable.</h1>

          <ul class="hero-list">
            <li>
              <span class="icon"
                ><img src="@/assets/icons/sun_moon.svg" alt=""
              /></span>
              Beautiful, comfortable loungewear for day or night.
            </li>
            <li>
              <span class="icon"
                ><img src="@/assets/icons/busket.svg" alt=""
              /></span>
              No wasteful extras, like tags or plastic packaging.
            </li>
            <li>
              <span class="icon"
                ><img src="@/assets/icons/wave.svg" alt=""
              /></span>
              Our signature fabric is incredibly comfortable — unlike anything
              you've ever felt.
            </li>
          </ul>

          <BaseButton label="Customize Your Outfit" />

          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="@/assets/images/color wheel.png" alt="women photo" />
              </div>
              <span class="review-name">Amy P.</span>
              <StarRating
                rating="5"
                reviewCount="One of 500+ 5 Star Reviews Online"
              />
            </div>
            <p>
              Overjoyed with my Loungewear set. I have the jogger and the
              sweatshirt. Quality product on every level. From the compostable
              packaging, to the supplied washing bag, even the garments smells
              like fresh herbs when I first held them.
            </p>
          </div>
        </div>

        <div class="hero-visual">
          <HeroCarousel
            :images="heroImages"
            v-bind="carouselProps"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hidden {
  display: none;
}
.product-hero {
  background: $white;
  padding: 33px 62px 70px 106px;
  position: relative;
}

.hero-wrapper {
  max-width: 1464px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.byteex-logo {
  width: 200px;
  height: 35px;
  margin-bottom: 55px;
  margin-left: 63px;
  flex-shrink: 0;
}

.hero-content {
  display: flex;
  justify-content: center;
  gap: 110px;
  align-items: start;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 480px;
  padding-bottom: 50px h1 {
    display: none;
  }
}

h1 {
  font-family: $font-sans;
  font-size: 38px;
  line-height: 45px;
  max-width: 592px;
  color: $navy;
  margin: 0 0 12px;
  letter-spacing: 4%;
  font-weight: 400;
}

.hero-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 23px;
  margin-bottom: 12px;
}

.hero-list li {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  color: #1a1a1a;
  font-size: 16px;
  line-height: 1.7;
}

.icon {
  display: inline-flex;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: $cream;

  img {
    width: 18px;
    height: 18px;
  }
}

.testimonial-card {
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 5px 5px 18px;
  background: $white;
  border-radius: 8px;
  box-shadow: 0 14px 40px rgba(26, 31, 94, 0.08);
  max-width: 408px;
  font-family: $font-sans;
}

.testimonial-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: $navy;
  color: $white;
  display: grid;
  place-items: center;
  font-weight: 700;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}

.testimonial-header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 14px;
}

.review-name {
  font-family: $font-sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.02em;
}

.testimonial-card p {
  margin: 0;
  color: $text-dark;
  font-size: 12px;
  font-weight: 400;
  line-height: 23px;
  font-family: $font-serif;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 422px;
}

@media (max-width: 1100px) {
  .hero-visual {
    min-height: 325px;
  }
}

@media (max-width: 1100px) {
  .hero-content {
    gap: 32px;
  }
}

@media (max-width: 860px) {
  .hero-visual {
    min-height: unset;
  }
}

@media (max-width: 860px) {
  .hidden {
    display: block;
  }
  .product-hero {
    padding: 24px 16px 140px;
  }

  .hero-wrapper {
    align-items: center;
    text-align: center;
  }

  .byteex-logo {
    margin: 0 auto 20px;
  }

  .hero-content {
    flex-direction: column;
  }

  .hero-visual {
    order: -1;
    width: 100%;
  }

  .hero-copy {
    align-items: center;
    gap: 22px;
    h1 {
      display: none;
    }
  }

  h1 {
    font-family: $font-sans;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;
    letter-spacing: 4%;
    text-align: center;
    margin-bottom: 17px;
  }

  .hero-list {
    text-align: left;
    width: 100%;
  }

  .hero-list li {
    font-size: 15px;
  }

  .testimonial-card {
    position: absolute;
    max-width: 100%;
    width: 100%;
    padding: 16px;
    text-align: left;
    max-width: 388px;
  }
}

@media (max-width: 480px) {
  .hero-copy {
    max-width: 380px;
    margin: auto;
  }
  h1 {
    font-size: 24px;
    line-height: 32px;
  }
}
</style>
