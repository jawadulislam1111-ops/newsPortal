// Optional regeneration: install sharp locally with "npm install --no-save --package-lock=false sharp",
// then run "node scripts/prepare-media.cjs [source-cache-directory]". The site build uses the committed files.
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const sharp = require('sharp');
const sources = require('./media-sources.json');

const projectDir = path.resolve(__dirname, '..');
const mediaDir = path.join(projectDir, 'public', 'media');
const cacheDir = path.resolve(process.argv[2] || path.join(os.tmpdir(), 'dailypulse-seo-media'));
const newsBudgets = [[160, 12_000], [384, 35_000], [768, 95_000], [1200, 180_000]];

async function writeFile(target, bytes) {
  const staging = target + '.' + process.pid + '.tmp';
  try {
    await fs.writeFile(staging, bytes);
    await fs.rename(staging, target);
  } finally {
    await fs.rm(staging, { force: true });
  }
}

async function readSource(source, portrait) {
  if (!source.startsWith('https://')) return fs.readFile(path.join(projectDir, source));

  const url = new URL(source);
  const cached = path.join(cacheDir, path.basename(url.pathname) + '.jpg');
  try {
    return await fs.readFile(cached);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  url.search = portrait ? 'w=192&h=192&fit=crop&crop=faces&fm=jpg&q=88' : 'w=1440&fit=max&fm=jpg&q=88';
  const response = await fetch(url);
  if (!response.ok) throw new Error('Image download returned ' + response.status + ' for ' + source);
  const bytes = Buffer.from(await response.arrayBuffer());
  await sharp(bytes).metadata();
  await writeFile(cached, bytes);
  return bytes;
}

async function encode(image, file, limit) {
  for (const quality of [76, 70, 64, 58, 52, 46]) {
    const variant = image.clone();
    const bytes = file.endsWith('.webp')
      ? await variant.webp({ quality, effort: 5, smartSubsample: true }).toBuffer()
      : await variant.jpeg({ quality, mozjpeg: true }).toBuffer();
    if (bytes.length <= limit) return writeFile(file, bytes);
  }
  throw new Error('Verify the crop and byte budget for ' + file);
}

async function prepareNews(name, source) {
  const bytes = await readSource(source, false);
  const input = sharp(bytes).autoOrient();
  if (name === 'prosthetic-hand') {
    // In this portrait the fingertips sit above the center crop.
    const { width, height } = await input.metadata();
    const cropHeight = Math.round(width * 9 / 16);
    input.extract({ left: 0, top: Math.round((height - cropHeight) * 0.12), width, height: cropHeight });
  }
  const master = await input.resize(1200, 675, { fit: 'cover' }).png().toBuffer();
  const prefix = path.join(mediaDir, 'news', name + '-');
  for (const [width, limit] of newsBudgets) {
    await encode(sharp(master).resize(width), prefix + width + '.webp', limit);
  }
  await encode(sharp(master).resize(1200, 630, { fit: 'cover' }), prefix + 'social.jpg', 200_000);
}

async function preparePortrait(name, source) {
  const image = await readSource(source, true);
  for (const width of [48, 96, 160]) {
    const target = path.join(mediaDir, 'authors', name + '-' + width + '.webp');
    await encode(sharp(image).resize(width, width, { fit: 'cover' }), target, 10_000);
  }
}

async function prepareMasthead() {
  const masthead = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="#faf9f6"/>
    <path d="M60 62h1080" stroke="#24211e" stroke-width="3"/>
    <path d="M60 62h146" stroke="#d62828" stroke-width="7"/>
    <text x="56" y="209" font-family="Georgia,serif" font-size="130" font-weight="bold" letter-spacing="-5" fill="#1c1917">DAILY<tspan fill="#d62828">PULSE</tspan><tspan dy="-45" font-size="48" fill="#d62828">•</tspan></text>
    <text x="62" y="275" font-family="Arial,sans-serif" font-size="32" fill="#48443f">In-depth reporting, global perspectives, and breaking analysis.</text>
    <path d="M60 316h1080 M60 589h1080" stroke="#c9c5bd" stroke-width="2"/>
  </svg>`);
  const photos = [];
  for (const [index, name] of ['diplomatic-summit', 'quantum-processor', 'stadium-sprint'].entries()) {
    const input = path.join(mediaDir, 'news', name + '-768.webp');
    photos.push({ input: await sharp(input).resize(352, 238, { fit: 'cover' }).png().toBuffer(), left: 60 + 364 * index, top: 333 });
  }
  await encode(sharp(masthead).composite(photos), path.join(mediaDir, 'dailypulse-social.jpg'), 200_000);
}

async function main() {
  for (const dir of [cacheDir, path.join(mediaDir, 'news'), path.join(mediaDir, 'authors')]) {
    await fs.mkdir(dir, { recursive: true });
  }
  for (const [name, source] of Object.entries(sources.news)) await prepareNews(name, source);
  for (const [name, source] of Object.entries(sources.authors)) await preparePortrait(name, source);
  await prepareMasthead();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
