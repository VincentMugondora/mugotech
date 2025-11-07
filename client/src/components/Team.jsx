import React from 'react'

export default function Team() {
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
