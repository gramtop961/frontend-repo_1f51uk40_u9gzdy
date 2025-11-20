function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-500" />
          <span className="text-white/90 font-medium">Boost AI</span>
        </div>
        <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Boost AI. All rights reserved.</p>
        <div className="text-blue-200/70 text-sm">hello@boostai.agency</div>
      </div>
    </footer>
  )
}

export default Footer
