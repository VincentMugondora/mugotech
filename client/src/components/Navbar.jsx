import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-backdrop-filter:bg-white/60 bg-white/70 border-b border-zinc-200/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2 font-extrabold text-lg">
            <span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-emerald-600 text-white">M</span>
            Mugotech
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a className="hover:text-zinc-900" href="#services">Services</a>
            <a className="hover:text-zinc-900" href="#work">Work</a>
            <a className="hover:text-zinc-900" href="#about">About</a>
            <a className="hover:text-zinc-900" href="#blog">Blog</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden md:inline-flex">Get a free proposal</a>
            <button className="md:hidden rounded-lg p-2 hover:bg-zinc-100" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200/70">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm">
            <a className="py-1" href="#services" onClick={() => setOpen(false)}>Services</a>
            <a className="py-1" href="#work" onClick={() => setOpen(false)}>Work</a>
            <a className="py-1" href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="py-1" href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a className="btn-primary mt-1" href="#contact" onClick={() => setOpen(false)}>Get a free proposal</a>
          </nav>
        </div>
      )}
    </header>
  )
}
