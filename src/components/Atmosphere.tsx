/**
 * Living dark sky behind the whole page.
 * Three layers: two slow-drifting radial color pools + a barely-visible
 * architectural grid that makes the darkness feel structured, not empty.
 * No discrete stars — drama comes from depth, not decoration.
 */
export function Atmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Warm champagne pool — top-right, suggests distant window light */}
      <div className="atmo-blob atmo-blob-a" />
      {/* Cool dusk blue — bottom-left, depth and contrast */}
      <div className="atmo-blob atmo-blob-b" />
      {/* Subtle third warmth — center, ties the two pools together */}
      <div className="atmo-blob atmo-blob-c" />
      {/* Barely-there architectural grid — structural, not decorative */}
      <div className="atmo-grid" />
    </div>
  )
}
