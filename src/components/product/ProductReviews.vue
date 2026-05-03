<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import BaseButton from "../ui/BaseButton.vue";
import userPhoto1 from "../../assets/images/users/Rectangle 738.png";
import userPhoto2 from "../../assets/images/users/Rectangle 737.png";
import userPhoto3 from "../../assets/images/users/Rectangle 740.png";
import userPhoto4 from "../../assets/images/users/Rectangle 739.png";
import userPhoto5 from "../../assets/images/users/Rectangle 741.png";
import userPhoto6 from "../../assets/images/users/Rectangle 758.png";
import userPhoto7 from "../../assets/images/users/Rectangle 757.png";
import userPhoto8 from "../../assets/images/users/Rectangle 756.png";
import userPhoto9 from "../../assets/images/users/Rectangle 755.png";
import userPhoto10 from "../../assets/images/users/Rectangle 754.png";
import userPhoto11 from "../../assets/images/users/Rectangle 753.png";
import userPhoto12 from "../../assets/images/users/Rectangle 752.png";
import userPhoto13 from "../../assets/images/users/Rectangle 751.png";
import userPhoto14 from "../../assets/images/users/Rectangle 750.png";
import userPhoto15 from "../../assets/images/users/Rectangle 749.png";
import userPhoto16 from "../../assets/images/users/Rectangle 748.png";
import userPhoto17 from "../../assets/images/users/Rectangle 747.png";
import userPhoto18 from "../../assets/images/users/Rectangle 746.png";
import userPhoto19 from "../../assets/images/users/Rectangle 745.png";
import userPhoto20 from "../../assets/images/users/Rectangle 744.png";
import userPhoto21 from "../../assets/images/users/Rectangle 743.png";
import userPhoto22 from "../../assets/images/users/Rectangle 742.png";

const testimonials = [
  {
    name: "Jane, S.",
    initials: "JS",
    text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.",
  },
  {
    name: "Sara D.",
    initials: "SD",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    name: "Mia K.",
    initials: "MK",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
];

const images = [
  userPhoto1,
  userPhoto2,
  userPhoto3,
  userPhoto4,
  userPhoto5,
  userPhoto6,
  userPhoto7,
  userPhoto8,
  userPhoto9,
  userPhoto10,
  userPhoto11,
  userPhoto12,
  userPhoto13,
  userPhoto14,
  userPhoto15,
  userPhoto16,
  userPhoto17,
  userPhoto18,
  userPhoto19,
  userPhoto20,
  userPhoto21,
  userPhoto22,
];

const currentReviewStart = ref(0);
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1464);

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

// Динамически ограничиваем количество картинок для мобильных экранов (768px и меньше)
const visibleImages = computed(() => {
  if (windowWidth.value <= 768) {
    return images.slice(0, 8); // Только первые 8 картинок
  }
  return images; // Все 22 картинки для больших экранов
});

const visibleTestimonials = computed(() => {
  let count = 3;
  if (windowWidth.value <= 768) {
    count = 1;
  } else if (windowWidth.value <= 1024) {
    count = 2;
  }

  return Array.from(
    { length: Math.min(count, testimonials.length) },
    (_, i) =>
      testimonials[(currentReviewStart.value + i) % testimonials.length],
  );
});

function nextReview() {
  currentReviewStart.value =
    (currentReviewStart.value + 1) % testimonials.length;
}

function prevReview() {
  currentReviewStart.value =
    (currentReviewStart.value - 1 + testimonials.length) % testimonials.length;
}
</script>

<template>
  <section class="product-reviews container">
    <div class="reviews-header">
      <h2>What are our fans saying?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
    </div>
    <div class="reviews-inner">
      <div class="ugc-grid">
        <template v-for="(src, index) in visibleImages" :key="src + index">
          <img :src="src" :alt="`UGC photo ${index + 1}`" loading="lazy" />
        </template>
      </div>

      <div class="reviews-carousel">
        <div class="review-carousel-row">
          <button
            class="review-nav review-nav--left"
            type="button"
            @click="prevReview"
            aria-label="Previous review"
          >
            ‹
          </button>

          <div class="review-cards">
            <article
              v-for="testimonial in visibleTestimonials"
              :key="testimonial.name"
              class="review-card"
            >
              <div class="review-top">
                <div class="review-avatar">{{ testimonial.initials }}</div>
                <div class="review-meta">
                  <span class="review-stars">★★★★★</span>
                  <strong>{{ testimonial.name }}</strong>
                </div>
              </div>

              <div class="review-content">
                <p>{{ testimonial.text }}</p>
              </div>
            </article>
          </div>

          <button
            class="review-nav review-nav--right"
            type="button"
            @click="nextReview"
            aria-label="Next review"
          >
            ›
          </button>
        </div>

        <div class="reviews-footer">
          <BaseButton label="Customize Your Outfit" />
          <div class="review-summary">
            <span class="review-stars">★★★★★</span>
            <span>Over 500+ 5 Star Reviews Online</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-reviews {
  background: $white;
}

.reviews-inner {
  max-width: 1464px;
  margin: 0 auto;
  display: grid;
  gap: 48px;
}

.ugc-grid {
  display: grid;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  gap: 8px;
}

.ugc-grid img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.reviews-carousel {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 28px;
}
.ugc-grid,
.reviews-carousel {
  max-width: 100%;
  overflow: hidden;
}

.reviews-header h2 {
  font-family: $font-sans;
  font-weight: 400;
  color: $navy;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 4%;
  text-align: center;
}

.reviews-header p {
  margin: auto;
  font-family: $font-sans;
  color: rgba(103, 104, 105, 1);
  max-width: 613px;
  font-weight: 400;
  margin-top: 44px;
  line-height: 23px;
  letter-spacing: 3%;
  text-align: center;
  margin-bottom: 55px;
}

.review-carousel-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 20px;
}

.review-nav {
  border: none;
  background: transparent;
  color: $navy;
  font-size: 36px;
  cursor: pointer;
  padding: 0 12px;
}

.review-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  justify-items: center;
}

.review-card {
  background: $white;
  padding: 24px;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 338px;
  min-height: 252px;
  opacity: 1;
  border-radius: 8px;
  border: 1px solid rgba(234, 234, 234, 1);
}

.review-top {
  display: flex;
  align-items: top;
  gap: 12px;
  justify-content: flex-start;
}

.review-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: $navy;
  color: $white;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.review-meta {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 0;
  flex-wrap: wrap;
}

.review-meta strong {
  color: $text-dark;
  letter-spacing: 3%;
  line-height: 23px;
  font-size: 15px;
  font-family: $font-sans;
}

.review-stars {
  color: #f4a623;
  letter-spacing: 1px;
}

.review-card p {
  margin: 0;
  color: $text-dark;
  letter-spacing: 4%;
  line-height: 23px;
  font-size: 12px;
  font-family: $font-serif;
}

.reviews-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;
}

.review-summary {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .ugc-grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .review-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .ugc-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* Ровно 4 колонки */
  }

  .review-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .product-reviews {
    padding: 48px 16px;
  }

  .ugc-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* 4 колонки сохраняются и на самых маленьких экранах */
  }

  .reviews-carousel {
    padding: 24px;
  }

  .reviews-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .review-summary {
    justify-content: center;
  }
}
</style>