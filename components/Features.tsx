const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: "Live Streaming",
    description:
      "Model output and tool execution stream in real-time. Watch VORTEX think, act, and build — no waiting for a final dump.",
    tag: "real-time",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    label: "12 Built-in Tools",
    description:
      "Read, write, edit files. Run shell commands. Search your codebase with grep and glob. Fetch URLs. Manage memory.",
    tag: "tools",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: "Codebase Index",
    description:
      "Lightweight symbol extraction across Python, JS, TS, Go, Rust, C, C++, Java. The agent knows your functions and classes.",
    tag: "intelligence",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    label: "MCP Support",
    description:
      "Connect any MCP server via stdio or HTTP/SSE. Extend VORTEX with external services and custom protocol tools.",
    tag: "extensible",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
    ),
    label: "Sessions & Checkpoints",
    description:
      "Save progress, resume interrupted tasks, create named checkpoints. Multi-step workflows survive interruptions.",
    tag: "persistent",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Approval Policies",
    description:
      "Control risk with configurable approval modes: on-request, on-failure, auto-edit, yolo. You decide the risk level.",
    tag: "safety",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    label: "Multi-Provider Models",
    description:
      "Named profiles for OpenAI, OpenRouter, or any compatible endpoint. Switch models mid-session with /model.",
    tag: "flexible",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Subagents",
    description:
      "Built-in subagent_codebase_investigator and subagent_code_reviewer tools for deeper multi-agent reasoning.",
    tag: "agents",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    label: "Hooks System",
    description:
      "Execute scripts before_agent, after_agent, before_tool, after_tool, on_error. Custom automation at every step.",
    tag: "automation",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    label: "Workspace Snapshot",
    description:
      "Compact project context injected into every prompt. Agent starts with full awareness of your codebase structure.",
    tag: "context",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "Custom Tool Discovery",
    description:
      "Drop Python tools in .ai-agent/tools/ or user config dir. Dynamically loaded and registered at runtime.",
    tag: "extensible",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 16V7a2 2 0 00-2-2H6a2 2 0 00-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 01-.9 1.45H3.62a1 1 0 01-.9-1.45L4 16" />
      </svg>
    ),
    label: "Memory System",
    description:
      "Persistent user memory across sessions. Store preferences, patterns, and insights for consistent behavior.",
    tag: "persistent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-cyan tracking-widest">
            CAPABILITIES
          </span>
        </div>
        <h2 className="font-display font-black text-5xl text-text-primary max-w-xl leading-tight">
          Everything a coding agent needs.{" "}
          <span style={{ color: "#00e5ff" }}>Nothing it doesn't.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="panel panel-hover p-8 group cursor-default"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-9 h-9 rounded border border-border bg-void-2 flex items-center justify-center text-cyan group-hover:border-cyan/40 group-hover:bg-cyan/5 transition-all duration-200">
                {f.icon}
              </div>
              <span className="font-mono text-xs text-text-muted border border-border px-2 py-0.5 rounded-full group-hover:border-cyan/30 group-hover:text-cyan transition-colors duration-200">
                {f.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-text-primary mb-3">
              {f.label}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
