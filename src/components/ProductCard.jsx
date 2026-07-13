import React from 'react'
import { Link } from 'react-router-dom'
import { formatMoney } from '../data/products.js'

export default function ProductCard({ product }) {
  return (
    <Link className="prod-card" to={`/product/${encodeURIComponent(product.id)}`}>
      <div className="prod-thumb focus-frame">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className={`prod-badge${product.isMarket ? ' market' : ''}`}>
          {product.isMarket ? 'Community' : product.condition}
        </span>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="prod-body">
        <span className="prod-cat">{product.category}</span>
        <span className="prod-name">{product.name}</span>
        <div className="prod-foot">
          <span className="prod-price">{formatMoney(product.price)}</span>
          <span className="btn btn-ghost btn-sm">View</span>
        </div>
      </div>
    </Link>
  )
}
