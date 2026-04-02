"use client";
import { useState, useEffect, useRef } from "react";

const LINES = [
  { type: "prompt", text: "python3 main.py" },
  { type: "system", text: "▶ VORTEX v1.0 — local coding agent" },
  { type: "system", text: "✓ Scanning workspace..." },
  { type: "system", text: "✓ Building symbol index (47 symbols)" },
  { type: "system", text: "✓ Loading tools: read_file, write_file, edit, shell, grep..." },
  { type: "blank", text: "" },
  { type: "agent", text: "╰─ you › write a REST API in Python with FastAPI" },
  { type: "blank", text: "" },
  { type: "thinking", text: "● thinking..." },
  { type: "tool", text: "  ┌ shell" },
  { type: "tool", text: "  │ pip install fastapi uvicorn" },
  { type: "tool", text: "  └ ✓ done" },
  { type: "tool", text: "  ┌ write_file" },
  { type: "tool", text: "  │ main.py (42 lines)" },
  { type: "tool", text: "  └ ✓ written" },
  { type: "blank", text: "" },
  { type: "output", text: "✓ FastAPI app created. Run with: uvicorn main:app --reload" },
];

const COLOR_MAP: Record<string, string> = {
  prompt: "text-green-term",
  system: "text-text-secondary",
  agent: "text-cyan",
  thinking: "text-amber-term animate-pulse",
  tool: "text-text-muted",
  output: "text-green-term",
  blank: "",
};

export default function TerminalDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const delays = [0, 300, 600, 900, 1100, 1300, 1600, 1700, 2000, 2400, 2700, 2900, 3100, 3300, 3500, 3700, 4200];

    delays.forEach((delay, i) => {
      timerRef.current = setTimeout(() => {
        setVisibleCount(i + 1);
      }, delay);
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="panel rounded-lg overflow-hidden border-glow w-full max-w-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-void-2">
        <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
        <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
        <span className="ml-4 font-mono text-xs text-text-muted">
          vortex — bash
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-64 space-y-0.5">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`${COLOR_MAP[line.type] || ""}`}>
            {line.type === "prompt" && (
              <span>
                <span className="text-text-muted">$ </span>
                {line.text}
              </span>
            )}
            {line.type !== "prompt" && line.text}
          </div>
        ))}
        {visibleCount < LINES.length && (
          <span className="inline-block w-2 h-4 bg-cyan animate-cursor-blink ml-0.5 align-middle" />
        )}
        {visibleCount >= LINES.length && (
          <div className="text-cyan">
            <span className="text-text-muted">╰─ </span>
            you ›{" "}
            <span className="inline-block w-2 h-4 bg-cyan animate-cursor-blink align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
