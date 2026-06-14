import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { getProject } from '../data/projects'
import { MaskedLine } from '../components/Masked'
import { Reveal } from '../components/Reveal'
import { Magnetic } from '../components/Magnetic'
import { MaskImage } from '../components/MaskImage'

type HeroSceneProps = {
  src: string
  name: string
  location: string
  district: string
  tagline: string
}

function HeroScene({ src, name, location, district, tagline }: HeroSceneProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const words = name.split(' ')

  return (
    <div ref={ref} className="relative h-[88vh] overflow-hidden lg:h-[105vh]">
      <motion.div className="absolute -inset-y-[10%] inset-x-0" style={reduce ? undefined : { y }}>
        <img src={src} alt={name} className="h-full w-full object-cover" />
      </motion.div>
      {/* Gradients */}
      <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-night-deep via-night-deep/60 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night-deep/60 to-transparent" />

      {/* Hero text overlay — bottom left */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 lg:px-12 lg:pb-16">
        <p className="text-[11px] tracking-[0.2em] text-champagne uppercase mb-5">
          {location} &middot; {district}
        </p>
        <h1 className="font-display text-[3.2rem] leading-[1.02] font-light tracking-[-0.01em] md:text-7xl lg:text-[5.5rem]">
          {words.map((word, i) => (
            <MaskedLine key={i} delay={i * 0.13}>
              <span className={i === words.length - 1 ? 'text-metallic-gold' : 'text-metallic'}>
                {word}
              </span>
            </MaskedLine>
          ))}
        </h1>
        <MaskedLine delay={words.length * 0.13 + 0.08}>
          <em className="mt-4 block font-display text-lg font-light text-ink-soft lg:text-xl">
            {tagline}
          </em>
        </MaskedLine>
      </div>
    </div>
  )
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug ?? '')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-ink-mute">Project not found.</p>
          <Link to="/" className="mt-4 inline-block text-champagne underline">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Back nav */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between px-6 lg:px-12
        border-b border-hairline bg-night/85 backdrop-blur-md">
        <Link to="/" aria-label="Back to Majid Developments">
          <img src="/majid-logo.svg" alt="Majid Developments" className="h-9 w-auto" />
        </Link>
        <Link
          to="/#register"
          className="btn border border-champagne/60 px-6 py-2.5 text-[13px] tracking-[0.08em] text-champagne-soft uppercase hover:bg-champagne hover:text-night-deep"
        >
          Register Interest
        </Link>
      </div>

      <main className="pt-[72px]">
        {/* Hero */}
        <HeroScene
          src={project.hero}
          name={project.name}
          location={project.location}
          district={project.district}
          tagline={project.tagline}
        />

        {/* Description + Stats */}
        <div className="border-t border-hairline mt-16">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                {project.description.map((para, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <p className={`text-base leading-relaxed text-ink-soft ${i > 0 ? 'mt-6' : ''}`}>
                      {para}
                    </p>
                  </Reveal>
                ))}
                <Reveal delay={0.2}>
                  <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                    <Magnetic>
                      <Link
                        to="/#register"
                        className="cta block px-8 py-4 text-[13px] font-medium tracking-[0.1em] uppercase"
                      >
                        Register Interest
                      </Link>
                    </Magnetic>
                    <a
                      href="/brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[13px] tracking-[0.1em] text-ink uppercase"
                    >
                      Download Brochure
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                {/* Key highlights */}
                <Reveal delay={0.1}>
                  <div className="border-t border-hairline pt-8">
                    {project.units && (
                      <div className="mb-8">
                        <p className="font-sans text-6xl font-light tabular-nums text-ink">{project.units}</p>
                        <p className="mt-2 text-[13px] tracking-[0.06em] text-ink-mute uppercase">Residences</p>
                      </div>
                    )}
                    <dl className="space-y-5">
                      <div>
                        <dt className="text-[11px] tracking-[0.14em] text-ink-mute uppercase">Metro connection</dt>
                        <dd className="mt-1 text-sm text-ink">{project.metroLine}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] tracking-[0.14em] text-ink-mute uppercase">District</dt>
                        <dd className="mt-1 text-sm text-ink">{project.district}</dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>

                {/* Nearby */}
                <Reveal delay={0.18}>
                  <div className="mt-10 border-t border-hairline pt-8">
                    <h3 className="text-[11px] tracking-[0.14em] text-ink-mute uppercase">Nearby</h3>
                    <ul className="mt-4 space-y-2">
                      {project.nearby.map((n) => (
                        <li key={n} className="text-sm text-ink-soft">{n}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Unit mix */}
        <div className="border-t border-hairline bg-night-deep/60">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <Reveal>
              <h2 className="font-display text-4xl font-light md:text-5xl">
                <span className="text-metallic">Residences</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {project.unitMix.map((u, i) => (
                <Reveal key={u.type} delay={i * 0.08}>
                  <div className="border-t border-hairline pt-6">
                    <p className="font-display text-2xl font-light text-ink">{u.type}</p>
                    <p className="mt-2 text-[13px] text-ink-mute">{u.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <Reveal>
              <h2 className="font-display text-4xl font-light md:text-5xl">
                <span className="text-metallic">Inside</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img, i) => (
                <MaskImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  imgClassName={i === 0 ? 'aspect-[4/3] md:col-span-2 lg:col-span-2' : 'aspect-[4/3]'}
                  className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="border-t border-hairline bg-night-deep/60">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-24">
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal>
                  <h2 className="font-display text-4xl font-light md:text-5xl">
                    <MaskedLine><span className="text-metallic">Amenities</span></MaskedLine>
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {project.amenities.map((a, i) => (
                    <Reveal key={a} delay={i * 0.05}>
                      <li className="border-t border-hairline pt-4 text-sm leading-snug text-ink-soft">{a}</li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA band */}
        <div className="border-t border-hairline">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <Reveal>
                <h2 className="font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
                  <MaskedLine><span className="text-metallic">Ready to invest</span></MaskedLine>
                  <MaskedLine delay={0.12}>
                    <span className="text-metallic">in </span>
                    <em className="text-metallic-gold">{project.name}?</em>
                  </MaskedLine>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <Magnetic>
                  <Link
                    to="/#register"
                    className="cta block px-10 py-5 text-[13px] font-medium tracking-[0.1em] uppercase"
                  >
                    Register Interest
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-hairline px-6 py-8 lg:px-12">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">
            <Link to="/">
              <img src="/majid-logo.svg" alt="Majid Developments" className="h-7 w-auto opacity-60" />
            </Link>
            <p className="text-[12px] text-ink-mute">© 2026 Majid Developments</p>
          </div>
        </div>
      </main>
    </>
  )
}
