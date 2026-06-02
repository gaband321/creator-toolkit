import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#08080f", borderTop: "1px solid #1e1e35" }} className="mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
              >
                CT
              </div>
              <span className="font-bold text-white">CreatorToolkit</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered tools for content creators who want to go viral, faster.
            </p>
            <div className="flex gap-3 mt-4">
              {["twitter", "youtube", "tiktok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-purple-400 transition-colors"
                  style={{ background: "#1e1e35" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Product</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/generator", label: "Hook Generator" },
                { href: "/pricing", label: "Pricing" },
                { href: "#features", label: "Features" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Resources</p>
            <div className="flex flex-col gap-3">
              {["Blog", "Creator Guide", "Viral Formula", "Platform Tips"].map((label) => (
                <a key={label} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Company</p>
            <div className="flex flex-col gap-3">
              {["About", "Privacy Policy", "Terms of Service", "Contact"].map((label) => (
                <a key={label} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e1e35" }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2024 CreatorToolkit. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Built for creators. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
