import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImg from '../assets/hero-camera.jpg'
import { PRIMARY_LINKS, SHOP_CATEGORIES } from '../data/nav.js'

export default function MegaMenu({ open, onClose }) {
  return (
    <>
      <div
        className={`mega-backdrop${open ? ' show' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`mega-panel${open ? ' open' : ''}`} id="megaMenu">
        <div className="wrap mega-inner">
          <div className="mega-col">
            <h4>Explore</h4>
            <ul>
              {PRIMARY_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} onClick={onClose}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-col mega-col-wide">
            <h4>Shop By Category</h4>
            <div className="mega-cat-grid">
              {SHOP_CATEGORIES.map((cat) => {
                const Icon = cat.icon
                return (
                  <NavLink key={cat.label} to={cat.to} onClick={onClose} className="mega-cat">
                    <span className="mega-cat-icon"><Icon size={18} strokeWidth={2} /></span>
                    {cat.label}
                  </NavLink>
                )
              })}
            </div>
          </div>

          <div className="mega-promo">
            <img src={heroImg} alt="Latest camera gear" />
            <div className="mega-promo-body">
              <span className="eyebrow">New This Week</span>
              <h3>Fresh Gear, Fair Prices</h3>
              <NavLink to="/shop" onClick={onClose} className="btn btn-primary btn-sm">
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
