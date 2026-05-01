<script setup>
const props = defineProps({
  rating: {
    type: Number,
    default: 5,
  },
  reviewCount: {
    type: String,
    default: '',
  },
})

const stars = Array.from({ length: 5 }, (_, index) => index < props.rating)
</script>

<template>
  <div class="star-rating">
    <div class="stars">
      <span
        v-for="(filled, index) in stars"
        :key="index"
        class="star"
        aria-hidden="true"
      >
        ★
      </span>
    </div>
    <p v-if="reviewCount" class="review-text">{{ reviewCount }}</p>
  </div>
</template>

<style scoped>
.star-rating {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.stars {
  display: flex;
  gap: 4px;
}

.star {
  color: #f4a623;
  font-size: 18px;
  line-height: 1;
}

.review-text {
  margin: 0;
  color: #1a1a1a;
  font-size: 14px;
}
</style>
