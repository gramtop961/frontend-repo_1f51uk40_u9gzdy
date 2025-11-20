import { Briefcase } from 'lucide-react'

const cases = [
  {
    title: 'Restaurant AI ordering assistant',
    desc: 'A conversational agent that takes orders, recommends dishes, and handles special requests.'
  },
  {
    title: 'Cleaning company support bot',
    desc: 'Automated customer support that books appointments and answers service questions.'
  },
  {
    title: 'E‑commerce recommendation AI',
    desc: 'Personalized product suggestions that increase conversion and AOV.'
  },
  {
    title: 'Appointment booking AI',
    desc: 'Smart scheduler integrated with calendars to reduce no‑shows and back‑and‑forth.'
  }
]

function Portfolio() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100 text-xs">
            <Briefcase className="w-4 h-4" /> Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Case studies</h2>
          <p className="text-blue-100/80 mt-2 max-w-2xl mx-auto">A few examples of what we can build together.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map(({ title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:translate-y-[-2px] transition-transform">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-md shadow-blue-500/30" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="text-blue-100/80 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
