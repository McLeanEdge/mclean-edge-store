import React from 'react'
import { Link } from 'react-router-dom'
import heroCamera from '../assets/hero-camera-horizontal.png'
import ProductCard from '../components/ProductCard.jsx'
import { useStore } from '../lib/StoreContext.jsx'
import { waLink } from '../lib/storage.js'
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

/* Each rotating headline word carries its own real background photo —
   the hero swaps the photo to match whichever word is showing. */
const ROTATING_PRODUCTS = [
  { word: 'CAMERA', image: heroCamera, tag: 'NEW ARRIVAL — IN STOCK NOW' },
  { word: 'LENS', image: heroCamera, tag: 'BEST SELLER — RF 24–105MM' },
  { word: 'DRONE', image: 'https://images.unsplash.com/photo-1574220739173-975b13d0279a?w=1800&q=80&auto=format&fit=crop', tag: 'IN STOCK — READY TO FLY' },
  { word: 'GIMBAL', image: 'https://images.unsplash.com/photo-1757877259265-99ab3e3193bf?w=1800&q=80&auto=format&fit=crop', tag: 'SMOOTH TRACKING — 12H BATTERY' },
  { word: 'TRIPOD', image: 'https://images.unsplash.com/photo-1705107958681-c76fec2dc5b4?w=1800&q=80&auto=format&fit=crop', tag: 'PRO SUPPORT — FIELD READY' },
  { word: 'SD CARD', image: 'https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?w=1800&q=80&auto=format&fit=crop', tag: 'HIGH SPEED — FREE WITH CAMERA' },
  { word: 'MICROPHONE', image: 'https://images.unsplash.com/photo-1558811916-51c8d56d29c6?w=1800&q=80&auto=format&fit=crop', tag: 'STUDIO GRADE — LOW NOISE' },
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
      <section className="hero-fb">
        <div className="hero-fb-frame">
          <div className="hero-fb-bg-stack">
            <img
              key={wordIndex}
              src={current.image}
              alt={`${current.word.toLowerCase()} in use`}
              className="hero-fb-bg"
            />
          </div>
          <div className="hero-fb-scrim" />
          <div className="hero-fb-content">
            <span className="eyebrow">Available Nationwide</span>
            <h1 className="hero-title-center">
              <span key={wordIndex} className="rotate-word">{current.word}</span>
              <br />
              <span className="accent">SALES</span>
            </h1>
            <p className="hero-sub-center">
              Professional cameras, lenses and film gear at affordable prices — shop our full
              inventory, or list your own equipment and sell straight to other creators.
            </p>
            <div className="hero-actions-center">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <Link to="/sell" className="btn btn-primary">Sell Your Gear</Link>
              <a
                href={waLink(`Hi McLean Edge Studios, I'd like to know more about your ${current.word.toLowerCase()} range.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enquire Now
              </a>
            </div>
            <div className="hero-fb-tag">{current.tag}</div>
            <div className="glass-dots">
              {ROTATING_PRODUCTS.map((p, i) => (
                <span key={p.word} className={i === wordIndex ? 'dot dot-active' : 'dot'} />
              ))}
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
