import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MaskedLine } from './Masked'

const projects = [
  {
    name: 'Arlington Park II',
    location: 'Dubailand',
    line: '129 residences from studios to three bedrooms, now open for registration.',
    href: '/projects/arlington-park-ii',
    image: '/images/arlington-night.jpg',
  },
  {
    name: 'Arlington Park',
    location: 'Dubailand',
    line: 'The community that started it all, minutes from the coming Blue Line Metro.',
    href: '/projects/arlington-park',
    image: '/images/arlington-entrance.jpg',
  },
  {
    name: 'Mayfair Gardens',
    location: 'Jumeirah Garden City',
    line: 'City-centre living served by the planned Gold Line Metro.',
    href: '/projects/mayfair-gardens',
    image: '/images/tower-sunset.png',
  },
]

export function Projects() {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="border-y border-hairline">
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl font-light md:text-6xl lg:text-7xl">
              <MaskedLine><span className="text-metallic">Our developments</span></MaskedLine>
            </h2>
            <ul className="mt-12">
              {projects.map((p, i) => (
                <li key={p.name} className="border-t border-hairline last:border-b">
                  <Link
                    to={p.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group block py-8"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                      <h3 className="font-display text-4xl font-light text-ink transition-[color,transform] duration-300 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-champagne-soft md:text-5xl">
                        {p.name}
                      </h3>
                      <p className="text-[13px] tracking-[0.08em] text-ink-mute uppercase">
                        {p.location}
                      </p>
                    </div>
                    <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
                      {p.line}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 overflow-hidden">
              {projects.map((p, i) => (
                <img
                  key={p.name}
                  src={p.image}
                  alt=""
                  aria-hidden="true"
                  className={`aspect-[4/5] w-full object-cover transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] ${
                    i === active ? 'scale-100 opacity-100' : 'absolute inset-0 scale-[1.04] opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
