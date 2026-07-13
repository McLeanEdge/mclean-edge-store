/* ============================================================
   Store catalog — McLean Edge Studios
   Official inventory. Community (peer-to-peer) listings are
   stored separately in localStorage — see src/lib/store.js
   ============================================================ */
import heroCamera from '../assets/hero-camera.jpg'

// Builds a quick placeholder thumbnail (SVG data URI) in brand colors
// so every product has an image even if a real photo isn't provided.
export function placeholderImg(label, seed) {
  const hues = ['#f7941d', '#d9540b', '#ffc857', '#c9660a']
  const c1 = hues[seed % hues.length]
  const c2 = hues[(seed + 2) % hues.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
    <defs>
      <radialGradient id="g" cx="30%" cy="20%" r="80%">
        <stop offset="0%" stop-color="${c1}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#0e0b08" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="600" height="450" fill="#141010"/>
    <rect width="600" height="450" fill="url(#g)"/>
    <circle cx="500" cy="80" r="120" fill="${c2}" opacity="0.12"/>
    <text x="40" y="400" font-family="Arial, sans-serif" font-size="30" fill="#f5f0e8" opacity="0.85" font-weight="700">${label}</text>
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
    image: placeholderImg('lens-rf-2870', 1), // swap for image('lens-rf-2870.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('cam-a7iv', 2), // swap for image('cam-a7iv.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('lens-50-1-8', 3), // swap for image('lens-50-1-8.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('drone-mavic3', 4), // swap for image('drone-mavic3.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('drone-mini4', 5), // swap for image('drone-mini4.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('gimbal-rs3', 6), // swap for image('gimbal-rs3.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('gimbal-smooth5', 7), // swap for image('gimbal-smooth5.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('tripod-carbon', 8), // swap for image('tripod-carbon.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('tripod-video', 9), // swap for image('tripod-video.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('sd-256', 10), // swap for image('sd-256.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('sd-128', 11), // swap for image('sd-128.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('mic-rode-wireless', 12), // swap for image('mic-rode-wireless.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('mic-shotgun', 13), // swap for image('mic-shotgun.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('cam-r5c', 14), // swap for image('cam-r5c.jpg') once you add the real photo to public/IMAGE/
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
    image: placeholderImg('lens-rf70200', 15), // swap for image('lens-rf70200.jpg') once you add the real photo to public/IMAGE/
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
