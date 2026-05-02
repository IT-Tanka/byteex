<script setup>
import { onMounted } from 'vue'
import { useShopify } from '../composables/useShopify'
import AppHeader from '../components/layout/AppHeader.vue'
import ProductHero from '../components/product/ProductHero.vue'
import ProductBenefits from '../components/product/ProductBenefits.vue'
import ProductHowItWorks from '../components/product/ProductHowItWorks.vue'
import ProductFounder from '../components/product/ProductFounder.vue'
import ProductReviews from '../components/product/ProductReviews.vue'
import ProductFAQ from '../components/product/ProductFAQ.vue'
import ProductGreenImpact from '../components/product/ProductGreenImpact.vue'
import ProductFinalCTA from '../components/product/ProductFinalCTA.vue'

const { product, loading, error, fetchFirstProduct } = useShopify()
onMounted(() => fetchFirstProduct())
</script>

<template>
  <div class="product-page">
    <AppHeader />

    <div v-if="loading" class="status-message">Loading...</div>
    <div v-else-if="error" class="status-message status-message--error">Error: {{ error }}</div>

    <template v-else-if="product">
      <ProductHero :product="product" />
      <ProductBenefits :product="product" />
       <ProductFounder />
      <ProductHowItWorks />
     
      <ProductReviews />
      <ProductFAQ />
      <ProductGreenImpact />
      <ProductFinalCTA :product="product" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.status-message {
  text-align: center;
  padding: 80px 20px;
  font-size: 18px;
}

.status-message--error {
  color: #c53030;
}
</style>
