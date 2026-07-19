import React from 'react'
import { Link } from 'react-router-dom'
import heroCamera from '../assets/hero-camera-horizontal.png'
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

/* Each rotating headline word carries its own icon + readout —
   the hero visual swaps to match whichever word is showing. */
const ROTATING_PRODUCTS = [
  { word: 'CAMERA', Icon: IconCamera, readout: 'F/2.0 · 1/8000 · ISO 400', tag: 'NEW ARRIVAL — IN STOCK NOW', photo: true },
  { word: 'LENS', Icon: IconAperture, readout: '24–105mm · f/4L IS', tag: 'BEST SELLER — RF MOUNT', photo: true },
  { word: 'DRONE', Icon: IconDrone, readout: '4K/60 · 3-AXIS GIMBAL', tag: 'IN STOCK — READY TO FLY' },
  { word: 'GIMBAL', Icon: IconVideo, readout: 'PAYLOAD 3KG · WIRELESS', tag: 'SMOOTH TRACKING — 12H BATTERY' },
  { word: 'TRIPOD', Icon: IconTripod, readout: 'CARBON FIBER · 1.6KG', tag: 'PRO SUPPORT — FIELD READY' },
  { word: 'SD CARD', Icon: IconSdCard, readout: '256GB · UHS-II · 300MB/S', tag: 'HIGH SPEED — FREE WITH CAMERA' },
  { word: 'MICROPHONE', Icon: IconMic, readout: 'SHOTGUN · -32DB · XLR', tag: 'STUDIO GRADE — LOW NOISE' },
]

export default function Home() {
  const { getAllProducts } = useStore()
  const featured = getAllProducts().slice(0, 8)
  const [wordIndex, setWordIndex] = React.useState(0)
  const current = ROTATING_PRODUCTS[wordIndex]

  React.useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_PRODUCTS.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-heading">
            <span className="eyebrow">Available Nationwide</span>
            <h1 className="hero-title">
              <span key={wordIndex} className="rotate-word">{current.word}</span>
              <br />
              <span className="accent">SALES</span>
            </h1>
          </div>
          <div className="hero-visual">
            <div className="glass-holder">
              <div className="glass-holder-inner">
                {current.photo ? (
                  <img
                    key="photo"
                    src={heroCamera}
                    alt="Canon mirrorless camera with 24-105mm lens"
                    className="glass-photo"
                  />
                ) : (
                  <div key={current.word} className="glass-icon-stage">
                    <current.Icon size={108} strokeWidth={1.1} />
                  </div>
                )}
              </div>
              <div className="glass-dots">
                {ROTATING_PRODUCTS.map((p, i) => (
                  <span key={p.word} className={i === wordIndex ? 'dot dot-active' : 'dot'} />
                ))}
              </div>
            </div>
            <div className="hero-readout">
              {current.readout}
              <div>{current.tag}</div>
            </div>
          </div>
          <div className="hero-rest">
            <p className="hero-sub">
              Professional cameras, lenses and film gear at affordable prices — shop our full
              inventory, or list your own equipment and sell straight to other creators.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">APPS</Link>
              <Link to="/sell" className="btn btn-ghost">Sell Your Gear</Link>
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
