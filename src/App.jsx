import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center bg-black/40">
        <p className="text-slate-400">© {new Date().getFullYear()} Ade Nova Wiguna. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
