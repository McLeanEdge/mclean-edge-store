import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects.js'
import {
  IconExternal,
  IconMonitor,
  IconSignal,
  IconChartBar,
  IconUsers,
  IconStore,
} from '../components/icons.jsx'

const ICONS = {
  pos: IconMonitor,
  signal: IconSignal,
  chart: IconChartBar,
  users: IconUsers,
  store: IconStore,
}

export default function Projects() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Projects &amp; Apps
          </div>
          <div className="eyebrow">Our Ecosystem</div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)', marginTop: 10 }}>Projects &amp; Apps</h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, marginTop: 14, fontSize: 14.5 }}>
            Beyond camera gear, we build software. Explore the tools, platforms and stores we've
            shipped — each one opens in its own tab.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="project-grid">
            {PROJECTS.map((p) => {
              const Icon = ICONS[p.icon] || IconMonitor
              return (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                >
                  <div className="project-top">
                    <div className="aperture">
                      <i><Icon size={22} strokeWidth={2} /></i>
                    </div>
                    <IconExternal size={16} strokeWidth={2} className="project-ext" />
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-tag">{p.tag}</p>
                  <p className="project-desc">{p.desc}</p>
                  <span className="project-cta">
                    {p.cta} <IconExternal size={13} strokeWidth={2.4} />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
