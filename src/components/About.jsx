function About() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Boost AI</h2>
          <p className="text-blue-100/80 mt-3">We build powerful AI systems tailored to each client, with a focus on simplicity and ROI. Our mission is to make AI accessible, simple, and profitable for businesses of every size.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Mission</h3>
            <p className="text-blue-100/80 text-sm mt-1">Build powerful AI systems tailored to clients.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Vision</h3>
            <p className="text-blue-100/80 text-sm mt-1">Make AI accessible, simple, and profitable.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Our Story</h3>
            <p className="text-blue-100/80 text-sm mt-1">Born from a passion for practical AI, we combine design, engineering, and strategy to deliver real results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
