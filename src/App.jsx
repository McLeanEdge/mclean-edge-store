import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StoreProvider } from './lib/StoreContext.jsx'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Sell from './pages/Sell.jsx'

export default function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sell" element={<Sell />} />
        </Route>
      </Routes>
    </StoreProvider>
  )
}
