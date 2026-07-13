import React from 'react'
import { Link } from 'react-router-dom'
import heroCamera from '../assets/hero-camera.jpg'
import ProductCard from '../components/ProductCard.jsx'
import { useStore } from '../lib/StoreContext.jsx'
import {
  IconCamera,
  IconAperture,
  IconDrone,
  IconVideo,
  IconTripod,
  IconSdCard,
  IconMic,
  IconGift,
  IconTruck,
  IconUsers,
} from '../components/icons.jsx'

const CATEGORIES = [
  ['Cameras', IconCamera],
  ['Lenses', IconAperture],
  ['Drones', IconDrone],
  ['Gimbals', IconVideo],
  ['Tripods', IconTripod],
  ['SD Cards', IconSdCard],
  ['Microphones', IconMic],
]

export default function Home() {
  const { getAllProducts } = useStore()
  const featured = getAllProducts().slice(0, 8)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Available Nationwide</span>
            <h1 className="hero-title">
              CAMERA
              <br />
              <span className="accent">SALES</span>
            </h1>
            <p className="hero-sub">
              Professional cameras, lenses and film gear at affordable prices — shop our full
              inventory, or list your own equipment and sell straight to other creators.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <Link to="/sell" className="btn btn-ghost">Sell Your Gear</Link>
            </div>
            <div className="hero-stats">
              <div><b>15+</b><span>Products in stock</span></div>
              <div><b>10</b><span>Regions delivered to</span></div>
              <div><b>Free</b><span>SD card per camera</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroCamera} alt="Canon mirrorless camera with 28-70mm lens" />
            <div className="hero-readout">
              F/2.0 &nbsp;·&nbsp; 1/8000 &nbsp;·&nbsp; ISO 400
              <div>NEW ARRIVAL — IN STOCK NOW</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Browse</span>
              <h2>Shop by category</h2>
            </div>
            <p>
              Everything you need behind and in front of the lens — from full-frame bodies to
              the SD card that holds the shot.
            </p>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map(([name, Icon]) => (
              <Link key={name} className="cat-card" to={`/shop?cat=${encodeURIComponent(name)}`}>
                <div className="aperture"><i><Icon size={22} strokeWidth={1.8} /></i></div>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">New Arrival</span>
              <h2>Featured gear</h2>
            </div>
            <Link to="/shop" className="btn btn-ghost btn-sm">View all products</Link>
          </div>
          <div className="prod-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMOS */}
      <section className="section">
        <div className="wrap">
          <div className="promo-strip">
            <div className="promo-card">
              <div className="aperture"><i><IconGift size={22} strokeWidth={1.8} /></i></div>
              <h3>Free SD Card Promo</h3>
              <p>Get a free SD card with every camera purchase — automatically added at checkout, no code needed.</p>
            </div>
            <div className="promo-card">
              <div className="aperture"><i><IconTruck size={22} strokeWidth={1.8} /></i></div>
              <h3>Nationwide Delivery</h3>
              <p>We ship to every region. Track your order and get support directly over WhatsApp.</p>
            </div>
            <div className="promo-card">
              <div className="aperture"><i><IconUsers size={22} strokeWidth={1.8} /></i></div>
              <h3>Buy, Sell &amp; Trade</h3>
              <p>Upgrading your kit? List your used gear in our marketplace and sell directly to other creators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELL BANNER */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="sell-banner">
            <div>
              <span className="eyebrow">Community Marketplace</span>
              <h2 style={{ marginTop: 12 }}>Got gear you're not using? Sell it here.</h2>
              <p>
                List your camera, lens or accessory in minutes. Buyers can browse, message you
                on WhatsApp, and deal directly — no middleman.
              </p>
            </div>
            <Link to="/sell" className="btn btn-primary">List Your Gear</Link>
          </div>
        </div>
      </section>
    </>
  )
}
