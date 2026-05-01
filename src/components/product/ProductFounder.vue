<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="product-founder">
    <div class="founder-inner">
      <div class="founder-visual">
        <div class="founder-image founder-image--large">
          <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80" alt="Founder wearing loungewear" loading="lazy" />
        </div>
        <div class="founder-image founder-image--small founder-image--top">
          <img src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5c8?auto=format&fit=crop&w=600&q=80" alt="Loungewear closeup" loading="lazy" />
        </div>
        <div class="founder-image founder-image--small founder-image--bottom">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" alt="Relaxed outfit" loading="lazy" />
        </div>
      </div>

      <div class="founder-copy">
        <p class="founder-label">Be your best self.</p>
        <h2>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor.</p>
        <p>Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.</p>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. Fusce non ante velit. Sed auctor odio eu semper molestie.</p>
        <p>Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut.</p>
        <p>Vivamus in felis eu lacus feugiat aliquam nec in sapien. Cras mattis varius mollis.</p>
        <BaseButton label="Customize Your Outfit →" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-founder {
  padding: 80px 20px;
  background: #ffffff;
}

.founder-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.founder-visual {
  position: relative;
  min-height: 520px;
}

.founder-image {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(26, 31, 94, 0.1);
}

.founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.founder-image--large {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.founder-image--small {
  width: 44%;
  height: 42%;
}

.founder-image--top {
  top: -12%;
  right: -8%;
}

.founder-image--bottom {
  bottom: -10%;
  left: 8%;
}

.founder-copy {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.founder-label {
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #1a1f5e;
  font-weight: 700;
}

h2 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 3.25rem);
  line-height: 1.05;
  color: #1a1f5e;
  font-family: 'Sofia Pro', 'Inter', -apple-system, sans-serif;
}

.founder-copy p {
  margin: 0;
  color: #6b6b6b;
  line-height: 1.8;
  font-size: 16px;
}

@media (max-width: 1024px) {
  .founder-inner {
    gap: 32px;
  }
}

@media (max-width: 860px) {
  .founder-inner {
    grid-template-columns: 1fr;
  }

  .founder-visual {
    min-height: 420px;
  }

  .founder-image--top {
    top: -8%;
    right: 0;
    width: 40%;
  }

  .founder-image--bottom {
    bottom: -8%;
    left: 0;
    width: 40%;
  }
}

@media (max-width: 640px) {
  .product-founder {
    padding: 48px 16px;
  }

  .founder-visual {
    min-height: 320px;
  }

  .founder-image--large {
    position: relative;
    height: 320px;
  }

  .founder-image--top,
  .founder-image--bottom {
    position: relative;
    width: 48%;
    height: 180px;
    margin-top: 16px;
    left: 0;
    right: 0;
  }
}
</style>
