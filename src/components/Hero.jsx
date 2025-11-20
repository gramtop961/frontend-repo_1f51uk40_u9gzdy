import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 w-full">
        <div className="lg:col-span-7 py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-100 text-xs backdrop-blur">
            Premium AI Automation Agency
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Custom AI Solutions for Businesses
          </h1>
          <p className="mt-4 text-lg text-blue-100/90 max-w-2xl">
            Boost productivity, automate tasks, and transform your business with intelligent AI systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition">
              Book a Free Consultation
            </a>
            <a href="#services" className="px-6 py-3 rounded-xl bg-white/10 text-blue-100 hover:bg-white/20 border border-white/10 transition">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.12 1.6 5.92L0 24l6.22-1.63A11.94 11.94 0 0012 24C18.63 24 24 18.63 24 12a11.94 11.94 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.38l-.36-.21-3.69.97.99-3.6-.23-.37A9.93 9.93 0 012 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm5.37-7.61c-.29-.15-1.71-.85-1.98-.94-.26-.1-.45-.15-.64.14-.19.28-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.28-.48.09-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.28-.99.97-.99 2.36s1.02 2.74 1.16 2.93c.14.19 2.01 3.07 4.87 4.31.68.29 1.22.46 1.64.6.69.22 1.31.19 1.8.12.55-.08 1.71-.7 1.95-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.21-.55-.36z" />
        </svg>
      </a>
    </section>
  )
}

export default Hero
