import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'

const articles = [
  {
    title: 'The Loop: 93 km of climate-controlled cycling under Dubai',
    summary:
      'A sustainable urban highway for cyclists, joggers and e-scooters, powered by renewable energy and threading directly through the communities we build in.',
  },
  {
    title: 'Gold Line Metro to serve Jumeirah Garden City',
    summary:
      'The planned Gold Line connects Jumeirah Garden City to the wider metro network, placing Mayfair Gardens residents minutes from the city core.',
  },
  {
    title: 'Blue Line Metro reaches Dubailand',
    summary:
      'The approved Blue Line links Dubailand to the metro network for the first time, a direct boost to connectivity at Arlington Park and Arlington Park II.',
  },
  {
    title: "The art of living: Dubai's most prestigious residences",
    summary:
      "From statement lobbies to bespoke interior programmes, a look at the design and amenity standards that define Dubai's premium residential tier — and how Arlington Park II benchmarks against them.",
  },
  {
    title: "Dubai's financial future and the luxury rental market",
    summary:
      "How UAE economic policy, zero income tax, and sustained business inflows continue to drive demand for high-end rentals — and what that means for gross yields in growth-corridor communities.",
  },
  {
    title: 'Why Dubai remains the top choice for luxury property buyers',
    summary:
      'Stable governance, strong capital appreciation, tax-free ownership, and world-class infrastructure: the structural case for Dubai real estate as a decade-long hold.',
  },
]

export function Media() {
  return (
    <section id="media" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-5xl font-light md:text-6xl">
            <MaskedLine><span className="text-metallic">Media and</span></MaskedLine>
            <MaskedLine delay={0.1}><span className="text-metallic">events</span></MaskedLine>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[40ch] text-sm leading-relaxed text-ink-soft">
              The infrastructure shaping the neighbourhoods where we build.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ul>
            {articles.map((a, i) => (
              <li key={a.title} className="border-t border-hairline last:border-b">
                <Reveal delay={i * 0.06}>
                  <article className="grid gap-2 py-8 md:grid-cols-12 md:gap-8">
                    <h3 className="font-display text-2xl leading-snug font-light text-ink md:col-span-6">
                      {a.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft md:col-span-6">
                      {a.summary}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
