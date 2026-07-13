import React from 'react'
import { useStore } from '../lib/StoreContext.jsx'

export default function Toast() {
  const { toastMsg } = useStore()
  return (
    <div className={`toast${toastMsg ? ' show' : ''}`}>
      {toastMsg}
    </div>
  )
}
