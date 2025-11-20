function Testimonials() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100 text-xs">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">What clients say</h2>
          <p className="text-blue-100/80 mt-2 max-w-2xl mx-auto">Real results from real businesses. More coming soon.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-blue-100/90">“Boost AI helped us automate repetitive tasks and cut response times by 60%.”</p>
              <div className="mt-4 text-sm text-blue-300/80">— Company Name</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
