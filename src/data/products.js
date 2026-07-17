/* ============================================================
   Store catalog — McLean Edge Studios
   Official inventory. Community (peer-to-peer) listings are
   stored separately in localStorage — see src/lib/store.js
   ============================================================ */
import heroCamera from '../assets/hero-camera.jpg'

// Line-icon paths (viewBox 0 0 24 24) matching the icon set in components/icons.jsx,
// reused here so every category gets a distinct, recognizable illustration.
const CATEGORY_ICONS = {
  Cameras: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  Lenses: '<circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/>',
  Drones: '<rect x="9" y="9" width="6" height="6" rx="1"/><line x1="9" y1="9" x2="4" y2="4"/><line x1="15" y1="9" x2="20" y2="4"/><line x1="9" y1="15" x2="4" y2="20"/><line x1="15" y1="15" x2="20" y2="20"/><circle cx="4" cy="4" r="2.2"/><circle cx="20" cy="4" r="2.2"/><circle cx="4" cy="20" r="2.2"/><circle cx="20" cy="20" r="2.2"/>',
  Gimbals: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
  Tripods: '<circle cx="12" cy="5" r="2.4"/><line x1="12" y1="7.4" x2="12" y2="12"/><line x1="12" y1="12" x2="5" y2="22"/><line x1="12" y1="12" x2="12" y2="22"/><line x1="12" y1="12" x2="19" y2="22"/>',
  'SD Cards': '<path d="M5 2h10l4 4v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><line x1="8" y1="14" x2="8" y2="19"/><line x1="12" y1="14" x2="12" y2="19"/><line x1="16" y1="14" x2="16" y2="19"/>',
  Microphones: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
}

// Builds a branded product-art thumbnail (SVG data URI): a category icon
// centered in an aperture-ring frame, so every product has a distinct,
// professional-looking image even before a real photo is provided.
export function placeholderImg(category, seed = 0) {
  const hues = ['#f7941d', '#d9540b', '#ffc857', '#c9660a']
  const c1 = hues[seed % hues.length]
  const icon = CATEGORY_ICONS[category] || CATEGORY_ICONS.Cameras
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
    <defs>
      <radialGradient id="g${seed}" cx="30%" cy="20%" r="85%">
        <stop offset="0%" stop-color="${c1}" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#0e0b08" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="600" height="450" fill="#14100c"/>
    <rect width="600" height="450" fill="url(#g${seed})"/>
    <circle cx="300" cy="203" r="120" fill="none" stroke="${c1}" stroke-opacity="0.35" stroke-width="1.5"/>
    <circle cx="300" cy="203" r="97" fill="#1c1712" stroke="${c1}" stroke-opacity="0.55" stroke-width="1"/>
    <svg x="220" y="123" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="${c1}" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
      ${icon}
    </svg>
    <text x="300" y="370" text-anchor="middle" font-family="'Space Mono', monospace" font-size="13" letter-spacing="3" fill="#b0a599" opacity="0.85">${category.toUpperCase()}</text>
  </svg>`
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
}

// Points at a real photo once you've dropped it into public/IMAGE/.
// e.g. image('cam-eos-r6.jpg') -> "/IMAGE/cam-eos-r6.jpg"
export function image(filename) {
  return `/IMAGE/${filename}`
}

export const PRODUCTS = [
  {
    id: 'cam-eos-r6',
    name: 'Canon EOS R6 Mark II Body',
    category: 'Cameras',
    price: 14500,
    oldPrice: 16800,
    condition: 'New',
    image: heroCamera,
    specs: { Sensor: '24.2MP Full-Frame', Video: '4K/60p', Mount: 'Canon RF' },
    description:
      "Canon's flagship hybrid mirrorless body — fast autofocus, in-body stabilization, and 4K60 video. Includes battery, charger and strap.",
    stock: 4,
  },
  {
    id: 'lens-rf-2870',
    name: 'Canon RF 28-70mm f/2L USM',
    category: 'Lenses',
    price: 9200,
    condition: 'New',
    image: placeholderImg('Lenses', 1), // swap for image('lens-rf-2870.jpg') once you add the real photo to public/IMAGE/
    specs: { Mount: 'Canon RF', Aperture: 'f/2 constant', Focus: 'USM' },
    description:
      'A constant f/2 zoom that behaves like three prime lenses in one. Exceptional for portraits, events, and low-light work.',
    stock: 3,
  },
  {
    id: 'cam-a7iv',
    name: 'Sony A7 IV Mirrorless Body',
    category: 'Cameras',
    price: 13800,
    condition: 'New',
    image: placeholderImg('Cameras', 2), // swap for image('cam-a7iv.jpg') once you add the real photo to public/IMAGE/
    specs: { Sensor: '33MP Full-Frame', Video: '4K/60p', Mount: 'Sony E' },
    description:
      'A true hybrid stills/video powerhouse with reliable eye-AF, 10-bit video, and a bright vari-angle screen.',
    stock: 5,
  },
  {
    id: 'lens-50-1-8',
    name: '50mm f/1.8 Prime Lens',
    category: 'Lenses',
    price: 1350,
    condition: 'New',
    image: placeholderImg('Lenses', 3), // swap for image('lens-50-1-8.jpg') once you add the real photo to public/IMAGE/
    specs: { Mount: 'EF / RF / E', Aperture: 'f/1.8', Weight: '160g' },
    description:
      'The classic affordable "nifty fifty" — creamy background blur and pin-sharp portraits for beginners and pros alike.',
    stock: 12,
  },
  {
    id: 'drone-mavic3',
    name: 'DJI Mavic 3 Pro Drone',
    category: 'Drones',
    price: 22500,
    condition: 'New',
    image: placeholderImg('Drones', 4), // swap for image('drone-mavic3.jpg') once you add the real photo to public/IMAGE/
    specs: { Camera: 'Triple-lens Hasselblad', 'Flight time': '43 min', Range: '15km' },
    description:
      'Professional aerial cinematography drone with a triple-camera system and industry-leading flight time.',
    stock: 2,
  },
  {
    id: 'drone-mini4',
    name: 'DJI Mini 4 Pro Drone',
    category: 'Drones',
    price: 8600,
    condition: 'New',
    image: placeholderImg('Drones', 5), // swap for image('drone-mini4.jpg') once you add the real photo to public/IMAGE/
    specs: { Weight: 'Under 249g', Camera: '4K/60fps HDR', Range: '20km' },
    description:
      'Lightweight enough to skip drone registration in most regions, without compromising on 4K HDR footage.',
    stock: 6,
  },
  {
    id: 'gimbal-rs3',
    name: 'DJI RS 3 Mini Gimbal',
    category: 'Gimbals',
    price: 3400,
    condition: 'New',
    image: placeholderImg('Gimbals', 6), // swap for image('gimbal-rs3.jpg') once you add the real photo to public/IMAGE/
    specs: { Payload: '2kg', Weight: '795g', Battery: '10 hrs' },
    description:
      'Compact 3-axis stabilizer built for mirrorless cameras — buttery smooth handheld footage in a travel-friendly frame.',
    stock: 7,
  },
  {
    id: 'gimbal-smooth5',
    name: 'Zhiyun Smooth 5S Phone Gimbal',
    category: 'Gimbals',
    price: 1450,
    condition: 'New',
    image: placeholderImg('Gimbals', 7), // swap for image('gimbal-smooth5.jpg') once you add the real photo to public/IMAGE/
    specs: { For: 'Smartphones', Battery: '12 hrs', Modes: 'PF / Vertigo' },
    description:
      'Turn any smartphone into a cinema camera with pro tracking modes and a built-in fill light.',
    stock: 10,
  },
  {
    id: 'tripod-carbon',
    name: 'Carbon Fibre Travel Tripod',
    category: 'Tripods',
    price: 1650,
    condition: 'New',
    image: placeholderImg('Tripods', 8), // swap for image('tripod-carbon.jpg') once you add the real photo to public/IMAGE/
    specs: { Material: 'Carbon fibre', Load: '10kg', Height: '160cm' },
    description:
      'Feather-light yet rock solid — folds down to fit in a daypack without sacrificing max working height.',
    stock: 9,
  },
  {
    id: 'tripod-video',
    name: 'Fluid Head Video Tripod',
    category: 'Tripods',
    price: 2100,
    condition: 'New',
    image: placeholderImg('Tripods', 9), // swap for image('tripod-video.jpg') once you add the real photo to public/IMAGE/
    specs: { Head: 'Fluid drag', Load: '6kg', Height: '175cm' },
    description:
      'Smooth pan-and-tilt drag for cinematic camera moves — ideal for interviews and event coverage.',
    stock: 5,
  },
  {
    id: 'sd-256',
    name: 'ProGrade 256GB CFexpress Card',
    category: 'SD Cards',
    price: 980,
    condition: 'New',
    image: placeholderImg('SD Cards', 10), // swap for image('sd-256.jpg') once you add the real photo to public/IMAGE/
    specs: { Capacity: '256GB', Read: '1700MB/s', Type: 'CFexpress B' },
    description:
      'Built to keep up with 8K RAW and high-fps burst shooting without buffer slow-downs.',
    stock: 20,
  },
  {
    id: 'sd-128',
    name: 'SanDisk Extreme Pro 128GB SD',
    category: 'SD Cards',
    price: 420,
    condition: 'New',
    image: placeholderImg('SD Cards', 11), // swap for image('sd-128.jpg') once you add the real photo to public/IMAGE/
    specs: { Capacity: '128GB', Read: '200MB/s', Type: 'UHS-I V30' },
    description:
      'A dependable everyday card for 4K video and high-resolution stills, backed by a lifetime warranty.',
    stock: 30,
  },
  {
    id: 'mic-rode-wireless',
    name: 'RØDE Wireless GO II',
    category: 'Microphones',
    price: 2450,
    condition: 'New',
    image: placeholderImg('Microphones', 12), // swap for image('mic-rode-wireless.jpg') once you add the real photo to public/IMAGE/
    specs: { Range: '200m', Channels: 'Dual', Battery: '7 hrs' },
    description:
      'The go-to compact wireless mic system for run-and-gun interviews, vlogs, and events.',
    stock: 8,
  },
  {
    id: 'mic-shotgun',
    name: 'Rode VideoMic Pro+ Shotgun Mic',
    category: 'Microphones',
    price: 1750,
    condition: 'New',
    image: placeholderImg('Microphones', 13), // swap for image('mic-shotgun.jpg') once you add the real photo to public/IMAGE/
    specs: { Type: 'Shotgun', Mount: 'Cold shoe', Battery: 'Rechargeable' },
    description:
      'On-camera shotgun mic with tight pickup pattern and automatic power-on when your camera wakes.',
    stock: 11,
  },
  {
    id: 'cam-r5c',
    name: 'Canon EOS R5 C Cinema Body',
    category: 'Cameras',
    price: 24800,
    condition: 'New',
    image: placeholderImg('Cameras', 14), // swap for image('cam-r5c.jpg') once you add the real photo to public/IMAGE/
    specs: { Sensor: '45MP Full-Frame', Video: '8K RAW', Mount: 'Canon RF' },
    description:
      'Hybrid stills and cinema camera with unrestricted 8K RAW internal recording and active cooling.',
    stock: 2,
  },
  {
    id: 'lens-rf70200',
    name: 'Canon RF 70-200mm f/2.8L',
    category: 'Lenses',
    price: 11200,
    condition: 'New',
    image: placeholderImg('Lenses', 15), // swap for image('lens-rf70200.jpg') once you add the real photo to public/IMAGE/
    specs: { Mount: 'Canon RF', Aperture: 'f/2.8 constant', IS: 'Yes' },
    description:
      'The essential telephoto zoom for sports, wildlife and portraits with buttery compression.',
    stock: 3,
  },
]

// Currency formatter — Ghana Cedis
export function formatMoney(amount) {
  return '₵' + Number(amount).toLocaleString('en-GH', { maximumFractionDigits: 0 })
}
