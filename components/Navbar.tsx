"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/generator", label: "Generator" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav
      style={{
        background: "rgba(8,8,15,0.8)",
        borderBottom: "1px solid #1e1e35",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #7c3aed, #3b82f6)" }}
          >
            CT
          </div>
          <span className="font-bold text-white text-lg">CreatorToolkit</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/pricing"
            className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
          >
            See Pricing
          </Link>
          <Link
            href="/generator"
            className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg"
          >
            Try for Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0f0f1a", borderTop: "1px solid #1e1e35" }} className="md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-1 ${
                  pathname === l.href ? "text-purple-400" : "text-gray-400"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/generator"
              onClick={() => setOpen(false)}
              className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            >
              Try for Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
