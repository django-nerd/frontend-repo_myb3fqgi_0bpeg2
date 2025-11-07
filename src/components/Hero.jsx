import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleScrollParallax = () => {
      const y = window.scrollY
      if (canvasRef.current) {
        canvasRef.current.style.transform = `translateY(${y * 0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScrollParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollParallax)
  }, [])

  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-black">
      <div ref={canvasRef} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient overlay to add mood, pointer-events-none so Spline remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(121,48,209,0.25)_0%,transparent_60%),radial-gradient(50%_50%_at_20%_70%,rgba(56,189,248,0.2)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center text-slate-100">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Hi, I’m Ade Nova Wiguna —
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7930d1] to-[#38bdf8]">Frontend Developer.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          I design and build sleek, high-performance web interfaces.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8]" />
            <span className="relative">View My Work</span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
