import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'
import { MaskImage } from './MaskImage'
import { Magnetic } from './Magnetic'

const amenities = [
  'Rooftop infinity pool',
  'Exclusive residents’ lounge',
  'Chic bar and social kitchen',
  'Community park and gardens',
  'Co-working cafe',
  'Concierge lobby',
]

const unitMix = [
  { type: 'Studios', note: 'Fully optimised layouts' },
  { type: '1 Bedroom', note: 'Balconies on every unit' },
  { type: '2 Bedroom', note: 'Corner skyline aspects' },
  { type: '3 Bedroom', note: 'Family-scale plans' },
]

/** Full-bleed cinematic opening: the tower at night, title rising over it. */
function Scene() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className="relative h-[88vh] overflow-hidden lg:h-[105vh]">
      <motion.div className="absolute -inset-y-[10%] inset-x-0" style={reduce ? undefined : { y }}>
        <img
          src="/images/arlington-night.jpg"
          alt="Arlington Park II tower illuminated at night"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-night-deep via-night-deep/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-[1400px] px-6 pb-14 lg:px-12 lg:pb-20">
          <Reveal>
            <p className="text-[12px] tracking-[0.18em] text-champagne uppercase">
              Featured development
            </p>
          </Reveal>
          <h2 className="mt-4 font-display text-6xl leading-[0.95] font-light md:text-8xl lg:text-[7.5rem]">
            <MaskedLine delay={0.1}><span className="text-metallic">Arlington</span></MaskedLine>
            <MaskedLine delay={0.22}>
              <span className="text-metallic">Park </span><em className="text-metallic-gold">II</em>
            </MaskedLine>
          </h2>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProject() {
  return (
    <section id="arlington-park-ii" className="border-y border-hairline bg-night-deep/60">
      <Scene />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="light-pool" aria-hidden="true" />
        <div className="relative grid gap-16 lg:grid-cols-12">
          {/* Sticky text column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="text-sm tracking-[0.06em] text-ink-mute uppercase">
                  Dubailand &middot; 129 residences
                </p>
                <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink-soft">
                  A modern apartment tower where every one of the 129 homes has
                  been planned around usable space: studios to three-bedroom
                  residences with premium finishes, deep balconies, and podium
                  amenities designed as an extension of the home. The coming
                  Blue Line Metro puts the rest of the city within easy reach.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 border-t border-hairline pt-8">
                  <h3 className="text-[12px] tracking-[0.1em] text-ink-mute uppercase">
                    Residences
                  </h3>
                  <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
                    {unitMix.map((u) => (
                      <li key={u.type}>
                        <p className="font-display text-2xl text-ink">{u.type}</p>
                        <p className="mt-1 text-[13px] text-ink-mute">{u.note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-10 border-t border-hairline pt-8">
                  <h3 className="text-[12px] tracking-[0.1em] text-ink-mute uppercase">
                    Amenities
                  </h3>
                  <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
                    {amenities.map((a) => (
                      <li key={a} className="text-sm leading-snug text-ink-soft">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10">
                  <Magnetic>
                    <a
                      href="#register"
                      className="cta block px-8 py-4 text-[13px] font-medium tracking-[0.08em] uppercase"
                    >
                      Register Interest
                    </a>
                  </Magnetic>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Image column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <MaskImage
              src="/images/bedroom-skyline.jpg"
              alt="Primary bedroom with floor-to-ceiling skyline views"
              imgClassName="aspect-[4/3] lg:aspect-[16/11]"
            />
            <div className="grid gap-6 md:grid-cols-2">
              <MaskImage
                src="/images/arlington-entrance.jpg"
                alt="Arlington Park entrance and drop-off at dusk"
                imgClassName="aspect-[4/5]"
              />
              <MaskImage
                src="/images/lobby-green.jpg"
                alt="Lobby reception in sage velvet and travertine"
                imgClassName="aspect-[4/5]"
                className="md:mt-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
