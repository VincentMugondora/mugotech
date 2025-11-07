import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 pt-4 md:pt-6">
      <div className="flex items-center justify-between h-12 text-zinc-300">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-emerald-600">D</span>
          <span className="hidden sm:inline">digicraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-emerald-400" href="#">Home</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#work">Cases</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden md:inline-flex">Get Started</a>
          <button className="md:hidden rounded-lg p-2 hover:bg-white/5" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <nav className="px-1 py-3 flex flex-col gap-3 text-sm">
            <a className="py-1" href="#services" onClick={() => setOpen(false)}>Services</a>
            <a className="py-1" href="#work" onClick={() => setOpen(false)}>Cases</a>
            <a className="py-1" href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="btn-primary mt-1" href="#contact" onClick={() => setOpen(false)}>Get Started</a>
          </nav>
        </div>
      )}
    </div>
  )
}
