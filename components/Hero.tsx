import TerminalDemo from "./TerminalDemo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, #00e5ff 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 font-mono text-xs text-text-muted opacity-40 hidden lg:block">
        <div>// local coding agent</div>
        <div>// version 1.0.0</div>
        <div>// MIT license</div>
      </div>
      <div className="absolute bottom-20 right-8 font-mono text-xs text-text-muted opacity-40 text-right hidden lg:block">
        <div>tools: 12</div>
        <div>languages: 8</div>
        <div>mcp: enabled</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan/30 bg-cyan/5 px-3 py-1.5 rounded mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-term animate-pulse"></span>
            OPEN SOURCE · LOCAL · PRIVATE
          </div>

          {/* Headline */}
          <h1 className="font-display font-black leading-none mb-6">
            <span className="block text-6xl lg:text-7xl xl:text-8xl tracking-tight text-text-primary">
              CODE
            </span>
            <span
              className="block text-6xl lg:text-7xl xl:text-8xl tracking-tight glow-cyan"
              style={{ color: "#00e5ff" }}
            >
              FASTER.
            </span>
            <span className="block text-6xl lg:text-7xl xl:text-8xl tracking-tight text-text-primary">
              LOCALLY.
            </span>
          </h1>

          <p className="text-text-secondary font-body text-lg leading-relaxed mb-10 max-w-md">
            VORTEX is a terminal coding agent that runs on your machine. Stream
            model output live, call local tools, manage sessions — all from your
            terminal.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#install"
              className="group relative font-mono text-sm text-void bg-cyan px-6 py-3 rounded overflow-hidden transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
            >
              <span className="relative z-10">$ pipx install vortex-agent-cli</span>
            </a>
            <a
              href="#features"
              className="font-mono text-sm text-cyan border border-cyan/30 px-6 py-3 rounded hover:bg-cyan/10 hover:border-cyan/60 transition-all duration-200"
            >
              Explore features →
            </a>
          </div>

          {/* Quick install note */}
          <p className="mt-6 font-mono text-xs text-text-muted">
            Python 3.10+ · OpenAI-compatible · MIT license
          </p>
        </div>

        {/* Right: terminal */}
        <div className="flex justify-center lg:justify-end">
          <TerminalDemo />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-text-muted">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
