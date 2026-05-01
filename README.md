# Byteex — Consciously Made Loungewear

A modern, responsive landing page for Byteex loungewear brand built with Vue 3, featuring dynamic product data from Shopify Storefront API.

## Tech Stack

- **Frontend Framework:** Vue 3 + Vite
- **Styling:** SCSS with design tokens and responsive mixins
- **CMS:** Shopify Storefront API (GraphQL)
- **Deployment:** Vercel

## Why Shopify as CMS

Shopify Storefront API was chosen as the headless CMS because it directly aligns with the role requirements and demonstrates real-world e-commerce API integration for dynamic product data retrieval.

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Shopify Partner account with a development store

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IT-Tanka/byteex.git
   cd byteex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   - Copy `.env.example` to `.env`
   - Add your Shopify credentials:
     ```
     VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
     VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_access_token
     ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Live Demo

[View Live Demo](https://byteex.vercel.app)

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header and footer components
│   ├── product/         # Product section components
│   └── ui/              # Reusable UI components
├── composables/         # Vue composables (Shopify API)
├── styles/              # SCSS files with design tokens
├── views/               # Page components
└── main.js              # App entry point
```

## Features

- Responsive design (mobile-first approach)
- Dynamic product data from Shopify
- Image lazy loading for performance
- SEO-optimized meta tags
- Accessible components
- Modern CSS with design tokens
- Component-based architecture

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.