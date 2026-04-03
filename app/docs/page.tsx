'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function DocsPage() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const loadDocs = async () => {
      try {
        const res = await fetch('/api/docs');
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to load documentation');
        }

        if (!data.content) {
          throw new Error('Documentation content is empty');
        }

        setContent(data.content);
        
        // Extract headings from markdown
        const headingMatches = data.content.match(/^(#{1,3}) (.+)$/gm) || [];
        const extractedHeadings = headingMatches.map((match: string) => {
          const level = match.match(/^#+/)?.[0].length || 1;
          const text = match.replace(/^#+\s/, '');
          const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          return { id, text, level };
        }).filter((h: Heading) => h.level <= 2);
        
        setHeadings(extractedHeadings);
        if (extractedHeadings.length > 0) {
          setActiveSection(extractedHeadings[0].id);
        }
      } catch (err) {
        console.error('Failed to load docs:', err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    loadDocs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => ({
        id: h.id,
        element: document.getElementById(h.id),
      }));

      for (const { id, element } of headingElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

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

      <div className="relative z-10 flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 border-r border-border bg-void-2/30 sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <h3 className="font-display font-bold text-lg text-cyan mb-6">Contents</h3>
            <nav className="space-y-2">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`block py-2 px-3 rounded transition-all duration-200 text-sm ${ 
                    activeSection === heading.id
                      ? 'bg-cyan/20 border-l-2 border-cyan text-cyan font-semibold'
                      : 'text-text-secondary hover:text-cyan hover:bg-cyan/10'
                  }`}
                  style={{ paddingLeft: `${(heading.level - 1) * 12 + 12}px` }}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-h-screen pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan border border-cyan/30 bg-cyan/5 px-3 py-1.5 rounded mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-term animate-pulse"></span>
                DOCUMENTATION
              </div>
              <h1 className="font-display font-black text-6xl lg:text-7xl tracking-tight mb-4">
                <span className="text-text-primary">VORTEX</span>{' '}
                <span className="glow-cyan" style={{ color: '#00e5ff' }}>Docs</span>
              </h1>
              <p className="text-text-secondary font-body text-lg leading-relaxed max-w-3xl">
                Complete guide to VORTEX — a local terminal coding agent built around an OpenAI-compatible chat API, a Rich-based TUI, and a powerful tool system designed to run against your working directory on your machine.
              </p>
            </div>

            {/* Content */}
            {loading ? (
              <div className="text-center text-text-muted py-20">
                <div className="animate-pulse font-mono text-sm">Loading documentation...</div>
              </div>
            ) : error ? (
              <div className="text-center text-red-300 font-mono text-sm py-20">
                Failed to load docs: {error}
              </div>
            ) : (
              <article className="prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => {
                      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      return (
                        <h1 id={id} className="font-display font-black text-4xl lg:text-5xl tracking-tight text-cyan mb-6 mt-16 first:mt-0 glow-cyan pt-4 scroll-mt-20">
                          {children}
                        </h1>
                      );
                    },
                    h2: ({ children }) => {
                      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                      return (
                        <h2 id={id} className="font-display font-bold text-3xl tracking-tight text-text-primary mb-6 mt-12 border-b border-border/30 pb-4 pt-4 scroll-mt-20">
                          {children}
                        </h2>
                      );
                    },
                    h3: ({ children }) => (
                      <h3 className="font-display font-bold text-xl text-cyan mb-4 mt-8 pt-2">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="font-display font-semibold text-lg text-text-primary mb-3 mt-6">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-text-secondary mb-6 leading-relaxed font-body text-base">
                        {children}
                      </p>
                    ),
                    code: ({ children, className }) => {
                      const isInline = !className?.includes('language-');
                      return isInline ? (
                        <code className="bg-void-2 border border-border/50 px-2 py-1 rounded text-sm font-mono text-green-term">
                          {children}
                        </code>
                      ) : (
                        <code className="block bg-void-2 border border-border/50 px-4 py-3 rounded-lg overflow-x-auto mb-6 font-mono text-sm text-text-primary leading-relaxed">
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }) => (
                      <div className="mb-6 rounded-lg overflow-hidden border border-border/50">
                        <div className="flex items-center gap-2 px-4 py-2 bg-void-2 border-b border-border/50">
                          <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500/40"></span>
                          <span className="text-text-muted font-mono text-xs ml-auto">code</span>
                        </div>
                        <pre className="bg-void-2 p-6 overflow-x-auto font-mono text-sm text-text-primary leading-relaxed">
                          {children}
                        </pre>
                      </div>
                    ),
                    ul: ({ children }) => (
                      <ul className="space-y-3 mb-6 ml-6">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="space-y-3 mb-6 ml-6 list-decimal">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-text-secondary font-body text-base leading-relaxed marker:text-cyan">
                        {children}
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-cyan/40 pl-6 italic text-text-muted mb-6 bg-void-2/50 py-4 px-6 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-cyan hover:text-cyan/80 underline font-semibold transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto mb-6 rounded-lg border border-border/50">
                        <table className="min-w-full">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-void-2 border-b border-border/50">
                        {children}
                      </thead>
                    ),
                    th: ({ children }) => (
                      <th className="px-6 py-3 text-left font-mono text-xs text-cyan uppercase tracking-wider font-bold">
                        {children}
                      </th>
                    ),
                    tbody: ({ children }) => (
                      <tbody className="divide-y divide-border/30">
                        {children}
                      </tbody>
                    ),
                    tr: ({ children }) => (
                      <tr className="hover:bg-void-2/50 transition-colors duration-150">
                        {children}
                      </tr>
                    ),
                    td: ({ children }) => (
                      <td className="px-6 py-4 text-sm text-text-secondary">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>
            )}

            {/* Footer spacer */}
            <div className="mt-20 pt-12 border-t border-border/20">
              <p className="text-text-muted text-sm font-mono">
                Documentation for VORTEX — {' '}
                <a 
                  href="https://github.com/jagdep-singh/VORTEX" 
                  className="text-cyan hover:text-cyan/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}