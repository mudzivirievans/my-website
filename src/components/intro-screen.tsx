import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  startDelay: number;
  characterDelay?: number;
  reduceMotion: boolean | null;
};

function AnimatedText({
  text,
  className = '',
  startDelay,
  characterDelay = 0.045,
  reduceMotion,
}: AnimatedTextProps) {
  let characterIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap [perspective:800px]">
          {Array.from(word).map((character, index) => {
            const delay = startDelay + characterIndex * characterDelay;
            characterIndex += 1;

            return (
              <motion.span
                key={`${character}-${index}`}
                aria-hidden="true"
                className="inline-block origin-bottom"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: '0.48em',
                        rotateX: -72,
                        scale: 0.96,
                        filter: 'blur(10px)',
                      }
                }
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: 'blur(0px)' }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.58,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
              >
                {character}
              </motion.span>
            );
          })}
          {wordIndex < text.split(' ').length - 1 && <span aria-hidden="true">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

function IntroScreen() {
  const sectionRef = useRef<HTMLElement>(null);
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
        className="portfolio-grid absolute inset-0 opacity-40"
        style={reduceMotion ? undefined : { y: backgroundY }}
      />
      <motion.div
        className="portfolio-glow absolute -right-48 -top-40 h-[34rem] w-[34rem] rounded-full"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.72, 1, 0.72],
                x: [0, -26, 0],
                y: [0, 18, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -right-24 top-[8%] h-64 w-64 rounded-full border border-[#c7ff5b]/15 sm:h-96 sm:w-96"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#c7ff5b] shadow-[0_0_20px_rgba(199,255,91,.65)]" />
        </motion.div>
        <motion.div
          className="absolute -right-4 top-[16%] h-44 w-44 rounded-full border border-[#8ddcff]/15 sm:h-64 sm:w-64"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 21, repeat: Infinity, ease: 'linear' }}
        >
          <span className="absolute bottom-[12%] left-0 h-2 w-2 rounded-full bg-[#8ddcff] shadow-[0_0_18px_rgba(141,220,255,.62)]" />
        </motion.div>

        <motion.div
          className="absolute left-[-15%] top-[22%] h-px w-[55%] origin-left bg-gradient-to-r from-transparent via-[#f0c55e]/35 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute bottom-[18%] right-[-12%] h-px w-[48%] origin-right bg-gradient-to-l from-transparent via-[#8ddcff]/25 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.35, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-[1400px]"
        style={reduceMotion ? undefined : { y: contentY, scale: contentScale, opacity: contentOpacity }}
      >
        <h1 className="max-w-7xl text-balance text-[clamp(3.65rem,10vw,9.4rem)] font-semibold leading-[0.89] tracking-[-0.07em]">
          <AnimatedText
            text="Hi, I’m"
            startDelay={0.15}
            reduceMotion={reduceMotion}
            className="text-[#f4f2ea]"
          />{' '}
          <AnimatedText
            text="Evans"
            startDelay={0.62}
            reduceMotion={reduceMotion}
            className="intro-accent-lime text-[#c7ff5b] drop-shadow-[0_0_28px_rgba(199,255,91,0.18)]"
          />{' '}
          <AnimatedText
            text="Mudziviri."
            startDelay={0.94}
            reduceMotion={reduceMotion}
            className="intro-accent-blue text-[#8ddcff] drop-shadow-[0_0_30px_rgba(141,220,255,0.16)]"
          />
        </h1>

        <div className="mt-8 flex min-h-[1.25em] items-center text-[clamp(1.65rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em] sm:mt-11">
          <AnimatedText
            text="Software Developer"
            startDelay={1.55}
            characterDelay={0.075}
            reduceMotion={reduceMotion}
            className="text-[#f0c55e]"
          />
          <motion.span
            aria-hidden="true"
            className="ml-2 inline-block h-[0.95em] w-[0.08em] rounded-full bg-[#f0c55e]"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduceMotion ? 1 : [0, 0, 1, 0, 1] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 1.8,
                    delay: 2.9,
                    times: [0, 0.15, 0.35, 0.65, 1],
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35 sm:bottom-8"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 3.2 }}
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
