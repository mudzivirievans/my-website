import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((character, index) => {
            const delay = startDelay + characterIndex * characterDelay;
            characterIndex += 1;

            return (
              <motion.span
                key={`${character}-${index}`}
                aria-hidden="true"
                className="inline-block"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: '0.38em',
                        filter: 'blur(8px)',
                      }
                }
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.48,
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
  const reduceMotion = useReducedMotion();

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
      aria-label="Introduction"
      className="intro-screen relative z-[60] flex min-h-[100svh] items-center overflow-hidden bg-[#0b0c0e] px-5 sm:px-8 lg:px-12"
    >
      <div className="portfolio-grid absolute inset-0 opacity-40" />
      <div className="portfolio-glow absolute -right-48 -top-40 h-[34rem] w-[34rem] rounded-full" />

      <div className="relative mx-auto w-full max-w-[1400px]">
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
            className="text-[#c7ff5b] drop-shadow-[0_0_28px_rgba(199,255,91,0.18)]"
          />{' '}
          <AnimatedText
            text="Mudziviri."
            startDelay={0.94}
            reduceMotion={reduceMotion}
            className="text-[#8ddcff] drop-shadow-[0_0_30px_rgba(141,220,255,0.16)]"
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
      </div>
    </section>
  );
}

export default IntroScreen;
