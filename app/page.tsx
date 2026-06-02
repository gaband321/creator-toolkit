import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: "⚡",
    title: "20 Hooks in Seconds",
    desc: "Generate scroll-stopping opening lines tailored to your exact topic and platform algorithm.",
  },
  {
    icon: "🎯",
    title: "Click-Worthy Titles",
    desc: "Get 20 video titles engineered for high CTR, using proven formulas from viral creators.",
  },
  {
    icon: "🖼️",
    title: "Thumbnail Text Ideas",
    desc: "Short, punchy text overlays that make viewers stop mid-scroll and click your video.",
  },
  {
    icon: "📱",
    title: "Platform-Optimized",
    desc: "Each output is specifically tuned for YouTube, TikTok, or Shorts — not generic copy.",
  },
  {
    icon: "🧠",
    title: "Niche Intelligence",
    desc: "The AI understands your niche context and generates ideas that resonate with your audience.",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    desc: "Copy any hook, title, or thumbnail text with one click. Ready to use instantly.",
  },
];

const steps = [
  {
    num: "01",
    title: "Enter Your Topic",
    desc: "Type what your video is about. Be as specific or broad as you want — the AI adapts.",
  },
  {
    num: "02",
    title: "Choose Your Platform",
    desc: "Select YouTube, TikTok, or Shorts. Each platform has different viral patterns.",
  },
  {
    num: "03",
    title: "Get 60 Ideas Instantly",
    desc: "20 hooks + 20 titles + 20 thumbnail texts. Pick the best, use it, go viral.",
  },
];

const stats = [
  { value: "50,000+", label: "Active Creators" },
  { value: "2.4M+", label: "Hooks Generated" },
  { value: "4.9/5", label: "Creator Rating" },
  { value: "47%", label: "Avg CTR Increase" },
];

const testimonials = [
  {
    name: "Jayden Krauss",
    role: "Gaming YouTuber · 184K subscribers",
    avatar: "JK",
    quote:
      "I went from 50K to 184K subscribers in 8 months. The hook generator changed how I open every single video. My audience retention went through the roof.",
    stars: 5,
  },
  {
    name: "Mink Siriphong",
    role: "TikTok Creator · 2.3M followers",
    avatar: "MS",
    quote:
      "I used to spend 2 hours just brainstorming hooks. Now I generate 20 in seconds and pick the best one. The platform-specific tuning is insanely good.",
    stars: 5,
  },
  {
    name: "Aom Pakcharoen",
    role: "Shorts Creator · 890K subscribers",
    avatar: "AP",
    quote:
      "The thumbnail text ideas alone are worth the price. My CTR went from 3.2% to 11.4% in one month. This tool pays for itself with one viral video.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "How many hooks can I generate per month?",
    a: "Pro users get unlimited generations. The free plan gives you 5 generations per day to try it out. Each generation produces 20 hooks, 20 titles, and 20 thumbnail texts.",
  },
  {
    q: "What platforms are supported?",
    a: "We support YouTube (long-form), TikTok, and YouTube Shorts. Each platform has its own algorithm patterns, so the AI generates content specifically optimized for each one.",
  },
  {
    q: "Can I use it for any niche?",
    a: "Yes — gaming, finance, fitness, cooking, tech, lifestyle, education, beauty, and more. The AI understands niche-specific language and audience psychology.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, you get 5 free generations per day forever — no credit card required. Upgrade to Pro when you're ready to go unlimited.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 7-day money-back guarantee, no questions asked. If you don't see value in the first week, we'll refund you completely.",
  },
  {
    q: "Will the hooks work for my niche?",
    a: "The AI has been trained on millions of viral videos across all major niches. Input your specific topic and niche, and the output will be tailored exactly to your content.",
  },
];

export default function LandingPage() {
  return (
    <div style={{ background: "#08080f" }} className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden dot-grid">
        {/* Orbs */}
        <div
          className="orb w-96 h-96 -top-32 -left-32 opacity-30"
          style={{ background: "#7c3aed" }}
        />
        <div
          className="orb w-80 h-80 top-20 -right-20 opacity-20"
          style={{ background: "#3b82f6" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="animate-fade-up badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse inline-block" />
              AI-Powered Content Creation for Creators
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
              Generate <strong className="text-white">20 hooks</strong>, <strong className="text-white">20 titles</strong>, and{" "}
              <strong className="text-white">20 thumbnail texts</strong> in seconds.
              AI trained on millions of viral videos — for YouTube, TikTok, and Shorts.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/generator"
                className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg relative z-10"
              >
                Generate Hooks for Free →
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-300 font-semibold px-8 py-4 rounded-xl text-lg border border-gray-700 hover:border-gray-500 hover:text-white transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof line */}
            <div className="animate-fade-up-4 flex items-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {["JK", "MS", "AP", "TN"].map((a) => (
                  <div
                    key={a}
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)", borderColor: "#08080f" }}
                  >
                    {a[0]}
                  </div>
                ))}
              </div>
              <span>
                <strong className="text-white">50,000+</strong> creators generating viral content daily
              </span>
            </div>

            {/* Mock result preview */}
            <div
              className="animate-fade-up-5 mt-16 w-full max-w-3xl rounded-2xl overflow-hidden"
              style={{
                background: "#0f0f1a",
                border: "1px solid #1e1e35",
                boxShadow: "0 40px 100px rgba(139,92,246,0.15)",
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
                <span className="text-gray-500 text-xs ml-2">CreatorToolkit — Viral Hook Generator</span>
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
                    "\"I lost $47,000 doing this — and then made it all back in 90 days\"",
                    "\"The investing mistake every 25-year-old makes (and how to fix it)\"",
                    "\"99% of traders don't know this rule exists — here's why it matters\"",
                    "\"I asked 50 millionaires for their #1 money tip — these were the answers\"",
                  ].map((hook, i) => (
                    <div
                      key={i}
                      className="result-item flex items-center justify-between px-4 py-3 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-gray-300 text-sm">{hook}</span>
                      </div>
                      <div className="copy-btn flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap ml-3">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                        Copy
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

      {/* ─── STATS ─── */}
      <section style={{ background: "#0a0a14", borderTop: "1px solid #1e1e35", borderBottom: "1px solid #1e1e35" }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-extrabold mb-1 gradient-text"
                >
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Everything You Need to{" "}
            <span className="gradient-text">Go Viral</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            One tool. Three outputs. Infinite viral potential.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-dark rounded-2xl p-6">
              <div
                className="feature-icon w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
              >
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
              From Idea to Viral in{" "}
              <span className="gradient-text">3 Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #2d2d55, transparent)" }}
            />
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 relative"
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
              Start Generating for Free
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Creator Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            What Creators Are{" "}
            <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-gray-400 text-lg">Real creators. Real results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="star text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid #1e1e35" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
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
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
            Start Free. Go Pro When{" "}
            <span className="gradient-text">You're Ready</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Pro plan at <strong className="text-white">฿199/month</strong>. Cancel anytime. 7-day money-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator" className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-lg relative z-10">
              Start for Free
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
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="card-dark rounded-xl overflow-hidden group"
              style={{ cursor: "pointer" }}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer select-none"
                style={{ listStyle: "none" }}
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-45"
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
            background: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(59,130,246,0.15) 100%)",
            border: "1px solid rgba(139,92,246,0.3)",
          }}
        >
          <div className="orb w-64 h-64 -top-16 -left-16 opacity-40" style={{ background: "#7c3aed" }} />
          <div className="orb w-48 h-48 -bottom-12 -right-12 opacity-30" style={{ background: "#3b82f6" }} />
          <div className="relative">
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Ready to Create{" "}
              <span className="gradient-text">Viral Content?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
              Join 50,000+ creators who never run out of ideas. Start free — no credit card required.
            </p>
            <Link
              href="/generator"
              className="btn-primary text-white font-bold px-10 py-5 rounded-xl text-xl relative z-10 inline-block animate-pulse-glow"
            >
              Generate Your First 20 Hooks →
            </Link>
            <p className="text-gray-500 text-sm mt-5">Free plan available · No credit card needed</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
