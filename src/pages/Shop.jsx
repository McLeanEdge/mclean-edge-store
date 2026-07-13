import React, { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useStore } from '../lib/StoreContext.jsx'
import { IconSearch } from '../components/icons.jsx'

export default function Shop() {
  const { getAllProducts } = useStore()
  const [searchParams] = useSearchParams()

  const [tab, setTab] = useState(searchParams.get('tab') || 'all')
  const [cats, setCats] = useState(searchParams.get('cat') ? [searchParams.get('cat')] : [])
  const [conds, setConds] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('relevance')

  const allProducts = getAllProducts()

  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category))
    return Array.from(set).sort()
  }, [allProducts])

  const counts = useMemo(() => {
    const c = {}
    allProducts.forEach((p) => { c[p.category] = (c[p.category] || 0) + 1 })
    return c
  }, [allProducts])

  const items = useMemo(() => {
    let list = allProducts.filter((p) => {
      if (tab === 'store') return !p.isMarket
      if (tab === 'market') return !!p.isMarket
      return true
    })

    if (cats.length) list = list.filter((p) => cats.includes(p.category))
    if (conds.length) list = list.filter((p) => conds.includes(p.condition || 'Used'))
    if (search) {
      const q = search.toLowerCase()
      list = list.filter((p) =>
        (p.name + ' ' + p.category + ' ' + (p.description || '')).toLowerCase().includes(q)
      )
    }

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    else if (sort === 'newest') {
      list = [...list].sort(
        (a, b) =>
          (b.isMarket ? 1 : 0) - (a.isMarket ? 1 : 0) ||
          new Date(b.postedAt || 0) - new Date(a.postedAt || 0)
      )
    }

    return list
  }, [allProducts, tab, cats, conds, search, sort])

  function toggleCat(cat) {
    setCats((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }
  function toggleCond(cond) {
    setConds((prev) => (prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]))
  }
  function clearFilters() {
    setCats([]); setConds([]); setSearch('')
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> / Shop</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)' }}>Shop All Gear</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="tab-row">
            {[
              ['all', 'All Listings'],
              ['store', 'Official Store'],
              ['market', 'Community Marketplace'],
            ].map(([key, label]) => (
              <button
                key={key}
                className={`tab-btn${tab === key ? ' active' : ''}`}
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="shop-layout">
            <aside className="filter-panel">
              <h4>Category</h4>
              <div className="filter-group">
                {categories.map((c) => (
                  <label className="filter-opt" key={c}>
                    <input
                      type="checkbox"
                      checked={cats.includes(c)}
                      onChange={() => toggleCat(c)}
                    />
                    {c} <span className="count">{counts[c] || 0}</span>
                  </label>
                ))}
              </div>
              <h4>Condition</h4>
              <div className="filter-group">
                <label className="filter-opt">
                  <input type="checkbox" checked={conds.includes('New')} onChange={() => toggleCond('New')} /> New
                </label>
                <label className="filter-opt">
                  <input type="checkbox" checked={conds.includes('Used')} onChange={() => toggleCond('Used')} /> Used
                </label>
              </div>
              <button className="btn btn-ghost btn-block btn-sm" onClick={clearFilters}>
                Clear filters
              </button>
            </aside>

            <div>
              <div className="shop-toolbar">
                <div className="search-box">
                  <IconSearch size={16} strokeWidth={2} />
                  <input
                    type="text"
                    placeholder="Search products, e.g. 'lens', 'tripod'..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <select
                  className="sort-select"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="relevance">Sort: Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              <p className="result-count">
                {items.length} item{items.length === 1 ? '' : 's'} found
              </p>

              {items.length === 0 ? (
                <div className="empty-state">
                  <h3>No matching gear found</h3>
                  <p>Try clearing a filter or searching a different term — or be the first to list one!</p>
                  <Link to="/sell" className="btn btn-primary" style={{ marginTop: 16 }}>
                    List Your Gear
                  </Link>
                </div>
              ) : (
                <div className="prod-grid" style={{ marginTop: 18 }}>
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
