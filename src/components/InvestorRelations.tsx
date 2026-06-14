import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'
import { Magnetic } from './Magnetic'

const pillars = [
  {
    number: '01',
    title: 'Pre-infrastructure entry',
    body: 'We acquire land and begin construction ahead of major metro and highway announcements — capturing appreciation before it becomes common knowledge.',
  },
  {
    number: '02',
    title: 'Flexible payment plans',
    body: 'Post-handover payment plans of up to five years reduce upfront capital commitment and allow rental income to offset instalments from day one.',
  },
  {
    number: '03',
    title: 'Construction transparency',
    body: 'Monthly milestone reports, on-site access, and a dedicated investor portal keep you informed at every stage from groundbreak to handover.',
  },
]

export function InvestorRelations() {
  return (
    <section id="investor-relations" className="border-t border-hairline">
      <div className="relative mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="light-pool" aria-hidden="true" />

        {/* Header row */}
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[12px] tracking-[0.18em] text-champagne uppercase">
                Investor Relations
              </p>
            </Reveal>
            <h2 className="mt-5 font-display text-[2.6rem] leading-[1.08] font-light md:text-6xl lg:text-7xl">
              <MaskedLine delay={0.06}><span className="text-metallic">Built for buyers</span></MaskedLine>
              <MaskedLine delay={0.18}><span className="text-metallic">who think in</span></MaskedLine>
              <MaskedLine delay={0.3}>
                <em className="text-metallic-gold">decades.</em>
              </MaskedLine>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
            <Reveal delay={0.1}>
              <p className="max-w-[56ch] text-base leading-relaxed text-ink-soft">
                Majid Developments publishes clear project timelines, transparent
                payment structures, and regular construction updates — because
                informed investors are confident investors. Our communities are
                positioned in growth corridors where Dubai is heading, not where
                it has already arrived.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-ink-soft">
                With a portfolio spanning Dubailand and Jumeirah Garden City —
                both served by incoming metro lines — our buyers capture
                infrastructure-driven appreciation from the moment they sign.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                <Magnetic>
                  <a
                    href="/brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta block px-8 py-4 text-[13px] font-medium tracking-[0.1em] uppercase"
                  >
                    Download Brochure
                  </a>
                </Magnetic>
                <a
                  href="#register"
                  className="link-underline text-[13px] tracking-[0.1em] text-ink uppercase"
                >
                  Speak to Sales
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Three pillars */}
        <div className="relative mt-20 grid gap-px border-t border-hairline pt-0 lg:mt-28 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.number} delay={i * 0.1}>
              <div className="border-t border-hairline px-0 pt-10 pb-2 lg:pr-12">
                <p className="font-sans text-[11px] tracking-[0.18em] text-ink-mute">
                  {p.number}
                </p>
                <h3 className="mt-4 font-display text-2xl font-light leading-snug text-ink md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
