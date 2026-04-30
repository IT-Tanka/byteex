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
