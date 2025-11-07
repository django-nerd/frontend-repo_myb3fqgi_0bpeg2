export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">Let’s build something great together.</h2>
        <form
          className="mt-10 grid gap-4 text-left"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks for reaching out! I will get back to you soon.')
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-white/20 transition"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-white/20 transition"
            />
          </div>
          <textarea
            rows={5}
            required
            placeholder="Your message"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50 focus:border-white/20 transition"
          />
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8] blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8]" />
            <span className="relative">Send Message</span>
          </button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a aria-label="GitHub" href="https://github.com" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
          <a aria-label="LinkedIn" href="https://linkedin.com" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
          <a aria-label="Email" href="mailto:hello@example.com" className="text-slate-300 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </section>
  )
}
