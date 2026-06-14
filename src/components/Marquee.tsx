const phrase = (
  <>
    <span className="text-metallic">A new way</span>
    <span className="font-light text-champagne italic">of living</span>
    <span className="text-metallic">in Dubai</span>
  </>
)

export function Marquee() {
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-hairline py-10 lg:py-14">
      <div className="marquee-inner">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="flex shrink-0 items-baseline gap-x-10 pr-10 font-display text-6xl whitespace-nowrap md:text-7xl lg:text-8xl"
          >
            {phrase}
            {phrase}
          </div>
        ))}
      </div>
    </section>
  )
}
