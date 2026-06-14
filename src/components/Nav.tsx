import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Investor Relations', href: '#investor-relations' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#register' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled && !open
          ? 'border-b border-hairline bg-night/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <a href="#top" aria-label="Majid Developments home" className="relative z-50">
          <img src="/majid-logo.svg" alt="Majid Developments" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[13px] font-normal tracking-[0.08em] text-ink-soft uppercase transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="btn border border-champagne/60 px-6 py-2.5 text-[13px] tracking-[0.08em] text-champagne-soft uppercase hover:bg-champagne hover:text-night-deep"
          >
            Register Interest
          </a>
        </nav>

        <button
          type="button"
          className="btn relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Full-screen menu, staggered serif links */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-night-deep px-6 pt-28 pb-10 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.35 }}
          >
            <ul className="flex flex-col gap-2">
              {links.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-5xl font-light text-ink"
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="border-t border-hairline pt-6"
            >
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="btn inline-block bg-champagne px-7 py-3.5 text-[13px] font-medium tracking-[0.1em] text-night-deep uppercase"
              >
                Register Interest
              </a>
              <p className="mt-6 text-[13px] text-ink-mute">
                Burlington Tower, Business Bay, Dubai
                <br />
                <a href="tel:+971562888861" className="text-ink-soft">
                  +971 56 288 8861
                </a>
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
