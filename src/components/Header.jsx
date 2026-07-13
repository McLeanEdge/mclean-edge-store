import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMark from '../assets/mc-logo.png'
import { useStore } from '../lib/StoreContext.jsx'
import { IconCart, IconMenu, IconClose } from './icons.jsx'

const TICKER_ITEMS = [
  'Free SD Card With Every Camera Purchase',
  'Available Nationwide Delivery',
  'Professional Cameras At Affordable Prices',
  'Sell Your Own Gear In Minutes',
]

export default function Header() {
  const { cartCount } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-row">
          <Link to="/" className="brand">
            <img src={logoMark} alt="McLean Edge Studios logo" />
            <span className="brand-word">
              <b>McLean Edge</b>
              <span>STUDIOS</span>
            </span>
          </Link>

          <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="mainNav">
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink>
            <NavLink to="/sell" onClick={() => setMenuOpen(false)}>Sell With Us</NavLink>
          </nav>

          <div className="header-actions">
            <Link to="/cart" className="icon-btn" aria-label="View cart">
              <IconCart size={19} strokeWidth={2} />
              <span className="cart-count" style={{ display: cartCount > 0 ? 'flex' : 'none' }}>
                {cartCount}
              </span>
            </Link>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <IconClose size={18} strokeWidth={2} /> : <IconMenu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
