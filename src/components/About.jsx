import { BadgeCheck } from 'lucide-react'

const tech = [
  { name: 'Next.js' },
  { name: 'Vue.js' },
  { name: 'Tailwind CSS' },
  { name: 'Laravel' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(121,48,209,0.15)_0%,transparent_60%)]">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full p-[2px] bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(255,255,255,0.08)]">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_30%_-10%,rgba(255,255,255,0.35)_0%,transparent_40%)]" />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop"
                alt="Ade Nova Wiguna portrait"
                className="h-full w-full object-cover mix-blend-luminosity"
              />
            </div>
          </div>
        </div>

        <div className="text-slate-200">
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a frontend developer passionate about crafting clean, modern interfaces that merge aesthetics with performance.
            With strong experience in frameworks like Next.js, Vue.js, and Laravel, I deliver experiences that feel premium and purposeful.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-white/20 hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(121,48,209,0.15)]"
              >
                <BadgeCheck className="h-4 w-4 text-[#38bdf8]" />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
