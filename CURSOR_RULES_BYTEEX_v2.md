# 🛠️ BYTEEX TEST ASSIGNMENT — CURSOR STEP-BY-STEP GUIDE v2
# (Vue 3 + SCSS + Shopify Storefront API)

## Как работать с этим файлом
Говори Cursor: **"Выполни Шаг N"** → он выполняет → ты проверяешь → переходишь к следующему.
Каждый шаг — одна атомарная задача. Не переходи к следующему шагу пока не проверила текущий.
Скриншоты секций можно прикладывать Cursor напрямую — он умеет читать изображения.

---

## ТЕХНИЧЕСКИЙ СТЕК
- **Frontend:** Vue 3 + Vite + Composition API
- **Стили:** SCSS (sass)
- **CMS/Backend:** Shopify Storefront API (GraphQL)
- **Git:** GitHub с ветками и описательными коммитами
- **Деплой:** Vercel

---

## 🎨 ДИЗАЙН-ТОКЕНЫ (из макета)

```scss
// colors
$navy: #1a1f5e;         // основной тёмно-синий — кнопки, заголовки
$navy-light: #2d3494;   // hover для кнопок
$cream: #f5efe8;        // фоновый бежевый/кремовый
$cream-dark: #ede5d8;   // чуть темнее крема для карточек
$white;:$white;
$text-dark: #1a1a1a;    // основной текст
$text-gray: #6b6b6b;    // второстепенный текст
$text-light: #9b9b9b;   // метки, подписи
$star-yellow: #f4a623;  // звёздочки рейтинга
$border: #e8e0d8;       // границы карточек

// typography
$font-serif: 'Playfair Display', Georgia, serif;   // заголовки
$font-sans: 'Inter', -apple-system, sans-serif;    // текст

// spacing
$section-padding: 80px 0;
$section-padding-mobile: 48px 0;
$container-max: 1200px;
$container-padding: 0 40px;
$container-padding-mobile: 0 20px;

// breakpoints
$mobile: 768px;
$tablet: 1024px;
```

---

## 📋 СТРУКТУРА ПРОЕКТА

```
byteex/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue
│   │   │   └── AppFooter.vue
│   │   ├── product/
│   │   │   ├── ProductHero.vue
│   │   │   ├── ProductBenefits.vue
│   │   │   ├── ProductHowItWorks.vue
│   │   │   ├── ProductFounder.vue
│   │   │   ├── ProductReviews.vue
│   │   │   ├── ProductFAQ.vue
│   │   │   ├── ProductGreenImpact.vue
│   │   │   └── ProductFinalCTA.vue
│   │   └── ui/
│   │       ├── BaseButton.vue
│   │       └── StarRating.vue
│   ├── composables/
│   │   └── useShopify.js
│   ├── styles/
│   │   ├── _variables.scss    ← все токены выше
│   │   ├── _mixins.scss
│   │   ├── _reset.scss
│   │   └── main.scss
│   ├── views/
│   │   └── ProductPage.vue
│   ├── App.vue
│   └── main.js
├── .env
├── .env.example
└── vite.config.js
```

---

## SHOPIFY НАСТРОЙКА (сделай ДО начала кодинга)

1. Зайди на **partners.shopify.com** → создай Partner аккаунт (бесплатно)
2. **Stores** → **Add store** → **Development store**
3. В Admin → **Apps** → **Develop apps** → **Create an app**
4. **Configuration** → **Storefront API access scopes** → включи:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
5. **Install app** → скопируй **Storefront API access token**
6. Добавь продукт: **Products** → **Add product**
   - Название: "White Robe" (или аналог из макета)
   - Описание: текст про loungewear
   - Цена: любая
   - Фото: загрузи несколько (минимум 3-4)
7. Скопируй **Store domain** (формат: `your-store.myshopify.com`)

---

## ШАГ 0 — ИНИЦИАЛИЗАЦИЯ ПРОЕКТА

**Скажи Cursor:**
> "Выполни Шаг 0: Инициализируй Vue 3 проект с SCSS"

**Cursor должен выполнить в терминале:**
```bash
npm create vue@latest byteex
# Выбрать: TypeScript — NO, JSX — NO, Vue Router — NO, Pinia — NO, Vitest — NO, ESLint — YES, Prettier — YES
cd byteex
npm install
npm install -D sass
```

**Cursor должен создать `src/styles/_variables.scss`:**
```scss
// Colors
$navy: #1a1f5e;
$navy-light: #2d3494;
$cream: #f5efe8;
$cream-dark: #ede5d8;
$white;:$white;
$text-dark: #1a1a1a;
$text-gray: #6b6b6b;
$text-light: #9b9b9b;
$star-yellow: #f4a623;
$border: #e8e0d8;

// Typography
$font-serif: 'Playfair Display', Georgia, serif;
$font-sans: 'Inter', -apple-system, sans-serif;

// Spacing
$section-padding: 80px 0;
$section-padding-mobile: 48px 0;
$container-max: 1200px;

// Breakpoints
$mobile: 768px;
$tablet: 1024px;
```

**Cursor должен создать `src/styles/_mixins.scss`:**
```scss
@import 'variables';

@mixin container {
  max-width: $container-max;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: $mobile) {
    padding: 0 20px;
  }
}

@mixin section {
  padding: $section-padding;

  @media (max-width: $mobile) {
    padding: $section-padding-mobile;
  }
}

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: $mobile) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: $tablet) { @content; }
  }
}
```

**Cursor должен создать `src/styles/main.scss`:**
```scss
@import 'variables';
@import 'mixins';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

body {
  font-family: $font-sans;
  color: $text-dark;
  background-color: $white;;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h2, h3, h4 {
  font-family: $font-serif;
  line-height: 1.2;
}
```

**В `src/main.js` добавить:**
```js
import './styles/main.scss'
```

**В `index.html` добавить Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Создать `.env`:**
```
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_token_here
```

**Создать `.env.example`:**
```
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_token_here
```

**Убедиться что в `.gitignore` есть `.env`**

**✅ Проверка:**
- [ ] `npm run dev` запускается без ошибок
- [ ] В браузере открывается localhost:5173
- [ ] `.env` файл создан с данными Shopify
- [ ] `.env` в `.gitignore`
- [ ] SCSS компилируется без ошибок

---

## ШАГ 1 — GIT РЕПОЗИТОРИЙ

**Скажи Cursor:**
> ""

```bash
git init
git add .
git commit -m "feat: initial project setup with Vue 3, Vite, and SCSS"
```

Создай репозиторий на GitHub вручную (пустой, без README), потом:
```bash
git remote add origin https://github.com/IT-Tanka/byteex.git
git branch -M main
git push -u origin main
```

**✅ Проверка:**
- [ ] Репозиторий виден на GitHub
- [ ] `.env` НЕ попал в репозиторий

---

## ШАГ 2 — SHOPIFY COMPOSABLE

**Скажи Cursor:**
> "Выполни Шаг 2: Создай composable useShopify.js для Shopify Storefront API"

**Cursor должен создать `src/composables/useShopify.js`:**
```js
import { ref } from 'vue'

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
const API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`

async function shopifyFetch(query) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query }),
  })
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
  return response.json()
}

export function useShopify() {
  const product = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function fetchFirstProduct() {
    loading.value = true
    error.value = null
    try {
      const data = await shopifyFetch(`
        {
          products(first: 1) {
            edges {
              node {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 6) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `)
      product.value = data?.data?.products?.edges?.[0]?.node || null
    } catch (e) {
      error.value = e.message
      console.error('Shopify API error:', e)
    } finally {
      loading.value = false
    }
  }

  return { product, loading, error, fetchFirstProduct }
}
```

**✅ Проверка:**
- [ ] Файл создан без ошибок синтаксиса

---

## ШАГ 3 — ТЕСТ SHOPIFY ПОДКЛЮЧЕНИЯ

**Скажи Cursor:**
> "Выполни Шаг 3: Протестируй Shopify API в App.vue — выведи название и цену продукта на страницу"

```vue
<script setup>
import { onMounted } from 'vue'
import { useShopify } from './composables/useShopify'
const { product, loading, error, fetchFirstProduct } = useShopify()
onMounted(() => fetchFirstProduct())
</script>

<template>
  <div style="padding: 40px; font-family: sans-serif;">
    <p v-if="loading">⏳ Loading from Shopify...</p>
    <p v-else-if="error" style="color: red;">❌ Error: {{ error }}</p>
    <div v-else-if="product">
      <h1>✅ Connected! Product: {{ product.title }}</h1>
      <p>Price: {{ product.priceRange.minVariantPrice.amount }} {{ product.priceRange.minVariantPrice.currencyCode }}</p>
      <img v-if="product.images.edges[0]" :src="product.images.edges[0].node.url" style="max-width: 300px; margin-top: 20px;" />
    </div>
    <p v-else>No product found. Add a product in Shopify Admin.</p>
  </div>
</template>
```

**✅ Проверка:**
- [ ] Видно название продукта из Shopify
- [ ] Видно цену
- [ ] Фото загружается
- [ ] В консоли нет ошибок 401/CORS

> ⚠️ 401 — проверь токен в .env
> ⚠️ CORS — проверь что Storefront API включён в Shopify Admin → Apps → Develop apps

---

## ШАГ 4 — BASE КОМПОНЕНТЫ

**Скажи Cursor:**
> "Выполни Шаг 4: Создай BaseButton.vue и StarRating.vue"

**`src/components/ui/BaseButton.vue`:**
Кнопка из макета — тёмно-синяя, с текстом и стрелкой →
```
Внешний вид: фон #1a1f5e, текст белый, padding 14px 32px,
border-radius 4px, шрифт Inter 500 14px, стрелка → после текста.
Hover: фон чуть светлее (#2d3494), небольшой сдвиг вверх.
Props: label (String), href (String, optional)
```

**`src/components/ui/StarRating.vue`:**
```
5 звёздочек ★ жёлтого цвета (#f4a623).
Props: rating (Number, default 5), reviewCount (String, optional)
Если есть reviewCount — показывать рядом текст типа "One of 200+ 5 Star Reviews Online"
```

**✅ Проверка:**
- [ ] Кнопка рендерится с правильными стилями
- [ ] Звёздочки жёлтые

```bash
git add .
git commit -m "feat: add BaseButton and StarRating UI components"
```

---

## ШАГ 5 — HEADER

**Скажи Cursor:**
> "Выполни Шаг 5: Сверстай AppHeader.vue по макету"

**Описание (по скриншоту hero section — верхняя часть):**

Структура:
```
[Announcement bar — полная ширина, бежевый фон]
  "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT!) | FREE SHIPPING on orders > $200 | easy 45 day return window."
  Маленький шрифт, центр, цвет #6b6b6b

[Header]
  Логотип "BYTEEX" слева — жирный, чёрный, крупный шрифт sans-serif
  Навигация справа (или по центру) — ссылки текстом
  На мобайле: логотип + бургер-меню справа
```

SCSS структура компонента:
```scss
.announcement-bar {
  background: $cream;
  text-align: center;
  padding: 8px 20px;
  font-size: 12px;
  color: $text-gray;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: $white;;
  border-bottom: 1px solid $border;

  &__logo { font-size: 24px; font-weight: 700; letter-spacing: 2px; }
  &__nav { display: flex; gap: 32px; }
  &__burger { display: none; } // показывать только на мобайле
}
```

**✅ Проверка:**
- [ ] Announcement bar виден
- [ ] Логотип BYTEEX слева
- [ ] На мобайле (375px) — бургер меню

```bash
git add .
git commit -m "feat: add header with announcement bar and responsive navigation"
```

---

## ШАГ 6 — HERO SECTION

**Скажи Cursor:**
> "Выполни Шаг 6: Сверстай ProductHero.vue по макету. Прикладываю скриншот секции."
> (прикрепи скриншот hero section к сообщению в Cursor)

**Описание секции (по скриншоту):**

```
Фон: кремовый #f5efe8
Две колонки: левая ~55%, правая ~45%

ЛЕВАЯ КОЛОНКА:
- Логотип BYTEEX (маленький, вверху — можно скрыть если хедер уже есть)
- H1: "Don't apologize for being comfortable."
  Шрифт: Playfair Display, ~48px, цвет $navy
- Список из 3 пунктов с иконками (маленькие svg иконки в navy цвете):
  • Beautiful, comfortable loungewear for day or night.
  • No wasteful extras, like tags or plastic packaging.
  • Our signature fabric is incredibly comfortable — unlike anything you've ever felt.
- Кнопка "Customize Your Outfit →" (BaseButton, navy)
- Блок отзыва под кнопкой:
  Аватар круглый + "Amy P." + звёздочки (★★★★★) + текст "One of 200+ 5 Star Reviews Online"
  Карточка белая, небольшая тень, скруглённые углы

ПРАВАЯ КОЛОНКА:
- 3 фотографии продукта расположены каскадом (overlapping):
  Центральная — самая большая и выше остальных
  Левая — немного ниже и меньше
  Правая — немного ниже и меньше
  Фотографии с скруглёнными углами (~12px)
  Берутся из product.images.edges[0..2]

БЛОК "AS SEEN IN" под hero:
- Серый текст "as seen in" по центру
- Логотипы изданий: ECO-STYLIST, Canadian Living, JILLIAN HARRIS, THE ECO HUB, TRENDHUNTER
  Серые, одинаковый размер, в ряд

МОБАЙЛ:
- Фото сверху (одна центральная)
- Текст снизу
```

**Props:**
```js
defineProps({ product: { type: Object, required: true } })
// product.title → в H1 (или статичный текст как в макете)
// product.images.edges → для трёх фото
```

**✅ Проверка:**
- [ ] Три фото каскадом справа
- [ ] Кнопка navy с текстом "Customize Your Outfit →"
- [ ] Блок с отзывом Amy P. и звёздочками
- [ ] Строка "as seen in" с лого изданий
- [ ] Адаптив — на мобайле фото сверху, текст снизу

```bash
git add .
git commit -m "feat: add hero section with product images and social proof"
```

---

## ШАГ 7 — BENEFITS SECTION

**Скажи Cursor:**
> "Выполни Шаг 7: Сверстай ProductBenefits.vue. Прикладываю скриншот."
> (прикрепи скриншот "DESCRIBE THE TOP BENEFITS")

**Описание секции:**

```
Фон: белый
Две колонки: левая ~50%, правая ~50%

ЛЕВАЯ КОЛОНКА (текст):
- H2: "Loungewear you can be proud of."
  Шрифт: Playfair Display, ~36px, цвет $navy
- Список из 4 пунктов с иконками:
  Каждый пункт: [SVG иконка navy] + заголовок жирный + текст описания
  1. 🌿 "Ethically sourced." — Lorem ipsum...
  2. 🤝 "Responsibly made." — Lorem ipsum...
  3. ✨ "Made for living in." — Lorem ipsum...
  4. 〰️ "Unimaginably comfortable." — Lorem ipsum...
  Иконки в цвете $navy, размер ~24px

ПРАВАЯ КОЛОНКА (слайдер):
- Большое фото продукта (из Shopify images)
- Стрелки навигации < > по бокам фото
- Под фото: thumbnail полоска (5-6 маленьких фото в ряд)
- Подпись: "White Robe" — серый текст снизу

МОБАЙЛ:
- Сначала фото (одно, без слайдера или со свайпом)
- Потом текст с пунктами
```

**✅ Проверка:**
- [ ] 4 пункта с иконками
- [ ] Фото справа
- [ ] Стрелки < > работают (переключают фото)
- [ ] Thumbnail полоска внизу

```bash
git add .
git commit -m "feat: add benefits section with image slider"
```

---

## ШАГ 8 — HOW IT WORKS

**Скажи Cursor:**
> "Выполни Шаг 8: Сверстай ProductHowItWorks.vue. Прикладываю скриншот."
> (прикрепи скриншот "DESCRIBE HOW THE PRODUCT WORKS / HOW TO ORDER")

**Описание секции:**

```
Фон: белый
Центрированный контент

H2: "Comfort made easy"
  Playfair Display, по центру, ~36px, $navy

3 карточки в ряд (равные, с небольшим gap):
  Каждая карточка: фон $cream-dark (#ede5d8), скруглённые углы ~12px, padding 32px
  Содержимое: SVG иконка (navy) + заголовок + текст

  Карточка 1: 🛒 иконка тележки
    "You save."
    "Browse our comfort sets and save 15% when you bundle."

  Карточка 2: 🚚 иконка грузовика
    "We ship."
    "We ship your items within 1–2 days of receiving your order."

  Карточка 3: ☀️ иконка солнце/луна
    "You enjoy!"
    "Wear harnest around the house, out on the town, or in bed."

Под карточками по центру:
  Кнопка "Customize Your Outfit →" (BaseButton navy)
  Строка со звёздочками: ★★★★★ "Over 500+ 5 Star Reviews Online"

МОБАЙЛ: карточки в столбик
```

**✅ Проверка:**
- [ ] 3 карточки в ряд на десктопе
- [ ] На мобайле — столбик
- [ ] Кнопка под карточками

```bash
git add .
git commit -m "feat: add how it works section with process cards"
```

---

## ШАГ 9 — FOUNDER SECTION

**Скажи Cursor:**
> "Выполни Шаг 9: Сверстай ProductFounder.vue. Прикладываю скриншот."
> (прикрепи скриншот "TALK ABOUT YOU, THE FOUNDER. BUILD CONNECTION.")

**Описание секции:**

```
Фон: белый
Две колонки: левая ~45% фото, правая ~55% текст

ЛЕВАЯ КОЛОНКА (фото коллаж):
- 3 фотографии расположены каскадом/коллажем
  Большая центральная фото (женщина в белом халате)
  Маленькая фото справа сверху
  Маленькая фото справа снизу
  Фото с скруглёнными углами

ПРАВАЯ КОЛОНКА (текст):
- H2: "Be your best self."
  Playfair Display, ~36px, $navy
- Текст основателя: "Hi! My name's [Insert Name], and I founded [Insert] in ___."
  Несколько параграфов описания (lorem ipsum в макете)
  Шрифт Inter, цвет $text-dark, line-height 1.8
- Кнопка "Customize Your Outfit" (BaseButton navy)

МОБАЙЛ:
- Фото сверху (одно большое)
- Текст снизу
```

**✅ Проверка:**
- [ ] Коллаж из 3 фото слева
- [ ] Текст справа с кнопкой
- [ ] Адаптив работает

```bash
git add .
git commit -m "feat: add founder story section"
```

---

## ШАГ 10 — REVIEWS SECTION

**Скажи Cursor:**
> "Выполни Шаг 10: Сверстай ProductReviews.vue. Прикладываю скриншот."
> (прикрепи скриншот "ADD USER GENERATED CONTENT / REVIEWS")

**Описание секции:**

```
Фон: белый

ВЕРХНЯЯ ЧАСТЬ — фото сетка (UGC):
  2 ряда фотографий пользователей — много маленьких квадратных фото
  ~10-12 фото в ряду, чёрно-белые или цветные
  Gap минимальный (4px), фото одинакового размера ~80px
  (Используй placeholder картинки или фото из Shopify)

СРЕДНЯЯ ЧАСТЬ — карусель отзывов:
  Стрелки < > по бокам
  3 карточки одновременно (на десктопе), 1 на мобайле
  Каждая карточка: белый фон, тень, padding 24px, скруглённые углы
    [Синий кружок с инициалами] "Jane, S."
    ★★★★★ (5 звёзд, жёлтые)
    Текст отзыва (2-3 предложения Lorem ipsum)

НИЖНЯЯ ЧАСТЬ — CTA:
  Кнопка "Customize Your Outfit →" по центру
  ★★★★★ "Over 500+ 5 Star Reviews Online"

МОБАЙЛ:
  Фото-сетка — 4 колонки
  Карусель — по 1 карточке
```

**Данные:** статичные (3-4 отзыва захардкодить в компоненте)

**✅ Проверка:**
- [ ] Сетка фото сверху
- [ ] 3 карточки отзывов в ряд
- [ ] Стрелки < > работают
- [ ] Кнопка снизу

```bash
git add .
git commit -m "feat: add reviews section with UGC photo grid and testimonials carousel"
```

---

## ШАГ 11 — FAQ

**Скажи Cursor:**
> "Выполни Шаг 11: Сверстай ProductFAQ.vue. Прикладываю скриншот."
> (прикрепи скриншот FAQ)

**Описание секции:**

```
Фон: белый
Две колонки: левая ~55% аккордеон, правая ~45% фото

ЛЕВАЯ КОЛОНКА:
  H2: "Frequently asked questions."
  Playfair Display, ~36px, $navy

  Аккордеон из 6 вопросов:
    Каждый пункт: горизонтальная линия-разделитель
    Заголовок вопроса + иконка + (справа)
    При клике: иконка меняется на −, ответ раскрывается плавно
    Первый пункт — открыт по умолчанию
    Открытый: текст вопроса синий ($navy), иконка −
    Закрытый: текст серый, иконка +

    Вопросы:
    1. "How long does shipping take?" — открыт по умолчанию
    2. "What is your return policy?"
    3. "What materials are used?"
    4. "How do I care for my items?"
    5. "Do you ship internationally?"
    6. "Can I change or cancel my order?"

ПРАВАЯ КОЛОНКА:
  Коллаж из 3-4 фотографий (как на скриншоте — расположены неравномерно)
  Большая фото сверху + маленькие снизу в сетке

МОБАЙЛ:
  Фото скрыть или показать снизу
  Аккордеон на всю ширину
```

**✅ Проверка:**
- [ ] Аккордеон открывается/закрывается с анимацией
- [ ] Одновременно открыт только 1 пункт
- [ ] Иконка + / − меняется

```bash
git add .
git commit -m "feat: add FAQ accordion section"
```

---

## ШАГ 12 — GREEN IMPACT BANNER

**Скажи Cursor:**
> "Выполни Шаг 12: Сверстай ProductGreenImpact.vue. Прикладываю скриншот."
> (прикрепи скриншот INFO BANNER)

**Описание секции:**

```
Фон: светло-серый (#f5f5f5) или очень светлый кремовый
Компактная секция (не на всю высоту)
Центрированный контент

Заголовок: "Our total green impact"
  Тонкий шрифт, серый, по центру

3 блока в ряд с иконками (outline SVG иконки, синие):
  [☁️ облако] "3,927 kg" жирный + "of CO2 saved" серый
  [💧 капля] "2,546,167 days" жирный + "of drinking water saved" серый
  [⚡ молния] "7,321 kWh" жирный + "of energy saved" серый

МОБАЙЛ: 3 блока в столбик или 1 ряд со скроллом
```

**✅ Проверка:**
- [ ] 3 числа с иконками
- [ ] Компактный banner-вид

```bash
git add .
git commit -m "feat: add green impact stats banner"
```

---

## ШАГ 13 — FINAL CTA

**Скажи Cursor:**
> "Выполни Шаг 13: Сверстай ProductFinalCTA.vue. Прикладываю скриншот."
> (прикрепи скриншот FINAL CTA)

**Описание секции:**

```
Фон: кремовый $cream (#f5efe8)
Центрированный контент

H2: "Find something you love."
  Playfair Display, ~40px, $navy, по центру

Подзаголовок: lorem ipsum текст, серый, по центру, max-width ~500px

Фото коллаж (3 фото в ряд, центральное крупнее):
  3 фотографии женщин в одежде бренда
  Центральная фото выше/крупнее
  Скруглённые углы

Кнопка "Customize Your Outfit →" (BaseButton navy) по центру

Строка с иконками оплаты (маленькие):
  @Shipto1-2Days + иконки платёжных систем

3 USP блока в ряд (иконка + текст):
  [иконка] "FREE Shipping on Orders over $200"
  [иконка] "Over 500+ 5 Star Reviews Online"
  [иконка] "Made ethically and responsibly."

МОБАЙЛ: всё в столбик, кнопка на всю ширину
```

**✅ Проверка:**
- [ ] Три фото коллажем
- [ ] Кнопка по центру
- [ ] 3 USP блока снизу

```bash
git add .
git commit -m "feat: add final CTA section"
```

---

## ШАГ 14 — FOOTER

**Скажи Cursor:**
> "Выполни Шаг 14: Сверстай AppFooter.vue — минималистичный подвал"

```
Фон: $navy (тёмно-синий)
Текст: белый

Структура:
  Логотип BYTEEX белый слева
  Ссылки: Shop, About, Contact, Privacy Policy
  Copyright © 2024 Byteex. All rights reserved.
  Иконки соцсетей (Instagram, Facebook, TikTok)

МОБАЙЛ: всё центрировано, в столбик
```

```bash
git add .
git commit -m "feat: add site footer"
```

---

## ШАГ 15 — СБОРКА ProductPage.vue

**Скажи Cursor:**
> "Выполни Шаг 15: Собери ProductPage.vue из всех компонентов и подключи Shopify данные"

```vue
<script setup>
import { onMounted } from 'vue'
import { useShopify } from '../composables/useShopify'
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
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
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <template v-else-if="product">
      <ProductHero :product="product" />
      <ProductBenefits :product="product" />
      <ProductHowItWorks />
      <ProductFounder />
      <ProductReviews />
      <ProductFAQ />
      <ProductGreenImpact />
      <ProductFinalCTA :product="product" />
    </template>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.loading, .error {
  text-align: center;
  padding: 100px 20px;
  font-size: 18px;
}
.error { color: red; }
</style>
```

**И обновить App.vue:**
```vue
<script setup>
import ProductPage from './views/ProductPage.vue'
</script>
<template>
  <ProductPage />
</template>
```

**✅ Проверка:**
- [ ] Все секции рендерятся по порядку
- [ ] Данные из Shopify есть (название, фото, цена)
- [ ] Нет ошибок в консоли

```bash
git add .
git commit -m "feat: assemble full product page with all sections"
```

---

## ШАГ 16 — ФИНАЛЬНАЯ ПОЛИРОВКА

**Скажи Cursor:**
> "Выполни Шаг 16: Финальная полировка — проверь отступы, шрифты, hover-состояния кнопок, убери горизонтальный скролл на мобайле"

Чеклист для Cursor:
1. Все секции имеют одинаковые вертикальные padding (80px desktop / 48px mobile)
2. Все кнопки имеют hover-состояние (темнее + cursor: pointer)
3. Все изображения имеют `loading="lazy"` и `alt` атрибут
4. Нет `overflow-x` на мобайле
5. Шрифты везде правильные (заголовки — Playfair Display, текст — Inter)
6. Цветовая схема консистентна

```bash
git add .
git commit -m "style: polish spacing, hover states, and responsive layout"
```

---

## ШАГ 17 — PERFORMANCE

**Скажи Cursor:**
> "Выполни Шаг 17: Добавь мета-теги в index.html и loading="lazy" на все изображения"

В `index.html`:
```html
<title>Byteex — Consciously Made Loungewear</title>
<meta name="description" content="Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Byteex Loungewear">
<meta property="og:description" content="Don't apologize for being comfortable.">
```

```bash
git add .
git commit -m "perf: add meta tags, lazy loading, and image alt attributes"
```

---

## ШАГ 18 — ДЕПЛОЙ VERCEL

**Скажи Cursor:**
> "Выполни Шаг 18: Создай vercel.json и убедись что npm run build проходит без ошибок"

**`vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

```bash
npm run build   # должен пройти без ошибок
```

**Потом вручную на vercel.com:**
1. New Project → Import from GitHub → выбери byteex
2. Environment Variables добавь:
   - `VITE_SHOPIFY_STORE_DOMAIN`
   - `VITE_SHOPIFY_STOREFRONT_TOKEN`
3. Deploy

```bash
git add .
git commit -m "feat: add Vercel deployment config"
git push origin main
```

**✅ Проверка:**
- [ ] Сайт открывается на `*.vercel.app`
- [ ] Shopify данные загружаются на продакшне

---

## ШАГ 19 — README

**Скажи Cursor:**
> "Выполни Шаг 19: Напиши README.md"

README должен содержать:
- Название + описание проекта
- **Tech Stack** (Vue 3, Vite, SCSS, Shopify Storefront API, Vercel)
- **Почему Shopify как CMS** — одно предложение объяснения
- Как запустить локально (clone → npm install → .env → npm run dev)
- Ссылка на live demo
- Скриншот (можно добавить позже)

```bash
git add .
git commit -m "docs: add README with setup instructions"
git push origin main
```

---

## ✅ ФИНАЛЬНЫЙ ЧЕКЛИСТ ПЕРЕД СДАЧЕЙ

- [ ] Страница визуально соответствует Figma макету
- [ ] Заголовок/фото/цена тянутся из Shopify динамически
- [ ] Страница адаптивна — проверить на 375px и 1280px
- [ ] GitHub репозиторий публичный
- [ ] История коммитов — минимум 15 коммитов с понятными сообщениями
- [ ] `.env` не попал в репозиторий
- [ ] README написан
- [ ] Сайт задеплоен на Vercel
- [ ] Выдан доступ max@byteex.co к репозиторию

---

## 📧 ШАБЛОН ПИСЬМА

```
Subject: Byteex Frontend Test Submission — [Твоё Имя]

Hi Max,

Please find my submission for the Byteex frontend development test.

GitHub Repository: https://github.com/IT-Tanka/byteex
Live Demo: https://byteex.vercel.app

Tech Stack:
- Vue 3 + Vite (frontend framework)
- SCSS (styling)
- Shopify Storefront API — used as the Headless CMS for dynamic product data
  (title, description, price, and images are fetched via GraphQL)
- Vercel (deployment)

Architecture decision:
I used Shopify as the Headless CMS because it directly aligns with
the role requirements and demonstrates real-world Shopify API integration
rather than a generic CMS connection.

To run locally:
1. git clone https://github.com/IT-Tanka/byteex.git
2. cd byteex && npm install
3. Copy .env.example to .env and add your Shopify credentials
4. npm run dev

Best regards,
[Твоё Имя]
```
