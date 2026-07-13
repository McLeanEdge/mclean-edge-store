# McLean Edge Studios

Camera sales & peer-to-peer gear marketplace, rebuilt as a React + Vite single-page app.

This started life as a 5-page static HTML/CSS/vanilla-JS site (`index.html`, `shop.html`,
`product.html`, `cart.html`, `sell.html`) and has been restructured into the standard Vite/React
layout below, with all pages, filtering, cart, and marketplace-listing logic ported to React.

## Project structure

```
mclean-edge/
├── index.html              # Vite HTML entry point (mounts #root)
├── package.json            # Dependencies & scripts
├── package-lock.json        # Generated on first `npm install`
├── vite.config.js          # Vite configuration
├── README.md
└── src/
    ├── main.jsx             # React entry point (Router + StoreProvider)
    ├── App.jsx               # Route definitions
    ├── index.css             # Global styles (design tokens, layout, components)
    ├── assets/               # Images (hero photo, logo)
    ├── data/
    │   └── products.js       # Official product catalog + currency/placeholder helpers
    ├── lib/
    │   ├── storage.js        # localStorage read/write helpers, WhatsApp link builder
    │   └── StoreContext.jsx  # React context: cart, marketplace listings, toast
    ├── components/
    │   ├── Layout.jsx         # Header/Footer/WhatsApp float/Toast wrapper (<Outlet/>)
    │   ├── Header.jsx         # Ticker + nav + cart badge
    │   ├── Footer.jsx
    │   ├── ProductCard.jsx
    │   ├── Toast.jsx
    │   ├── WhatsAppFloat.jsx
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx           # was index.html
        ├── Shop.jsx           # was shop.html — search/filter/sort/tabs
        ├── Product.jsx        # was product.html — /product/:id
        ├── Cart.jsx           # was cart.html
        └── Sell.jsx           # was sell.html — listing form
```

## What changed from the original static site

- **Routing:** `react-router-dom` replaces separate `.html` pages. Internal links
  (`shop.html`, `product.html?id=...`, etc.) are now `<Link>`/`<NavLink>` routes
  (`/shop`, `/product/:id`, `/cart`, `/sell`).
- **State:** the old `store.js` (localStorage cart + marketplace helpers, manipulated via direct
  DOM writes) is now a `StoreContext` React context (`src/lib/StoreContext.jsx`) backed by the same
  `localStorage` keys, so carts/listings persist across reloads exactly as before.
- **Rendering:** all `innerHTML` templating in `main.js`/`shop.js`/`product.js`/`cart.js`/`sell.js`
  has been rewritten as React components/JSX.
- **Styling:** `css/style.css` is unchanged and now lives at `src/index.css`, imported once in
  `main.jsx`. All existing class names and CSS variables are preserved.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```
