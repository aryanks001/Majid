import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'

const frames = [
  {
    src: '/images/residents-lounge.jpg',
    alt: 'Residents lounge with games area and indoor olive trees',
    caption: 'The residents’ lounge',
  },
  {
    src: '/images/terrace-dining.jpg',
    alt: 'Terrace dining counter beneath an olive tree',
    caption: 'Terrace dining',
  },
  {
    src: '/images/lobby-chandelier.jpg',
    alt: 'Double-height lobby with glass chandelier',
    caption: 'The arrival lobby',
  },
  {
    src: '/images/library-lounge.jpg',
    alt: 'Library lounge with marble feature wall',
    caption: 'The library lounge',
  },
  {
    src: '/images/cowork-cafe.jpg',
    alt: 'Co-working cafe with garden views',
    caption: 'The co-working cafe',
  },
  {
    src: '/images/bathroom-marble.jpg',
    alt: 'Bathroom in book-matched marble with brushed gold fittings',
    caption: 'Natural stone bathrooms',
  },
]

export function Gallery() {
  return (
    <section className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl font-light md:text-6xl lg:text-7xl">
            <MaskedLine><span className="text-metallic">Inside the residences</span></MaskedLine>
          </h2>
          <Reveal delay={0.2}>
            <p className="max-w-[34ch] text-sm leading-relaxed text-ink-mute">
              Podium amenities and residence interiors at Arlington Park II.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: equal-height accordion, strips expand under the cursor */}
      <Reveal delay={0.15}>
        <div className="mt-14 hidden gap-2 px-6 md:flex md:h-[520px] lg:h-[600px] lg:px-12">
          {frames.map((f) => (
            <figure
              key={f.src}
              className="group relative min-w-0 flex-1 overflow-hidden transition-[flex-grow] duration-700 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] hover:flex-[2.6]"
            >
              <img
                src={f.src}
                alt={f.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-deep/85 to-transparent px-6 pt-16 pb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="block text-[13px] tracking-[0.08em] text-ink uppercase">
                  {f.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* Mobile: uniform snap strip */}
      <div className="gallery-strip mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:hidden">
        {frames.map((f) => (
          <figure key={f.src} className="w-[78vw] shrink-0 snap-start">
            <img
              src={f.src}
              alt={f.alt}
              className="aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 text-[13px] text-ink-mute">{f.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
