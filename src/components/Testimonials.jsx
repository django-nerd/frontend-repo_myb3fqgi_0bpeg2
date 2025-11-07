const testimonials = [
  {
    quote:
      'Ade brings a rare blend of aesthetic sensitivity and engineering rigor. Every handoff feels premium and thought-through.',
    name: 'Dika Pratama',
    role: 'Product Lead at NovaLabs',
  },
  {
    quote:
      'Our performance scores jumped while the UI got cleaner and more delightful. Exceptional attention to detail.',
    name: 'Maya Santoso',
    role: 'Founder at Lumo Studio',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">What Clients Say</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="relative">
                <p className="text-slate-200 leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-slate-400">
                  <span className="text-slate-100">{t.name}</span>
                  <span className="mx-2">•</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7930d1] to-[#38bdf8]">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
