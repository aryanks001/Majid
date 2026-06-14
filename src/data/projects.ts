export type UnitMix = { type: string; note: string }
export type Project = {
  slug: string
  name: string
  location: string
  district: string
  tagline: string
  description: string[]
  units: number | null
  unitMix: UnitMix[]
  amenities: string[]
  nearby: string[]
  hero: string
  gallery: { src: string; alt: string }[]
  metroLine: string
}

export const projects: Project[] = [
  {
    slug: 'arlington-park-ii',
    name: 'Arlington Park II',
    location: 'Dubailand',
    district: 'Dubai Land Residential Complex',
    tagline: 'Designed for dreams, crafted for comfort.',
    description: [
      'A modern residential tower where all 129 homes have been planned around one principle: usable space. Studios to three-bedroom residences arrive with premium finishes, deep balconies, and podium amenities built as an extension of the home.',
      "Positioned in Dubailand ahead of the coming Blue Line Metro, Arlington Park II captures the dual advantage of today's entry price and tomorrow's connectivity premium.",
    ],
    units: 129,
    unitMix: [
      { type: 'Studios', note: 'Fully optimised layouts' },
      { type: '1 Bedroom', note: 'Balconies on every unit' },
      { type: '2 Bedroom', note: 'Corner skyline aspects' },
      { type: '3 Bedroom', note: 'Family-scale plans' },
    ],
    amenities: [
      'Rooftop infinity pool',
      "Exclusive residents' lounge",
      'Chic bar & social kitchen',
      'Community park & gardens',
      'Co-working cafe',
      'Concierge lobby',
      'Gymnasium',
      'Yoga & wellness studio',
      'Sauna room',
      'Barbecue terrace',
    ],
    nearby: [
      'The Aquila School — 1 min',
      'GEMS FirstPoint School — 3 min',
      'Silicon Central Mall — 7 min',
      'Dubai Silicon Oasis — 9 min',
      'Blue Line Metro (coming)',
    ],
    hero: '/images/arlington-night.jpg',
    gallery: [
      { src: '/images/bedroom-skyline.jpg', alt: 'Primary bedroom with floor-to-ceiling skyline views' },
      { src: '/images/lobby-chandelier.jpg', alt: 'Grand lobby with statement chandelier' },
      { src: '/images/arlington-entrance.jpg', alt: 'Arlington Park II entrance at dusk' },
      { src: '/images/lobby-green.jpg', alt: 'Lobby reception in sage velvet and travertine' },
      { src: '/images/residents-lounge.jpg', alt: 'Residents lounge with indoor olive trees' },
      { src: '/images/bathroom-marble.jpg', alt: 'Book-matched marble bathroom with gold fittings' },
    ],
    metroLine: 'Blue Line Metro',
  },
  {
    slug: 'arlington-park',
    name: 'Arlington Park',
    location: 'Dubailand',
    district: 'Dubai Land Residential Complex',
    tagline: 'Where urban ease meets natural peace.',
    description: [
      'The community that started it all. Arlington Park brought 140 fully optimised apartments to Dubailand at a moment when the district was still under the radar — a proposition that rewarded early conviction.',
      'Studios to two-bedroom residences finished in premium materials, surrounded by landscaped walkways and 11 curated podium amenities, minutes from the planned Blue Line Metro.',
    ],
    units: 140,
    unitMix: [
      { type: 'Studios', note: 'Smart storage throughout' },
      { type: '1 Bedroom', note: 'Open-plan living zones' },
      { type: '2 Bedroom', note: 'Expansive balcony aspects' },
    ],
    amenities: [
      'Infinity pool',
      "Exclusive residents' lounge",
      'Chic bar area',
      'Community park',
      'Gymnasium',
      'Yoga spaces',
      'Lush garden terraces',
      'Barbecue area',
      'Sauna room',
      'Games room',
    ],
    nearby: [
      'Dubai Silicon Oasis — 10 min',
      'Global Village — 12 min',
      'Downtown Dubai — 25 min',
      'Blue Line Metro (planned)',
    ],
    hero: '/images/arlington-entrance.jpg',
    gallery: [
      { src: '/images/residents-lounge.jpg', alt: 'Residents lounge with games area' },
      { src: '/images/terrace-dining.jpg', alt: 'Terrace dining beneath an olive tree' },
      { src: '/images/garden-lounge.jpg', alt: 'Garden lounge and outdoor seating' },
      { src: '/images/rooftop-pool.jpg', alt: 'Rooftop infinity pool at sunset' },
      { src: '/images/cowork-cafe.jpg', alt: 'Co-working cafe with garden views' },
      { src: '/images/lounge-marble.jpg', alt: 'Lounge with marble feature wall' },
    ],
    metroLine: 'Blue Line Metro',
  },
  {
    slug: 'mayfair-gardens',
    name: 'Mayfair Gardens',
    location: 'Jumeirah Garden City',
    district: 'Al Satwa, Central Dubai',
    tagline: 'City-centre living, on the Gold Line.',
    description: [
      "Mayfair Gardens brings premium residences to Jumeirah Garden City — one of Dubai's most anticipated new neighbourhoods, positioned within the inner city and directly served by the planned Gold Line Metro.",
      'A short walk from the canal, minutes from Downtown and DIFC, Mayfair Gardens delivers the connectivity of an established address at the price of an emerging one.',
    ],
    units: null,
    unitMix: [
      { type: 'Studios', note: 'Compact city-ready layouts' },
      { type: '1 Bedroom', note: 'Garden or city views' },
      { type: '2 Bedroom', note: 'Generous floor plates' },
    ],
    amenities: [
      'Landscaped garden terraces',
      "Residents' lounge",
      'Infinity pool',
      'Gymnasium',
      'Yoga studio',
      'Concierge services',
      'Co-working space',
      'Barbecue terrace',
    ],
    nearby: [
      'Dubai Canal — 5 min walk',
      'Downtown Dubai — 8 min',
      'DIFC — 10 min',
      'City Walk — 5 min',
      'Gold Line Metro (planned)',
    ],
    hero: '/images/tower-sunset.png',
    gallery: [
      { src: '/images/garden-lounge.jpg', alt: 'Garden lounge and landscaped terraces' },
      { src: '/images/library-lounge.jpg', alt: 'Library lounge with marble feature wall' },
      { src: '/images/concierge-desk.jpg', alt: 'Concierge lobby services' },
      { src: '/images/lounge-marble.jpg', alt: 'Premium marble lounge interiors' },
      { src: '/images/cowork-cafe.jpg', alt: 'Co-working cafe space' },
      { src: '/images/bathroom-marble.jpg', alt: 'Natural stone bathroom finishes' },
    ],
    metroLine: 'Gold Line Metro',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
