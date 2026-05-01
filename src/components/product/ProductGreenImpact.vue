<template>
  <section class="green-impact">
    <div class="green-impact__inner">
      <div class="green-impact__heading">
        <p class="green-impact__label">Our total green impact</p>
      </div>
      <div class="green-impact__stats">
        <div class="impact-card">
          <div class="impact-icon">☁️</div>
          <div>
            <p class="impact-number">3,927 kg</p>
            <p class="impact-text">of CO2 saved</p>
          </div>
        </div>
        <div class="impact-card">
          <div class="impact-icon">💧</div>
          <div>
            <p class="impact-number">2,546,167 days</p>
            <p class="impact-text">of drinking water saved</p>
          </div>
        </div>
        <div class="impact-card">
          <div class="impact-icon">⚡</div>
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
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.green-impact__label {
  margin: 0 auto 32px;
  color: #6b6b6b;
  font-size: 18px;
  letter-spacing: 0.04em;
  font-weight: 500;
}

.green-impact__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

.impact-card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 28px 24px;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 24px 60px rgba(26, 31, 94, 0.08);
}

.impact-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  background: #1a1f5e;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
}

.impact-number {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1a1f5e;
}

.impact-text {
  margin: 6px 0 0;
  color: #6b6b6b;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .green-impact {
    padding: 56px 16px;
  }

  .green-impact__stats {
    gap: 18px;
  }
}

@media (max-width: 768px) {
  .green-impact {
    padding: 48px 16px;
  }

  .green-impact__stats {
    grid-template-columns: 1fr;
  }
}
</style>
