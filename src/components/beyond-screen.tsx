import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Film,
  FlaskConical,
  Github,
  Heart,
  Linkedin,
  MapPin,
  Waves,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type PersonalNote = {
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
  className: string;
};

const personalNotes: PersonalNote[] = [
  {
    eyebrow: 'Home and character',
    title: 'Harare roots. Botswana chapter.',
    text:
      'I was born and raised in Harare, Zimbabwe, and I now live in Botswana. I am naturally quiet and shy. Most days you will find me indoors, in front of a computer, patiently working through one of my projects.',
    icon: MapPin,
    className: 'bg-[#d8d2c5] text-[#11130f]',
  },
  {
    eyebrow: 'Reset',
    title: 'Swimming clears my head.',
    text:
      'Swimming became a summer hobby and a way to step away from the screen, refresh my mind and return to difficult problems with better energy. I live quietly and I do not drink or smoke.',
    icon: Waves,
    className: 'bg-[#8ddcff] text-[#0e1822]',
  },
  {
    eyebrow: 'The first dream',
    title: 'Science and the hospital came first.',
    text:
      'Before software, my dream was to become a laboratory technician or radiographer. I wanted a career that brought physics, technical instruments and hospital work together. That curiosity about how things work never left me.',
    icon: FlaskConical,
    className: 'bg-[#f0c55e] text-[#18110a]',
  },
  {
    eyebrow: 'Storytelling',
    title: 'I also trained in filmmaking.',
    text:
      'I studied filmmaking, although I did not complete the final project. The film 3 Idiots was one of the stories that motivated me during that period and strengthened my interest in learning, purpose and choosing an honest path.',
    icon: Film,
    className: 'bg-[#f5d8bd] text-[#2d1915]',
  },
  {
    eyebrow: 'Ideas and books',
    title: 'Philosophy keeps me questioning.',
    text:
      'Outside technology, I return to Plato, Socrates and Aristotle. I have read works including The Republic and Apology. I also enjoy Chimamanda Ngozi Adichie’s talks and Dan Brown’s novels—especially The Da Vinci Code.',
    icon: BookOpen,
    className: 'bg-[#e7e2d7] text-[#11130f]',
  },
  {
    eyebrow: 'Faith and enquiry',
    title: 'Christian faith, with room for hard questions.',
    text:
      'I am a Christian and believe in Jesus Christ. My faith does not stop me from asking difficult philosophical and cosmological questions. I regularly listen to Dr Victor Tuwani Phume’s Cosmological Argument discussions.',
    icon: Heart,
    className: 'bg-[#c7ff5b] text-[#10140c]',
  },
];

function BeyondScreen() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Beyond the Screen | Evans Mudziviri';
    window.scrollTo({ top: 0, behavior: 'auto' });

    return () => {
      document.title = 'Evans Mudziviri | Software Engineer';
    };
  }, []);

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-70px' },
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-[#f4f2ea] selection:bg-[#c7ff5b] selection:text-[#11140d]">
      <div className="fixed inset-0 -z-20 bg-[#0b0c0e]" />
      <div className="portfolio-grid fixed inset-0 -z-10 opacity-40" />
      <div className="portfolio-glow fixed -right-48 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0c0e]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Return to Evans Mudziviri portfolio">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold transition group-hover:border-[#c7ff5b]/60 group-hover:text-[#c7ff5b]">
              EM
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium tracking-wide text-white/90">Evans Mudziviri</span>
              <span className="block text-[11px] text-white/40">Beyond the screen</span>
            </span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.05] sm:px-5"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </div>
      </header>

      <main>
        <section className="relative mx-auto flex min-h-[82svh] max-w-[1400px] items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">Beyond the screen</div>
            <h1 className="mt-6 max-w-5xl text-balance text-[clamp(3.4rem,9vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              A quiet life,
              <span className="block text-[#8ddcff]">full of questions.</span>
            </h1>
            <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <p className="max-w-xl text-lg leading-8 text-white/58 sm:text-xl">
                Technology is the work I do, but it is not the whole of who I am. This page holds the experiences, beliefs and
                interests that shaped the person writing the code.
              </p>
              <div className="flex flex-wrap gap-3 text-sm lg:justify-self-end">
                {['Harare roots', 'Living in Botswana', 'English · Shona · Setswana', 'Always learning'].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-white/58">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="border-t border-white/10 bg-[#0b0c0e]">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">The fuller story</div>
                <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  The things I carry into my work.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-white/55 lg:justify-self-end">
                Most of my time is spent building, reading or thinking. These moments explain where some of my patience,
                curiosity and attention to people come from.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
              {personalNotes.map((note, index) => {
                const Icon = note.icon;

                return (
                  <motion.article
                    key={note.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.05 }}
                    className={`group relative overflow-hidden rounded-[2rem] p-7 sm:p-9 ${note.className}`}
                  >
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-current opacity-10 transition duration-700 group-hover:scale-125" />
                    <Icon className="relative h-7 w-7 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                    <div className="relative mt-10 text-xs font-semibold uppercase tracking-[0.2em] opacity-50">{note.eyebrow}</div>
                    <h3 className="relative mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">{note.title}</h3>
                    <p className="relative mt-5 max-w-xl text-base leading-8 opacity-65">{note.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 bg-[#c7ff5b] text-[#10140c]">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-20">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">Back to the work</div>
              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                Now see what I’m building.
              </h2>
            </div>
            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#10140c] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5"
            >
              View portfolio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0c0e]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <div className="text-sm font-medium">Evans Mudziviri</div>
            <div className="mt-1 text-sm text-white/40">Software engineer · Zimbabwean in Botswana</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mudzivirievans"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/evans-mudziviri-b9b45a161"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="text-sm text-white/35">© {new Date().getFullYear()} Evans Mudziviri</div>
        </div>
      </footer>
    </div>
  );
}

export default BeyondScreen;
