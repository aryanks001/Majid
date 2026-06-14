import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MaskedLine } from './Masked'
import { Magnetic } from './Magnetic'

// Hero copy lands as the preloader curtain lifts (~1.9s in).
const T = 1.55

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const veil = useTransform(scrollYProgress, [0, 0.9], [0, 0.55])

  const fade = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 20 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imageY }}>
        <img
          src="/images/tower-dusk.png"
          alt="Majid Developments tower at dusk with the Dubai skyline and Burj Khalifa behind"
          className="hero-image h-[114%] w-full object-cover object-[68%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night via-night/55 to-transparent" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-night"
        style={{ opacity: reduce ? 0 : veil }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pt-24 pb-16 lg:px-12 lg:pb-20">
        <div className="flex items-end justify-between gap-x-16">
          {/* All copy — left-aligned single column */}
          <div className="max-w-3xl">
            <h1 className="font-display text-[3.2rem] leading-[1.02] font-light tracking-[-0.01em] md:text-7xl lg:text-[5.9rem]">
              <MaskedLine delay={T}>
                <span className="text-metallic">A new way of</span>
              </MaskedLine>
              <MaskedLine delay={T + 0.14}>
                <em className="pb-1 font-light text-metallic-gold">living</em>
                <span className="text-metallic"> in Dubai.</span>
              </MaskedLine>
            </h1>
            <motion.p
              {...fade(T + 0.5)}
              className="mt-7 max-w-[52ch] text-base leading-relaxed text-ink-soft"
            >
              Premium residences in Dubai's growth corridors, minutes from two
              new metro lines, finished to five-star standards.
            </motion.p>
            <motion.div
              {...fade(T + 0.65)}
              className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-5"
            >
              <Magnetic>
                <a
                  href="#arlington-park-ii"
                  className="cta block px-8 py-4 text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  Explore Arlington Park II
                </a>
              </Magnetic>
              <a
                href="#register"
                className="link-underline text-[13px] tracking-[0.12em] text-ink uppercase"
              >
                Register Interest
              </a>
            </motion.div>
          </div>

          {/* Section indicator — bottom-right, desktop only */}
          <motion.div
            {...fade(T + 0.9)}
            className="hidden shrink-0 items-center gap-4 pb-1 lg:flex"
          >
            <span className="font-sans text-[11px] tracking-[0.18em] text-ink-mute">01</span>
            <div className="h-px w-10 bg-hairline" />
            <span className="font-sans text-[11px] tracking-[0.18em] text-ink-mute uppercase">Overview</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          {...fade(T + 1.1)}
          className="absolute right-6 bottom-16 hidden flex-col items-center gap-2 lg:right-12 lg:flex"
        >
          <div className="h-14 w-px overflow-hidden bg-hairline">
            <motion.div
              className="h-full w-full bg-champagne/60"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: T + 1.2 }}
            />
          </div>
          <span className="font-sans text-[10px] tracking-[0.22em] text-ink-mute uppercase"
            style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
