import React from 'react'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pt-2 pb-10">
      <div className="border-t border-zinc-200/70 pt-6 text-sm text-zinc-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Mugotech</div>
        <div className="flex items-center gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookie</a>
        </div>
      </div>
    </footer>
  )
}
