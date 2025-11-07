import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A glossy analytics interface with real-time charts and interactions.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Ecommerce UI Kit',
    desc: 'Modular, accessible components for premium storefronts.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Fast, SEO-friendly portfolio template with 3D hero scene.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">Featured Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_0%,rgba(121,48,209,0.3)_0%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-4">
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-[#7930d1] to-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_28px_rgba(121,48,209,0.45)] transition-shadow"
                  >
                    Live Demo <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
