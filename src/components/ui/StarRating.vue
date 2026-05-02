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

<style scoped lang="scss">
.star-rating {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: $font-serif;
  margin: auto;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #FFB801;
  font-size: 10px;
  line-height: 1;
}

.review-text {
  margin: 0;
  color: #828282;
  font-size: 11px;
  line-height: 20px;
}
</style>
