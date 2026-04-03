const STEPS = [
  {
    num: "01",
    title: "Install VORTEX",
    code: `# Recommended: pipx for isolated CLI apps
pipx install vortex-agent-cli

# Or install globally
pip install vortex-agent-cli

# Or from source
python3 -m pip install . --no-build-isolation`,
  },
  {
    num: "02",
    title: "Set your API key",
    code: `# .env
API_KEY=your_api_key_here
BASE_URL=https://api.openai.com/v1

# Or configure model profiles in .ai-agent/config.toml`,
  },
  {
    num: "03",
    title: "Run VORTEX",
    code: `vortex

# Interactive mode (default)
vortex "write a hello world program in c"

# With custom working directory
vortex --cwd /path/to/project`,
  },
  {
    num: "04",
    title: "Or use Docker",
    code: `docker run --rm -it \\
  --env-file .env \\
  -v "$PWD":/workspace \\
  -v vortex-data:/data \\
  vortex`,
  },
];

const COMMANDS = [
  { cmd: "/help", desc: "List all commands" },
  { cmd: "/cwd <path>", desc: "Switch working directory" },
  { cmd: "/model <name>", desc: "Switch model / provider" },
  { cmd: "/models refresh", desc: "Probe catalog & update status" },
  { cmd: "/approval <mode>", desc: "Set approval policy" },
  { cmd: "/checkpoint", desc: "Save named checkpoint" },
  { cmd: "/resume <id>", desc: "Resume a saved session" },
  { cmd: "/tools", desc: "List registered tools" },
  { cmd: "/mcp", desc: "List connected MCP servers" },
  { cmd: "/stats", desc: "Usage stats for current session" },
];

export default function Install() {
  return (
    <section id="install" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-cyan tracking-widest">
            QUICK START
          </span>
        </div>
        <h2 className="font-display font-black text-5xl text-text-primary mb-16 max-w-xl leading-tight">
          Up and running{" "}
          <span style={{ color: "#00e5ff" }}>in four steps.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Steps */}
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: "#00e5ff" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-text-primary mb-3">
                    {step.title}
                  </div>
                  <div className="panel rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-void-2">
                      <span className="w-2 h-2 rounded-full bg-cyan/40" />
                      <span className="font-mono text-xs text-text-muted">bash</span>
                    </div>
                    <pre className="px-4 py-4 font-mono text-sm text-green-term overflow-x-auto leading-relaxed">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commands reference */}
          <div>
            <div className="font-display font-bold text-xl text-text-primary mb-6">
              Interactive Commands
            </div>
            <div className="panel rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-void-2">
                <span className="w-2 h-2 rounded-full bg-cyan/40" />
                <span className="font-mono text-xs text-text-muted">
                  vortex · commands
                </span>
              </div>
              <div className="divide-y divide-border">
                {COMMANDS.map((c) => (
                  <div
                    key={c.cmd}
                    className="flex items-center justify-between px-4 py-3 hover:bg-cyan/5 transition-colors duration-150"
                  >
                    <code className="font-mono text-sm text-cyan">{c.cmd}</code>
                    <span className="font-body text-xs text-text-muted ml-4">
                      {c.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approval modes box */}
            <div className="panel rounded-lg p-6 mt-6">
              <div className="font-display font-semibold text-text-primary mb-4">
                Approval Modes
              </div>
              <div className="space-y-2">
                {[
                  ["on-request", "Pause before every mutating action"],
                  ["on-failure", "Pause only when actions fail"],
                  ["auto", "Approve most actions automatically"],
                  ["auto-edit", "Auto-approve file edits specifically"],
                  ["never", "Never pause, always proceed"],
                  ["yolo", "Full auto — no guardrails"],
                ].map(([mode, desc]) => (
                  <div key={mode} className="flex items-center gap-3">
                    <code className="font-mono text-xs text-amber-term w-28 flex-shrink-0">
                      {mode}
                    </code>
                    <span className="font-body text-xs text-text-muted">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
