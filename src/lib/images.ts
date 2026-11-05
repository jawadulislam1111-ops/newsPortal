const newsDescriptions: Record<string, string> = {
  'diplomatic-summit': 'Reporters hold microphones and cameras around delegates beside a circular conference table.',
  'quantum-processor': 'Close-up of a gold-colored processor mounted on a black base among cables and instruments.',
  'stadium-sprint': 'A sprinter in a blue USA uniform races past a finish sign on a stadium track.',
  'stock-exchange': 'Traders work at banks of monitors beneath large screens filled with market charts.',
  'legislative-chamber': 'Delegates sit at wooden desks beneath tall arches in a legislative chamber.',
  'cinema-seats': 'An illuminated aisle divides rows of empty red cinema seats.',
  'coffee-and-planner': 'A cup of coffee rests on a monthly planner filled with handwritten notes.',
  'airport-control-tower': 'A passenger jet taxis in front of an airport control tower with sunlit hills behind it.',
  'justice-statue': 'A blindfolded statue of Justice holds a pair of hanging scales.',
  'sunlit-forest': 'Light filters between tall tree trunks and falls across a green forest floor.',
  'farm-fields': 'A low sun casts long shadows across a field bordered by trees.',
  'shared-workspace': 'An overhead view of people using laptops and phones around a shared table.',
  'cargo-terminal': 'Orange gantry cranes line a pier beside a container ship and rows of freight containers.',
  'alpine-valley': 'Snow-covered mountains rise beyond a broad valley framed by evergreens.',
  'football-pitch': 'A black-and-white football rests on sunlit grass.',
  'basketball-hoop': 'A basketball falls just below the white net of a hoop.',
  'tennis-forehand': 'A tennis player in an orange shirt reaches forward with a racket on an outdoor court.',
  'electric-car-charging': 'A charging cable is plugged into an open port on the side of a car.',
  'green-digital-code': 'Vertical columns of glowing green characters stand out against a black background.',
  'circuit-board': 'Rows of chips and small surface-mounted components cover a dark circuit board.',
  'office-towers': 'Dark glass office towers converge overhead against a pale sky.',
  'city-at-dusk': 'City lights stretch toward a distant cluster of high-rises under a blue evening sky.',
  'engineering-workbench': 'A woman works at a laptop between metal frames and equipment in an engineering lab.',
  'vinyl-records': 'Several people flip through record sleeves in boxes lined up on a table.',
  'stage-microphone': 'A single microphone stands in front of blurred blue and pink stage lights.',
  'vintage-games': 'Vintage keyboards, a handheld game console and small computer screens glow under colored lights.',
  'earth-at-night': 'Clusters of city lights shine on the curved surface of Earth seen from space.',
  'community-gathering': 'A crowd sits and stands in a gathering space strung with small lights.',
  'library-shelves': 'Rows of worn hardback books with colorful spines fill wooden shelves.',
  'formula-one': 'An open-wheel race car passes behind a wire safety fence on a street circuit.',
  'prosthetic-hand': 'An open blue prosthetic hand, with its finger joints visible, stands against a teal background.',
  'power-lines': 'Steel transmission towers carry power lines into the distance against an orange sunset.',
  'diver-and-fish': 'A scuba diver swims beside a dense school of yellow fish in blue water.',
  'laptop-keyboard': 'A partly closed silver laptop shows its keyboard and trackpad in purple and blue light.',
};

export const SITE_SOCIAL_IMAGE = '/media/dailypulse-social.jpg';

const articlePhoto = /^\/media\/news\/([a-z0-9-]+)-(\d+)\.webp$/;
const authorPortrait = /^\/media\/authors\/([a-z0-9-]+)-(\d+)\.webp$/;

export function imageAlt(src: string, fallback: string): string {
  if (authorPortrait.test(src)) return '';
  const match = articlePhoto.exec(src);
  return (match && newsDescriptions[match[1]]) || fallback;
}

export function socialImage(src: string): string {
  const photo = articlePhoto.exec(src);
  if (photo) return `/media/news/${photo[1]}-social.jpg`;
  if (authorPortrait.test(src)) return SITE_SOCIAL_IMAGE;
  if (/^\/(?![\/\\])/.test(src)) return src;
  try {
    const absolute = new URL(src);
    if (absolute.protocol === 'https:') return absolute.href;
  } catch {
    // Empty or malformed input uses the masthead preview.
  }
  return SITE_SOCIAL_IMAGE;
}

export function responsiveImage(src: string) {
  const photo = articlePhoto.exec(src);
  const portrait = authorPortrait.exec(src);
  const match = photo ?? portrait;
  if (!match) return undefined;

  const widths = photo ? [160, 384, 768, 1200] : [48, 96, 160];
  const directory = photo ? 'news' : 'authors';
  const width = Number(match[2]);
  const srcSet = widths.map(size => `/media/${directory}/${match[1]}-${size}.webp ${size}w`).join(', ');
  return { width, height: photo ? width * 9 / 16 : width, srcSet, sizes: photo ? '100vw' : '48px' };
}
