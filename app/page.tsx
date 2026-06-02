import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: "⚡",
    title: "20 Hooks Per Generate",
    desc: "Scroll-stopping opening lines built from proven viral formulas — tuned for your exact topic and platform.",
  },
  {
    icon: "🎯",
    title: "20 Video Titles",
    desc: "Click-worthy titles that tell viewers exactly what they'll get. Specific beats generic every time.",
  },
  {
    icon: "🖼️",
    title: "20 Thumbnail Texts",
    desc: "2-5 word overlays that make your thumbnail impossible to scroll past. Short, bold, and emotional.",
  },
  {
    icon: "📱",
    title: "Platform-Specific",
    desc: "YouTube, TikTok, and Shorts all have different patterns. The output is tuned for whichever you pick.",
  },
  {
    icon: "🎮",
    title: "Built for Gaming",
    desc: "Hooks and titles that speak the language of gaming audiences — not generic creator advice repackaged.",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    desc: "Copy any individual idea or the full list with one click. Paste directly into your workflow.",
  },
];

const steps = [
  {
    num: "01",
    title: "Describe Your Video",
    desc: "Type what your video is actually about. The more specific, the better the output.",
  },
  {
    num: "02",
    title: "Pick Your Platform",
    desc: "YouTube, TikTok, or Shorts. Each one needs a different hook style — we handle that.",
  },
  {
    num: "03",
    title: "Get 60 Ideas",
    desc: "20 hooks + 20 titles + 20 thumbnail texts. Pick the ones that fit, tweak them, and go.",
  },
];

// Honest example output — these are actual template outputs for this topic
const exampleTopic = "How I ranked up to Diamond in Valorant";
const exampleHooks = [
  "I spent 100 hours on ranking up to Diamond in Valorant and here's what I actually learned",
  "Nobody is talking about this ranking up to Diamond strategy — and it\'s completely broken",
  "Stop doing ranking up to Diamond like this. Seriously.",
  "The ranking up to Diamond mistake I see every new player make (and how to fix it)",
];
const exampleTitles = [
  "How I Ranked Up to Diamond in Valorant: The Honest Guide Nobody Else Is Making",
  "I Tested Every Ranking Method In Valorant — Here's The Only One That Works",
  "Why Ranking Up In Valorant Is Harder Than Everyone Says (And How To Fix It)",
];
const exampleThumbnails = [
  "FINALLY WORKS",
  "THE TRUTH",
  "GAME CHANGER",
  "NEW META",
];

const faqs = [
  {
    q: "Does this work without an account or API key?",
    a: "Yes. The generator has a built-in demo mode that runs instantly in your browser using content formulas — no account, no API key, no setup required. Just type your topic and click generate.",
  },
  {
    q: "What's the difference between demo mode and AI mode?",
    a: "Demo mode uses proven hook/title templates filled with your topic. AI mode uses Claude to write fully custom ideas tuned to your exact niche and context. Both are useful — demo mode is instant and free, AI mode produces more unique results.",
  },
  {
    q: "What platforms are supported?",
    a: "YouTube long-form, TikTok, and YouTube Shorts. Each platform has different hook and title patterns, so the output adapts based on which you pick.",
  },
  {
    q: "Is this really focused on gaming?",
    a: "Yes — the templates, examples, and defaults are all tuned for gaming creators. The tool works for other niches too, but gaming content is the primary focus right now.",
  },
  {
    q: "Do you store any of my input or results?",
    a: "No. Your topic and generated results are never saved to any database. Each session is completely fresh.",
  },
  {
    q: "What's the Pro plan for?",
    a: "Pro unlocks AI-powered generation (using Claude), which writes fully original hooks and titles specific to your topic and niche — not templates. It's worth it once you're publishing consistently and want more unique ideas.",
  },
];

export default function LandingPage() {
  return (
    <div style={{ background: "#08080f" }} className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden dot-grid">
        <div className="orb w-96 h-96 -top-32 -left-32 opacity-25" style={{ background: "#7c3aed" }} />
        <div className="orb w-80 h-80 top-20 -right-20 opacity-15" style={{ background: "#3b82f6" }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-up badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
              Built for Gaming Creators on YouTube, TikTok & Shorts
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up-1 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Never Run Out of{" "}
              <span className="gradient-text">Viral Video</span>{" "}
              Ideas Again
            </h1>

            {/* Subhead */}
            <p className="animate-fade-up-2 text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Type your video topic. Get{" "}
              <strong className="text-white">20 hooks</strong>,{" "}
              <strong className="text-white">20 titles</strong>, and{" "}
              <strong className="text-white">20 thumbnail texts</strong> — instantly.
              No account needed to try it.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/generator"
                className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg relative z-10"
              >
                Try the Free Generator →
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-300 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-700 hover:border-gray-500 hover:text-white transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Mock result preview — gaming examples */}
            <div
              className="animate-fade-up-4 w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{
                background: "#0f0f1a",
                border: "1px solid #1e1e35",
                boxShadow: "0 40px 100px rgba(139,92,246,0.12)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-5 py-3.5"
                style={{ background: "#141428", borderBottom: "1px solid #1e1e35" }}
              >
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-gray-500 text-xs ml-2">
                  CreatorToolkit — Topic: "best loadout in Warzone Season 4"
                </span>
              </div>
              <div className="p-6">
                <div className="flex gap-3 mb-4 text-xs">
                  {["Hooks ×20", "Titles ×20", "Thumbnails ×20"].map((t, i) => (
                    <div
                      key={t}
                      className={`px-3 py-1.5 rounded-lg font-medium tab-btn ${i === 0 ? "active" : "text-gray-500"}`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {[
                    "I tested every loadout in Warzone Season 4 so you don't have to — here's the winner",
                    "Stop running this loadout. Seriously. Here's what actually works right now.",
                    "The best loadout in Warzone Season 4 is completely broken — and most people don't know it",
                    "I copied exactly how pros build their loadout in Warzone Season 4. Big mistake.",
                  ].map((hook, i) => (
                    <div
                      key={i}
                      className="result-item flex items-center justify-between px-4 py-3 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-gray-300 text-sm">{hook}</span>
                      </div>
                    </div>
                  ))}
                  <div className="text-center text-gray-600 text-xs py-2">+ 16 more hooks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            What You Get
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Three outputs.{" "}
            <span className="gradient-text">One topic.</span>{" "}
            Seconds.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Stop spending an hour staring at a blank page. Get 60 ideas, pick the best one, and start recording.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-dark rounded-2xl p-6">
              <div className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how-it-works"
        className="relative overflow-hidden"
        style={{ background: "#0a0a14", borderTop: "1px solid #1e1e35", borderBottom: "1px solid #1e1e35" }}
      >
        <div className="orb w-96 h-96 -bottom-32 -right-32 opacity-15" style={{ background: "#7c3aed" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              From blank page to{" "}
              <span className="gradient-text">60 ideas</span>{" "}
              in 3 steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #2d2d55, transparent)" }}
            />
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.2))",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  <span
                    className="text-4xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/generator"
              className="btn-primary text-white font-bold px-10 py-4 rounded-xl text-lg relative z-10 inline-block"
            >
              Try the Free Generator
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EXAMPLE OUTPUT (replaces fake testimonials) ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Example Output
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Here's what it actually{" "}
            <span className="gradient-text">generates</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Topic entered:{" "}
            <span
              className="font-medium px-2 py-0.5 rounded-md"
              style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa" }}
            >
              "{exampleTopic}"
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Hooks */}
          <div
            className="rounded-2xl p-5"
            style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <p className="text-white font-bold">Viral Hooks</p>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-md font-medium"
                style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa" }}
              >
                ×20
              </span>
            </div>
            <div className="space-y-2.5">
              {exampleHooks.map((hook, i) => (
                <div
                  key={i}
                  className="flex gap-2.5 px-3 py-2.5 rounded-xl"
                  style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.1)" }}
                >
                  <span className="text-purple-400 font-mono text-xs mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed">{hook}</span>
                </div>
              ))}
              <p className="text-center text-gray-600 text-xs pt-1">+ 16 more hooks generated</p>
            </div>
          </div>

          {/* Titles */}
          <div
            className="rounded-2xl p-5"
            style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎯</span>
              <p className="text-white font-bold">Video Titles</p>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-md font-medium"
                style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}
              >
                ×20
              </span>
            </div>
            <div className="space-y-2.5">
              {exampleTitles.map((title, i) => (
                <div
                  key={i}
                  className="flex gap-2.5 px-3 py-2.5 rounded-xl"
                  style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.1)" }}
                >
                  <span className="text-blue-400 font-mono text-xs mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-300 text-xs leading-relaxed">{title}</span>
                </div>
              ))}
              <p className="text-center text-gray-600 text-xs pt-1">+ 17 more titles generated</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div
            className="rounded-2xl p-5"
            style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🖼️</span>
              <p className="text-white font-bold">Thumbnail Text</p>
              <span
                className="ml-auto text-xs px-2 py-0.5 rounded-md font-medium"
                style={{ background: "rgba(16,185,129,0.15)", color: "#34d399" }}
              >
                ×20
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {exampleThumbnails.map((text) => (
                <div
                  key={text}
                  className="rounded-xl py-3 px-2 text-center font-extrabold text-sm tracking-wide"
                  style={{
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.15)",
                    color: "#e5e7eb",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-xs">+ 16 more thumbnail texts generated</p>
            <div
              className="mt-4 rounded-xl p-3 text-xs text-gray-500 leading-relaxed"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1e1e35" }}
            >
              Thumbnail texts are 2-5 word overlays designed to work at thumbnail size — bold, emotional, impossible to ignore.
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/generator"
            className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg relative z-10 inline-block"
          >
            Try the Free Generator →
          </Link>
          <p className="text-gray-600 text-sm mt-3">No account needed · Works instantly</p>
        </div>
      </section>

      {/* ─── PRICING TEASER ─── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0a0a14", borderTop: "1px solid #1e1e35", borderBottom: "1px solid #1e1e35" }}
      >
        <div className="orb w-96 h-96 -top-32 left-1/2 -translate-x-1/2 opacity-20" style={{ background: "#7c3aed" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Free to start.{" "}
            <span className="gradient-text">฿199/month</span>{" "}
            to go unlimited.
          </h2>
          <p className="text-gray-400 text-lg mb-3">
            The free generator works right now — no signup, no API key, no catch.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Pro unlocks AI-powered generation (Claude) for fully custom, non-template results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator" className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg relative z-10">
              Try the Free Generator
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-700 hover:border-gray-500 hover:text-white transition-all"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="card-dark rounded-xl overflow-hidden"
              style={{ cursor: "pointer" }}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer select-none"
                style={{ listStyle: "none" }}
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(59,130,246,0.12) 100%)",
            border: "1px solid rgba(139,92,246,0.25)",
          }}
        >
          <div className="orb w-64 h-64 -top-16 -left-16 opacity-30" style={{ background: "#7c3aed" }} />
          <div className="orb w-48 h-48 -bottom-12 -right-12 opacity-20" style={{ background: "#3b82f6" }} />
          <div className="relative">
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Stop staring at a{" "}
              <span className="gradient-text">blank page.</span>
            </h2>
            <p className="text-gray-300 text-xl mb-4 max-w-xl mx-auto">
              Type your topic. Get 60 video ideas in seconds.
            </p>
            <p className="text-gray-500 text-sm mb-10">No account required. Works right now.</p>
            <Link
              href="/generator"
              className="btn-primary text-white font-bold px-10 py-5 rounded-xl text-xl relative z-10 inline-block"
            >
              Try the Free Generator →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
