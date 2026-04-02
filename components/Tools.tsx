const TOOLS = [
  { name: "read_file", category: "fs", desc: "Read any file in the workspace" },
  { name: "write_file", category: "fs", desc: "Create or overwrite a file" },
  { name: "edit", category: "fs", desc: "Patch a file at a specific location" },
  { name: "find_symbol", category: "index", desc: "Look up functions, classes, structs by name" },
  { name: "shell", category: "exec", desc: "Run any shell command" },
  { name: "list_dir", category: "fs", desc: "List directory contents" },
  { name: "grep", category: "search", desc: "Search file content by pattern" },
  { name: "glob", category: "search", desc: "Find files by pattern" },
  { name: "web_search", category: "net", desc: "Search the web via DDGS" },
  { name: "web_fetch", category: "net", desc: "Fetch a URL and return content" },
  { name: "todos", category: "memory", desc: "Track tasks within a session" },
  { name: "memory", category: "memory", desc: "Persist context across sessions" },
];

const SUBAGENTS = [
  { name: "subagent_codebase_investigator", desc: "Deep-dive codebase analysis" },
  { name: "subagent_code_reviewer", desc: "Automated code review pass" },
];

const CATEGORY_COLORS: Record<string, string> = {
  fs: "text-cyan border-cyan/30 bg-cyan/5",
  index: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  exec: "text-red-400 border-red-400/30 bg-red-400/5",
  search: "text-amber-term border-amber-400/30 bg-amber-400/5",
  net: "text-green-term border-green-400/30 bg-green-400/5",
  memory: "text-blue-400 border-blue-400/30 bg-blue-400/5",
};

export default function Tools() {
  return (
    <section id="tools" className="py-32 px-6 bg-void-2 relative">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #00e5ff 25%, transparent 25%), linear-gradient(-45deg, #00e5ff 25%, transparent 25%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-cyan/40" />
          <span className="font-mono text-xs text-cyan tracking-widest">
            TOOL REGISTRY
          </span>
        </div>
        <h2 className="font-display font-black text-5xl text-text-primary mb-4 max-w-xl leading-tight">
          Built-in tools,{" "}
          <span style={{ color: "#00e5ff" }}>custom discovery.</span>
        </h2>
        <p className="text-text-secondary mb-16 max-w-lg">
          Drop a Python file in <code className="font-mono text-cyan text-sm">.ai-agent/tools/*.py</code> and
          VORTEX auto-registers it. Or connect any MCP server.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="panel rounded-lg p-4 panel-hover flex items-start gap-3"
            >
              <span
                className={`font-mono text-xs border px-2 py-0.5 rounded-full mt-0.5 whitespace-nowrap ${CATEGORY_COLORS[tool.category]}`}
              >
                {tool.category}
              </span>
              <div>
                <div className="font-mono text-sm text-text-primary">{tool.name}</div>
                <div className="font-body text-xs text-text-muted mt-0.5">{tool.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Subagents */}
        <div className="border-t border-border pt-10">
          <div className="font-mono text-xs text-text-muted mb-5">
            // subagent tools
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {SUBAGENTS.map((sa) => (
              <div key={sa.name} className="panel rounded-lg p-4 panel-hover border-l-2 border-l-purple-400/50">
                <div className="font-mono text-sm text-purple-400">{sa.name}</div>
                <div className="font-body text-xs text-text-muted mt-1">{sa.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
