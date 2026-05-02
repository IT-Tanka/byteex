<template>
  <section class="green-impact">
    <div class="green-impact__inner">
      <div class="green-impact__heading">
        <p class="green-impact__label">Our total green impact</p>
      </div>
      <div class="green-impact__stats">
        <div class="impact-card">
          <div class="impact-icon">
            <img src="@/assets/icons/co2.svg" alt="CO2" />
          </div>
          <div>
            <p class="impact-number">3,927 kg</p>
            <p class="impact-text">of CO2 saved</p>
          </div>
        </div>
        <div class="impact-card">
          <div class="impact-icon">
            <img src="@/assets/icons/h2O.svg" alt="H2O" />
          </div>
          <div>
            <p class="impact-number">2,546,167 days</p>
            <p class="impact-text">of drinking water saved</p>
          </div>
        </div>
        <div class="impact-card">
          <div class="impact-icon">
            <img src="@/assets/icons/lightning.svg" alt="Lightning" />
          </div>
          <div>
            <p class="impact-number">7,321 kWh</p>
            <p class="impact-text">of energy saved</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.green-impact {
  background: #f5f5f5;
  padding: 64px 20px;
}

.green-impact__inner {
  max-width: 1464px;
  margin: 0 auto;
  text-align: center;
}

.green-impact__label {
  margin: 0 auto 26px;
  font-family: $font-sans;
  font-weight: 400;
  color: $navy;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 4%;
  text-align: center;
}

.green-impact__stats {
  display: grid;
  grid-template-columns: repeat(3, 257px);
  gap: 1px;
  margin: 0 auto;
  align-items: center;
  width: fit-content;
}

.impact-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
  width: 257px;
  padding: 12px 26px;
  color: $navy;

  &:nth-child(2) {
    border-left: 1px solid rgba(196, 196, 196, 0.5);
    border-right: 1px solid rgba(196, 196, 196, 0.5);
  }
}

.impact-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e4e4e4;
  border-radius: 50%;

  img {
    width: 80%;
    max-height: 28px;
    height: auto;
  }
}

.impact-number {
  font-family: $font-sans;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 2%;
  text-align: center;
}

.impact-text {
  font-family: $font-sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 3%;
  text-align: center;
}

@media (max-width: 1024px) {
  .green-impact {
    padding: 56px 16px;
  }
}

@media (max-width: 768px) {
  .green-impact {
    padding: 48px 16px;
  }

  .green-impact__stats {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .impact-card {
    width: auto;
    padding: 12px 8px;
  }

  .impact-number {
    font-size: 16px;
    line-height: 20px;
  }

  .impact-text {
    font-size: 12px;
    line-height: 18px;
  }
}

@media (max-width: 480px) {
  .green-impact__stats {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .impact-card {
    width: 100%;
    padding: 16px;

    &:nth-child(2) {
      border-left: none;
      border-right: none;
      border-top: 1px solid rgba(196, 196, 196, 0.5);
      border-bottom: 1px solid rgba(196, 196, 196, 0.5);
      padding: 24px 16px;
    }
  }

  .impact-number {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
