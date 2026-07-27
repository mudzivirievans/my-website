import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type GreetingSegment = {
  text: string;
  className: string;
};

type Greeting = {
  language: string;
  shortLanguage: string;
  segments: GreetingSegment[];
};

const greetings: Greeting[] = [
  {
    language: 'English',
    shortLanguage: 'EN',
    segments: [
      { text: 'Hi, I’m ', className: 'text-[#f4f2ea]' },
      {
        text: 'Evans ',
        className: 'text-[#c7ff5b] drop-shadow-[0_0_28px_rgba(199,255,91,0.18)]',
      },
      {
        text: 'Mudziviri.',
        className: 'text-[#8ddcff] drop-shadow-[0_0_30px_rgba(141,220,255,0.16)]',
      },
    ],
  },
  {
    language: 'Shona',
    shortLanguage: 'SN',
    segments: [
      { text: 'Kwaziwai, ndinonzi ', className: 'text-[#f4f2ea]' },
      {
        text: 'Evans ',
        className: 'text-[#c7ff5b] drop-shadow-[0_0_28px_rgba(199,255,91,0.18)]',
      },
      {
        text: 'Mudziviri.',
        className: 'text-[#8ddcff] drop-shadow-[0_0_30px_rgba(141,220,255,0.16)]',
      },
    ],
  },
  {
    language: 'Setswana',
    shortLanguage: 'TN',
    segments: [
      { text: 'Dumelang, ke nna ', className: 'text-[#f4f2ea]' },
      {
        text: 'Evans ',
        className: 'text-[#c7ff5b] drop-shadow-[0_0_28px_rgba(199,255,91,0.18)]',
      },
      {
        text: 'Mudziviri.',
        className: 'text-[#8ddcff] drop-shadow-[0_0_30px_rgba(141,220,255,0.16)]',
      },
    ],
  },
];

const particles = [
  { left: '8%', top: '18%', size: 3, duration: 7.2, delay: 0.4, colour: '#c7ff5b' },
  { left: '17%', top: '72%', size: 2, duration: 8.4, delay: 1.1, colour: '#8ddcff' },
  { left: '31%', top: '12%', size: 2, duration: 6.8, delay: 2.2, colour: '#f0c55e' },
  { left: '44%', top: '81%', size: 3, duration: 9.1, delay: 0.8, colour: '#c7ff5b' },
  { left: '58%', top: '24%', size: 2, duration: 7.7, delay: 1.6, colour: '#8ddcff' },
  { left: '69%', top: '67%', size: 2, duration: 8.8, delay: 2.6, colour: '#f0c55e' },
  { left: '82%', top: '14%', size: 3, duration: 7.4, delay: 0.2, colour: '#c7ff5b' },
  { left: '91%', top: '78%', size: 2, duration: 9.4, delay: 1.9, colour: '#8ddcff' },
  { left: '76%', top: '43%', size: 2, duration: 6.9, delay: 3.1, colour: '#f0c55e' },
];

const greetingVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    opacity: 1,
    transition: {
      when: 'afterChildren' as const,
    },
  },
};

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.038,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.021,
      staggerDirection: -1,
    },
  },
};

const characterVariants = {
  hidden: {
    opacity: 0,
    y: '0.5em',
    rotateX: -78,
    scale: 0.95,
    filter: 'blur(11px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: '-0.34em',
    rotateX: 68,
    scale: 0.97,
    filter: 'blur(8px)',
    transition: {
      duration: 0.28,
      ease: [0.55, 0.06, 0.68, 0.19] as const,
    },
  },
};

function AnimatedGreeting({ greeting }: { greeting: Greeting }) {
  return (
    <motion.div
      key={greeting.language}
      variants={greetingVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/38 sm:mb-7 sm:text-xs"
      >
        <span className="rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-[#f0c55e]">
          {greeting.shortLanguage}
        </span>
        <span>{greeting.language}</span>
        <span className="h-px w-10 bg-gradient-to-r from-[#f0c55e]/60 to-transparent" />
      </motion.div>

      <motion.h1
        variants={lineVariants}
        aria-label={greeting.segments.map((segment) => segment.text).join('')}
        className="min-h-[3.05em] max-w-7xl text-balance text-[clamp(3.25rem,9.2vw,9.1rem)] font-semibold leading-[0.89] tracking-[-0.07em] sm:min-h-[2.05em] lg:min-h-[1.9em]"
      >
        {greeting.segments.map((segment, segmentIndex) => (
          <span key={`${greeting.language}-${segmentIndex}`} className={segment.className}>
            {segment.text.split(' ').map((word, wordIndex, words) => (
              <span
                key={`${word}-${wordIndex}`}
                className="inline-block whitespace-nowrap [perspective:900px]"
              >
                {Array.from(word).map((character, characterIndex) => (
                  <motion.span
                    key={`${character}-${characterIndex}`}
                    aria-hidden="true"
                    variants={characterVariants}
                    className="inline-block origin-bottom"
                  >
                    {character}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
              </span>
            ))}
          </span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
        transition={{ duration: 0.58, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 flex min-h-[1.25em] items-center text-[clamp(1.55rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em] text-[#f0c55e] sm:mt-10"
      >
        <span>Software Developer</span>
        <motion.span
          aria-hidden="true"
          className="ml-2 inline-block h-[0.95em] w-[0.08em] rounded-full bg-[#f0c55e]"
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{ duration: 1.05, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  );
}

function StaticGreeting() {
  const greeting = greetings[0];

  return (
    <div>
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f0c55e]">English</div>
      <h1 className="max-w-7xl text-balance text-[clamp(3.25rem,9.2vw,9.1rem)] font-semibold leading-[0.89] tracking-[-0.07em]">
        {greeting.segments.map((segment) => (
          <span key={segment.text} className={segment.className}>
            {segment.text}
          </span>
        ))}
      </h1>
      <div className="mt-7 text-[clamp(1.55rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em] text-[#f0c55e] sm:mt-10">
        Software Developer
      </div>
    </div>
  );
}

function IntroScreen() {
  const sectionRef = useRef<HTMLElement>(null);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 115, damping: 28, mass: 0.45 });
  const contentY = useTransform(smoothProgress, [0, 1], [0, 150]);
  const contentScale = useTransform(smoothProgress, [0, 1], [1, 0.965]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.82, 1], [1, 0.78, 0.18]);
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, 80]);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setTimeout(() => {
      setGreetingIndex((current) => (current + 1) % greetings.length);
    }, 7200);

    return () => window.clearTimeout(timer);
  }, [greetingIndex, reduceMotion]);

  useEffect(() => {
    const updateIntroState = () => {
      const revealPoint = window.innerHeight * 0.92;
      document.body.classList.toggle('intro-complete', window.scrollY >= revealPoint);
    };

    updateIntroState();
    window.addEventListener('scroll', updateIntroState, { passive: true });
    window.addEventListener('resize', updateIntroState);

    return () => {
      window.removeEventListener('scroll', updateIntroState);
      window.removeEventListener('resize', updateIntroState);
      document.body.classList.remove('intro-complete');
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="intro-screen relative z-[60] flex min-h-[100svh] items-center overflow-hidden bg-[#0b0c0e] px-5 sm:px-8 lg:px-12"
    >
      <motion.div
        className="portfolio-grid intro-perspective-grid absolute inset-0 opacity-45"
        style={reduceMotion ? undefined : { y: backgroundY }}
      />
      <div className="intro-aurora absolute inset-0" aria-hidden="true" />
      <div className="intro-vignette absolute inset-0" aria-hidden="true" />

      <motion.div
        className="portfolio-glow absolute -right-48 -top-40 h-[34rem] w-[34rem] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.16, 1.05, 1],
                opacity: [0.65, 1, 0.78, 0.65],
                x: [0, -42, -18, 0],
                y: [0, 28, 52, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="intro-blue-glow absolute -bottom-56 -left-44 h-[34rem] w-[34rem] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 0.96, 1],
                opacity: [0.46, 0.78, 0.58, 0.46],
                x: [0, 46, 18, 0],
                y: [0, -34, -12, 0],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="intro-halo absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[46rem] sm:w-[46rem]" />

        <motion.div
          className="absolute -right-24 top-[7%] h-64 w-64 rounded-full border border-[#c7ff5b]/16 sm:h-[26rem] sm:w-[26rem]"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#c7ff5b] shadow-[0_0_24px_rgba(199,255,91,.8)]" />
          <span className="absolute bottom-[12%] right-[9%] h-1.5 w-1.5 rounded-full bg-[#f0c55e] shadow-[0_0_18px_rgba(240,197,94,.7)]" />
        </motion.div>

        <motion.div
          className="absolute -right-4 top-[16%] h-44 w-44 rounded-full border border-[#8ddcff]/16 sm:h-72 sm:w-72"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute bottom-[12%] left-0 h-2 w-2 rounded-full bg-[#8ddcff] shadow-[0_0_22px_rgba(141,220,255,.78)]" />
        </motion.div>

        <motion.div
          className="absolute -left-24 bottom-[5%] h-52 w-52 rounded-full border border-[#f0c55e]/12 sm:h-80 sm:w-80"
          animate={reduceMotion ? undefined : { rotate: 360, scale: [1, 1.04, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute right-[14%] top-[5%] h-2 w-2 rounded-full bg-[#f0c55e] shadow-[0_0_20px_rgba(240,197,94,.7)]" />
        </motion.div>

        <motion.div
          className="intro-scan-line absolute left-[-20%] top-[28%] h-px w-[75%] bg-gradient-to-r from-transparent via-[#f0c55e]/45 to-transparent"
          animate={reduceMotion ? undefined : { x: ['-10%', '135%'], opacity: [0, 1, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="intro-scan-line absolute bottom-[22%] right-[-25%] h-px w-[68%] bg-gradient-to-l from-transparent via-[#8ddcff]/38 to-transparent"
          animate={reduceMotion ? undefined : { x: ['15%', '-145%'], opacity: [0, 1, 0] }}
          transition={{ duration: 8.4, repeat: Infinity, repeatDelay: 3.1, ease: 'easeInOut', delay: 1.4 }}
        />

        {particles.map((particle, index) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.colour,
              boxShadow: `0 0 16px ${particle.colour}`,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -18 - index * 1.5, 0],
                    x: [0, index % 2 === 0 ? 8 : -8, 0],
                    opacity: [0.18, 0.9, 0.18],
                    scale: [0.8, 1.35, 0.8],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-[1400px]"
        style={reduceMotion ? undefined : { y: contentY, scale: contentScale, opacity: contentOpacity }}
      >
        {reduceMotion ? (
          <StaticGreeting />
        ) : (
          <AnimatePresence mode="wait" initial>
            <AnimatedGreeting key={greetings[greetingIndex].language} greeting={greetings[greetingIndex]} />
          </AnimatePresence>
        )}

        <div className="mt-7 flex items-center gap-2" aria-label={`Language ${greetingIndex + 1} of ${greetings.length}`}>
          {greetings.map((greeting, index) => (
            <motion.span
              key={greeting.language}
              className={`h-1.5 rounded-full ${index === greetingIndex ? 'bg-[#c7ff5b]' : 'bg-white/16'}`}
              animate={{ width: index === greetingIndex ? 34 : 6, opacity: index === greetingIndex ? 1 : 0.65 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:bottom-8"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.4 }}
      >
        <span>Scroll to explore</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-[#c7ff5b]" />
        </motion.span>
      </motion.div>
    </section>
  );
}

export default IntroScreen;
