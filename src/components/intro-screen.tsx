import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl text-balance text-[clamp(3.7rem,10vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[#f4f2ea]"
        >
          Hi, I’m Evans Mudziviri.
        </motion.h1>

        <div className="mt-7 h-[1.25em] overflow-hidden text-[clamp(1.6rem,4vw,4rem)] font-medium leading-none tracking-[-0.045em] text-[#c7ff5b] sm:mt-10">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: '100%' }}
            animate={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: [0, 1, 1, 0],
                    y: ['100%', '0%', '0%', '-100%'],
                  }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 4.8,
                    times: [0, 0.16, 0.82, 1],
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            Software Developer
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default IntroScreen;
