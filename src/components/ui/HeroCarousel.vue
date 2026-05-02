<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  
  centerWidth:  { type: Number, default: 260 },
  centerHeight: { type: Number, default: 422 },
  centerBorder: { type: String, default: null },

   
  sideWidth:  { type: Number, default: 209 },
  sideHeight: { type: Number, default: 317 },
  sideBorder: { type: String, default: null },
 
  sideOverlap: { type: Number, default: 0 },

  
  rectWidth:  { type: Number, default: 134 },
  rectHeight: { type: Number, default: 189 },
})

const currentIndex = ref(0)
const len = computed(() => props.images.length)

const prev = () => { currentIndex.value = (currentIndex.value - 1 + len.value) % len.value }
const next = () => { currentIndex.value = (currentIndex.value + 1) % len.value }

const leftIndex  = computed(() => (currentIndex.value - 1 + len.value) % len.value)
const rightIndex = computed(() => (currentIndex.value + 1) % len.value)
</script>

<template>
  <div
    class="hero-carousel"
    :style="{
      paddingLeft:  (rectWidth / 2) + 'px',
      paddingRight: (rectWidth / 2) + 'px',
    }"
  >

   
    <div
      class="carousel__stage"
      :style="{ height: centerHeight + 'px' }"
    >

     
      <div
        class="carousel__rect carousel__rect--prev"
        :style="{
          width:  rectWidth  + 'px',
          height: rectHeight + 'px',
          left:   -(rectWidth / 2) + 'px',
          top:    '50%',
          transform: 'translateY(-50%)',
        }"
        @click="prev"
      />

   
      <div
        class="carousel__side carousel__side--left"
        :style="{
          width:       sideWidth  + 'px',
          height:      sideHeight + 'px',
          border:      sideBorder || undefined,
          marginRight: sideOverlap !== 0 ? (-sideOverlap + 'px') : undefined,
        }"
        @click="prev"
      >
        <img :src="images[leftIndex]" alt="Previous" class="carousel__img" />
      </div>

      
      <div
        class="carousel__center"
        :style="{
          width:  centerWidth  + 'px',
          height: centerHeight + 'px',
          border: centerBorder || undefined,
        }"
      >
        <img :src="images[currentIndex]" alt="Current" class="carousel__img" />
      </div>

      
      <div
        class="carousel__side carousel__side--right"
        :style="{
          width:      sideWidth  + 'px',
          height:     sideHeight + 'px',
          border:     sideBorder || undefined,
          marginLeft: sideOverlap !== 0 ? (-sideOverlap + 'px') : undefined,
        }"
        @click="next"
      >
        <img :src="images[rightIndex]" alt="Next" class="carousel__img" />
      </div>

      
      <div
        class="carousel__rect carousel__rect--next"
        :style="{
          width:  rectWidth  + 'px',
          height: rectHeight + 'px',
          right:  -(rectWidth / 2) + 'px',
          top:    '50%',
          transform: 'translateY(-50%)',
        }"
        @click="next"
      />

    </div>

  </div>
</template>

<style scoped lang="scss">
.hero-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}


.carousel__stage {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: visible;  
}


.carousel__center {
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 16px 48px rgba(26, 31, 94, 0.12);
}


.carousel__side {
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover { opacity: 1; }
}

.carousel__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.carousel__rect {
  position: absolute;
  border-radius: 2px;
  cursor: pointer;
  z-index: -1; 
  background: linear-gradient(180deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.217) 100%);
  transition: opacity 0.2s ease;
  opacity: 0.85;

  &:hover { opacity: 1; }

  &--prev {

    background: linear-gradient(270deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.217) 100%);
  }

  &--next {
   
    background: linear-gradient(90deg, rgba(249, 240, 229, 0.7) 0%, rgba(249, 240, 229, 0.217) 100%);
  }
}


@media (max-width: 860px) {
  .carousel__side {
    display: none;
  }

  .carousel__rect {
    display: none;
  }
}
</style>
