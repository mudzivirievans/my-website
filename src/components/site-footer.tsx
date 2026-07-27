import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="text-sm font-semibold text-white">
            Evans Mudziviri
          </Link>
          <p className="mt-1 text-xs text-white/40">
            Designing and building useful digital products from Southern Africa.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="mailto:evans@vanssoftwarelab.com"
            aria-label="Email Evans"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/55 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mudzivirievans"
            target="_blank"
            rel="noreferrer"
            aria-label="Evans on GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/55 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/evans-mudziviri-b9b45a161"
            target="_blank"
            rel="noreferrer"
            aria-label="Evans on LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/55 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="#top"
            className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-xl px-3 text-xs font-medium text-white/45 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-7 max-w-7xl border-t border-white/[0.06] pt-5 text-xs text-white/30">
        © {new Date().getFullYear()} Evans Mudziviri / VansSoftwareLab.
      </div>
    </footer>
  );
}
