<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: 'How long does shipping take?',
    answer: 'Shipping typically takes 3-5 business days within the US, and 7-12 days for international orders.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 45-day return window for unworn items in original condition. Refunds are issued once the return is processed.',
  },
  {
    question: 'What materials are used?',
    answer: 'Our pieces are made from ethically sourced fabrics that blend comfort, durability, and breathable performance.',
  },
  {
    question: 'How do I care for my items?',
    answer: 'Machine wash cold on a gentle cycle and hang to dry. Avoid bleach and excessive heat to preserve the fabric.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to select international destinations. Delivery times vary by region and customs clearance.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'Orders can be updated or canceled within one hour of purchase. After that, we may not be able to change the order before fulfillment.',
  },
]

const activeIndex = ref(0)

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="product-faq">
    <div class="faq-inner">
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
              <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </button>
            <div v-show="activeIndex === index" class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="faq-visual">
        <div class="visual-large">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Relaxed lifestyle" loading="lazy" />
        </div>
        <div class="visual-grid">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80" alt="Cozy outfit" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80" alt="Comfort fashion" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-faq {
  padding: 80px 20px;
  background: #ffffff;
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
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  color: #1a1f5e;
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
  color: #1a1f5e;
  font-size: 16px;
  font-weight: 600;
}

.faq-question span:first-child {
  text-align: left;
}

.faq-icon {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  border: 1px solid #1a1f5e;
  border-radius: 50%;
  font-size: 18px;
  color: #1a1f5e;
}

.faq-answer {
  padding: 0 0 20px;
}

.faq-answer p {
  margin: 0;
  color: #6b6b6b;
  line-height: 1.8;
}

.faq-visual {
  display: grid;
  gap: 20px;
}

.visual-large,
.visual-grid img {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(26, 31, 94, 0.08);
}

.visual-large img,
.visual-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.visual-large {
  min-height: 420px;
}

.visual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.visual-grid img {
  height: 220px;
}

@media (max-width: 1024px) {
  .faq-inner {
    gap: 32px;
  }
}

@media (max-width: 860px) {
  .faq-inner {
    grid-template-columns: 1fr;
  }

  .visual-large {
    min-height: 320px;
  }
}

@media (max-width: 640px) {
  .product-faq {
    padding: 48px 16px;
  }

  .visual-grid {
    grid-template-columns: 1fr;
  }

  .visual-grid img {
    height: 220px;
  }
}
</style>
