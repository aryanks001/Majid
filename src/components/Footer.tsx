const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/majiddevelopments' },
  { label: 'Facebook', href: 'https://www.facebook.com/majiddevelopments' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/majiddevelopments' },
  { label: 'YouTube', href: 'https://www.youtube.com/@MajidDevelopments' },
]

const siteLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Media', href: '#media' },
  { label: 'Register Interest', href: '#register' },
]

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div>
            <img src="/majid-logo.svg" alt="Majid Developments" className="h-10 w-auto" />
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-ink-mute">
              A premier real estate development company based in Dubai.
            </p>
          </div>
          <div className="flex gap-16">
            <nav aria-label="Footer">
              <ul className="space-y-3">
                {siteLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Social media">
              <ul className="space-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <a
          href="#register"
          className="group mt-20 block border-t border-hairline pt-14 pb-4"
        >
          <span className="block font-display text-4xl leading-[1.05] font-light text-ink transition-colors duration-300 group-hover:text-champagne-soft md:text-6xl lg:text-7xl">
            Own a piece of
            <br />
            the <em className="text-champagne-soft">skyline.</em>
          </span>
          <span className="link-underline mt-8 inline-block text-[13px] tracking-[0.12em] text-ink-soft uppercase">
            Register Interest
          </span>
        </a>
        <img
          src="/majid-logo.svg"
          alt=""
          aria-hidden="true"
          className="mt-20 w-full opacity-[0.92]"
        />
        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 text-[13px] text-ink-mute md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Majid Developments. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-ink-soft">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-ink-soft">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-ink-soft">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
