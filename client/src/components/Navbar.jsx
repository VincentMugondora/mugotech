import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative mx-auto max-w-full px-5 md:px-10 py-4 md:py-5 mb-5 bg-[#111111] shadow-[0_30px_80px_0_rgba(0,0,0,0.65)]">
      <div className="flex items-center justify-between text-zinc-300">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-emerald-600">D</span>
          <span className="hidden sm:inline">digicraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-emerald-400 relative after:block after:h-0.5 after:bg-emerald-400 after:rounded-full after:w-10 after:mx-auto after:mt-1" href="#">Home</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#work">Cases</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden md:inline-flex rounded-full">Get Started</a>
          <button className="md:hidden rounded-lg p-2 hover:bg-white/5" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-white/10">
          <nav className="px-5 py-4 flex flex-col gap-3 text-sm">
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
