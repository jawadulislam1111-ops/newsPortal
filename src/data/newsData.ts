import { Article } from '../types';

export const BREAKING_NEWS = [
  {
    id: 'art-intl-01',
    headline: 'Global Climate Accord Reaches Historic Consensus on Clean Grid Financing at Geneva Summit',
  },
  {
    id: 'art-tech-01',
    headline: 'Breakthrough 1,024-Qubit Quantum Processor Achieves Fault-Tolerant Logical Operations',
  },
  {
    id: 'art-biz-01',
    headline: 'Global Markets Rally as Central Banks Signal Coordinated Pause on Benchmark Rates',
  },
  {
    id: 'art-nat-01',
    headline: 'Bipartisan Infrastructure Modernization Bill Clears Senate with Decisive 78-22 Vote',
  },
  {
    id: 'art-sports-01',
    headline: 'Marcus Vance Shatters 100m Championship Record in Thrilling Olympic Stadium Sprint',
  },
];

export const ARTICLES: Article[] = [
  // 1. LEAD HERO STORY (International)
  {
    id: 'art-intl-01',
    title: 'Historic Geneva Accord: 140 Nations Ratify Binding Framework for Clean Grid Financing',
    shortTitle: 'Geneva accord: 140 nations back clean grid financing',
    slug: 'geneva-accord-clean-grid-financing',
    excerpt: 'Delegates conclude grueling two-week marathon talks with unprecedented commitments to capitalize a $450 billion transition fund for emerging economies.',
    category: 'International',
    author: {
      name: 'Elena Rostova',
      role: 'Chief Diplomatic Correspondent',
      avatar: '/media/authors/blue-light-96.webp',
      bio: 'Elena has reported on international treaties and security councils across Geneva, Vienna, and New York for over 16 years.',
    },
    date: 'Nov 4, 2026',
    updatedDate: 'Nov 4, 2026, 09:42 EST',
    image: '/media/news/diplomatic-summit-768.webp',
    imageCaption: 'Illustrative view of a summit press gathering. Flags line the far side of the circular hall.',
    readTime: '6 min read',
    trending: true,
    featured: true,
    viewsCount: 142500,
    tags: ['Geneva Summit', 'Climate Finance', 'Renewable Energy', 'Diplomacy', 'Global Policy'],
    content: {
      paragraphs: [
        'GENEVA — Following fourteen days of round-the-clock plenary debate and contentious late-night drafting sessions, delegations representing 140 sovereign states today finalized the landmark Geneva Clean Grid Accord. The treaty formalizes a legally binding framework designed to mobilize over $450 billion in blended public and private capital over the next decade.',
        'The centerpiece of the accord is a multilateral credit enhancement facility administered through the International Energy Bank. By offering sovereign risk guarantees on clean utility expansion, developing economies in sub-Saharan Africa, Southeast Asia, and Latin America will be able to borrow at parity with developed nations for transmission lines, smart metering, and decentralized battery storage installations.',
        'Negotiators overcame a deadlock that had threatened to derail the conference during its second week. The key compromise centered on patent sharing mechanisms for next-generation solid-state storage and ultra-high-voltage direct current (UHVDC) transmission architectures, with developed economies agreeing to provide royalty-free technical licenses to low-income nations.',
        'Market analysts responded with immediate enthusiasm. Green bond yields eased across major financial centers as institutional asset managers prepared for a surge in vetted pipeline projects. Industry leaders noted that grid modernization has long been the primary bottleneck impeding the addition of utility-scale solar and offshore wind farms to regional distribution networks.',
        'Civil society representatives and independent climate auditors offered cautious optimism while stressing that governance and enforcement will determine the treaty\'s ultimate legacy. Stringent annual audit benchmarks were incorporated into Article 12, requiring participating nations to publish verifiable telemetry regarding interconnection capacity and carbon displacement metrics.',
        'As heads of state departed Geneva to sign formal domestic ratification packages, the summit presidency praised the spirit of compromise that bridged stark geopolitical divides. Implementation committees are scheduled to convene in Nairobi early next spring to finalize the inaugural disbursement tranches.'
      ],
      subheadings: [
        { index: 2, text: 'Overcoming the Intellectual Property Impasse' },
        { index: 4, text: 'Enforcement Mechanisms and Independent Auditing' },
      ],
      pullQuote: {
        quote: 'This is not merely a declaration of good intentions; it is an engineered financial engine that turns decarbonization into a viable bankable reality for every continent.',
        author: 'Dr. Amina Diallo, Summit Co-Chair',
      },
      inlineImage: {
        src: '/media/news/legislative-chamber-768.webp',
        caption: 'Arched windows overlook a chamber filled with delegates.',
      },
    },
  },

  // 2. TECHNOLOGY LEAD
  {
    id: 'art-tech-01',
    title: 'Breakthrough 1,024-Qubit Quantum Processor Achieves Fault-Tolerant Logical Operations',
    shortTitle: '1,024-qubit processor demonstrates fault tolerance',
    slug: 'quantum-processor-1024-qubit-logical-fault-tolerant',
    excerpt: 'Engineers demonstrate continuous error correction without computational decoherence, clearing the path for molecular drug discovery and cryptography.',
    category: 'Technology',
    author: {
      name: 'Dr. Aris Vance',
      role: 'Senior Tech & Quantum Editor',
      avatar: '/media/authors/grey-background-96.webp',
      bio: 'Dr. Vance holds a doctorate in condensed matter physics and covers deep tech, semiconductors, and machine learning.',
    },
    date: 'Nov 4, 2026',
    updatedDate: 'Nov 4, 2026, 08:15 EST',
    image: '/media/news/quantum-processor-768.webp',
    imageCaption: 'Illustrative close-up of a processor package mounted on a laboratory test fixture.',
    readTime: '7 min read',
    trending: true,
    featured: true,
    viewsCount: 118200,
    tags: ['Quantum Computing', 'Semiconductors', 'Hardware', 'Cryptography', 'Deep Tech'],
    content: {
      paragraphs: [
        'SANTA CLARA — In what computer scientists are already characterizing as a watershed moment for quantum hardware, researchers at the Advanced Computation Laboratory today published verified benchmarks demonstrating sustained fault-tolerant computation across 1,024 physical qubits.',
        'For decades, the central challenge facing quantum engineers has been "decoherence" — the tendency of delicate quantum superposition states to collapse when exposed to minuscule thermal vibrations, electromagnetic stray fields, or material impurities. Today\'s breakthrough leverages a topological surface code that groups 64 physical qubits into a single, self-correcting "logical qubit."',
        'By orchestrating active syndrome measurements every 120 nanoseconds, the chip detected and neutralised phase-flip and bit-flip anomalies before they could cascade into calculation errors. The system maintained coherent logical operations for more than four hours of continuous high-load matrix manipulation.',
        'The immediate commercial implications are vast. While previous quantum prototypes could only run toy simulations, a 16-logical-qubit cluster possesses sufficient computational depth to calculate complex protein folding geometries and simulate enzyme-inhibitor bonding kinetics with sub-atomic fidelity.',
        'Pharmaceutical research consortia have already contracted reserved runtime on the system to model non-addictive opioid receptor agonists and carbon-capture enzymatic catalysts. Computational chemistry, traditionally limited to crude classical approximations, is poised for a profound acceleration.',
        'Commercial deployment will initially occur via secure cloud infrastructure, as the processor requires millikelvin dilution refrigeration and high-purity microwave pulse generators. However, researchers are confident that manufacturing on standard 300mm silicon wafer lines will allow rapid scalability over the coming fiscal quarters.'
      ],
      subheadings: [
        { index: 2, text: 'Active Error Correction in Under 120 Nanoseconds' },
        { index: 4, text: 'Transforming Molecular Drug Discovery' },
      ],
      pullQuote: {
        quote: 'We have crossed the threshold from noisy intermediate-scale hardware to true, dependable computational quantum advantage.',
        author: 'Prof. Marcus Lindqvist, Lead Investigator',
      },
      inlineImage: {
        src: '/media/news/stock-exchange-768.webp',
        caption: 'Trading desks sit below a bank of market displays.',
      },
    },
  },

  // 3. SPORTS LEAD
  {
    id: 'art-sports-01',
    title: 'Marcus Vance Shatters 100m Championship Record in Thrilling Olympic Stadium Sprint',
    shortTitle: 'Marcus Vance breaks the 100m championship record',
    slug: 'marcus-vance-shatters-100m-record',
    excerpt: 'Clawing back from a conservative start, the 22-year-old clocked an astonishing 9.68 seconds to seize the gold and stun veteran rivals.',
    category: 'Sports',
    author: {
      name: 'Tariq Al-Mansoor',
      role: 'Chief Athletics Writer',
      avatar: '/media/authors/dark-shirt-96.webp',
      bio: 'Tariq has covered five Summer and Winter Games, specialized in track, field, and endurance analytics.',
    },
    date: 'Nov 3, 2026',
    updatedDate: 'Nov 4, 2026, 06:10 EST',
    image: '/media/news/stadium-sprint-768.webp',
    imageCaption: 'Illustrative view of a stadium sprint, with spectators lining the final stretch.',
    readTime: '5 min read',
    trending: true,
    featured: true,
    viewsCount: 96400,
    tags: ['Track and Field', '100m Sprint', 'Athletics', 'World Record', 'Championship'],
    content: {
      paragraphs: [
        'LONDON — Under a sea of flashing stadium strobes and 80,000 roaring spectators, Marcus Vance produced one of the most blistering displays of human acceleration ever witnessed on a tartan track, crossing the line in 9.68 seconds to capture the World Athletics Gold.',
        'The victory was far from a foregone conclusion. Out of block four, reigning champion Devin Cole launched with explosive reaction timing, opening a two-stride lead through the initial 30-meter transition phase. Vance, whose upright stride mechanics rely on immense top-end velocity, appeared momentarily boxed in third.',
        'What followed between the 50-meter mark and the 80-meter split was sheer biomechanical mastery. Vance lowered his chin, achieved maximum stride extension, and surged past Cole and Jamaican finalist Kemar Wright with a cadence recorded at 4.95 strides per second.',
        'Wind gauges confirmed a legal tailwind of +1.4 m/s, making the mark the fastest official electronic time recorded in over a decade. Stadium commentators and rival coaches alike stood in collective disbelief as the timing display flashed 9.68.',
        'At the post-race press conference, Vance credited an offseason overhaul of his spinal alignment and neuromuscular firing drills with his head coach. He pointed out that remaining calm when trailing early was the decisive psychological breakthrough.',
        'The athletics calendar now pivots toward the 200m semifinals on Thursday, where Vance will attempt an historic sprint double. If his opening round performance is any indication, another world record may soon be within striking distance.'
      ],
      subheadings: [
        { index: 2, text: 'The Decisive 50-to-80 Meter Surge' },
        { index: 4, text: 'Biomechanics and Mental Composure' },
      ],
      pullQuote: {
        quote: 'I didn\'t panic when Devin jumped out. I knew once my hips aligned at 60 meters, nobody in the world could match my turnover.',
        author: 'Marcus Vance, 100m World Champion',
      },
    },
  },

  // 4. BUSINESS LEAD
  {
    id: 'art-biz-01',
    title: 'Global Markets Rally as Central Banks Signal Coordinated Pause on Benchmark Interest Rates',
    shortTitle: 'Markets rally as central banks signal a rate pause',
    slug: 'global-markets-rally-central-banks-rate-pause',
    excerpt: 'Cooling services inflation and stabilized supply lines prompt monetary policy committees to maintain borrowing benchmarks unchanged.',
    category: 'Business',
    author: {
      name: 'Victoria Sterling',
      role: 'Global Economics Editor',
      avatar: '/media/authors/office-96.webp',
      bio: 'Victoria brings two decades of Wall Street and City of London macro-economic coverage to DailyPulse.',
    },
    date: 'Nov 4, 2026',
    updatedDate: 'Nov 4, 2026, 09:10 EST',
    image: '/media/news/stock-exchange-768.webp',
    imageCaption: 'Illustrative view of an exchange floor, where overhead screens display prices and market charts.',
    readTime: '5 min read',
    trending: true,
    featured: true,
    viewsCount: 88700,
    tags: ['Stock Market', 'Central Banks', 'Inflation', 'Economy', 'Federal Reserve'],
    content: {
      paragraphs: [
        'NEW YORK — Equities across Wall Street, Tokyo, and Frankfurt posted their sharpest single-day gains of the quarter following synchronized statements from major central banks signaling an indefinite pause on interest rate hikes.',
        'The joint communication, released simultaneously by the Federal Reserve, the European Central Bank, and the Bank of England, underscored that annualized headline inflation has returned within striking distance of the canonical 2.0% target band without precipitating a labor market contraction.',
        'Bond markets rallied aggressively, driving the benchmark 10-year Treasury yield down 18 basis points to 3.64%. Corporate debt issuers seized the window of tight credit spreads to price over $28 billion in fresh investment-grade offerings before market close.',
        'Tech stocks and capital-intensive manufacturers led the equity surge. With lower anticipated borrowing expenses, discounted cash flow valuations for growth firms expanded, lifting the technology composite higher by 3.1%.',
        'However, central bankers inserted measured cautionary phrasing into their formal communiqués. The chair cautioned that stubborn housing services shelter costs and geopolitical energy shipping variables could yet force policy adjustments if price stability wavers.',
        'Retail investors and institutional pension funds appeared unbothered by the caveats. Trading volumes were 40% above the 30-day moving average, signaling renewed appetite for equity risk across global asset allocations.'
      ],
      subheadings: [
        { index: 2, text: 'Bond Yields Drop as Credit Spreads Narrow' },
        { index: 4, text: 'Measuring the Persistence of Housing Shelter Costs' },
      ],
      pullQuote: {
        quote: 'We have navigated the most aggressive tightening cycle in forty years and landed with robust employment and tame wholesale pricing.',
        author: 'Federal Reserve Policy Statement',
      },
    },
  },

  // 5. NATIONAL LEAD
  {
    id: 'art-nat-01',
    title: 'Bipartisan Infrastructure Modernization Bill Clears Senate with Decisive 78-22 Vote',
    shortTitle: 'Senate passes infrastructure bill in a 78–22 vote',
    slug: 'bipartisan-infrastructure-bill-clears-senate',
    excerpt: 'The $320 billion package funds highway bridge reconstructions, high-speed rail corridors, and rural fiber broadband connectivity.',
    category: 'National',
    author: {
      name: 'Julian Thorne',
      role: 'Capitol Hill Bureau Chief',
      avatar: '/media/authors/side-profile-96.webp',
      bio: 'Julian has covered congressional legislation, supreme court oral arguments, and presidential campaigns since 2012.',
    },
    date: 'Nov 3, 2026',
    updatedDate: 'Nov 4, 2026, 07:30 EST',
    image: '/media/news/legislative-chamber-768.webp',
    imageCaption: 'Illustrative view of a legislative chamber with facing rows of wooden desks.',
    readTime: '6 min read',
    trending: true,
    featured: true,
    viewsCount: 79200,
    tags: ['Senate', 'Congress', 'Infrastructure', 'Broadband', 'Transit'],
    content: {
      paragraphs: [
        'WASHINGTON — In a rare display of cross-aisle unity during an election year, the Senate voted 78 to 22 late Tuesday evening to pass the comprehensive Infrastructure Modernization and Connectivity Act.',
        'The legislation allocates $320 billion over a five-year horizon, prioritizing the structural rehabilitation of more than 14,000 structurally deficient bridges across all fifty states. It also commits $65 billion to accelerate high-speed passenger rail links connecting major regional metropolitan clusters.',
        'A contentious provision regarding environmental permitting reform was ironed out in last-minute negotiations between moderate caucus leaders. The compromise establishes an expedited 18-month maximum review timeline for clean transit projects while preserving local community notice requirements.',
        'State departments of transportation have already begun queuing priority shovel-ready projects. Governors from both political parties released statements praising the predictable multi-year federal funding formula, which replaces piecemeal temporary appropriations.',
        'The bill also addresses the digital divide, mandating gigabit-speed fiber optic broadband access to 2.4 million underserved rural households and tribal communities within three years.',
        'The measure now moves to the President’s desk, where an official signing ceremony in the Rose Garden has been scheduled for Thursday morning with labor union leaders and civil engineering delegates.'
      ],
      subheadings: [
        { index: 2, text: 'Streamlined Permitting for Clean Rail Links' },
        { index: 4, text: 'Bridging the Rural Gigabit Fiber Divide' },
      ],
      pullQuote: {
        quote: 'Today\'s vote proves that when it comes to the bridges our families cross and the water systems our children drink from, our republic can still govern with vision.',
        author: 'Senator Claire Holloway, Co-Sponsor',
      },
    },
  },

  // 6. ENTERTAINMENT LEAD
  {
    id: 'art-ent-01',
    title: 'Venice Golden Lion Winner "Echoes of Silence" Reinvents Practical Cinema in an AI Era',
    shortTitle: 'Venice winner “Echoes of Silence” revives practical cinema',
    slug: 'venice-winner-echoes-of-silence-cinema',
    excerpt: 'Director Maya Lin’s 70mm tactile masterpiece relies purely on hand-built physical sets and analog sound design to create an astonishing sensory tour de force.',
    category: 'Entertainment',
    author: {
      name: 'Chloe Chevalier',
      role: 'Film Critic & Cultural Columnist',
      avatar: '/media/authors/outdoors-96.webp',
      bio: 'Chloe reviews international film festivals, theater debuts, and emerging narrative media.',
    },
    date: 'Nov 3, 2026',
    updatedDate: 'Nov 3, 2026, 19:20 EST',
    image: '/media/news/cinema-seats-768.webp',
    imageCaption: 'Rows of upholstered seats face the screen in an empty cinema.',
    readTime: '5 min read',
    trending: false,
    featured: true,
    viewsCount: 54100,
    tags: ['Film', 'Venice Film Festival', 'Cinema', 'Maya Lin', 'Culture'],
    content: {
      paragraphs: [
        'VENICE — In an entertainment landscape increasingly saturated with synthetic VFX backgrounds and generative visual effects, Maya Lin’s Venice triumph "Echoes of Silence" arrives as a glorious, defiant declaration of physical cinema.',
        'Captured entirely on 65mm analog film using refurbished Panavision anamorphic lenses from the 1970s, the three-hour drama chronicles three generations of deep-sea lighthouse keepers on an isolated North Atlantic outpost.',
        'Every sound in the film — from the groaning timber of the keeper\'s spiral stairs to the shattering impact of twenty-foot storm swells — was recorded live on location by legendary foley master Jean-Luc Martin. The result is a visceral acoustic presence that reverberates through the theater seats.',
        'Critics on the Lido gave the screening a ten-minute standing ovation. Distributors entered a fierce midnight bidding war before boutique studio A24 secured worldwide theatrical rights for an exclusive sixty-day window in IMAX and 70mm specialty venues.',
        'Lead actress Clara Silva delivers a performance of piercing restraint, conveying years of isolation and ancestral grief with scarcely forty lines of spoken dialogue throughout the film\'s second act.',
        '"Echoes of Silence" stands as proof that human tactile craft and genuine optical lenses possess an emotional resonance no algorithmic rendering pipeline can fabricate.'
      ],
      subheadings: [
        { index: 2, text: 'Analog Soundscapes and Location Recording' },
        { index: 4, text: 'A Fierce Midnight Theatrical Bidding War' },
      ],
      pullQuote: {
        quote: 'You cannot fake the way ocean spray clings to an optical lens, or the way natural salt wind rustles an actor\'s coat. The camera knows when something is truly alive.',
        author: 'Maya Lin, Director',
      },
    },
  },

  // 7. OPINION LEAD
  {
    id: 'art-op-01',
    title: 'The Great Human Attention Audit: Why 2026 Must Be the Year of Deliberate Slowness',
    shortTitle: 'Opinion: The case for slowing down in 2026',
    slug: 'great-human-attention-audit-deliberate-slowness',
    excerpt: 'As automated feeds optimize for fraction-of-a-second dopamine bursts, our capacity for deep synthesis is becoming our rarest and most valuable asset.',
    category: 'Opinion',
    author: {
      name: 'Gabriel Morales',
      role: 'Contributing Essayist & Sociologist',
      avatar: '/media/authors/glasses-96.webp',
      bio: 'Gabriel Morales writes on technology, cognition, and philosophy. He teaches at the Institute for Media Studies.',
    },
    date: 'Nov 4, 2026',
    updatedDate: 'Nov 4, 2026, 07:00 EST',
    image: '/media/news/coffee-and-planner-768.webp',
    imageCaption: 'A paper calendar sets out a month of handwritten plans.',
    readTime: '6 min read',
    trending: true,
    featured: true,
    viewsCount: 71200,
    tags: ['Attention Economy', 'Culture', 'Philosophy', 'Deep Work', 'Digital Well-being'],
    content: {
      paragraphs: [
        'We live in an age where information is infinite, instantaneous, and cheap — yet wisdom has never seemed scarcer or harder to cultivate. Our digital environments are deliberately architected to reward the shallow scan, the reflexive outrage, and the immediate reply.',
        'When every notification ping demands immediate cognitive triage, the deeper neurological circuits responsible for contemplation, long-term pattern recognition, and genuine empathy atrophy from disuse. We trade deep understanding for a frantic, endless triage of the immediate.',
        'This is not merely an individual lifestyle dilemma; it is a profound civic crisis. Democratic deliberation cannot survive if citizens are unable to sustain focus across a ten-minute policy debate or parse a complex legislative compromise beyond an inflammatory headline.',
        'In response, a quiet counter-revolution is taking root. Across universities, research institutes, and creative studios, individuals are implementing "attention audits" — intentionally rationing algorithmic feeds and reintroducing long-form reading as an active daily discipline.',
        'Reading an extended book or a meticulously researched investigative article is not a luxury pastime; it is an act of cognitive sovereignty. It is the refusal to surrender one’s inner life to engagement optimization algorithms.',
        'If 2026 is to mark a turning point in our cultural health, we must begin by treating human attention not as raw material for advertising auctions, but as the sacred foundation of human thought.'
      ],
      subheadings: [
        { index: 2, text: 'The Civic Consequences of Fragmented Focus' },
        { index: 4, text: 'Reclaiming Cognitive Sovereignty' },
      ],
      pullQuote: {
        quote: 'To choose what you pay attention to is the ultimate definition of human freedom. When you lose that choice, you lose everything.',
        author: 'Gabriel Morales',
      },
    },
  },

  // 8. ADDITIONAL NATIONAL ARTICLES
  {
    id: 'art-nat-02',
    title: 'Federal Aviation Administration Unveils Next-Gen Electric Aircraft Airspace Guidelines',
    shortTitle: 'FAA unveils airspace guidelines for electric aircraft',
    slug: 'faa-electric-aircraft-airspace-guidelines',
    excerpt: 'Regional commuter routes will soon integrate quiet vertical take-off aircraft into metropolitan skyways under new safety certifications.',
    category: 'National',
    author: { name: 'Julian Thorne', role: 'Capitol Hill Bureau Chief', avatar: '/media/authors/side-profile-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/airport-control-tower-768.webp',
    imageCaption: 'A passenger jet passes the control tower at San Francisco International Airport. Hieu / Unsplash.',
    readTime: '4 min read',
    tags: ['Aviation', 'FAA', 'Clean Transit', 'Urban Mobility'],
    content: {
      paragraphs: [
        'WASHINGTON — The Federal Aviation Administration today released its comprehensive regulatory framework governing electric vertical takeoff and landing (eVTOL) aircraft for commercial regional transport.',
        'The rules set stringent acoustic thresholds, requiring new aircraft to generate less than 55 decibels during hover — quieter than standard metropolitan vehicular traffic.',
        'Initial air taxi corridors will link metropolitan airports with outlying suburban transit hubs starting in early 2027.',
        'Safety advocates commended the inclusion of triple-redundant fly-by-wire flight controllers and mandatory autonomous collision avoidance transponders on all commercial models.',
        'Airlines have already placed provisional fleet orders totaling over $12 billion with leading aerospace developers.',
        'Public comment periods will remain open for forty-five days before final implementation rules are filed in the federal register.'
      ]
    }
  },
  {
    id: 'art-nat-03',
    title: 'Supreme Court Hears Landmark Arguments on Digital Privacy and Biometric Surveillance',
    shortTitle: 'Supreme Court hears biometric privacy case',
    slug: 'supreme-court-digital-privacy-biometrics',
    excerpt: 'Justices question government limits on automated facial recognition in public public plazas without individual probable cause warrants.',
    category: 'National',
    author: { name: 'Julian Thorne', role: 'Capitol Hill Bureau Chief', avatar: '/media/authors/side-profile-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/justice-statue-768.webp',
    imageCaption: 'A statue of Justice holds up her scales.',
    readTime: '5 min read',
    tags: ['Supreme Court', 'Biometrics', 'Privacy', 'Civil Rights', 'Law'],
    content: {
      paragraphs: [
        'WASHINGTON — In a packed courtroom, the Supreme Court today examined whether passive biometric scanning in public transit plazas constitutes a warrantless search under the Fourth Amendment.',
        'Attorneys representing civil liberties coalitions argued that persistent algorithmic tracking creates a panopticon that chills speech and peaceful assembly.',
        'Government advocates maintained that public street scans are comparable to traditional police patrols and essential for counterterrorism deterrence.',
        'Several justices expressed skepticism regarding the sheer scale of modern automated databases capable of indexing millions of faces per second.',
        'A ruling is expected before the summer recess and will define the constitutional boundaries of algorithmic law enforcement for decades.',
        'State lawmakers across eighteen states have paused local surveillance rollouts pending the high court’s landmark determination.'
      ]
    }
  },
  {
    id: 'art-nat-04',
    title: 'National Forest Service Deploys Autonomous Solar Drones for Early Wildfire Detection',
    shortTitle: 'Forest Service deploys solar drones to spot wildfires',
    slug: 'forest-service-autonomous-wildfire-drones',
    excerpt: 'Thermal imaging swarms detect nascent tree lightning strikes within 90 seconds, dramatically reducing containment response times.',
    category: 'National',
    author: { name: 'Sarah Jenkins', role: 'Environmental Policy Reporter', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/sunlit-forest-768.webp',
    imageCaption: 'Light reaches the forest floor in Bad Pyrmont, Germany. Sebastian Unrau / Unsplash.',
    readTime: '4 min read',
    tags: ['Forestry', 'Wildfires', 'Drones', 'Technology', 'Climate'],
    content: {
      paragraphs: [
        'DENVER — Forest managers in the western United States have completed the first full seasonal deployment of autonomous solar-powered gliders tasked with perimeter wildfire reconnaissance.',
        'Equipped with multispectral infrared cameras, the drones maintain continuous 48-hour patrols at 15,000 feet, detecting thermal hotspots smaller than a campfire under dense forest canopies.',
        'During initial trials, the network detected three lightning-sparked blazes within ninety seconds of ignition, allowing helicopter water drop crews to extinguish them before spreading past a quarter acre.',
        'Local firefighting chiefs hailed the system as a game changer for crew safety and property preservation.',
        'The federal program will expand to cover ten million additional acres of old-growth timberland ahead of next summer.',
        'Insurance underwriters have indicated that verified autonomous detection coverage will help stabilize homeowner premiums in high-risk wildland-urban interfaces.'
      ]
    }
  },
  {
    id: 'art-nat-05',
    title: 'Midwestern States Form Agricultural Water Compact to Preserve Ogallala Aquifer',
    shortTitle: 'Midwestern states agree to protect the Ogallala Aquifer',
    slug: 'midwestern-agricultural-water-compact-ogallala',
    excerpt: 'Governors agree on unified groundwater withdrawal quotas and sensor-based drip irrigation subsidies to secure century-long food resilience.',
    category: 'National',
    author: { name: 'Julian Thorne', role: 'Capitol Hill Bureau Chief', avatar: '/media/authors/side-profile-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/farm-fields-768.webp',
    imageCaption: 'Low sunlight brings out the contours of a farm field.',
    readTime: '4 min read',
    tags: ['Agriculture', 'Water', 'Midwest', 'Environment', 'Economy'],
    content: {
      paragraphs: [
        'OMAHA — Eight Midwestern governors today signed a historic interstate compact establishing binding extraction ceilings on the Ogallala Aquifer, the continent\'s largest freshwater repository.',
        'Decades of intensive grain cultivation have lowered water tables across Kansas, Nebraska, and Texas to historic depths, threatening the long-term viability of national grain exports.',
        'The compact creates a shared sensor telemetry grid that monitors agricultural wells in real time, granting tax rebates to farmers who transition to precision subterranean drip lines.',
        'Agronomists estimate the measures will cut agricultural groundwater consumption by 28% without reducing overall corn and soybean yields.',
        'Farm bureau representatives endorsed the agreement, emphasizing that predictable groundwater preservation is the only safeguard against generational drought.',
        'Federal matching grants will provide $1.8 billion to retrofit older center-pivot irrigation systems with low-pressure drop nozzles.'
      ]
    }
  },

  // 9. ADDITIONAL INTERNATIONAL ARTICLES
  {
    id: 'art-intl-02',
    title: 'European Union Finalizes Digital Sovereignty Framework for Cloud Infrastructure',
    shortTitle: 'EU finalizes digital sovereignty rules for cloud services',
    slug: 'eu-digital-sovereignty-cloud-infrastructure',
    excerpt: 'Strict data residency rules require critical public sector workloads to reside entirely within verified continent-based data centers.',
    category: 'International',
    author: { name: 'Elena Rostova', role: 'Chief Diplomatic Correspondent', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/shared-workspace-768.webp',
    imageCaption: 'Several people work side by side on laptops at a shared table.',
    readTime: '4 min read',
    tags: ['EU', 'Cloud', 'Data Privacy', 'Tech Policy', 'Europe'],
    content: {
      paragraphs: [
        'BRUSSELS — The European Parliament approved new cloud sovereignty standards requiring sensitive healthcare, energy, and defense workloads to operate on servers free from extraterritorial legal seizure.',
        'The directive establishes the EuroCloud Compliance Shield, mandating European-owned operational subsidiaries and open cryptographic interoperability standards.',
        'Major international hyperscalers announced multi-billion euro capital commitments to construct isolated sovereign zones in Frankfurt, Dublin, and Stockholm.',
        'Proponents argue the regulations shield European enterprises from foreign subpoena interference and enhance continental cyber-resilience.',
        'Trade organizations from allied nations praised the predictable timeline, noting that explicit technical standards eliminate years of regulatory ambiguity.',
        'The rules will phase in over a thirty-six month period, beginning with public health records and power grid control infrastructure.'
      ]
    }
  },
  {
    id: 'art-intl-03',
    title: 'Pacific Rim Trade Alliance Inks Tariff-Free Green Corridor for Critical Battery Minerals',
    shortTitle: 'Pacific Rim trade pact lifts tariffs on battery minerals',
    slug: 'pacific-rim-trade-alliance-green-minerals',
    excerpt: 'Australia, Japan, South Korea, and Canada sign an agreement streamlining supply chains for lithium, nickel, and processed cobalt.',
    category: 'International',
    author: { name: 'Elena Rostova', role: 'Chief Diplomatic Correspondent', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/cargo-terminal-768.webp',
    imageCaption: 'Gantry cranes unload a container ship at the Port of Vancouver, Canada. Daniel Miksha / Unsplash.',
    readTime: '4 min read',
    tags: ['Trade', 'Batteries', 'Minerals', 'Pacific Rim', 'Supply Chain'],
    content: {
      paragraphs: [
        'TOKYO — Trade ministers from four major Pacific economies today ratified the Critical Minerals Trade Accord, eliminating customs duties and customs processing bottlenecks on sustainably refined battery elements.',
        'The agreement establishes standardized environmental and human-rights traceability audits, allowing verified clean minerals to clear maritime customs within twelve hours.',
        'Automotive manufacturers praised the treaty, citing improved predictability for gigafactory production schedules in North America and East Asia.',
        'The pact also creates a joint mineral exploration reserve to buffer against international supply shocks or speculative price squeezes.',
        'Participating nations agreed to harmonize recycling protocols to ensure secondary minerals from decommissioned EV packs enter circular supply loops.',
        'Indonesia and Chile have initiated formal consultations to join the corridor as associate members by the end of next fiscal quarter.'
      ]
    }
  },
  {
    id: 'art-intl-04',
    title: 'Cross-Border Himalayan Seismic Observatory Network Completes 10,000-Sensor Array',
    shortTitle: 'Himalayan observatory completes 10,000-sensor array',
    slug: 'himalayan-seismic-observatory-10000-sensors',
    excerpt: 'India, Nepal, and Bhutan launch a shared deep-crust monitoring system providing twenty-minute advance alerts for catastrophic tectonic shifts.',
    category: 'International',
    author: { name: 'Dr. Aris Vance', role: 'Senior Tech & Science Editor', avatar: '/media/authors/grey-background-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/alpine-valley-768.webp',
    imageCaption: 'A mountain range frames a broad valley beyond an evergreen forest.',
    readTime: '5 min read',
    tags: ['Science', 'Seismology', 'Himalayas', 'Geology', 'Disaster Relief'],
    content: {
      paragraphs: [
        'KATHMANDU — Geological surveys from India, Nepal, and Bhutan completed installation of the world’s densest high-altitude seismic sensor network across the central Himalayan arc.',
        'The 10,000 borehole sensors measure micro-strain anomalies deep within the Main Himalayan Thrust fault, streaming telemetry via low-Earth-orbit satellites to unified civil defense servers.',
        'Scientists anticipate the network will provide up to fifteen minutes of actionable warning before major seismic ruptures reach populous valley basins.',
        'The collaborative project was funded jointly by regional disaster mitigation funds and international scientific foundations.',
        'Emergency response agencies in Kathmandu, New Delhi, and Thimphu have connected the data feeds to automated subway braking and gas valve shutoff triggers.',
        'Geophysicists will present the initial three-dimensional crustal deformation models at the International Union of Geodesy conference next month.'
      ]
    }
  },

  // 10. ADDITIONAL SPORTS ARTICLES
  {
    id: 'art-sports-02',
    title: 'Champions League Classic: Real Madrid Edge Bayern Munich in 5-4 Extra-Time Thriller',
    shortTitle: 'Real Madrid edge Bayern 5–4 in Champions League thriller',
    slug: 'champions-league-real-madrid-bayern-5-4',
    excerpt: 'An audacious 118th-minute bicycle kick settles an unforgettable night of European football at the Santiago Bernabéu.',
    category: 'Sports',
    author: { name: 'Tariq Al-Mansoor', role: 'Chief Athletics Writer', avatar: '/media/authors/dark-shirt-96.webp' },
    date: 'Nov 4, 2026',
    image: '/media/news/football-pitch-768.webp',
    imageCaption: 'A football sits on a sunlit pitch. Giero Saaski / Unsplash.',
    readTime: '4 min read',
    tags: ['Champions League', 'Football', 'Soccer', 'Real Madrid', 'Bayern Munich'],
    content: {
      paragraphs: [
        'MADRID — In a match that will enter European football folklore, Real Madrid secured their place in the Champions League final with a breathless 5-4 extra-time victory over Bayern Munich.',
        'The match swung back and forth four times during ninety minutes of breathless end-to-end tactical football.',
        'With penalty kicks looming at 4-4, teenage winger Mateo Rossi launched into an airborne acrobatic volley to smash the winner past Manuel Neuer.',
        'The stadium erupted in pandemonium as the Bernabéu crowd showered the young prodigy in praise.',
        'Bayern manager Thomas Tuchel lamented defensive lapses during set pieces but praised the courage of his squad.',
        'Madrid will now face Manchester City in London for the ultimate club trophy in football.'
      ]
    }
  },
  {
    id: 'art-sports-03',
    title: 'NBA Showdown: Thunder Edge Celtics in Double-Overtime Showcase of Modern Spacing',
    shortTitle: 'Thunder beat Celtics in double overtime',
    slug: 'thunder-celtics-double-overtime-nba',
    excerpt: 'Shai Gilgeous-Alexander and Jayson Tatum trade masterclasses in a 138-135 offensive showcase that delighted basketball purists.',
    category: 'Sports',
    author: { name: 'Tariq Al-Mansoor', role: 'Chief Athletics Writer', avatar: '/media/authors/dark-shirt-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/basketball-hoop-768.webp',
    imageCaption: 'A basketball drops beneath the hoop.',
    readTime: '4 min read',
    tags: ['NBA', 'Basketball', 'Thunder', 'Celtics', 'Hoops'],
    content: {
      paragraphs: [
        'OKLAHOMA CITY — The two top seeds from the Western and Eastern conferences delivered a masterclass in modern pace and perimeter spacing on Tuesday night.',
        'Gilgeous-Alexander recorded 44 points and 12 assists, converting two clutch step-back jumpers in the final minute of the second overtime period.',
        'Tatum matched him with 41 points of his own, including a contested 30-foot buzzer-beater to force the second extra session.',
        'Coaches from both sidelines praised the remarkable shot-making efficiency despite physical playoff-caliber defense.',
        'The Thunder move to 18-2 on the season, cementing their status as legitimate championship contenders.',
        'The teams will meet again in Boston next January for the concluding chapter of their regular season series.'
      ]
    }
  },
  {
    id: 'art-sports-04',
    title: 'Grand Slam Revolution: Wimbledon Approves Evening Matches Under Upgraded LED Roofs',
    shortTitle: 'Wimbledon approves evening matches under LED roofs',
    slug: 'wimbledon-evening-matches-led-roofs',
    excerpt: 'The All England Club adopts state-of-the-art non-glare illumination to extend Centre Court play safely until midnight.',
    category: 'Sports',
    author: { name: 'Tariq Al-Mansoor', role: 'Chief Athletics Writer', avatar: '/media/authors/dark-shirt-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/tennis-forehand-768.webp',
    imageCaption: 'A player stretches toward the ball on an outdoor tennis court.',
    readTime: '3 min read',
    tags: ['Tennis', 'Wimbledon', 'Grand Slam', 'Sports'],
    content: {
      paragraphs: [
        'LONDON — In a break with century-old tradition, the All England Club today announced that Wimbledon will expand scheduled evening sessions on both Centre Court and No. 1 Court.',
        'Newly installed micro-LED fixtures reproduce natural daylight spectra without casting blinding glare across the grass playing surface.',
        'The shift addresses broadcaster demand in the Americas and Asia while sparing fans the abrupt 11:00 PM curfews that previously curtailed epic fifth-set clashes.',
        'Player representatives voiced strong support, noting that predictable match start times prevent hours of locker-room waiting.',
        'Tickets for the inaugural evening sessions will be allocated via the traditional Wimbledon public ballot early next spring.',
        'Environmental audits indicate the LED upgrade reduces tournament lighting energy consumption by 45%.'
      ]
    }
  },

  // 11. ADDITIONAL TECHNOLOGY ARTICLES
  {
    id: 'art-tech-02',
    title: 'Solid-State Battery Breakthrough Promises 1,000-Mile EV Range and 10-Minute Fast Charging',
    shortTitle: 'Solid-state battery promises 1,000-mile EV range',
    slug: 'solid-state-battery-1000-mile-ev-range',
    excerpt: 'Ceramic electrolyte cells pass grueling thermal puncture testing with zero degradation over 2,000 rapid charge cycles.',
    category: 'Technology',
    author: { name: 'Dr. Aris Vance', role: 'Senior Tech & Quantum Editor', avatar: '/media/authors/grey-background-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/electric-car-charging-768.webp',
    imageCaption: 'A charging cable connects to a vehicle through its open charging port. CHUTTERSNAP / Unsplash.',
    readTime: '5 min read',
    tags: ['Battery', 'Electric Vehicles', 'Clean Tech', 'Engineering', 'Automotive'],
    content: {
      paragraphs: [
        'DETROIT — Automotive engineers in Michigan have unveiled production-ready solid-state pouch cells capable of delivering over 1,000 miles of driving range on a single charge.',
        'By substituting volatile liquid organic electrolytes with an ultra-thin ceramic membrane, the cells eliminate fire hazards while enabling lithium-metal anodes with twice the energy density of graphite.',
        'In accelerated laboratory tests, the battery pack reached 80% charge in nine minutes and forty seconds without thermal throttling.',
        'Automakers plan to introduce the technology into flagship luxury sedans in late 2027 before scaling down to mass-market crossover platforms.',
        'Supply chain partners confirmed that the manufacturing process repurposes 75% of existing roll-to-roll machinery used in conventional lithium-ion plants.',
        'Commercial analysts forecast the development will decisively eliminate consumer range anxiety and accelerate combustion engine phaseouts.'
      ]
    }
  },
  {
    id: 'art-tech-03',
    title: 'Open-Source AI Foundation Models Achieve Human-Expert Parity on Complex Mathematical Proofs',
    shortTitle: 'Open-source AI matches experts on complex math proofs',
    slug: 'open-source-ai-mathematical-proofs-parity',
    excerpt: 'Community-trained models verify unsolved combinatorial conjectures, sparking a renaissance in collaborative scientific discovery.',
    category: 'Technology',
    author: { name: 'Dr. Aris Vance', role: 'Senior Tech & Quantum Editor', avatar: '/media/authors/grey-background-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/green-digital-code-768.webp',
    imageCaption: 'A digital illustration arranges green characters in vertical columns.',
    readTime: '4 min read',
    tags: ['AI', 'Open Source', 'Mathematics', 'Machine Learning', 'Science'],
    content: {
      paragraphs: [
        'PARIS — A distributed global team of academic mathematicians and computer scientists today released benchmarks showing their open-weights reasoning model matched top human specialists on the Putnam examination.',
        'Unlike black-box commercial systems, the open model outputs verifiable step-by-step proofs encoded in the formal Lean verification language.',
        'The model successfully produced a novel proof verifying a 40-year-old conjecture regarding prime gap distributions in analytic number theory.',
        'Fields Medalists hailed the achievement as proof that decentralized open science can outpace proprietary closed-door labs in pure academic rigor.',
        'The model weights and training datasets have been placed in the public domain for universities and researchers worldwide.',
        'Educational software developers are already incorporating the reasoning engine into interactive university calculus and discrete math tutoring tools.'
      ]
    }
  },
  {
    id: 'art-tech-04',
    title: 'Next-Gen Silicon Photonics Transceivers Slash AI Data Center Power Consumption by 60%',
    shortTitle: 'Silicon photonics cuts AI data center power use',
    slug: 'silicon-photonics-ai-data-center-power-cut',
    excerpt: 'Replacing copper interconnects with laser lightguides eliminates thermal heat bottlenecks in ultra-dense server clusters.',
    category: 'Technology',
    author: { name: 'Dr. Aris Vance', role: 'Senior Tech & Quantum Editor', avatar: '/media/authors/grey-background-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/circuit-board-768.webp',
    imageCaption: 'A close view of the chips and other components mounted on a circuit board.',
    readTime: '4 min read',
    tags: ['Semiconductors', 'Photonics', 'Data Centers', 'Energy', 'Tech'],
    content: {
      paragraphs: [
        'AUSTIN — Semiconductor firms demonstrated commercial optical transceivers capable of routing 3.2 terabits per second across compute clusters using laser photons rather than copper traces.',
        'Data center power draw has become the single greatest constraint on modern computational growth, with cooling fans and electrical line resistance consuming nearly half of facility energy.',
        'By co-packaging optical engines directly beside the GPU compute dies, signals travel without resistive heat generation.',
        'Early data center operators reported a 60% reduction in rack power requirements and a 4x reduction in cluster latency.',
        'Standardization bodies have agreed upon universal optical socket specifications to allow plug-and-play adoption across server manufacturers.',
        'Mass production ramp-up is slated to begin in Taiwan and Arizona fabrication plants during the third quarter.'
      ]
    }
  },

  // 12. ADDITIONAL BUSINESS ARTICLES
  {
    id: 'art-biz-02',
    title: 'Venture Capital Returns to Fundamentals: Deep Tech and Manufacturing Lead Series A Surges',
    shortTitle: 'Deep tech and manufacturing lead Series A funding gains',
    slug: 'venture-capital-deep-tech-manufacturing-series-a',
    excerpt: 'Investors shift away from ad-monetized consumer apps toward advanced robotics, biomanufacturing, and grid storage start-ups.',
    category: 'Business',
    author: { name: 'Victoria Sterling', role: 'Global Economics Editor', avatar: '/media/authors/office-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/office-towers-768.webp',
    imageCaption: 'Glass office towers seen from street level.',
    readTime: '4 min read',
    tags: ['Venture Capital', 'Startups', 'Deep Tech', 'Finance', 'Investment'],
    content: {
      paragraphs: [
        'SAN FRANCISCO — Quarterly venture investment data released this morning shows a dramatic realignment in startup capitalization trends.',
        'Total funding deployed into industrial automation, synthetic biology, and energy storage startups surged 72% year-over-year, while consumer social app financing hit an eight-year low.',
        'Institutional limited partners have demanded founders demonstrate clear intellectual property moats and tangible unit economics over hyper-growth vanity metrics.',
        'Valuation multiples for physical-world engineering companies have expanded to parity with legacy software companies.',
        'Leading venture firms have hired veteran mechanical engineers and material scientists as general partners to evaluate hard-tech claims.',
        'Industry analysts anticipate several high-profile industrial tech initial public offerings before the end of the fiscal year.'
      ]
    }
  },
  {
    id: 'art-biz-03',
    title: 'Commercial Real Estate Rebounds as Urban Adaptive Reuse Transforms Downtown Towers',
    shortTitle: 'Office conversions revive downtown real estate',
    slug: 'commercial-real-estate-adaptive-reuse-towers',
    excerpt: 'Empty corporate offices converted into vibrant residential lofts, culinary academies, and healthcare centers revitalize metro downtowns.',
    category: 'Business',
    author: { name: 'Victoria Sterling', role: 'Global Economics Editor', avatar: '/media/authors/office-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/city-at-dusk-768.webp',
    imageCaption: 'The lights of downtown high-rises stand out against the evening sky.',
    readTime: '4 min read',
    tags: ['Real Estate', 'Economy', 'Urban Planning', 'Housing', 'Business'],
    content: {
      paragraphs: [
        'CHICAGO — What municipal planners once feared would become a permanent "urban doom loop" is morphing into one of the most innovative architectural revivals in modern history.',
        'Over 40 million square feet of vacant corporate office space has been successfully rezoned and converted into mixed-income residential housing and boutique maker spaces.',
        'Cities that offered expedited building permitting and property tax abatements have seen downtown residential populations climb by 24% over the last two years.',
        'Ground-floor retail occupancy in converted districts has surged as new residents patronize independent grocery stores, cafes, and wellness centers.',
        'Urban economics institutes report that adaptive reuse generates 60% fewer carbon emissions than demolishing older structures and pouring new concrete foundations.',
        'Institutional property REITs have turned net buyers of downtown commercial properties for the first time in five years.'
      ]
    }
  },
  {
    id: 'art-biz-04',
    title: 'Semiconductor Foundry Mega-Campuses in Ohio and Dresden Begin Commercial Wafer Output',
    shortTitle: 'Ohio and Dresden chip plants begin wafer production',
    slug: 'semiconductor-mega-campuses-ohio-dresden-wafers',
    excerpt: 'Multi-billion dollar domestic fabrication initiatives deliver their first commercial customer lots on schedule.',
    category: 'Business',
    author: { name: 'Victoria Sterling', role: 'Global Economics Editor', avatar: '/media/authors/office-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/engineering-workbench-768.webp',
    imageCaption: 'A worker uses a laptop among instruments and metal frames in an engineering lab.',
    readTime: '5 min read',
    tags: ['Chips', 'Manufacturing', 'Supply Chain', 'Semiconductors', 'Business'],
    content: {
      paragraphs: [
        'COLUMBUS — In a landmark triumph for industrial reshoring strategies, two massive semiconductor fabrication complexes in Ohio and eastern Germany today initiated commercial wafer output for tier-one automotive and aerospace clients.',
        'The facilities, financed through public-private partnerships under the CHIPS and European Chips Acts, feature state-of-the-art extreme ultraviolet (EUV) lithography cleanrooms.',
        'Local community colleges and engineering universities have graduated over 8,000 certified cleanroom technicians to staff the high-precision operations.',
        'Automotive executives expressed deep relief, noting that domestic wafer availability insulates domestic assembly lines against geopolitical shipping chokepoints.',
        'Both facilities have committed to 100% renewable electricity contracts and closed-loop ultra-pure water recycling systems.',
        'Secondary supplier ecosystems, from chemical purifiers to precision robotic arms, have established regional hubs surrounding the fabrication sites.'
      ]
    }
  },

  // 13. ADDITIONAL ENTERTAINMENT ARTICLES
  {
    id: 'art-ent-02',
    title: 'Acoustic Renaissance: Vinyl and Cassette Sales Outpace Digital Downloads for Third Year',
    shortTitle: 'Vinyl and cassette sales outpace digital downloads',
    slug: 'vinyl-cassette-sales-outpace-digital-downloads',
    excerpt: 'Music fans seek physical ritual, tactile album artwork, and uncompressed analog mastering in an increasingly ephemeral streaming era.',
    category: 'Entertainment',
    author: { name: 'Chloe Chevalier', role: 'Film Critic & Cultural Columnist', avatar: '/media/authors/outdoors-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/vinyl-records-768.webp',
    imageCaption: 'Shoppers leaf through boxes of records in their sleeves. Cord Allman / Unsplash.',
    readTime: '4 min read',
    tags: ['Music', 'Vinyl', 'Culture', 'Audio', 'Entertainment'],
    content: {
      paragraphs: [
        'NEW YORK — Record pressing plants across North America and Europe are operating 24-hour shifts as the global demand for physical music formats reaches levels unseen since 1989.',
        'Industry data shows vinyl LP sales topped 78 million units this year, generating more total revenue than paid single digital track downloads.',
        'Independent artists note that deluxe vinyl box sets, complete with handwritten lyric booklets and heavyweight gatefold jackets, provide sustainable livelihoods far outpacing fraction-of-a-cent streaming royalties.',
        'Younger listeners cite the deliberate intentionality of playing a full album side without algorithmic interruptions as a refreshing mental cleanse.',
        'Audio hardware companies report surging sales of entry-level audiophile turntables and tube preamplifiers among college students.',
        'Independent record store day events drew record block-long queues in over forty countries last weekend.'
      ]
    }
  },
  {
    id: 'art-ent-03',
    title: 'Immersive Theater Phenomenon "The Obsidian Library" Captivates West End Audiences',
    shortTitle: '“The Obsidian Library” brings immersive theater to the West End',
    slug: 'immersive-theater-obsidian-library-west-end',
    excerpt: 'Audiences explore an eighty-room Victorian labyrinth where every book holds a personalized secret and actors interact directly with patrons.',
    category: 'Entertainment',
    author: { name: 'Chloe Chevalier', role: 'Film Critic & Cultural Columnist', avatar: '/media/authors/outdoors-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/stage-microphone-768.webp',
    imageCaption: 'A microphone on a stand catches the light in a performance space.',
    readTime: '4 min read',
    tags: ['Theater', 'West End', 'Arts', 'Immersive', 'London'],
    content: {
      paragraphs: [
        'LONDON — Traditional proscenium arches are being abandoned for full spatial immersion in Punchdrunk\'s newest theatrical triumph, "The Obsidian Library."',
        'Housed in a decommissioned textile warehouse in Southwark, the production invites masked attendees to freely roam four floors of meticulously antiqued Victorian corridors.',
        'Rather than passive spectators, visitors stumble upon secret chamber rehearsals, open leather-bound diaries with genuine calligraphy, and decipher hidden acoustic clues.',
        'Critics have praised the seamless coordination of forty-five actors whose interwoven storylines converge and diverge like a living clockwork mechanism.',
        'The production has sold out its entire six-month run, prompting producers to plan satellite installations in Tokyo and Melbourne next winter.',
        'Theater historians credit the production with attracting a generation of theatergoers raised on video game open-world exploration.'
      ]
    }
  },
  {
    id: 'art-ent-04',
    title: 'Indie Game "Symphony of the Tides" Sweeps Global Game Awards with Hand-Drawn Animation',
    shortTitle: '“Symphony of the Tides” sweeps the Global Game Awards',
    slug: 'indie-game-symphony-tides-awards',
    excerpt: 'Crafted over six years by a five-person studio in Kyoto, the watercolor underwater adventure proves visual poetry triumphs over photorealism.',
    category: 'Entertainment',
    author: { name: 'Chloe Chevalier', role: 'Film Critic & Cultural Columnist', avatar: '/media/authors/outdoors-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/vintage-games-768.webp',
    imageCaption: 'Vintage gaming and computing hardware displayed under colored lights.',
    readTime: '4 min read',
    tags: ['Gaming', 'Indie Games', 'Art', 'Animation', 'Entertainment'],
    content: {
      paragraphs: [
        'KYOTO — At last night\'s international game industry gala, top honors went not to a multi-hundred-million-dollar corporate franchise, but to "Symphony of the Tides," an evocative hand-painted exploration game.',
        'Every frame of the game was physically illustrated using watercolor washes on textured washi paper before being scanned and rigged in a custom physics engine.',
        'Players navigate a bioluminescent ocean trench accompanied by an orchestral score recorded with the Tokyo Philharmonic Orchestra.',
        'Reviewers highlighted the game\'s meditative pacing, zero-combat puzzle design, and tender themes of ecological healing.',
        'The game has already surpassed four million digital downloads across platforms within its first month of release.',
        'The five developers took the podium in tears, thanking their families and encouraging young animators to preserve tactile artistry in digital mediums.'
      ]
    }
  },

  // 14. ADDITIONAL OPINION ARTICLES
  {
    id: 'art-op-02',
    title: 'The Fallacy of Algorithmic Meritocracy: Why True Judgment Cannot Be Outsourced',
    shortTitle: 'Opinion: The limits of algorithmic judgment',
    slug: 'fallacy-algorithmic-meritocracy-judgment',
    excerpt: 'When systems optimize for measurable proxy scores, they systematically blind themselves to nuance, character, and non-conformist genius.',
    category: 'Opinion',
    author: { name: 'Gabriel Morales', role: 'Contributing Essayist & Sociologist', avatar: '/media/authors/glasses-96.webp' },
    date: 'Nov 3, 2026',
    image: '/media/news/earth-at-night-768.webp',
    imageCaption: 'Networks of city lights are visible on Earth at night.',
    readTime: '5 min read',
    tags: ['AI Ethics', 'Philosophy', 'Society', 'Meritocracy', 'Culture'],
    content: {
      paragraphs: [
        'In corporate hiring, university admissions, and credit scoring, institutions have surrendered hard human discernment to automated screening matrices under the seductive guise of "objective neutrality."',
        'Yet every algorithm is merely a statistical mirror of historical data patterns, optimizing for the past while penalizing the eccentric, the unconventional, and the truly transformative.',
        'True human brilliance rarely resembles a smooth bell curve distribution; it is spiky, idiosyncratic, and resistant to standard categorical taxonomy.',
        'By automating selection gates, we filter for safe conformity and institutional compliance while mistaking standardized mediocrity for merit.',
        'We must possess the moral courage to reintroduce human subjective responsibility into the critical decisions that govern human lives.',
        'Efficiency is a valid metric for logistics and packet routing; it is a catastrophic standard for evaluating human potential.'
      ]
    }
  },
  {
    id: 'art-op-03',
    title: 'Reviving the Town Hall in a Fractured Age: A Blueprint for Civic Reconciliation',
    shortTitle: 'Opinion: What town halls can do for a divided community',
    slug: 'reviving-town-hall-civic-reconciliation',
    excerpt: 'Face-to-face community forums where neighbors break bread before debating zoning and budgets remain the single antidote to political tribalism.',
    category: 'Opinion',
    author: { name: 'Sarah Jenkins', role: 'Contributing Essayist & Urbanist', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Nov 2, 2026',
    image: '/media/news/community-gathering-768.webp',
    imageCaption: 'Attendees gather under strings of lights.',
    readTime: '5 min read',
    tags: ['Democracy', 'Civics', 'Community', 'Politics', 'Society'],
    content: {
      paragraphs: [
        'It is easy to despair over our national political dysfunction when viewed through the distorted prism of social media flame wars and cable news talking heads.',
        'Yet walk into a rural town meeting hall in New England or a neighborhood council gymnasium in Atlanta, and a remarkably different country emerges.',
        'When citizens are seated across a wooden table sharing coffee and donuts, the rhetorical armor of partisan hostility begins to dissolve.',
        'People who vote for opposing parties find common ground on school bus routes, water drainage culverts, and firefighter equipment bonds.',
        'Democracy was never intended to be consumed as a spectator blood sport through glowing screens; it is a physical, participatory municipal craft.',
        'If we wish to heal our national body politic, we must start by restoring the physical spaces where neighbors learn to listen to one another again.'
      ]
    }
  },
  {
    id: 'art-op-04',
    title: 'The Sacred Architecture of Public Libraries: Why Free Books Are Just the Beginning',
    shortTitle: 'Opinion: Why public libraries matter beyond books',
    slug: 'sacred-architecture-public-libraries',
    excerpt: 'In an era where every square foot of city space is monetized, public libraries stand as the last truly egalitarian cathedrals of modern civilization.',
    category: 'Opinion',
    author: { name: 'Elena Rostova', role: 'Chief Diplomatic Correspondent', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/library-shelves-768.webp',
    imageCaption: 'Books of different sizes and bindings fill a set of wooden shelves.',
    readTime: '4 min read',
    tags: ['Libraries', 'Public Goods', 'Education', 'Culture', 'Books'],
    content: {
      paragraphs: [
        'Consider the radical presumption behind the public library: a grand civic palace where a homeless veteran and a billionaire can sit at the same oak desk, and neither is asked to pay a single penny to exist.',
        'In modern cities where virtually every bench, cafe seat, and public square requires a commercial purchase to avoid being shooed away, libraries remain holy sanctuaries of unconditional dignity.',
        'They are warm shelters, immigration literacy hubs, tax filing clinics, tool-sharing cooperatives, and portals to the accumulated intellect of our species.',
        'To reduce funding for public libraries is not fiscal prudence; it is cultural suicide and civic vandalism.',
        'Every time a child checks out their first stack of books with a library card bearing their own name, the promise of an enlightened republic is renewed.',
        'Let us cherish, expand, and fiercely protect these quiet cathedrals of human curiosity.'
      ]
    }
  },

  // 15. MORE SPORTS & TECH TO ROUND OUT 30+ TOTAL ARTICLES
  {
    id: 'art-sports-05',
    title: 'Formula 1 Unveils 100% Synthetic Sustainable Fuel Regulations for 2027 Season',
    shortTitle: 'Formula 1 sets synthetic fuel rules for 2027',
    slug: 'f1-synthetic-sustainable-fuel-regulations-2027',
    excerpt: 'Turbo-hybrid V6 engines will burn non-fossil e-fuels captured directly from ambient air carbon and green hydrogen.',
    category: 'Sports',
    author: { name: 'Tariq Al-Mansoor', role: 'Chief Athletics Writer', avatar: '/media/authors/dark-shirt-96.webp' },
    date: 'Nov 1, 2026',
    image: '/media/news/formula-one-768.webp',
    imageCaption: 'A Formula 1 car on the Singapore street circuit. Roy Tsong / Unsplash.',
    readTime: '4 min read',
    tags: ['Formula 1', 'Motorsport', 'Clean Tech', 'Engineering', 'Racing'],
    content: {
      paragraphs: [
        'PARIS — The FIA today ratified the technical engine specifications governing Formula 1 from 2027 onward, mandating net-zero synthetic drop-in fuels.',
        'The fuel chemistry, developed in partnership with leading global energy innovators, uses captured atmospheric CO2 and water electrolysis.',
        'Engine manufacturers report identical 1,000-horsepower output and the same iconic acoustic engine note fans cherish.',
        'The breakthrough is expected to accelerate sustainable fuel adoption for commercial aviation and heavy maritime shipping.',
        'All ten teams voted unanimously in favor of the sporting and environmental regulations.',
        'Track testing of the prototype synthetic powertrains will commence at Silverstone in early autumn.'
      ]
    }
  },
  {
    id: 'art-tech-05',
    title: 'Next-Generation Neural Prosthetics Restore Fluid Dexterity to Paralyzed Hands',
    shortTitle: 'Neural prosthetics restore hand dexterity in trial',
    slug: 'neural-prosthetics-restore-fluid-dexterity',
    excerpt: 'Wireless sub-millimeter cortical implants enable spinal injury patients to type 60 words per minute and play musical instruments.',
    category: 'Technology',
    author: { name: 'Dr. Aris Vance', role: 'Senior Tech & Quantum Editor', avatar: '/media/authors/grey-background-96.webp' },
    date: 'Oct 31, 2026',
    image: '/media/news/prosthetic-hand-768.webp',
    imageCaption: 'An open prosthetic hand shows its individual finger joints. ThisisEngineering / Unsplash.',
    readTime: '5 min read',
    tags: ['Biotech', 'Neuroscience', 'Medicine', 'Robotics', 'Health'],
    content: {
      paragraphs: [
        'ZURICH — Neurosurgeons and biomedical engineers at the Swiss Institute of Technology have published clinical trial results that redefine the boundaries of neurological rehabilitation.',
        'Using a biocompatible electrode array placed non-invasively through micro-vascular catheters, researchers captured high-resolution motor cortex firing intentions without open-skull craniotomy.',
        'Adaptive machine learning models translated neural signals into sub-millisecond robotic hand muscle stimulations.',
        'Trial participants who had lacked finger articulation for over a decade were able to hold pen nibs, type on standard computer keyboards, and pick up fresh strawberries without crushing them.',
        'The device received expedited breakthrough designation from global health regulators.',
        'Broader clinical rollouts across twelve international medical centers will begin early next year.'
      ]
    }
  },
  {
    id: 'art-nat-06',
    title: 'Modernizing the Electric Transmission Grid: Interregional Power Lines Approved',
    shortTitle: 'Interregional power lines win approval for US grid',
    slug: 'modernizing-transmission-grid-interregional-power',
    excerpt: 'High-voltage direct current lines will transmit surplus Great Plains wind power to coastal metropolitan demand centers.',
    category: 'National',
    author: { name: 'Julian Thorne', role: 'Capitol Hill Bureau Chief', avatar: '/media/authors/side-profile-96.webp' },
    date: 'Oct 30, 2026',
    image: '/media/news/power-lines-768.webp',
    imageCaption: 'Transmission lines cross the landscape at sunset.',
    readTime: '4 min read',
    tags: ['Energy', 'Power Grid', 'Infrastructure', 'National', 'Clean Power'],
    content: {
      paragraphs: [
        'WASHINGTON — Federal regulators approved rights-of-way for three major interregional high-voltage direct current (HVDC) transmission lines spanning 1,400 miles.',
        'The transmission corridors will allow clean electricity generated in wind-rich Midwestern states to flow directly into Chicago, Atlanta, and Washington, D.C.',
        'Grid reliability engineers emphasize that interconnected regional grids prevent localized blackouts during extreme winter cold snaps and summer heatwaves.',
        'Construction contracts are projected to create over 22,000 high-wage union electrical jobs over the next four years.',
        'Environmental groups praised the decision, noting that transmission bottlenecks have been the single biggest hurdle to retiring legacy fossil plants.',
        'Groundbreaking ceremonies in Missouri and Illinois are slated for late spring.'
      ]
    }
  },
  {
    id: 'art-intl-05',
    title: 'Global Biodiversity Accord Designates 30% of High Seas as Protected Marine Reserves',
    shortTitle: 'Marine accord sets aside 30% of the high seas',
    slug: 'biodiversity-accord-high-seas-marine-reserves',
    excerpt: 'International treaty bans industrial bottom trawling and seabed mineral exploitation across 40 million square miles of ocean.',
    category: 'International',
    author: { name: 'Elena Rostova', role: 'Chief Diplomatic Correspondent', avatar: '/media/authors/blue-light-96.webp' },
    date: 'Oct 29, 2026',
    image: '/media/news/diver-and-fish-768.webp',
    imageCaption: 'A school of yellow fish passes a scuba diver.',
    readTime: '5 min read',
    tags: ['Oceans', 'Biodiversity', 'Treaty', 'Environment', 'Conservation'],
    content: {
      paragraphs: [
        'UNITED NATIONS — After two decades of multilateral negotiations, the UN High Seas Biodiversity Treaty entered into legal force today with sixty ratifying member states.',
        'The treaty establishes legally enforceable marine protected zones beyond national territorial waters, safeguarding critical migratory whale pathways and deep-sea coral seamounts.',
        'Satellite tracking systems operated by multinational coast guard coalitions will monitor commercial fishing fleets in real time to enforce no-take zones.',
        'Marine biologists hailed the treaty as an indispensable lifeline for collapsed pelagic fish stocks and ocean carbon sink health.',
        'Funding mechanisms will support scientific observation cruises to inventory previously undiscovered abyssal marine species.',
        'The treaty represents the most comprehensive ocean conservation victory since the 1982 Law of the Sea Convention.'
      ]
    }
  },
  {
    id: 'art-biz-05',
    title: 'Circular Economy Revolution: Standardized Modular Electronics Directive Takes Effect',
    shortTitle: 'New directive requires modular consumer electronics',
    slug: 'circular-economy-modular-electronics-directive',
    excerpt: 'Consumer laptops, smartphones, and household appliances must now feature user-replaceable batteries and universal screws.',
    category: 'Business',
    author: { name: 'Victoria Sterling', role: 'Global Economics Editor', avatar: '/media/authors/office-96.webp' },
    date: 'Oct 28, 2026',
    image: '/media/news/laptop-keyboard-768.webp',
    imageCaption: 'A partially open laptop shows its keyboard and trackpad.',
    readTime: '4 min read',
    tags: ['Right to Repair', 'Electronics', 'Consumer Protection', 'Sustainability', 'Business'],
    content: {
      paragraphs: [
        'BERLIN — The long-anticipated Right to Repair and Modular Electronics Directive took formal effect today across twenty-seven member nations, fundamentally altering industrial device design.',
        'Under the law, electronic manufacturers must provide accessible spare parts, public diagnostic manuals, and battery modules that can be swapped without proprietary heat guns or glues.',
        'Independent repair shops celebrated the measure, estimating it will extend the average smartphone lifecycle from 2.5 years to over six years.',
        'Consumer advocacy groups project the standards will save households over $35 billion annually in unnecessary hardware replacements.',
        'Electronic waste dumpsites are expected to see a 40% reduction in discarded printed circuit boards over the next five years.',
        'Leading hardware makers have restructured product roadmaps to offer modular upgrade kits for memory, cameras, and display panels.'
      ]
    }
  }
];

export const POPULAR_SEARCH_TERMS = [
  'Geneva Summit',
  'Quantum Computing',
  'Marcus Vance',
  'Federal Reserve',
  'Infrastructure Bill',
  'Solid-State Battery',
  'Real Madrid',
  'Venice Film Festival',
  'Electric Aviation',
];
