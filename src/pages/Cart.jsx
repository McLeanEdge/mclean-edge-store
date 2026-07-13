import React from 'react'
import { Link } from 'react-router-dom'
import { formatMoney } from '../data/products.js'
import { useStore } from '../lib/StoreContext.jsx'
import { waLink } from '../lib/storage.js'

const DELIVERY_FEE = 50

export default function Cart() {
  const { cart, findProduct, updateCartQty, removeFromCart, showToast } = useStore()

  const rows = cart
    .map((item) => ({ item, product: findProduct(item.id) }))
    .filter((r) => r.product)

  const subtotal = rows.reduce((sum, { item, product }) => sum + product.price * item.qty, 0)
  const total = subtotal + DELIVERY_FEE

  function checkoutLink() {
    const lines = rows
      .map(({ item, product }) => `• ${product.name} × ${item.qty} — ${formatMoney(product.price * item.qty)}`)
      .join('\n')
    const message = `Hi McLean Edge Studios! I'd like to order:\n\n${lines}\n\nDelivery: ${formatMoney(DELIVERY_FEE)}\nTotal: ${formatMoney(total)}\n\nPlease confirm availability and delivery details.`
    return waLink(message)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Cart</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)' }}>Your Cart</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {rows.length === 0 ? (
            <div className="empty-state">
              <h3>Your cart is empty</h3>
              <p>Browse the shop and add some gear — your free SD card is waiting on any camera purchase.</p>
              <Link to="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>
                Go to Shop
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 36, alignItems: 'start' }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="cart-table">
                  <thead>
                    <tr><th>Item</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr>
                  </thead>
                  <tbody>
                    {rows.map(({ item, product: p }) => (
                      <tr key={p.id}>
                        <td>
                          <div className="cart-item">
                            <img src={p.image} alt={p.name} />
                            <div>
                              <b>{p.name}</b>
                              <span>{p.category}</span>
                            </div>
                          </div>
                        </td>
                        <td>{formatMoney(p.price)}</td>
                        <td>
                          <div className="qty-stepper">
                            <button type="button" onClick={() => updateCartQty(p.id, item.qty - 1)}>–</button>
                            <span>{item.qty}</span>
                            <button type="button" onClick={() => updateCartQty(p.id, item.qty + 1)}>+</button>
                          </div>
                        </td>
                        <td>{formatMoney(p.price * item.qty)}</td>
                        <td>
                          <button
                            type="button"
                            className="remove-link"
                            onClick={() => { removeFromCart(p.id); showToast('Item removed from cart') }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="cart-summary">
                <h4 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold)', marginBottom: 16 }}>
                  Order Summary
                </h4>
                <div className="summary-row"><span>Subtotal</span><span>{formatMoney(subtotal)}</span></div>
                <div className="summary-row"><span>Delivery</span><span>{formatMoney(DELIVERY_FEE)}</span></div>
                <div className="summary-row total"><span>Total</span><b>{formatMoney(total)}</b></div>
                <a
                  className="btn btn-primary btn-block"
                  style={{ marginTop: 18 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={checkoutLink()}
                >
                  Checkout via WhatsApp
                </a>
                <Link to="/shop" className="btn btn-ghost btn-block" style={{ marginTop: 10 }}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
