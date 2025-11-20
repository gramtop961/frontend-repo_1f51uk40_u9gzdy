import { Bot, Workflow, ShoppingCart, BarChart3, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    desc: 'Conversational assistants tailored to your brand that handle support, sales, and FAQs 24/7.'
  },
  {
    icon: Workflow,
    title: 'AI Automations',
    desc: 'Automate repetitive workflows to save time and reduce errors across your organization.'
  },
  {
    icon: Sparkles,
    title: 'Workflow Optimization',
    desc: 'Design efficient processes boosted by AI to maximize throughput and ROI.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce AI Tools',
    desc: 'Personalization, recommendations, and smart upsells that increase average order value.'
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Insights',
    desc: 'Turn raw data into actionable insights with dashboards and predictive analytics.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-100 text-xs">
            <Sparkles className="w-4 h-4" /> Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">Everything you need to scale with AI</h2>
          <p className="text-blue-100/80 mt-2 max-w-2xl mx-auto">Simple, effective solutions designed around your business goals.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/70 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl group-hover:bg-blue-600/20 transition" />
              <Icon className="w-8 h-8 text-blue-400" />
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
