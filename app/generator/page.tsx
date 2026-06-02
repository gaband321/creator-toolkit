"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Results = {
  hooks: string[];
  titles: string[];
  thumbnailTexts: string[];
  demo?: boolean;
};

type Tab = "hooks" | "titles" | "thumbnailTexts";

const platforms = ["YouTube", "TikTok", "Shorts"] as const;
type Platform = (typeof platforms)[number];

const niches = [
  "Gaming (General)",
  "FPS / Shooter Games",
  "RPG & Adventure Games",
  "Battle Royale",
  "Mobile Games",
  "Strategy & Simulation",
  "Indie Games",
  "Game Reviews & Opinions",
  "Speedrunning",
  "Game Lore & Story",
  "Retro & Classic Games",
  "Game Tier Lists & Rankings",
  "Other",
];

const tabConfig: { key: Tab; label: string; count: number; emoji: string }[] = [
  { key: "hooks", label: "Viral Hooks", count: 20, emoji: "⚡" },
  { key: "titles", label: "Video Titles", count: 20, emoji: "🎯" },
  { key: "thumbnailTexts", label: "Thumbnail Text", count: 20, emoji: "🖼️" },
];

function CopyButton({ text, small = false }: { text: string; small?: boolean }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handle}
      className={`flex items-center gap-1 rounded-lg font-medium transition-all whitespace-nowrap ${
        small ? "px-2.5 py-1.5 text-xs" : "px-3 py-1.5 text-xs"
      } ${
        copied
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-gray-800 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 border border-gray-700 hover:border-purple-500/30"
      }`}
    >
      {copied ? (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-2.5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-14 rounded-xl shimmer-bg"
          style={{ opacity: 1 - i * 0.08 }}
        />
      ))}
    </div>
  );
}

export default function GeneratorPage() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("Gaming (General)");
  const [platform, setPlatform] = useState<Platform>("YouTube");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("hooks");

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), niche, platform }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setResults(data);
      setActiveTab("hooks");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const activeItems = results ? results[activeTab] : [];

  const copyAll = () => {
    if (!activeItems.length) return;
    navigator.clipboard.writeText(activeItems.map((item, i) => `${i + 1}. ${item}`).join("\n"));
  };

  return (
    <div style={{ background: "#08080f" }} className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div
          className="relative overflow-hidden dot-grid"
          style={{ borderBottom: "1px solid #1e1e35" }}
        >
          <div className="orb w-64 h-64 -top-16 -right-16 opacity-20" style={{ background: "#7c3aed" }} />
          <div className="relative max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
                ⚡ Viral Hook Generator
              </div>
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              Viral Hook{" "}
              <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Enter your gaming video topic, pick your platform, and get 20 hooks, 20 titles, and 20 thumbnail texts — instantly. No account needed.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* ── INPUT PANEL ── */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-6 sticky top-24"
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
              >
                <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-xs"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
                  >
                    1
                  </span>
                  Configure Your Video
                </h2>

                {/* Topic */}
                <div className="mb-5">
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Video Topic <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g. Best loadout in Warzone Season 4, or How I ranked up to Diamond in Valorant"
                    rows={3}
                    className="input-dark w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                  <p className="text-gray-600 text-xs mt-1.5">
                    Be specific — better input = better hooks
                  </p>
                </div>

                {/* Niche */}
                <div className="mb-5">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Niche</label>
                  <select
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                    style={{ appearance: "none" }}
                  >
                    {niches.map((n) => (
                      <option key={n} value={n} style={{ background: "#0f0f1a" }}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Platform */}
                <div className="mb-7">
                  <label className="block text-gray-300 text-sm font-medium mb-2">Platform</label>
                  <div className="grid grid-cols-3 gap-2">
                    {platforms.map((p) => {
                      const icons = {
                        YouTube: "▶",
                        TikTok: "♪",
                        Shorts: "⚡",
                      };
                      return (
                        <button
                          key={p}
                          onClick={() => setPlatform(p)}
                          className={`py-3 rounded-xl text-sm font-medium transition-all border ${
                            platform === p
                              ? "text-purple-300 border-purple-500/50"
                              : "text-gray-500 border-gray-700/50 hover:border-gray-600 hover:text-gray-300"
                          }`}
                          style={
                            platform === p
                              ? { background: "rgba(124,58,237,0.15)" }
                              : { background: "rgba(255,255,255,0.03)" }
                          }
                        >
                          <div className="text-lg mb-0.5">{icons[p]}</div>
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Generate button */}
                <button
                  onClick={handleGenerate}
                  disabled={loading || !topic.trim()}
                  className={`btn-primary w-full text-white font-bold py-4 rounded-xl text-base relative z-10 flex items-center justify-center gap-3 ${
                    loading || !topic.trim() ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                      Generating 60 ideas...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      Generate 60 Ideas
                    </>
                  )}
                </button>

                {!results && !loading && (
                  <p className="text-center text-gray-600 text-xs mt-3">
                    No account needed · Works instantly
                  </p>
                )}
              </div>
            </div>

            {/* ── RESULTS PANEL ── */}
            <div className="lg:col-span-3">
              {/* Empty state */}
              {!results && !loading && !error && (
                <div
                  className="rounded-2xl p-16 flex flex-col items-center justify-center text-center h-full min-h-96"
                  style={{
                    background: "#0f0f1a",
                    border: "1px dashed #1e1e35",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                    style={{
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    ⚡
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Your ideas will appear here</h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                    Fill in your topic, choose your platform, and click Generate to get 20 hooks, 20 titles, and 20 thumbnail texts.
                  </p>
                  <div className="flex gap-3 mt-8">
                    {["20 Hooks", "20 Titles", "20 Thumbnails"].map((l) => (
                      <div
                        key={l}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-purple-400"
                        style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading state */}
              {loading && (
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-6 w-32 rounded-lg shimmer-bg" />
                    <div className="h-8 w-24 rounded-lg shimmer-bg" />
                  </div>
                  <div className="flex gap-2 mb-5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-9 w-28 rounded-lg shimmer-bg" />
                    ))}
                  </div>
                  <LoadingSkeleton />
                  <div className="mt-4 text-center">
                    <p className="text-purple-400 text-sm font-medium animate-pulse">
                      Claude is crafting your viral hooks...
                    </p>
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{ background: "#0f0f1a", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  <div className="text-4xl mb-3">⚠️</div>
                  <p className="text-red-400 font-semibold mb-1">Generation failed</p>
                  <p className="text-gray-500 text-sm mb-4">{error}</p>
                  <button
                    onClick={handleGenerate}
                    className="btn-primary text-white text-sm font-semibold px-6 py-2.5 rounded-lg relative z-10"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {/* Results */}
              {results && !loading && (
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
                >
                  {/* Demo mode banner */}
                  {results.demo && (
                    <div
                      className="px-6 py-3 flex items-center gap-2 text-xs"
                      style={{
                        background: "rgba(245,158,11,0.08)",
                        borderBottom: "1px solid rgba(245,158,11,0.2)",
                      }}
                    >
                      <svg className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                      <span className="text-amber-400 font-medium">Demo mode</span>
                      <span className="text-amber-600">— results are template-based. Add an API key for AI-generated ideas.</span>
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ borderBottom: "1px solid #1e1e35" }}
                  >
                    <div>
                      <p className="text-white font-bold">Results Ready</p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {platform} · {niche}
                      </p>
                    </div>
                    <button
                      onClick={handleGenerate}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg border border-gray-700 hover:border-gray-600"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      Regenerate
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="px-6 py-4 flex flex-wrap gap-2" style={{ borderBottom: "1px solid #1e1e35" }}>
                    {tabConfig.map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setActiveTab(t.key)}
                        className={`tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${activeTab === t.key ? "active" : "text-gray-500"}`}
                      >
                        <span>{t.emoji}</span>
                        <span>{t.label}</span>
                        <span
                          className="text-xs px-1.5 py-0.5 rounded-md"
                          style={{
                            background: activeTab === t.key ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.06)",
                            color: activeTab === t.key ? "#a78bfa" : "#6b7280",
                          }}
                        >
                          {t.count}
                        </span>
                      </button>
                    ))}
                    <div className="ml-auto">
                      <button
                        onClick={copyAll}
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-purple-400 transition-colors px-3 py-2 rounded-lg border border-gray-700 hover:border-purple-500/30"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        Copy All
                      </button>
                    </div>
                  </div>

                  {/* Tab description */}
                  <div className="px-6 pt-4 pb-2">
                    <p className="text-gray-600 text-xs">
                      {activeTab === "hooks" && "Opening lines — use these as the first thing your viewer sees or hears"}
                      {activeTab === "titles" && "Video titles optimized for clicks and discoverability"}
                      {activeTab === "thumbnailTexts" && "Short text overlays for your thumbnail — max impact, minimum words"}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="px-6 pb-6 space-y-2">
                    {activeItems.map((item, i) => (
                      <div
                        key={i}
                        className="result-item flex items-start gap-3 px-4 py-3.5 rounded-xl group"
                      >
                        <span
                          className="text-xs font-mono font-bold mt-0.5 flex-shrink-0 w-5 text-center"
                          style={{ color: "#6b7280" }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-gray-200 text-sm leading-relaxed flex-1">{item}</span>
                        <div className="copy-btn flex-shrink-0">
                          <CopyButton text={item} small />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ borderTop: "1px solid #1e1e35" }}
                  >
                    <p className="text-gray-600 text-xs">
                      Topic: <span className="text-gray-500">{topic}</span>
                    </p>
                    <p className="text-gray-600 text-xs">
                      {activeItems.length} results
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tips section */}
          {!results && !loading && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { emoji: "💡", tip: "Be specific — not just the game, but the angle", sub: "\"How I peaked Diamond in Valorant with only Killjoy\" beats \"how to rank up in Valorant\"" },
                { emoji: "🎯", tip: "Match it to your actual video concept", sub: "The closer your topic matches what you're recording, the more usable the hooks will be" },
                { emoji: "✨", tip: "Treat results as starting points", sub: "Pick a hook you like, tweak it to match your exact story and voice, then record" },
              ].map((t) => (
                <div
                  key={t.tip}
                  className="rounded-xl p-4 flex gap-3"
                  style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.1)" }}
                >
                  <span className="text-2xl flex-shrink-0">{t.emoji}</span>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">{t.tip}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
