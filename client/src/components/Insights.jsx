import React from 'react'

export default function Insights() {
  const posts = [
    { title: 'SEO in 2026: What Changed', img: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&auto=format&fit=crop&w=1200' },
    { title: 'Creative that Converts', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&auto=format&fit=crop&w=1200' },
    { title: 'GA4: Measuring What Matters', img: 'https://images.unsplash.com/photo-1460925895917-4f9f1a2f?ixid=Mnwy&auto=format&fit=crop&w=1200' },
  ]
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Insights & Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((p, i) => (
          <article key={i} className="card overflow-hidden">
            <img src={p.img} alt="" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <a className="mt-2 inline-flex text-sm text-emerald-700 hover:underline" href="#">Read article</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
