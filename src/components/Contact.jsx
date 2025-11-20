import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submit - can wire to backend later
    setSubmitted(true)
  }

  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-blue-100/80 mt-3">Available worldwide. Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-blue-200/80 text-sm">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-blue-200/80 text-sm">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-blue-200/80 text-sm">Business</label>
              <input name="business" value={form.business} onChange={handleChange} className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company Inc." />
            </div>
            <div className="mt-4">
              <label className="text-blue-200/80 text-sm">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your goals" />
            </div>
            <button type="submit" className="mt-6 w-full px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition">Send Message</button>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="mt-3 w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-green-500 text-white hover:bg-green-400 transition">WhatsApp Us</a>
            {submitted && <p className="text-green-400 mt-3">Thanks! We’ll be in touch shortly.</p>}
          </form>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Let’s build something great</h3>
            <p className="text-blue-100/80 mt-2 text-sm">We design, build, and deploy AI solutions end‑to‑end. From chatbots to complex automations, we make it simple and effective.</p>
            <ul className="mt-4 space-y-2 text-blue-100/80 text-sm">
              <li>• Available worldwide</li>
              <li>• Response within 24 hours</li>
              <li>• Transparent pricing</li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-blue-100/80 text-sm">
              Contact: hello@boostai.agency
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
