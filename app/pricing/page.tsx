import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Free",
    price: "฿0",
    period: "forever",
    desc: "Perfect for trying out the tool and getting a feel for what's possible.",
    cta: "Get Started Free",
    href: "/generator",
    popular: false,
    features: [
      { text: "5 generations per day", included: true },
      { text: "All 3 platforms (YouTube, TikTok, Shorts)", included: true },
      { text: "20 hooks per generation", included: true },
      { text: "20 titles per generation", included: true },
      { text: "20 thumbnail texts per generation", included: true },
      { text: "Copy to clipboard", included: true },
      { text: "Unlimited generations", included: false },
      { text: "Priority AI processing", included: false },
      { text: "Bulk export (CSV / TXT)", included: false },
      { text: "Save & organize ideas", included: false },
    ],
  },
  {
    name: "Pro",
    price: "฿199",
    period: "per month",
    desc: "For serious creators who publish consistently and want an endless idea engine.",
    cta: "Start Pro — ฿199/mo",
    href: "/generator",
    popular: true,
    features: [
      { text: "Unlimited generations", included: true },
      { text: "All 3 platforms (YouTube, TikTok, Shorts)", included: true },
      { text: "20 hooks per generation", included: true },
      { text: "20 titles per generation", included: true },
      { text: "20 thumbnail texts per generation", included: true },
      { text: "Copy to clipboard", included: true },
      { text: "Priority AI processing (2x faster)", included: true },
      { text: "Bulk export (CSV / TXT)", included: true },
      { text: "Save & organize ideas", included: true },
      { text: "Early access to new features", included: true },
    ],
  },
  {
    name: "Business",
    price: "฿599",
    period: "per month",
    desc: "For agencies, production houses, and teams managing multiple creator channels.",
    cta: "Start Business",
    href: "/generator",
    popular: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 5 team seats", included: true },
      { text: "Shared workspace & idea library", included: true },
      { text: "Custom brand voice training", included: true },
      { text: "API access", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Custom integrations", included: true },
      { text: "Usage analytics dashboard", included: true },
      { text: "SLA guarantee", included: true },
    ],
  },
];

const comparison = [
  { feature: "Generations per day", free: "5", pro: "Unlimited", business: "Unlimited" },
  { feature: "Hooks per generation", free: "20", pro: "20", business: "20" },
  { feature: "Video titles", free: "20", pro: "20", business: "20" },
  { feature: "Thumbnail texts", free: "20", pro: "20", business: "20" },
  { feature: "Platforms", free: "All 3", pro: "All 3", business: "All 3" },
  { feature: "Priority processing", free: "—", pro: "✓", business: "✓" },
  { feature: "Bulk export", free: "—", pro: "✓", business: "✓" },
  { feature: "Save ideas", free: "—", pro: "✓", business: "✓" },
  { feature: "Team seats", free: "1", pro: "1", business: "5" },
  { feature: "API access", free: "—", pro: "—", business: "✓" },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancel anytime with no penalty. Your Pro access continues until the end of the billing period.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "The Free plan gives you 5 generations/day indefinitely. If you want to test unlimited, we offer a 7-day money-back guarantee on Pro — no questions asked.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex) and PromptPay via Stripe. All payments are secure and encrypted.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes, upgrade or downgrade anytime. When you upgrade, you're charged immediately. When you downgrade, the change takes effect at the next billing cycle.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — annual billing saves you 2 months (pay for 10, get 12). Contact us for an annual invoice.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ background: "#08080f" }} className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden dot-grid">
          <div className="orb w-80 h-80 -top-20 left-1/2 -translate-x-1/2 opacity-25" style={{ background: "#7c3aed" }} />
          <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
            <div className="badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              Simple, Transparent Pricing
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Start Free.{" "}
              <span className="gradient-text">Scale When Ready</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-xl mx-auto mb-6">
              No hidden fees. No confusing tiers. Just unlimited viral ideas for creators who are serious.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              7-day money-back guarantee &nbsp;·&nbsp;
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              Cancel anytime &nbsp;·&nbsp;
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              No credit card to start
            </div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl p-7 flex flex-col"
                style={
                  plan.popular
                    ? {
                        background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(59,130,246,0.08) 100%)",
                        border: "1px solid rgba(139,92,246,0.45)",
                        boxShadow: "0 20px 60px rgba(139,92,246,0.15)",
                      }
                    : {
                        background: "#0f0f1a",
                        border: "1px solid #1e1e35",
                      }
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div
                      className="px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <p className={`font-bold text-lg mb-1 ${plan.popular ? "text-purple-300" : "text-white"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1.5 mb-2">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <Link
                  href={plan.href}
                  className={`text-center py-3.5 rounded-xl font-bold text-sm mb-7 transition-all ${
                    plan.popular
                      ? "btn-primary text-white relative z-10"
                      : "border text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                  }`}
                  style={
                    !plan.popular ? { borderColor: "#2d2d55", background: "transparent" } : {}
                  }
                >
                  {plan.cta}
                </Link>

                <div className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-2.5">
                      {f.included ? (
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: plan.popular ? "#a78bfa" : "#22c55e" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`text-sm ${f.included ? "text-gray-300" : "text-gray-700"}`}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section
          className="relative"
          style={{ background: "#0a0a14", borderTop: "1px solid #1e1e35", borderBottom: "1px solid #1e1e35" }}
        >
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2
              className="text-3xl font-extrabold text-white text-center mb-10"
              style={{ letterSpacing: "-0.02em" }}
            >
              Full Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid #1e1e35" }}>
                    <th className="text-left py-4 pr-6 text-gray-500 font-medium text-sm w-1/2">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className="py-4 px-4 text-center">
                        <span
                          className={`font-bold text-sm ${p.popular ? "text-purple-400" : "text-white"}`}
                        >
                          {p.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderBottom: i < comparison.length - 1 ? "1px solid #1e1e35" : "none",
                      }}
                    >
                      <td className="py-3.5 pr-6 text-gray-400 text-sm">{row.feature}</td>
                      {[row.free, row.pro, row.business].map((val, j) => (
                        <td key={j} className="py-3.5 px-4 text-center text-sm">
                          {val === "✓" ? (
                            <span className="text-green-400">✓</span>
                          ) : val === "—" ? (
                            <span className="text-gray-700">—</span>
                          ) : (
                            <span className={j === 1 ? "text-purple-300 font-semibold" : "text-gray-300"}>
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <div
            className="rounded-2xl p-10"
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(59,130,246,0.06))",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <div className="text-5xl mb-5">🛡️</div>
            <h3 className="text-white font-extrabold text-2xl mb-3">7-Day Money-Back Guarantee</h3>
            <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
              If you don't see real value in your first 7 days as a Pro user, just email us and we'll refund you completely. Zero questions asked. We're that confident in the tool.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          style={{ background: "#0a0a14", borderTop: "1px solid #1e1e35", borderBottom: "1px solid #1e1e35" }}
        >
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2
              className="text-3xl font-extrabold text-white text-center mb-10"
              style={{ letterSpacing: "-0.02em" }}
            >
              Pricing FAQ
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
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
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ready to Never Run Out of{" "}
            <span className="gradient-text">Ideas Again?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join 50,000+ creators. Start free, no credit card needed.
          </p>
          <Link
            href="/generator"
            className="btn-primary text-white font-bold px-10 py-4 rounded-xl text-lg relative z-10 inline-block"
          >
            Start Generating for Free →
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
