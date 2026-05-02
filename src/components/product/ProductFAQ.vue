<script setup>
import { ref } from "vue";
import BaseButton from '../ui/BaseButton.vue'
import StarRating from '../ui/StarRating.vue'

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days within the US, and 7-12 days for international orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 45-day return window for unworn items in original condition. Refunds are issued once the return is processed.",
  },
  {
    question: "What materials are used?",
    answer:
      "Our pieces are made from ethically sourced fabrics that blend comfort, durability, and breathable performance.",
  },
  {
    question: "How do I care for my items?",
    answer:
      "Machine wash cold on a gentle cycle and hang to dry. Avoid bleach and excessive heat to preserve the fabric.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select international destinations. Delivery times vary by region and customs clearance.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be updated or canceled within one hour of purchase. After that, we may not be able to change the order before fulfillment.",
  },
];

const activeIndex = ref(0);

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index;
}
</script>

<template>
  <section class="product-faq">
    <div class="faq-inner container">

      <div class="faq-copy">
        <p class="faq-label">Frequently asked questions.</p>

        <div class="faq-list">
          <article
            v-for="(item, index) in faqs"
            :key="item.question"
            class="faq-item"
          >
            <button class="faq-question" type="button" @click="toggle(index)">
              <span>{{ item.question }}</span>
              <span class="faq-icon" style="font-size: 50px; font-weight: 200;">{{
                activeIndex === index ? "−" : "+"
              }}</span>
            </button>
            <div v-show="activeIndex === index" class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>

        <div class="faq-mobile-footer">
          <BaseButton label="Customize Your Outfit" />
          <StarRating rating="5" reviewCount="Over 500+ 5 Star Reviews Online" />
        </div>
      </div>

      <div class="faq-visual">
        <div class="collage">
          <div class="collage-rect collage-rect--top-left"></div>
          <div class="collage-rect collage-rect--bottom-right"></div>

          <div class="collage-photo collage-photo--top">
            <img src="@/assets/images/model-3.png" alt="Model top" loading="lazy" />
          </div>

          <div class="collage-photo collage-photo--center">
            <img src="@/assets/images/model-1.png" alt="Model center" loading="lazy" />
          </div>

          <div class="collage-photo collage-photo--bottom">
            <img src="@/assets/images/model-4.png" alt="Model bottom" loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.product-faq {
  padding: 80px 20px;
  background: $white;
}

.faq-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.faq-copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.faq-label {
  margin: 0;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 4%;
  color: $navy;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border-bottom: 1px solid #e8e0d8;
}

.faq-question {
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 45px;
  max-width: 592px;
  color: $navy;
  margin: 0;
  font-family: $font-sans;
}

.faq-question span {
  font-family: $font-sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 4%;
}

.faq-question span:first-child {
  text-align: left;
}

.faq-item.active .faq-icon {
  background: $navy;
  color: $white;
}

.faq-answer {
  padding: 0 0 10px;
}

.faq-answer p {
  margin: 0;
  color: $text-dark;
  font-family: $font-sans;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 3%;
}

.faq-mobile-footer {
  display: none;
}

.faq-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.collage {
  position: relative;
  width: 420px;
  height: 560px;
  flex-shrink: 0;
}

.collage-rect {
  position: absolute;
  background: linear-gradient(
    180deg,
    rgba(249, 240, 229, 0.7) 0%,
    rgba(249, 240, 229, 0.217) 100%
  );
  z-index: 0;
}

.collage-rect--top-left {
  width: 149px;
  height: 187px;
  top: 67px;
  left: 30px;
  transform: rotate(180deg);
}

.collage-rect--bottom-right {
  width: 134px;
  height: 189px;
  top: 330px;
  left: 238px;
  transform: rotate(180deg);
}

.collage-photo {
  position: absolute;
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.collage-photo--top {
  width: 167px;
  height: 253px;
  top: 0;
  right: 0;
  z-index: 2;
}

.collage-photo--center {
  width: 227px;
  height: 355px;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.collage-photo--bottom {
  width: 216px;
  height: 160px;
  top: 390px;
  left: 0;
  z-index: 2;
}

@media (max-width: 1024px) {
  .faq-inner {
    gap: 32px;
  }

  .collage {
    width: 360px;
    height: 520px;
  }
}

@media (max-width: 860px) {
  .product-faq {
    padding: 48px 16px 56px;
  }

  .faq-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .faq-label {
    text-align: center;
    font-size: 28px;
    line-height: 36px;
  }

  .faq-visual {
    display: none;
  }

  .faq-mobile-footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    margin-top: 8px;
  }
}

@media (max-width: 640px) {
  .faq-label {
    font-size: 24px;
    line-height: 32px;
  }

  .faq-question span {
    font-size: 16px;
  }
}
</style>
