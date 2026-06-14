import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'
import { MaskImage } from './MaskImage'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="light-pool" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-48">
        <h2 className="font-display text-[2.6rem] leading-[1.08] font-light md:text-6xl lg:text-7xl">
          <MaskedLine><span className="text-metallic">Every prime</span></MaskedLine>
          <MaskedLine delay={0.12}><span className="text-metallic">address was once</span></MaskedLine>
          <MaskedLine delay={0.24}>
            <em className="text-metallic-gold">a secret.</em>
          </MaskedLine>
        </h2>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <Reveal>
              <p className="max-w-[54ch] text-base leading-relaxed text-ink-soft">
                We develop in the corridors Dubai is growing into: Dubailand
                ahead of the Blue Line Metro, Jumeirah Garden City ahead of the
                Gold Line. That means buying where the city is heading, at
                today's prices, with the finishes and amenities of established
                districts. Every layout is planned around usable space, light,
                and the walk to the platform.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-14 grid max-w-md grid-cols-2 gap-8 border-t border-hairline pt-8">
                <div>
                  <dt className="text-[12px] tracking-[0.1em] text-ink-mute uppercase">
                    Headquarters
                  </dt>
                  <dd className="mt-2 text-sm text-ink">
                    Burlington Tower, Business Bay
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] tracking-[0.1em] text-ink-mute uppercase">
                    Active communities
                  </dt>
                  <dd className="mt-2 text-sm text-ink">
                    Dubailand, Jumeirah Garden City
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <figure className="lg:col-span-5 lg:col-start-8 lg:-mt-24">
            <MaskImage
              src="/images/lobby-chandelier.jpg"
              alt="Arlington Park II grand lobby with statement chandelier and travertine finishes"
              imgClassName="aspect-[4/5]"
            />
            <figcaption className="mt-3 text-[13px] text-ink-mute">
              The grand lobby, Arlington Park II — Dubailand.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
