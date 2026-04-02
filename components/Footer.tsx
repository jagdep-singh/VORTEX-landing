export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section className="py-32 px-6 bg-void-2 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div
            className="font-display font-black text-[20vw] text-cyan leading-none select-none"
          >
            VORTEX
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-green-term border border-green-term/30 bg-green-term/5 px-3 py-1.5 rounded mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-term animate-pulse" />
            READY TO RUN
          </div>

          <h2 className="font-display font-black text-6xl text-text-primary mb-6 leading-none">
            Start building.{" "}
            <span className="glow-cyan" style={{ color: "#00e5ff" }}>
              Locally.
            </span>
          </h2>

          <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
            Your code. Your machine. Your model. VORTEX stays out of the cloud
            and in your terminal where it belongs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jagdep-singh/VORTEX"
              className="font-mono text-sm text-void bg-cyan px-8 py-3 rounded hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all duration-200"
            >
              View on GitHub →
            </a>
            <a
              href="#install"
              className="font-mono text-sm text-cyan border border-cyan/30 px-8 py-3 rounded hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-200"
            >
              Installation guide
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-cyan text-xs font-mono">▶</span>
            <span className="font-display font-bold tracking-widest text-text-primary">
              VORTEX
            </span>
            <span className="font-mono text-xs text-text-muted ml-4">
              MIT License
            </span>
          </div>

          <div className="font-mono text-xs text-text-muted">
            Built for devs who live in the terminal.
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-text-muted">
            <a href="#" className="hover:text-cyan transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Issues
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
