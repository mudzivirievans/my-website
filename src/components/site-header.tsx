import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0d12]/80 px-3 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4">
        <Link
          to="/"
          aria-label="Evans Mudziviri home"
          className="group flex min-h-11 items-center gap-3 rounded-xl px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white text-sm font-black tracking-tight text-black transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            EM
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-none text-white">Evans Mudziviri</span>
            <span className="mt-1 block text-[11px] leading-none text-white/45">Software developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/about" && location.pathname === "/about";
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`rounded-xl px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  active ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:evans@vanssoftwarelab.com?subject=Project%20enquiry"
            className="hidden min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:flex"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#0b0d12]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex min-h-12 items-center justify-between rounded-xl px-4 text-base text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-white/35" aria-hidden="true" />
              </Link>
            ))}
            <a
              href="mailto:evans@vanssoftwarelab.com?subject=Project%20enquiry"
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-black"
              onClick={() => setMenuOpen(false)}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
