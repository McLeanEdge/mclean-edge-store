import React from 'react'

/* ============================================================
   Lightweight line-icon set — feather/lucide-style SVGs.
   Every icon inherits color via `currentColor`, so it follows
   whatever text color it's placed inside (cream, gold, dark
   button text, etc.) with no extra theming work needed.
   ============================================================ */

function Base({ size = 20, strokeWidth = 1.8, className, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export function IconCart(props) {
  return (
    <Base {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </Base>
  )
}

export function IconMenu(props) {
  return (
    <Base {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </Base>
  )
}

export function IconClose(props) {
  return (
    <Base {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Base>
  )
}

export function IconSearch(props) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Base>
  )
}

export function IconMessageCircle(props) {
  return (
    <Base {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </Base>
  )
}

export function IconPhone({ size = 22, className, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z" />
    </svg>
  )
}

export function IconCamera(props) {
  return (
    <Base {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </Base>
  )
}

export function IconAperture(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </Base>
  )
}

export function IconDrone(props) {
  return (
    <Base {...props}>
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <line x1="9" y1="9" x2="4" y2="4" />
      <line x1="15" y1="9" x2="20" y2="4" />
      <line x1="9" y1="15" x2="4" y2="20" />
      <line x1="15" y1="15" x2="20" y2="20" />
      <circle cx="4" cy="4" r="2.2" />
      <circle cx="20" cy="4" r="2.2" />
      <circle cx="4" cy="20" r="2.2" />
      <circle cx="20" cy="20" r="2.2" />
    </Base>
  )
}

export function IconVideo(props) {
  return (
    <Base {...props}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </Base>
  )
}

export function IconTripod(props) {
  return (
    <Base {...props}>
      <circle cx="12" cy="5" r="2.4" />
      <line x1="12" y1="7.4" x2="12" y2="12" />
      <line x1="12" y1="12" x2="5" y2="22" />
      <line x1="12" y1="12" x2="12" y2="22" />
      <line x1="12" y1="12" x2="19" y2="22" />
    </Base>
  )
}

export function IconSdCard(props) {
  return (
    <Base {...props}>
      <path d="M5 2h10l4 4v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <line x1="8" y1="14" x2="8" y2="19" />
      <line x1="12" y1="14" x2="12" y2="19" />
      <line x1="16" y1="14" x2="16" y2="19" />
    </Base>
  )
}

export function IconMic(props) {
  return (
    <Base {...props}>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </Base>
  )
}

export function IconGift(props) {
  return (
    <Base {...props}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </Base>
  )
}

export function IconTruck(props) {
  return (
    <Base {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </Base>
  )
}

export function IconUsers(props) {
  return (
    <Base {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Base>
  )
}
