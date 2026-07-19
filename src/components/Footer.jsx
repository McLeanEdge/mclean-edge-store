import React from 'react'
import { Link } from 'react-router-dom'
import logoMark from '../assets/mc-logo.png'
import { waLink } from '../lib/storage.js'

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/mclean_edge',
  instagram: 'https://www.instagram.com/mclean_edge',
  x: 'https://x.com/mclean__edge',
  tiktok: 'https://www.tiktok.com/@mclean_edge_studios',
  youtube: 'https://www.youtube.com/@mclean_edge_studios',
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="brand">
              <img src={logoMark} alt="McLean Edge Studios logo" />
              <span className="brand-word">
                <b>McLean Edge</b>
                <span>STUDIOS</span>
              </span>
            </div>
            <p>
              Professional cameras, lenses and film gear at affordable prices — available
              nationwide, plus a marketplace where you can sell your own equipment directly to
              other creators.
            </p>
            <div className="social-row">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">♪</a>
              <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop?cat=Cameras">Cameras</Link></li>
              <li><Link to="/shop?cat=Lenses">Lenses</Link></li>
              <li><Link to="/shop?cat=Drones">Drones</Link></li>
              <li><Link to="/shop?cat=Gimbals">Gimbals</Link></li>
              <li><Link to="/shop?cat=Tripods">Tripods</Link></li>
            </ul>
          </div>

          <div>
            <h4>Marketplace</h4>
            <ul>
              <li><Link to="/sell">List your gear</Link></li>
              <li><Link to="/shop?tab=market">Browse community listings</Link></li>
              <li><Link to="/cart">Your cart</Link></li>
              <li><Link to="/projects">Projects &amp; Apps</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={waLink('Hi McLean Edge Studios, I have a question.')}>
                  WhatsApp/Call: 0241 096 942
                </a>
              </li>
              <li><a href="#">www.mcleanedge.com</a></li>
              <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">@mclean_edge</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} McLean Edge Studios. All rights reserved.</span>
          <span>Built for creators, by creators.</span>
        </div>
      </div>
    </footer>
  )
}
