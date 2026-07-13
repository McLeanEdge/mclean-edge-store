import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { PRODUCTS } from '../data/products.js'
import {
  getCart,
  saveCart,
  cartCount as cartCountOf,
  getMarketListings,
  saveMarketListings,
} from './storage.js'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(getCart)
  const [marketListings, setMarketListings] = useState(getMarketListings)
  const [toastMsg, setToastMsg] = useState(null)
  const toastTimer = useRef(null)

  // Persist cart + marketplace listings whenever they change
  useEffect(() => { saveCart(cart) }, [cart])
  useEffect(() => { saveMarketListings(marketListings) }, [marketListings])

  const showToast = useCallback((msg) => {
    setToastMsg(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(null), 2800)
  }, [])

  const addToCart = useCallback((id, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { id, qty }]
    })
  }, [])

  const updateCartQty = useCallback((id, qty) => {
    setCart((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== id)
      return prev.map((i) => (i.id === id ? { ...i, qty } : i))
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const addMarketListing = useCallback((listing) => {
    const saved = {
      ...listing,
      id: 'mkt-' + Date.now(),
      isMarket: true,
      postedAt: new Date().toISOString(),
    }
    setMarketListings((prev) => [saved, ...prev])
    return saved
  }, [])

  const removeMarketListing = useCallback((id) => {
    setMarketListings((prev) => prev.filter((l) => l.id !== id))
  }, [])

  // ---------- Combined catalog ----------
  const getAllProducts = useCallback(
    () => PRODUCTS.map((p) => ({ ...p, isMarket: false })).concat(marketListings),
    [marketListings]
  )
  const findProduct = useCallback(
    (id) => getAllProducts().find((p) => p.id === id),
    [getAllProducts]
  )

  const count = useMemo(() => cartCountOf(cart), [cart])

  const value = {
    cart,
    marketListings,
    cartCount: count,
    addToCart,
    updateCartQty,
    removeFromCart,
    addMarketListing,
    removeMarketListing,
    getAllProducts,
    findProduct,
    toastMsg,
    showToast,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within a StoreProvider')
  return ctx
}
