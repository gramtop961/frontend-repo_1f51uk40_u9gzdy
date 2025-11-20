import { ShieldCheck, Rocket, BadgeCheck } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Secure',
    desc: 'Enterprise-grade standards with a focus on reliability, privacy, and safety.'
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Iterative sprints take you from idea to deployed solution in days, not months.'
  },
  {
    icon: BadgeCheck,
    title: 'Proven Results',
    desc: 'We focus on measurable outcomes: cost reduction, higher conversion, and happier customers.'
  }
]

function WhyChoose() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Boost AI</h2>
            <p className="text-blue-100/80 mt-3">We partner with you to design AI that actually moves the needle—clear goals, simple UX, and reliable performance.</p>
            <a href="/contact" className="inline-flex mt-6 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition">Get a Proposal</a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <Icon className="w-8 h-8 text-blue-400" />
                <h3 className="mt-3 text-white font-semibold">{title}</h3>
                <p className="text-blue-100/80 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
