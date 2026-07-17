/* ============================================================
   Storage layer — cart + community marketplace
   Persisted in the browser via localStorage (client-side demo;
   swap these functions for real API calls when you add a backend).
   ============================================================ */

export const LS_CART = 'mclean_cart_v1'
export const LS_MARKET = 'mclean_marketplace_v1'
export const STORE_WHATSAPP = '233561888656' // 0561888656 in international format

// ---------- Cart ----------
export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(LS_CART)) || []
  } catch (e) {
    return []
  }
}
export function saveCart(cart) {
  localStorage.setItem(LS_CART, JSON.stringify(cart))
}
export function cartCount(cart) {
  return cart.reduce((sum, i) => sum + i.qty, 0)
}

// ---------- Community marketplace ----------
export function getMarketListings() {
  try {
    return JSON.parse(localStorage.getItem(LS_MARKET)) || []
  } catch (e) {
    return []
  }
}
export function saveMarketListings(list) {
  localStorage.setItem(LS_MARKET, JSON.stringify(list))
}

// ---------- WhatsApp helpers ----------
export function waLink(message, number) {
  number = number || STORE_WHATSAPP
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
