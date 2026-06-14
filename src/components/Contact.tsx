import { useState } from 'react'
import type { FormEvent } from 'react'
import { Reveal } from './Reveal'
import { MaskedLine } from './Masked'
import { Magnetic } from './Magnetic'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Hook this up to your CRM or email service before going live.
    setSent(true)
  }

  const field =
    'w-full border border-hairline bg-night-raised px-4 py-3.5 text-sm text-ink placeholder:text-ink-mute/70 outline-none transition-colors duration-200 focus:border-champagne/70'
  const label = 'block text-[12px] tracking-[0.1em] text-ink-soft uppercase'

  return (
    <section id="register" className="border-t border-hairline bg-night-deep/60">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl leading-[1.08] font-light md:text-5xl lg:text-6xl">
              <MaskedLine><span className="text-metallic">Become part of</span></MaskedLine>
              <MaskedLine delay={0.1}>
                <span className="text-metallic">the </span><em className="text-metallic-gold">Majid</em><span className="text-metallic"> legacy.</span>
              </MaskedLine>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft">
                Register your interest and our team will walk you through
                availability, payment plans and private viewings.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 space-y-6 border-t border-hairline pt-8 text-sm">
                <div>
                  <dt className={label}>Sales gallery</dt>
                  <dd className="mt-2 leading-relaxed text-ink">
                    Suite 110, The Burlington Tower
                    <br />
                    Marasi Drive, Business Bay, Dubai
                  </dd>
                </div>
                <div>
                  <dt className={label}>Phone</dt>
                  <dd className="mt-2 space-y-1 text-ink">
                    <p>
                      <a href="tel:+97144489953" className="transition-colors hover:text-champagne-soft">
                        +971 4 448 9953
                      </a>
                    </p>
                    <p>
                      <a href="tel:+971562888861" className="transition-colors hover:text-champagne-soft">
                        +971 56 288 8861
                      </a>
                      <span className="text-ink-mute"> (WhatsApp)</span>
                    </p>
                    <p>
                      Toll-free 800 MAJID <span className="text-ink-mute">(62543)</span>
                    </p>
                  </dd>
                </div>
                <div>
                  <dt className={label}>Email</dt>
                  <dd className="mt-2">
                    <a
                      href="mailto:info@majiddevelopments.com"
                      className="text-ink transition-colors hover:text-champagne-soft"
                    >
                      info@majiddevelopments.com
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.12}>
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-start justify-center border border-hairline px-8 py-12">
                  <p className="font-display text-3xl font-light text-ink">
                    Thank you. We have your details.
                  </p>
                  <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-ink-soft">
                    A member of the sales team will contact you within one
                    working day. For anything urgent, call +971 56 288 8861.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className={label}>
                      Full name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={field} />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className={label}>
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <label htmlFor="email" className={label}>
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={field} />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <label htmlFor="project" className={label}>
                      Project of interest
                    </label>
                    <select id="project" name="project" className={field} defaultValue="Arlington Park II">
                      <option>Arlington Park II</option>
                      <option>Arlington Park</option>
                      <option>Mayfair Gardens</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <label htmlFor="message" className={label}>
                      Message <span className="normal-case text-ink-mute">(optional)</span>
                    </label>
                    <textarea id="message" name="message" rows={4} className={field} />
                  </div>
                  <div className="md:col-span-2">
                    <Magnetic>
                      <button
                        type="submit"
                        className="cta block px-10 py-4 text-[13px] font-medium tracking-[0.08em] uppercase"
                      >
                        Register Interest
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
