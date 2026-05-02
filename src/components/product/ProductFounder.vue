<script setup>
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="founder">
    <div class="founder__container">

      <div class="founder__images">
        <img src="@/assets/images/model-1.png" alt="" class="img img--top" />
        <img src="@/assets/images/model-0.png" alt="" class="img img--main" />
        <img src="@/assets/images/girl_at_the_window.png" alt="" class="img img--bottom" />
      </div>

      <div class="founder__content">
        <h2>Be your best self.</h2>

        <p class="lead">
          Hi! My name's [Insert Name], and I founded [Insert] in _____.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
        <p>
          Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
          placerat volutpat ligula, ac consectetur felis varius non. Aliquam a
          nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu
          congue, faucibus libero nec, placerat ligula.
        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
        </p>
        <p>
          Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis,
          sapien eget lobortis fringilla, eros ipsum tristique tellus, ac
          convallis urna massa at nibh.
        </p>
        <p>
          Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod
          leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in
          sapien.
        </p>
        <p>Cras mattis varius mollis.</p>
        <BaseButton label="Customize Your Outfit" />
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.founder {
  padding: 80px 20px;
  background: #f5f3f4;
}

.founder__container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  align-items: center;
}

.founder__images {
  position: relative;
  width: 536px;
  height: 664px;
  flex-shrink: 0;
}

.img {
  position: absolute;
  object-fit: cover;
}

.img--main {
  width: 488px;
  height: 570px;
  left: 24px;
  top: 47px;
  z-index: 1;
}

.img--top {
  width: 165px;
  height: 175px;
  left: 0;
  top: 0;
  z-index: 2;
  border: 4px solid rgba(240, 238, 239, 1);
}

.img--bottom {
  width: 165px;
  height: 175px;
  right: 0;
  bottom: 0;
  z-index: 2;
  border: 4px solid rgba(240, 238, 239, 1);
}

.founder__content {
  max-width: 619px;
}

.founder__content h2 {
  font-family: $font-serif;
  font-size: 32px;
  margin-bottom: 20px;
  color: $navy;
}

.lead {
  margin-bottom: 16px;
  color: #666;
  font-family: $font-sans;
}

.founder__content p {
  margin-bottom: 12px;
  color: #777;
  line-height: 1.6;
  font-family: $font-sans;
  font-size: 14px;
}

.btn {
  margin-top: 20px;
  background: $navy;
  color: $white;
  padding: 14px 28px;
  border: none;
  cursor: pointer;
  font-family: $font-sans;
  font-size: 15px;
  transition: opacity 0.2s ease;

  &:hover { opacity: 0.85; }
}

@media (max-width: 860px) {
  .founder {
    padding: 48px 16px;
  }

  .founder__container {
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  .founder__images {
    width: 345px;
    height: 363px;
  }

  .img--main {
    width: 304px;
    height: 310px;
    left: 50%;
    transform: translateX(-50%);
    top: 25px;
  }

  .img--top {
    width: 102px;
    height: 108px;
    left: 0;
    top: 0;
  }

  .img--bottom {
    width: 110px;
    height: 112px;
    right: 0;
    bottom: 0;
  }

  .founder__content {
    max-width: 100%;
    text-align: center;
  }

  .founder__content h2 {
    font-size: 26px;
  }

  .btn {
    width: 100%;
    padding: 16px;
  }
}
</style>
