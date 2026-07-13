import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { formatMoney } from '../data/products.js'
import { useStore } from '../lib/StoreContext.jsx'
import { waLink } from '../lib/storage.js'
import { IconMessageCircle } from '../components/icons.jsx'

export default function Product() {
  const { id } = useParams()
  const { findProduct, getAllProducts, addToCart, showToast } = useStore()
  const product = findProduct(id)
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="empty-state">
            <h3>Product not found</h3>
            <p>This listing may have been removed or the link is incorrect.</p>
            <Link to="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const specs = product.specs || {}
  const specKeys = Object.keys(specs).slice(0, 3)

  const related = (() => {
    const sameCat = getAllProducts().filter((p) => p.id !== product.id && p.category === product.category)
    const pool = sameCat.length ? sameCat : getAllProducts().filter((p) => p.id !== product.id)
    return pool.slice(0, 4)
  })()

  function handleAddToCart() {
    addToCart(product.id, qty)
    showToast(`Added ${qty} × ${product.name} to cart`)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap pd-grid">
          <div className="pd-gallery">
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <span className="pd-cat">
              {product.category}
              {product.isMarket ? ' · Community Listing' : ''}
            </span>
            <h1 className="pd-title">{product.name}</h1>
            <div className="pd-price">
              {formatMoney(product.price)}{' '}
              {product.oldPrice && (
                <small style={{ color: 'var(--muted-dim)', textDecoration: 'line-through', fontSize: 15 }}>
                  {formatMoney(product.oldPrice)}
                </small>
              )}
            </div>
            <p className="pd-desc">{product.description || 'No description provided.'}</p>

            {specKeys.length > 0 && (
              <div className="pd-readout">
                {specKeys.map((k) => (
                  <div key={k}>
                    <b>{specs[k]}</b>
                    <span>{k}</span>
                  </div>
                ))}
              </div>
            )}

            {product.isMarket ? (
              <MarketActions product={product} />
            ) : (
              <StoreActions product={product} qty={qty} setQty={setQty} onAddToCart={handleAddToCart} />
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">You Might Also Like</span>
                <h2>Related gear</h2>
              </div>
            </div>
            <div className="prod-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function StoreActions({ product, qty, setQty, onAddToCart }) {
  return (
    <>
      <div className="qty-row">
        <div className="qty-stepper">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>–</button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty((q) => Math.min(product.stock || 99, q + 1))}>+</button>
        </div>
        <span style={{ color: 'var(--muted-dim)', fontSize: 13 }}>{product.stock || 0} in stock</span>
      </div>
      <button className="btn btn-primary btn-block" onClick={onAddToCart}>Add to Cart</button>
      <a
        className="btn btn-ghost btn-block"
        style={{ marginTop: 12 }}
        target="_blank"
        rel="noopener noreferrer"
        href={waLink(`Hi McLean Edge Studios! I want to ask about the ${product.name}.`)}
      >
        Ask a Question on WhatsApp
      </a>
    </>
  )
}

function MarketActions({ product }) {
  const seller = product.sellerName || 'Seller'
  const initials = seller.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  const waNumber = (product.sellerWhatsapp || '').replace(/[^0-9]/g, '')
  const msg = `Hi ${seller}, I saw your listing for "${product.name}" on McLean Edge Studios and I'm interested.`

  return (
    <>
      <div className="seller-box">
        <div className="seller-avatar">{initials || 'S'}</div>
        <div>
          <b>{seller}</b>
          <p>Community seller · {product.condition || 'Used'}</p>
        </div>
      </div>
      <a
        className="btn btn-primary btn-block mt-40"
        target="_blank"
        rel="noopener noreferrer"
        href={waNumber ? waLink(msg, waNumber) : '#'}
      >
        <IconMessageCircle size={17} strokeWidth={2} /> Contact Seller on WhatsApp
      </a>
      <p style={{ color: 'var(--muted-dim)', fontSize: 12, marginTop: 12 }}>
        This item is sold directly by a fellow user, not by McLean Edge Studios. Meet safely and
        inspect gear before paying.
      </p>
    </>
  )
}
