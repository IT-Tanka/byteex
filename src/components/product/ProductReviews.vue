<script setup>
import BaseButton from '../ui/BaseButton.vue'
import userPhoto1 from '../../assets/images/users/Rectangle 738.png'
import userPhoto2 from '../../assets/images/users/Rectangle 737.png'
import userPhoto3 from '../../assets/images/users/Rectangle 740.png'
import userPhoto4 from '../../assets/images/users/Rectangle 739.png'
import userPhoto5 from '../../assets/images/users/Rectangle 741.png'
import userPhoto6 from '../../assets/images/users/Rectangle 758.png'
import userPhoto7 from '../../assets/images/users/Rectangle 757.png'
import userPhoto8 from '../../assets/images/users/Rectangle 756.png'
import userPhoto9 from '../../assets/images/users/Rectangle 755.png'
import userPhoto10 from '../../assets/images/users/Rectangle 754.png'
import userPhoto11 from '../../assets/images/users/Rectangle 753.png'
import userPhoto12 from '../../assets/images/users/Rectangle 752.png'
import userPhoto13 from '../../assets/images/users/Rectangle 751.png'
import userPhoto14 from '../../assets/images/users/Rectangle 750.png'
import userPhoto15 from '../../assets/images/users/Rectangle 749.png'
import userPhoto16 from '../../assets/images/users/Rectangle 748.png'
import userPhoto17 from '../../assets/images/users/Rectangle 747.png'
import userPhoto18 from '../../assets/images/users/Rectangle 746.png'
import userPhoto19 from '../../assets/images/users/Rectangle 745.png'
import userPhoto20 from '../../assets/images/users/Rectangle 744.png'
import userPhoto21 from '../../assets/images/users/Rectangle 743.png'
import userPhoto22 from '../../assets/images/users/Rectangle 742.png'

const testimonials = [
  {
    name: 'Jane, S.',
    initials: 'JS',
    text: 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.',
  },
  {
    name: 'Sara D.',
    initials: 'SD',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    name: 'Mia K.',
    initials: 'MK',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
]

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
]
</script>

<template>
  <section class="product-reviews">
    <div class="reviews-inner">
      <div class="ugc-grid">
        <template v-for="(src, index) in images" :key="src + index">
          <img :src="src" :alt="`UGC photo ${index + 1}`" loading="lazy" />
        </template>
      </div>

      <div class="reviews-carousel">
        <div class="reviews-header">
          <h2>What are our fans saying?</h2>
        </div>

        <div class="review-cards">
          <article v-for="testimonial in testimonials" :key="testimonial.name" class="review-card">
            <div class="review-avatar">{{ testimonial.initials }}</div>
            <div class="review-content">
              <div class="review-meta">
                <strong>{{ testimonial.name }}</strong>
                <span class="review-stars">★★★★★</span>
              </div>
              <p>{{ testimonial.text }}</p>
            </div>
          </article>
        </div>

        <div class="reviews-footer">
          <BaseButton label="Customize Your Outfit →" />
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
  padding: 80px 20px;
  background: #ffffff;
}

.reviews-inner {
  max-width: 1200px;
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
  border-radius: 16px;
}

.reviews-carousel {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #f8f6f2;
  padding: 32px;
  border-radius: 28px;
}

.reviews-header h2 {
  margin: 0;
  font-size: clamp(2rem, 2.5vw, 2.8rem);
  color: #1a1f5e;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.review-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.review-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(26, 31, 94, 0.08);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.review-avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #1a1f5e;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.review-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.review-meta strong {
  color: #1a1f5e;
}

.review-stars {
  color: #f4a623;
  letter-spacing: 1px;
}

.review-card p {
  margin: 0;
  color: #6b6b6b;
  line-height: 1.8;
  font-size: 15px;
}

.reviews-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .review-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .product-reviews {
    padding: 48px 16px;
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
