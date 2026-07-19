import {
  IconCamera,
  IconAperture,
  IconDrone,
  IconTripod,
  IconSdCard,
  IconMic,
} from '../components/icons.jsx'

export const PRIMARY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Sell With Us', to: '/sell' },
  { label: 'Projects / Apps', to: '/projects' },
]

export const SHOP_CATEGORIES = [
  { label: 'Cameras', to: '/shop?cat=Cameras', icon: IconCamera },
  { label: 'Lenses', to: '/shop?cat=Lenses', icon: IconAperture },
  { label: 'Drones', to: '/shop?cat=Drones', icon: IconDrone },
  { label: 'Tripods', to: '/shop?cat=Tripods', icon: IconTripod },
  { label: 'SD Cards', to: '/shop?cat=SD Cards', icon: IconSdCard },
  { label: 'Microphones', to: '/shop?cat=Microphones', icon: IconMic },
]
