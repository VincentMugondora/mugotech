import { useState } from 'react'

function Nav() {
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
          <a href="#contact" className="btn-primary">Get a free proposal</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6 md:p-8 bg-zinc-950 text-zinc-50 border-zinc-800">
          <div className="flex items-center justify-between mb-6">
            <div className="badge bg-emerald-500/15 text-emerald-400">Digital Marketing</div>
            <div className="text-xs text-zinc-400">Since 2019</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Elevate Your Business Through Online Marketing
          </h1>
          <p className="mt-4 text-zinc-300">
            Performance-driven SEO, paid ads, and web experiences that turn visitors into loyal customers.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="btn-primary" href="#contact">Get a Free Proposal</a>
            <a className="btn-ghost bg-white/5 text-zinc-50 hover:bg-white/10" href="#work">View Case Studies</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="card aspect-4/3 object-cover w-full" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" alt="marketing 1" />
          <img className="card aspect-4/3 object-cover w-full" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="marketing 2" />
          <img className="card aspect-4/3 object-cover w-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" alt="marketing 3" />
          <img className="card aspect-4/3 object-cover w-full" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="marketing 4" />
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { title: 'SEO & Content', desc: 'Technical SEO, content strategy and on-page optimization.' },
    { title: 'Paid Media', desc: 'Google, Meta and LinkedIn ads optimized for ROAS.' },
    { title: 'Web Design', desc: 'Modern, fast websites that convert.' },
    { title: 'Analytics', desc: 'GA4, dashboards and experimentation.' },
  ]
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <a className="text-sm text-emerald-700 hover:underline" href="#contact">Get a quote</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((s, i) => (
          <div key={i} className="card p-5">
            <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center font-bold">{i+1}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-flex text-sm text-emerald-700 hover:underline">Learn more</a>
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseStudies() {
  const items = [
    { title: 'Ecommerce scale up', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&auto=format&fit=crop&w=1200' },
    { title: 'B2B lead engine', img: 'https://images.unsplash.com/photo-1529336953121-c6d1848c56e7?q=80&auto=format&fit=crop&w=1200' },
    { title: 'Fintech growth', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&auto=format&fit=crop&w=1200' },
  ]
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((c, i) => (
          <article key={i} className="card overflow-hidden">
            <img src={c.img} alt="" className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">Problem → Solution → Result framework with measurable KPIs.</p>
              <a className="mt-3 inline-flex text-sm text-emerald-700 hover:underline" href="#">Read case</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MapStats() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="card p-6 bg-linear-to-br from-emerald-600/10 to-white relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold">We work with clients around the world</h3>
            <p className="mt-2 text-sm text-zinc-600">Remote-first collaboration across timezones with transparent reporting.</p>
            <a href="#contact" className="mt-4 inline-flex btn-primary">Book a call</a>
          </div>
          <dl className="grid grid-cols-3 gap-4 md:col-span-2">
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Clients</dt>
              <dd className="text-2xl font-extrabold">120+</dd>
            </div>
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Avg. ROI</dt>
              <dd className="text-2xl font-extrabold">4.3x</dd>
            </div>
            <div className="card p-4 text-center">
              <dt className="text-sm text-zinc-600">Countries</dt>
              <dd className="text-2xl font-extrabold">18</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const people = [
    { name: 'Alex', role: 'Strategy', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&auto=format&fit=crop&w=400' },
    { name: 'Priya', role: 'Performance', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&auto=format&fit=crop&w=400' },
    { name: 'Lucas', role: 'Design', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&auto=format&fit=crop&w=400' },
    { name: 'Maya', role: 'Analytics', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&auto=format&fit=crop&w=400' },
  ]
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {people.map((p, i) => (
          <div key={i} className="card overflow-hidden text-center">
            <img className="w-full h-48 object-cover" src={p.img} alt="" />
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-zinc-600">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    { q: 'They doubled our qualified pipeline in 90 days.', a: 'VP Marketing, SaaS' },
    { q: 'Best agency experience we\'ve had — transparent and effective.', a: 'Founder, DTC' },
  ]
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        {quotes.map((t, i) => (
          <figure key={i} className="dark-card p-6">
            <blockquote className="text-lg font-medium">“{t.q}”</blockquote>
            <figcaption className="mt-4 text-sm text-zinc-400">{t.a}</figcaption>
          </figure>
        ))}
        <div className="card p-6 flex items-center justify-center text-center">
          <div>
            <div className="text-4xl font-extrabold">4.9/5</div>
            <div className="text-sm text-zinc-600">Average client rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const data = [
    { q: 'How quickly can we start?', a: 'Typically within 1–2 weeks after discovery and scope alignment.' },
    { q: 'What industries do you specialize in?', a: 'We work across SaaS, E‑commerce, Fintech and B2B services.' },
    { q: 'What does pricing look like?', a: 'Flexible retainers and project-based pricing depending on scope.' },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently asked questions</h2>
      <ul className="space-y-3">
        {data.map((f, i) => (
          <li key={i} className="card overflow-hidden">
            <button className="w-full text-left p-5 font-medium flex items-center justify-between" onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <span className="ml-4 text-zinc-500">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-sm text-zinc-600">{f.a}</div>}
          </li>
        ))}
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
      <div className="dark-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Ready to grow? Let\'s talk.</h3>
          <p className="text-zinc-400 mt-1">Get a free proposal with opportunities and quick wins.</p>
        </div>
        <a className="btn-primary" href="mailto:hello@mugotech.com">hello@mugotech.com</a>
      </div>
    </section>
  )
}

function Sidebar() {
  return (
    <aside className="hidden xl:block sticky top-20 h-fit space-y-4">
      <div className="card p-5">
        <div className="text-xs text-zinc-500">Average response</div>
        <div className="text-3xl font-extrabold"><span className="text-emerald-700">2</span> hrs</div>
        <p className="mt-2 text-sm text-zinc-600">Chat with our team and get a proposal fast.</p>
        <a href="#contact" className="mt-4 btn-primary w-full">Start a conversation</a>
      </div>
      <div className="dark-card p-5">
        <div className="text-sm">“Clarity, speed and results. Highly recommend.”</div>
        <div className="mt-3 text-xs text-zinc-400">COO, Retail</div>
      </div>
      <div className="card overflow-hidden">
        <img className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&auto=format&fit=crop&w=1200" alt="sidebar" />
        <div className="p-4">
          <div className="text-sm font-medium">Design + Dev + Marketing</div>
          <div className="text-xs text-zinc-600 mt-1">One integrated team.</div>
        </div>
      </div>
    </aside>
  )
}

function Footer() {
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

export default function App() {
  return (
    <div>
      <Nav />
      <main className="mx-auto max-w-7xl px-2 md:px-4">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
          <div>
            <Hero />
            <Services />
            <CaseStudies />
            <MapStats />
            <Team />
            <Testimonials />
            <FAQ />
            <CTA />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
