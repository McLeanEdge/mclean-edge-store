import React from 'react'
import { waLink } from '../lib/storage.js'
import { IconWhatsApp } from './icons.jsx'

export default function WhatsAppFloat() {
  const link = waLink("Hi McLean Edge Studios, I'd like to know more about your cameras.")
  return (
    <a className="wa-float" href={link} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <IconWhatsApp size={26} />
    </a>
  )
}
