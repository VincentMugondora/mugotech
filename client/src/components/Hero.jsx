import React from 'react'

export default function Hero() {
  return (
    <section className="w-full px-0 py-8 md:py-12">
      <div className="relative overflow-hidden rounded-none border-0 bg-zinc-950 text-zinc-50">
        {/* in-card nav */}
        <div className="px-4 md:px-8 pt-4 md:pt-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-emerald-600">D</span>
              <span className="hidden sm:inline">digicraft</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <a className="text-emerald-400" href="#">Home</a>
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#services">Services</a>
              <a className="hover:text-white" href="#work">Cases</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#contact" className="btn-primary hidden md:inline-flex">Get Started</a>
              <button className="md:hidden rounded-lg p-2 hover:bg-white/5" aria-label="Menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>

        {/* decorative bg */}
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(80%_60%_at_0%_0%,rgba(16,185,129,.18),transparent_60%),radial-gradient(60%_50%_at_100%_0%,rgba(16,185,129,.10),transparent_65%)]" />

        {/* content */}
        <div className="relative px-4 md:px-8 pb-6 md:pb-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* text */}
            <div className="py-4 md:py-8">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Elevate Your Business Through Online Marketing
              </h1>
              <p className="mt-4 text-zinc-300 max-w-xl">
                Unlock the full potential of your business with Elevate Your Business through Online Marketing. In this transformative journey, we guide you through the dynamic landscape of digital strategies.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a className="btn-primary" href="#contact">Get Started</a>
                <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 hover:bg-white/10 text-zinc-50" href="#">
                  <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white/10"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
                  Watch Demo
                </a>
              </div>
            </div>

            {/* mosaic */}
            <div className="relative grid grid-cols-2 gap-4">
              {/* doodle near mosaic */}
              <div className="absolute -top-6 left-1 flex items-center gap-2 text-xs text-zinc-300">
                <svg width="80" height="36" viewBox="0 0 80 36" fill="none" stroke="currentColor" className="opacity-70"><path d="M2 28 C26 6, 54 6, 78 24" strokeWidth="1.5"/></svg>
                <span className="italic">Let’s start your journey here!</span>
              </div>
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" alt="mosaic 1" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="mosaic 2" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" alt="mosaic 3" />
              <img className="rounded-2xl border border-zinc-800 aspect-4/3 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="mosaic 4" />
            </div>
          </div>
        </div>
      </div>

      {/* logos row */}
      <div className="px-1 md:px-2">
        <div className="mx-auto max-w-5xl flex items-center justify-center gap-10 md:gap-16 py-6 text-zinc-500">
          <span className="opacity-70">informa</span>
          <span className="opacity-70">Microsoft</span>
          <span className="opacity-70">logitech</span>
        </div>
      </div>
    </section>
  )
}
