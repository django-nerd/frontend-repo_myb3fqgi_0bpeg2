import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
      const offset = 120
      let current = 'home'
      sections.forEach((sec) => {
        const top = sec.offsetTop - offset
        if (window.scrollY >= top) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_0_30px_rgba(121,48,209,0.15)]' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" onClick={handleNavClick('home')} className="font-semibold tracking-tight text-slate-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7930d1] to-[#38bdf8]">Ade Nova</span>
            <span className="ml-2 text-slate-300/80">Portfolio</span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className="relative text-slate-300 hover:text-slate-100 transition-colors"
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8] transition-opacity duration-300 ${
                      active === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#projects"
            onClick={handleNavClick('projects')}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-[#7930d1] to-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(121,48,209,0.45)] transition-shadow"
          >
            View Work
          </a>
        </div>
      </nav>
    </header>
  )
}
