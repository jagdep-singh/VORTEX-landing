'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DocsPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/api/docs')
      .then(res => res.json())
      .then(data => setContent(data.content))
      .catch(err => console.error('Failed to load docs:', err));
  }, []);

  return (
    <main className="bg-void text-text-primary">
      <Navbar />
      
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan/30 bg-cyan/5 px-3 py-1.5 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-term animate-pulse"></span>
              DOCUMENTATION
            </div>
            <h1 className="font-display font-black text-5xl lg:text-6xl tracking-tight mb-4">
              <span className="text-text-primary">Read the</span>{' '}
              <span className="glow-cyan" style={{ color: '#00e5ff' }}>DOCS.</span>
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-2xl">
              Everything you need to know about VORTEX: installation, usage, configuration, and advanced features.
            </p>
          </div>

          {/* Docs Content */}
          <div className="panel panel-hover rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-border bg-gradient-to-r from-void-2 to-void-3">
              <h2 className="font-display font-bold text-xl tracking-tight">Complete Guide</h2>
            </div>
            
            <div className="p-8 lg:p-12">
              {content ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="font-display font-bold text-4xl tracking-tight text-cyan mb-6 mt-12 first:mt-0 glow-cyan">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="font-display font-bold text-2xl tracking-tight text-text-primary mb-4 mt-10 border-b border-border/50 pb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-display font-semibold text-lg text-cyan mb-3 mt-6">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-text-secondary mb-4 leading-relaxed font-body">
                        {children}
                      </p>
                    ),
                    code: ({ children }) => (
                      <code className="bg-void-2 border border-border/50 px-2 py-1 rounded text-sm font-mono text-green-term">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-void-2 border border-border/50 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm text-text-primary">
                        {children}
                      </pre>
                    ),
                    ul: ({ children }) => (
                      <ul className="space-y-2 mb-6 ml-4">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="space-y-2 mb-6 ml-4 list-decimal list-inside">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-text-secondary font-body flex gap-3">
                        <span className="text-cyan mt-0.5">▪</span>
                        <span>{children}</span>
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-cyan/30 pl-4 italic text-text-muted mb-6 bg-void-2 bg-opacity-50 py-3 px-4 rounded-r">
                        {children}
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-cyan hover:text-cyan/80 underline hover:underline transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full border-collapse">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="border-b border-border">
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th className="px-4 py-3 text-left font-mono text-xs text-cyan uppercase tracking-wider bg-void-2 text-cyan">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="px-4 py-3 text-sm text-text-secondary border-b border-border/30">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              ) : (
                <div className="text-center text-text-muted">
                  <div className="animate-pulse font-mono text-sm">Loading documentation...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}