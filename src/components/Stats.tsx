import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { Reveal } from './Reveal'

const stats = [
  { value: 129, suffix: '', label: 'Residences in the current launch' },
  { value: 3, suffix: '', label: 'Communities across Dubai' },
  { value: 2, suffix: '', label: 'New metro lines arriving at our doorsteps' },
  { value: 93, suffix: ' km', label: 'The Loop cycle highway, planned nearby' },
]

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView || reduce || !ref.current) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return <span ref={ref}>{reduce ? to : 0}</span>
}

export function Stats() {
  return (
    <section className="border-y border-hairline bg-night-deep/60">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-10 gap-y-14 px-6 py-20 lg:grid-cols-4 lg:px-12 lg:py-28">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="border-t border-hairline pt-7">
              <p className="font-sans text-5xl leading-none font-light tracking-[-0.02em] text-ink tabular-nums md:text-6xl lg:text-7xl">
                <Counter to={s.value} />
                {s.suffix && (
                  <span className="ml-1 text-2xl text-ink-mute md:text-3xl">
                    {s.suffix.trim()}
                  </span>
                )}
              </p>
              <p className="mt-5 max-w-[24ch] text-[13px] leading-relaxed tracking-[0.04em] text-ink-mute">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
