import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoMark from '../assets/mc-logo.png'
import { useStore } from '../lib/StoreContext.jsx'
import { IconCart, IconMenu, IconClose } from './icons.jsx'
import MegaMenu from './MegaMenu.jsx'

const TICKER_ITEMS = [
  'Free SD Card With Every Camera Purchase',
  'Available Nationwide Delivery',
  'Professional Cameras At Affordable Prices',
  'Sell Your Own Gear In Minutes',
]

export default function Header() {
  const { cartCount } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const fixedRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Measure the fixed header+ticker stack and expose it as a CSS var so the
  // rest of the page (main content, sticky sidebars) can offset itself
  // correctly instead of hiding underneath the fixed bar.
  useEffect(() => {
    const el = fixedRef.current
    if (!el) return
    const setVar = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    }
    setVar()
    const ro = new ResizeObserver(setVar)
    ro.observe(el)
    window.addEventListener('resize', setVar)
    window.addEventListener('load', setVar)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setVar)
      window.removeEventListener('load', setVar)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`fixed-head${scrolled ? ' is-scrolled' : ''}`} ref={fixedRef}>
      <header className={`site-header${menuOpen ? ' menu-active' : ''}`}>
        <div className="wrap header-row">
          <Link to="/" className="brand" onClick={closeMenu}>
            <img src={logoMark} alt="McLean Edge Studios logo" />
            <span className="brand-word">
              <b>McLean Edge</b>
              <span>STUDIOS</span>
            </span>
          </Link>

          <div className="header-actions">
            <Link to="/cart" className="icon-btn" aria-label="View cart" onClick={closeMenu}>
              <IconCart size={19} strokeWidth={2} />
              <span className="cart-count" style={{ display: cartCount > 0 ? 'flex' : 'none' }}>
                {cartCount}
              </span>
            </Link>
            <button
              className="menu-trigger"
              aria-expanded={menuOpen}
              aria-controls="megaMenu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <IconClose size={18} strokeWidth={2} /> : <IconMenu size={18} strokeWidth={2} />}
              <span>Menu</span>
            </button>
          </div>
        </div>

        <MegaMenu open={menuOpen} onClose={closeMenu} />
      </header>

      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
