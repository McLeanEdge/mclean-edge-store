import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { placeholderImg } from '../data/products.js'
import { useStore } from '../lib/StoreContext.jsx'

const CATEGORY_OPTIONS = [
  'Cameras', 'Lenses', 'Drones', 'Gimbals', 'Tripods', 'SD Cards', 'Microphones', 'Other Accessories',
]

export default function Sell() {
  const { addMarketListing, showToast } = useStore()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('New')
  const [desc, setDesc] = useState('')
  const [sellerName, setSellerName] = useState('')
  const [sellerWhatsapp, setSellerWhatsapp] = useState('')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [uploadLabel, setUploadLabel] = useState(
    'Click or drop an image here (optional — a placeholder will be used if skipped)'
  )

  function handlePhotoChange(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setUploadedImage(ev.target.result)
      setUploadLabel(file.name)
    }
    reader.readAsDataURL(file)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const t = title.trim()
    const p = parseFloat(price)
    const name = sellerName.trim()
    const wa = sellerWhatsapp.trim()

    if (!t || !category || !p || !name || !wa) {
      showToast('Please fill in all required fields.')
      return
    }

    const listing = {
      name: t,
      category,
      price: p,
      condition,
      description: desc.trim() || 'No further details provided by seller.',
      image: uploadedImage || placeholderImg(t, Math.floor(Math.random() * 16)),
      sellerName: name,
      sellerWhatsapp: wa,
      specs: { Condition: condition, Category: category, 'Listed by': name },
    }

    const saved = addMarketListing(listing)
    showToast('Your item is now listed! Redirecting…')
    setTimeout(() => navigate(`/product/${encodeURIComponent(saved.id)}`), 1200)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Sell With Us</div>
          <span className="eyebrow">Community Marketplace</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', marginTop: 10 }}>List Your Gear</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap sell-layout">
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="title">Item title</label>
              <input
                type="text" id="title" placeholder="e.g. Canon EOS 90D Body, barely used"
                value={title} onChange={(e) => setTitle(e.target.value)} required
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="category">Category</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                  <option value="">Select category</option>
                  {CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="price">Asking price (₵)</label>
                <input
                  type="number" id="price" min="1" placeholder="e.g. 3500"
                  value={price} onChange={(e) => setPrice(e.target.value)} required
                />
              </div>
            </div>

            <div className="field">
              <label>Condition</label>
              <div className="radio-row">
                <label>
                  <input type="radio" name="condition" value="New" checked={condition === 'New'} onChange={(e) => setCondition(e.target.value)} /> New
                </label>
                <label>
                  <input type="radio" name="condition" value="Used" checked={condition === 'Used'} onChange={(e) => setCondition(e.target.value)} /> Used
                </label>
              </div>
            </div>

            <div className="field">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc" placeholder="Tell buyers about condition, accessories included, reason for selling, etc."
                value={desc} onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Photo</label>
              <div className="upload-box">
                <span>{uploadLabel}</span>
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
              </div>
              {uploadedImage && (
                <div className="upload-preview">
                  <img src={uploadedImage} alt="Preview" />
                </div>
              )}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="sellerName">Your name</label>
                <input
                  type="text" id="sellerName" placeholder="e.g. Kwame Mensah"
                  value={sellerName} onChange={(e) => setSellerName(e.target.value)} required
                />
              </div>
              <div className="field">
                <label htmlFor="sellerWhatsapp">WhatsApp number</label>
                <input
                  type="tel" id="sellerWhatsapp" placeholder="e.g. 0241234567"
                  value={sellerWhatsapp} onChange={(e) => setSellerWhatsapp(e.target.value)} required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">List Item For Sale</button>
          </form>

          <aside className="sidebar-note">
            <h4>How selling works</h4>
            <ul>
              <li>Your listing appears instantly in our Community Marketplace for every visitor to browse.</li>
              <li>Interested buyers message you directly on WhatsApp — you handle the deal and meet-up.</li>
              <li>McLean Edge Studios doesn't take a commission on peer-to-peer sales.</li>
              <li>Meet in safe, public locations and inspect payment before handing over gear.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
