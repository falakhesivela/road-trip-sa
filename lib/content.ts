// ============================================================
// Central content store — destinations & guide articles.
// Pages, listings, cards, sitemap and the nav all read from here
// so adding a new destination or guide is a single edit.
// ============================================================
import type { IconName } from "@/components/icons";

/* ---------- Destinations ---------- */

export type Fact = { icon: IconName; label: string; value: string };
export type Stay = { name: string; tagline: string; price: string; label: string; image?: string };
export type RailItem = { icon: IconName; title: string; price: string; cta: string; href: string };

export type DestinationDoc = {
  slug: string;
  name: string;
  region: string;
  tag: string;
  /** "from" price used on cards */
  price: string;
  /** short summary for cards + meta description */
  blurb: string;
  /** placeholder labels (stand in for real photography) */
  heroLabel: string;
  cardLabel: string;
  /** Optional R2 image keys (e.g. "destinations/kruger-hero.jpg"), resolved
      against NEXT_PUBLIC_IMAGE_BASE_URL. When set, the photo replaces the
      striped placeholder. See public/images/README.md. */
  heroImage?: string;
  cardImage?: string;
  /** Optional map at the foot of the destination article. Prefer mapEmbed (a
      Google Maps "Embed a map" iframe src URL); mapImage is a static fallback. */
  mapEmbed?: string;
  mapImage?: string;
  rating: number;
  reviews: string;
  /** lead paragraphs */
  intro: string[];
  facts: Fact[];
  things: [string, string][];
  stays: Stay[];
  bestTime: string[];
  rail: RailItem[];
};

export const DESTINATIONS: DestinationDoc[] = [
  {
    slug: "kruger",
    name: "Kruger National Park",
    cardImage:'destinations/kruger-card.jpg',
    heroImage:'destinations/kruger-hero.jpg',
    region: "Mpumalanga & Limpopo",
    tag: "Safari",
    price: "R1,950",
    blurb:
      "Africa's most accessible Big-Five safari — and one of the best-value self-drive wildlife trips on the planet. Here's how to do it right.",
    heroLabel: "hero · elephant at waterhole, golden light",
    cardLabel: "safari sunset",
    rating: 5,
    reviews: "4.9 · 2,140 traveller reviews",
    intro: [
      "Stretching nearly two million hectares along South Africa's north-eastern border, Kruger is bigger than some countries — yet you can explore it from behind the wheel of an ordinary rental car. That combination of world-class wildlife and genuine affordability is why it tops almost every first-timer's Africa list.",
      "This guide covers when to go, how to get there, where to stay inside and outside the park, and exactly what to book first to keep costs down. Most travellers fly into Nelspruit or Joburg, pick up a car, and drive in through one of the southern gates.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "May – September" },
      { icon: "tag", label: "Budget / day", value: "R1,950 pp" },
      { icon: "car", label: "Getting there", value: "Self-drive 4–5 hrs" },
      { icon: "clock", label: "Ideal stay", value: "4 – 7 nights" },
    ],
    things: [
      ["Self-drive Big-Five game drives", "Sunrise and late-afternoon drives along the S28 and H4-1 give the best sightings."],
      ["Guided night drive", "Book a SANParks night drive to spot leopard, hyena and other nocturnal hunters."],
      ["Walking safari", "A guided morning bush walk gets you tracking on foot with an armed ranger."],
      ["Panorama Route add-on", "Pair Kruger with God's Window and the Blyde River Canyon, an hour from the gates."],
    ],
    stays: [
      { name: "Skukuza Rest Camp", tagline: "In-park · Self-catering", price: "R1,450/night", label: "lodge · rondavels",image:'destinations/kruger-wildlife-safaris-skukuza.jpg'  },
      { name: "Lower Sabie", tagline: "In-park · Riverfront", price: "R1,680/night", label: "lodge · river view", image:'destinations/lower-sabbie.jpg' },
      { name: "Private Sabi Sand Lodge", tagline: "Luxury · All-inclusive", price: "R6,900/night", label: "lodge · luxury suite", image:'destinations/private-sabi.jpg' },
    ],
    bestTime: [
      "The dry winter months (May–September) are prime: sparse vegetation and animals gathering at waterholes make wildlife far easier to spot, and there are virtually no mosquitoes.",
      "Summer (November–March) is green, hot and dramatic with newborn animals and migratory birds, but afternoon thunderstorms and thick bush make sightings harder.",
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.209448575295!2d31.552165276224084!3d-23.988379877420776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec34896c535a0a1%3A0x9a504ed31f67787b!2sKruger%20National%20Park!5e0!3m2!1sen!2sza!4v1780822031832!5m2!1sen!2sza',
    rail: [
      { icon: "plane", title: "Flights to Nelspruit (MQP)", price: "from R1,180 return", cta: "Search flights", href: "/" },
      { icon: "car", title: "4x4 or SUV hire", price: "from R880 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "cape-town",
    name: "Cape Town & Winelands",
      cardImage:'destinations/capetown-card.jpg',
      heroImage:'destinations/capetown-hero.jpg',
    region: "Western Cape",
    tag: "City + Wine",
    price: "R820",
    blurb:
      "Table Mountain, two oceans, world-class wine valleys and some of the best food in the country — Cape Town packs a whole trip into one city.",
    heroLabel: "hero · table mountain over the city bowl",
    cardLabel: "table mountain",
    rating: 5,
    reviews: "4.9 · 3,480 traveller reviews",
    intro: [
      "Few cities offer Cape Town's range: a cable car to the top of a flat-topped mountain in the morning, penguins on a white-sand beach by lunch, and a Stellenbosch wine estate by sunset. It's compact, scenic and built for a road trip.",
      "Hire a car at the airport — the Mother City rewards self-drivers with Chapman's Peak Drive, the Cape Point loop and the half-hour run out to the Winelands. Book accommodation early over the December–February peak.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "Oct – April" },
      { icon: "tag", label: "Budget / day", value: "R820 pp" },
      { icon: "plane", label: "Getting there", value: "Fly to CPT" },
      { icon: "clock", label: "Ideal stay", value: "4 – 6 nights" },
    ],
    things: [
      ["Table Mountain cable car", "Go early on a clear, wind-free morning — the cableway closes in high wind."],
      ["Cape Point & Chapman's Peak", "A full-day self-drive loop past Hout Bay, the toll road and the Cape of Good Hope."],
      ["Stellenbosch & Franschhoek", "Tram-hop the Franschhoek wine estates or pick a Stellenbosch tasting with lunch."],
      ["Boulders Beach penguins", "Boardwalks at Simon's Town put you metres from an African penguin colony."],
    ],
    stays: [
      { name: "V&A Waterfront Hotel", tagline: "Central · Harbour views", price: "R2,100/night", label: "hotel · waterfront", image:'destinations/water-front-hotel.jpg' },
      { name: "Camps Bay Guesthouse", tagline: "Beachfront · Boutique", price: "R1,750/night", label: "guesthouse · atlantic",image:'destinations/beach-front-boutique.jpg' },
      { name: "Stellenbosch Wine Estate", tagline: "Winelands · Vineyard stay", price: "R2,400/night", label: "estate · vineyards", image:'destinations/estate-vineyards.jpg' },
    ],
    bestTime: [
      "Summer (November–March) brings long, warm, dry days perfect for beaches and wine farms, but it's peak season — book months ahead and expect higher rates.",
      "Spring (September–October) is the sweet spot: wildflowers, whales off Hermanus, fewer crowds and gentler prices, with the south-easter wind not yet at full strength.",
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855048.4174006017!2d19.114251623918644!3d-33.160763629626196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc53c29d78bc15%3A0x7bed25b250ab75fb!2sThe%20Cape%20Winelands!5e0!3m2!1sen!2sza!4v1780823964102!5m2!1sen!2sza',
    rail: [
      { icon: "plane", title: "Flights to Cape Town (CPT)", price: "from R720 one-way", cta: "Search flights", href: "/" },
      { icon: "car", title: "Compact or convertible hire", price: "from R520 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "garden-route",
    name: "Garden Route",
    cardImage:'destinations/garden-route-card.jpg',
    heroImage:'destinations/garden-route-hero.jpg',
    region: "Western & Eastern Cape",
    tag: "Road trip",
    price: "R1,200",
    blurb:
      "A 300 km ribbon of coast, forest and lagoon between Mossel Bay and Storms River — South Africa's most beginner-friendly road trip.",
    heroLabel: "hero · garden route coastline from above",
    cardLabel: "coastal cliffs",
    rating: 5,
    reviews: "4.8 · 1,920 traveller reviews",
    intro: [
      "The Garden Route is the road trip most South Africans cut their teeth on: excellent tar roads, a new beach town every hour, and forest, lagoon and clifftop scenery the whole way. You don't need a 4x4 — just a week and a rental car.",
      "Drive it west-to-east from Cape Town so the best stretches land on the back half of the trip, and book your car early; stock thins out over school holidays and the festive season.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "Oct – April" },
      { icon: "tag", label: "Budget / day", value: "R1,200 pp" },
      { icon: "car", label: "Getting there", value: "Self-drive from CPT" },
      { icon: "clock", label: "Ideal stay", value: "5 – 7 nights" },
    ],
    things: [
      ["Knysna lagoon & the Heads", "Oysters on Thesen Islands, a ferry to Featherbed, and sunset from the Knysna Heads.",],
      ["Robberg Nature Reserve", "A three-hour peninsula hike from Plettenberg Bay — the best walk on the route."],
      ["Tsitsikamma suspension bridges", "Storms River mouth, ancient yellowwood forest and the Bloukrans bungee."],
      ["Wilderness lakes & paddling", "Canoe the Touw River into the forest, or walk the Map of Africa viewpoint."],
    ],
    stays: [
      { name: "Knysna Waterfront Lodge", tagline: "Central · Lagoon views", price: "R1,350/night", label: "lodge · lagoon", image: 'destinations/knysna-waterfront-lodge.jpg' },
      { name: "Plettenberg Bay Beach House", tagline: "Beachfront · Self-catering", price: "R1,900/night", label: "house · white beach", image: 'destinations/beach-house.jpg' },
      { name: "Wilderness Forest Cabin", tagline: "Forest · Secluded", price: "R1,150/night", label: "cabin · forest", image: 'destinations/cabin-forest.jpg' },
    ],
    bestTime: [
      "The route is good year-round, but October–April brings the warmest swimming and the greenest forest. Whale-watching off Plett peaks June–November.",
      "Avoid the mid-December to mid-January festive peak if you can — towns get busy and accommodation prices roughly double.",
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848027.2539560933!2d21.443861299302196!3d-33.87403167208579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd422316a2d87f9%3A0x8d714de901824af3!2sGarden%20Route%20District%20Municipality!5e0!3m2!1sen!2sza!4v1780824836481!5m2!1sen!2sza',
    rail: [
      { icon: "plane", title: "Flights to George (GRJ)", price: "from R980 one-way", cta: "Search flights", href: "/" },
      { icon: "car", title: "Compact auto hire", price: "from R520 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "panorama-route",
    name: "Panorama Route",
    cardImage:'destinations/blyde-canyon-card.jpg',
    heroImage:'destinations/blyde-canyon-hero.jpg',
    region: "Mpumalanga",
    tag: "Scenery",
    price: "R740",
    blurb:
      "The Blyde River Canyon, God's Window and a string of waterfalls along one short, spectacular mountain drive — the perfect Kruger add-on.",
    heroLabel: "hero · blyde river canyon viewpoint",
    cardLabel: "blyde canyon",
    rating: 5,
    reviews: "4.8 · 870 traveller reviews",
    intro: [
      "The Panorama Route packs more big views into a short drive than almost anywhere in South Africa: the third-largest canyon on earth, dramatic escarpment lookouts and a chain of waterfalls, all linked by an easy day's driving.",
      "Most people tack it onto a Kruger trip — the canyon viewpoints are barely an hour from the park's western gates. Two nights in Graskop or Sabie lets you see it all without rushing.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "April – September" },
      { icon: "tag", label: "Budget / day", value: "R740 pp" },
      { icon: "car", label: "Getting there", value: "Self-drive 4 hrs" },
      { icon: "clock", label: "Ideal stay", value: "2 – 3 nights" },
    ],
    things: [
      ["Blyde River Canyon & Three Rondavels", "The signature viewpoint — go mid-morning before the cloud rolls in."],
      ["God's Window", "A short forest walk leads to the rainforest lookout over the lowveld."],
      ["Bourke's Luck Potholes", "Walkways over sculpted rock pools where two rivers meet."],
      ["Waterfall trail", "Lisbon, Berlin and Mac-Mac falls are all easy roadside stops."],
    ],
    stays: [
      { name: "Graskop Mountain Lodge", tagline: "Village · Cliff-edge", price: "R1,250/night", label: "lodge · escarpment",image:'destinations/graskop-mountain-lodge.jpg' },
      { name: "Sabie Forest Guesthouse", tagline: "Forest · Self-catering", price: "R980/night", label: "guesthouse · pines", image:'destinations/sabie-forest-guest-house.jpg' },
      { name: "Hazyview Safari Lodge", tagline: "Kruger gateway · Bushveld", price: "R1,600/night", label: "lodge · bushveld" ,image:'destinations/hazy-view-safari-lodge.jpg' },
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.316307738396!2d29.25197717627966!3d-25.859064950008246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eeaf2b7a4203c8b%3A0x27c4a48a47f4422b!2sPanorama%20Rd%2C%20Highveld%20Park%2C%20eMalahleni%2C%201034!5e0!3m2!1sen!2sza!4v1780830041217!5m2!1sen!2sza',
    bestTime: [
      "Autumn and winter (April–September) bring the clearest skies and the crispest canyon views, with mornings the most reliable before afternoon mist gathers.",
      "Summer is lush and green but the escarpment clouds over often — start early to beat the haze.",
    ],
    rail: [
      { icon: "plane", title: "Flights to Nelspruit (MQP)", price: "from R1,180 return", cta: "Search flights", href: "/" },
      { icon: "car", title: "SUV or hatchback hire", price: "from R520 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "durban-kzn",
    name: "Durban & KZN",
    region: "KwaZulu-Natal",
    cardImage:'destinations/golden-mile-card.jpg',
    heroImage:'destinations/golden-mile-hero.jpg',
    tag: "Beaches",
    price: "R690",
    blurb:
      "Warm Indian-Ocean swimming year-round, a buzzing beachfront promenade and the Drakensberg and game reserves within easy reach.",
    heroLabel: "hero · golden mile beachfront at sunrise",
    cardLabel: "golden mile",
    rating: 5,
    reviews: "4.7 · 1,310 traveller reviews",
    intro: [
      "Durban is South Africa's warm-water capital — the sea is swimmable every month of the year, the promenade is made for cycling and the curry is the best in the country. It's also the launch pad for two very different escapes: the Drakensberg mountains and the Big-Five reserves of Zululand.",
      "Base yourself on the beachfront for a few days, then drive inland to the 'Berg or north to Hluhluwe–iMfolozi for rhino and elephant without the Kruger crowds.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "April – October" },
      { icon: "tag", label: "Budget / day", value: "R690 pp" },
      { icon: "plane", label: "Getting there", value: "Fly to King Shaka (DUR)" },
      { icon: "clock", label: "Ideal stay", value: "3 – 5 nights" },
    ],
    things: [
      ["Golden Mile promenade", "Walk, cycle or skate the rebuilt beachfront from uShaka to Suncoast."],
      ["uShaka Marine World", "One of the largest aquariums in the southern hemisphere, plus a water park."],
      ["Drakensberg day trip", "The Amphitheatre and Tugela Falls are a scenic two-hour drive inland."],
      ["Hluhluwe–iMfolozi safari", "Zululand's flagship reserve — the best place in Africa to see rhino."],
    ],
    stays: [
      { name: "Umhlanga Rocks Hotel", tagline: "Beachfront · Lighthouse views", price: "R1,650/night", label: "hotel · umhlanga", image:'destinations/umhlanga-beach-hotel.jpg' },
      { name: "Durban Beachfront Apartment", tagline: "Central · Self-catering", price: "R1,100/night", label: "apartment · seafront" , image:'destinations/sea-front-apartment.jpg' },
      { name: "Zululand Game Lodge", tagline: "Safari · Full board", price: "R3,200/night", label: "lodge · zululand", image:'destinations/zulu-land-lodge.jpg' },
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110715.53344173165!2d30.908551475612036!3d-29.868298995742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza!4v1780828233104!5m2!1sen!2sza',
    bestTime: [
      "Winter (April–October) is Durban's secret season: warm, dry, sunny days and sea temperatures that rarely drop below 19°C, with none of the summer humidity.",
      "Summer is hot, humid and wet, but the sea is at its warmest — just pack for afternoon downpours.",
    ],
    rail: [
      { icon: "plane", title: "Flights to Durban (DUR)", price: "from R690 one-way", cta: "Search flights", href: "/" },
      { icon: "car", title: "Compact or SUV hire", price: "from R450 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "joburg-getaways",
    name: "Joburg Getaways",
    cardImage:'destinations/magaliesburg-card.jpg',
    heroImage:'destinations/magaliesburg-hero.jpg',
    region: "Gauteng",
    tag: "Weekend",
    price: "R450",
    blurb:
      "Bushveld lodges, Magaliesberg cableways and Big-Five reserves — all within a two-hour drive of Johannesburg for the perfect weekend escape.",
    heroLabel: "hero · magaliesberg bushveld at dusk",
    cardLabel: "magaliesberg",
    rating: 5,
    reviews: "4.6 · 540 traveller reviews",
    intro: [
      "You don't need a week or a long-haul drive to get into the bush from Joburg. Within two hours of the city there's malaria-free safari, mountain hiking, hot springs and dam-side lodges — ideal for a Friday-to-Sunday reset.",
      "A normal car gets you to almost all of it. Pilanesberg and the Magaliesberg are the classic picks; Dinokeng now puts the Big Five barely an hour from OR Tambo.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "Year-round" },
      { icon: "tag", label: "Budget / day", value: "R450 pp" },
      { icon: "car", label: "Getting there", value: "Drive 1 – 2 hrs" },
      { icon: "clock", label: "Ideal stay", value: "1 – 2 nights" },
    ],
    things: [
      ["Pilanesberg safari", "Malaria-free Big-Five game viewing in an ancient volcanic crater, two hours out."],
      ["Magaliesberg cableway", "The Hartbeespoort aerial cableway and dam make an easy day or overnight."],
      ["Dinokeng Game Reserve", "The closest Big-Five self-drive to Joburg — barely an hour from the city."],
      ["Cradle of Humankind", "Sterkfontein Caves and the Maropeng visitor centre for a rainy-day option."],
    ],
    stays: [
      { name: "Pilanesberg Bush Lodge", tagline: "Safari · Half board", price: "R2,400/night", label: "lodge · bushveld", image:'destinations/bakubung-bush-lodge.jpg' },
      { name: "Hartbeespoort Dam Cabin", tagline: "Lakeside · Self-catering", price: "R1,200/night", label: "cabin · dam", image:'destinations/hartbeespoort-dam-cabin.jpg' },
      { name: "Magaliesberg Country Hotel", tagline: "Mountain · Spa", price: "R1,650/night", label: "hotel · mountain", image:'destinations/magaliesberg-country-hotel.jpg' },
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.91033155734!2d27.957622496615635!3d-26.171343973446014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1780831539412!5m2!1sen!2sza',
    bestTime: [
      "Highveld weather is mild year-round, but the dry winter (May–August) is best for game viewing and brings crisp, sunny, mosquito-free days.",
      "Summer afternoons bring spectacular thunderstorms — plan activities for the morning and you'll rarely be rained out.",
    ],
    rail: [
      { icon: "car", title: "Weekend car hire", price: "from R385 / day", cta: "Find a car", href: "/car-rentals" },
      { icon: "plane", title: "Flights into OR Tambo (JNB)", price: "from R650 one-way", cta: "Search flights", href: "/" },
    ],
  },
  {
    slug: "mozambique",
    name: "Mozambique",
    cardImage:'destinations/mozambique-card.jpg',
    heroImage:'destinations/mozambique-hero.jpg',
    region: "Tofo & Bazaruto",
    tag: "Islands",
    price: "R3,100",
    blurb:
      "Warm turquoise water, dhow sailing, whale sharks and palm-fringed islands — Southern Africa's tropical beach escape.",
    heroLabel: "hero · indian ocean dhow at sunset",
    cardLabel: "indian ocean dhow",
    rating: 5,
    reviews: "4.8 · 760 traveller reviews",
    intro: [
      "When South Africans want a proper tropical beach, they head to Mozambique: bathwater-warm seas, fresh prawns and seafood, traditional dhows on the horizon and some of the best diving and snorkelling in the region.",
      "Tofo is the easy-going backpacker-and-diver hub reachable by road; the Bazaruto Archipelago is the splurge — barefoot island lodges reached by light aircraft. You'll need a passport, and a 4x4 for some coastal stretches.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "April – November" },
      { icon: "tag", label: "Budget / day", value: "R3,100 pp" },
      { icon: "globe", label: "Getting there", value: "Passport · fly or drive" },
      { icon: "clock", label: "Ideal stay", value: "5 – 8 nights" },
    ],
    things: [
      ["Dive & snorkel with whale sharks", "Tofo is one of the world's most reliable spots for whale sharks and manta rays."],
      ["Bazaruto dhow safari", "Sail between sandbank islands for snorkelling, lunch and dugong-spotting."],
      ["Fresh seafood markets", "Buy prawns, crab and crayfish straight off the boats and have them grilled."],
      ["Island lodge escape", "Trade the mainland for a barefoot lodge on Benguerra or Bazaruto Island."],
    ],
    stays: [
      { name: "Tofo Beach Lodge", tagline: "Beachfront · Dive base", price: "R1,400/night", label: "lodge · tofo beach", image:'destinations/tofo-beach-lodge.jpg' },
      { name: "Vilanculos Guesthouse", tagline: "Gateway · Self-catering", price: "R1,100/night", label: "guesthouse · palms", image:'destinations/vilancous-guest-house.jpg' },
      { name: "Bazaruto Island Resort", tagline: "Island · All-inclusive", price: "R8,500/night", label: "resort · island", image:'destinations/bazaruto-island.jpg' },
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d114854.46766824146!2d32.52828280121015!3d-25.895725469903144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThings%20to%20do!5e0!3m2!1sen!2sza!4v1780829084323!5m2!1sen!2sza',
    bestTime: [
      "The dry season (April–November) brings calm, clear water ideal for diving, with whale sharks and humpbacks most common from June to October.",
      "The wet season (December–March) is hot and humid with a real cyclone risk — most travellers avoid the peak of it.",
    ],
    rail: [
      { icon: "plane", title: "Flights to Vilanculos / Inhambane", price: "from R3,200 return", cta: "Search flights", href: "/" },
      { icon: "car", title: "4x4 hire (cross-border)", price: "from R980 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "botswana",
    name: "Botswana",
    region: "Okavango & Chobe",
    cardImage:'destinations/botswana-card.jpg',
    heroImage:'destinations/botswana-hero.jpg',
    tag: "Wilderness",
    price: "R4,200",
    blurb:
      "The Okavango Delta and Chobe's elephant herds — Africa's premier low-impact, high-end wilderness safari, right on South Africa's doorstep.",
    heroLabel: "hero · okavango delta channels from the air",
    cardLabel: "okavango delta",
    rating: 5,
    reviews: "4.9 · 480 traveller reviews",
    intro: [
      "Botswana built its safari industry on a 'low-volume, high-value' model: few vehicles, vast concessions and some of the most pristine wilderness left in Africa. The Okavango Delta — an inland river delta teeming with game — is the crown jewel.",
      "It's a step up in price from Kruger, but worth it for a milestone trip. Chobe, with the largest elephant population on earth, is the more affordable gateway and pairs perfectly with Victoria Falls.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "May – October" },
      { icon: "tag", label: "Budget / day", value: "R4,200 pp" },
      { icon: "globe", label: "Getting there", value: "Passport · fly-in" },
      { icon: "clock", label: "Ideal stay", value: "5 – 7 nights" },
    ],
    things: [
      ["Mokoro through the Delta", "Glide through the reed channels in a traditional dugout canoe at water level."],
      ["Chobe river cruise", "Sunset boat safaris pass huge elephant and buffalo herds at the water's edge."],
      ["Fly-in Delta camp", "Light aircraft into a remote tented camp for the full Okavango experience."],
      ["Makgadikgadi salt pans", "Otherworldly pans, meerkats and one of Africa's great night skies."],
    ],
    stays: [
      { name: "Chobe Riverfront Lodge", tagline: "Gateway · Half board", price: "R3,400/night", label: "lodge · chobe river",image:'destinations/chobe-riverfront-lodge.jpg' },
      { name: "Okavango Tented Camp", tagline: "Delta · Fly-in · Full board", price: "R9,800/night", label: "camp · delta", image:'destinations/okavango-tented-camp.jpg' },
      { name: "Maun Safari Guesthouse", tagline: "Town base · B&B", price: "R1,300/night", label: "guesthouse · maun", image:'destinations/maun-safari-guesthouse.jpg' },
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7562915.204892343!2d19.38978874682736!3d-22.24653975865807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea44321d1452211%3A0xf1647c2a8715af7b!2sBotswana!5e0!3m2!1sen!2sza!4v1780832416479!5m2!1sen!2sza',
    bestTime: [
      "The dry winter (May–October) is peak: paradoxically the Delta floods at this time, drawing huge concentrations of game, and thin vegetation makes sightings easy.",
      "The green season (November–April) is cheaper and excellent for birding and newborn animals, but some camps close and roads can flood.",
    ],
    rail: [
      { icon: "plane", title: "Flights to Maun / Kasane", price: "from R4,800 return", cta: "Search flights", href: "/" },
      { icon: "car", title: "4x4 hire (cross-border)", price: "from R1,200 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
  {
    slug: "victoria-falls",
    name: "Victoria Falls",
    cardImage:'destinations/victoria-falls-card.jpg',
    heroImage:'destinations/victoria-falls-hero.jpg',
    region: "Zimbabwe",
    tag: "Adventure",
    price: "R2,400",
    blurb:
      "The largest sheet of falling water on earth, plus white-water rafting, bungee jumping and sunset cruises on the Zambezi.",
    heroLabel: "hero · victoria falls with rainbow spray",
    cardLabel: "the falls",
    rating: 5,
    reviews: "4.9 · 1,040 traveller reviews",
    intro: [
      "Mosi-oa-Tunya — 'the smoke that thunders' — is one of the seven natural wonders of the world, and standing in its spray is worth the trip on its own. But the falls are also Southern Africa's adventure capital.",
      "The Zimbabwean town of Victoria Falls is compact and walkable, with the rainforest viewpoints, rafting put-ins and a bridge bungee all within reach. Pair it with Chobe in Botswana, an easy hour's drive away.",
    ],
    facts: [
      { icon: "cal", label: "Best time", value: "Feb – May (full flow)" },
      { icon: "tag", label: "Budget / day", value: "R2,400 pp" },
      { icon: "globe", label: "Getting there", value: "Passport · fly to VFA" },
      { icon: "clock", label: "Ideal stay", value: "2 – 4 nights" },
    ],
    things: [
      ["Walk the rainforest viewpoints", "Sixteen lookouts trace the gorge — bring a rain jacket for the spray."],
      ["White-water rafting", "Grade-5 rapids below the falls, best from August to December at low water."],
      ["Zambezi sunset cruise", "Drinks, hippos and elephants on the river above the falls."],
      ["Bridge bungee & zip-line", "Leap from the historic bridge between Zimbabwe and Zambia."],
    ],
    stays: [
      { name: "Victoria Falls Hotel", tagline: "Historic · Falls-view terrace", price: "R4,200/night", label: "hotel · colonial" , image:'destinations/victoria-falls-hotel.jpg' },
      { name: "Riverside Safari Lodge", tagline: "Zambezi · Half board", price: "R2,800/night", label: "lodge · zambezi", image:'destinations/riverside-safari-lodge.jpg' },
      { name: "Town Guesthouse", tagline: "Central · B&B", price: "R1,200/night", label: "guesthouse · town", image:'destinations/town-guest-house.jpg' },
    ],
    bestTime: [
      "February–May is peak flow, when the falls are at their most thunderous (and the spray heaviest). The light, the rainbows and the sheer volume are unforgettable.",
      "August–December is low water: you see more of the rock face and the swimming and rafting are at their best, including the famous Devil's Pool.",
    ],
    mapEmbed:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30367.617624173625!2d25.804996374642343!3d-17.93438313462724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe53f0d97964b%3A0xb5064359416ab317!2sVictoria%20Falls%2C%20Zimbabwe!5e0!3m2!1sen!2sza!4v1780826831511!5m2!1sen!2sza',
    rail: [
      { icon: "plane", title: "Flights to Victoria Falls (VFA)", price: "from R2,600 return", cta: "Search flights", href: "/" },
      { icon: "car", title: "Car & transfer hire", price: "from R700 / day", cta: "Find a car", href: "/car-rentals" },
    ],
  },
];

export function getDestination(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}

/** Card-shaped projection for listing grids (matches <DestinationCard /> props). */
export function destinationCards() {
  return DESTINATIONS.map((d) => ({
    slug: d.slug,
    name: d.name,
    region: d.region,
    tag: d.tag,
    price: d.price,
    label: d.cardLabel,
    image: d.cardImage ?? `destinations/${d.slug}-card.jpg`,
  }));
}

/* ---------- Guide articles ---------- */

export type GuideSection = {
  id: string;
  heading: string;
  body: string[];
  cta?: { icon: IconName; kicker: string; title: string; cta: string; href: string };
  /** optional budget breakdown table: [label, value][] with the last row treated as a total */
  table?: [string, string][];
};

export type GuideDoc = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  updated: string;
  author: string;
  authorBio: string;
  cardLabel: string;
  heroLabel: string;
  /** Optional R2 image keys (e.g. "guides/kruger-safari-guide-hero.jpg"). */
  heroImage?: string;
  cardImage?: string;
  intro: string;
  sections: GuideSection[];
};

export const GUIDES: GuideDoc[] = [
  {
    slug: "kruger-safari-guide",
    cat: "Safari",
    title: "The Complete Kruger Safari Guide 2026",
    cardImage:'guides/elephant-in-savana.jpg',
    heroImage:'guides/kruger-guides-hero.jpg',
    excerpt:
      "Everything a first-timer needs to plan a self-drive Kruger safari: when to go, what to book, where to stay and what it really costs.",
    read: "14 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · safari jeep",
    heroLabel: "featured · lion pride at first light",
    intro:
      "Kruger is the easiest world-class safari on the planet to do yourself. You don't need a tour, a guide or a 4x4 — just a rental car, a few nights booked inside the park, and a rough plan. This is that plan.",
    sections: [
      {
        id: "when",
        heading: "When to go",
        body: [
          "The dry winter months of May to September are prime safari season. The bush thins out, animals concentrate around the few remaining waterholes, and there are virtually no mosquitoes. Days are warm and sunny; pack for cold dawns on open game-drive vehicles.",
          "Summer (November–March) is green, hot and birdy with newborn animals about, but thick vegetation and afternoon storms make wildlife harder to spot. If it's your first safari, go in winter.",
        ],
      },
      {
        id: "getting-there",
        heading: "Getting there & around",
        body: [
          "Most visitors fly into Nelspruit (Mbombela / MQP) or drive the 4–5 hours from Johannesburg, then enter through one of the southern gates — Malelane, Crocodile Bridge or Numbi. The south has the densest game and the most rest camps.",
          "Inside the park you self-drive on good tar and gravel roads at a 50 km/h limit. An ordinary hatchback is fine, but a higher SUV gives you better visibility over the grass.",
        ],
        cta: {
          icon: "car",
          kicker: "Step 1 · transport",
          title: "An SUV gives the best game-viewing height — from R880/day",
          cta: "Compare cars",
          href: "/car-rentals",
        },
      },
      {
        id: "stay",
        heading: "Where to stay",
        body: [
          "SANParks rest camps inside the park are the best value and the most atmospheric — you fall asleep to lions calling. Skukuza and Lower Sabie are the big southern camps; book months ahead through SANParks for school holidays.",
          "Private reserves bordering Kruger, like the Sabi Sand, offer off-road guided drives and walking safaris at a much higher price point. Many people do a few self-drive nights in-park, then splurge on one or two private-lodge nights.",
        ],
      },
      {
        id: "budget",
        heading: "What it costs",
        body: ["A realistic per-person budget for a self-drive Kruger trip, four nights, two people sharing, in shoulder season:"],
        table: [
          ["Car hire (5 days, SUV)", "R4,400"],
          ["Fuel & conservation fees", "R1,900"],
          ["Rest-camp accommodation (4 nights)", "R5,800"],
          ["Food & sundries", "R2,400"],
          ["Per person, all-in", "≈ R7,250"],
        ],
      },
      {
        id: "tips",
        heading: "First-timer tips",
        body: [
          "Drive at first light and again in the last two hours of daylight — that's when predators move. Buy a good map at the gate and ask staff where the recent sightings have been.",
          "Be patient at waterholes, never get out of your car except in designated spots, and keep to the gate times — fines for being out after closing are steep. Book at least one guided sunrise or night drive for the things you can't do yourself.",
        ],
      },
    ],
  },
  {
    slug: "garden-route-7-day-itinerary",
    cat: "Road Trips",
    cardImage:'destinations/garden-route-hero.jpg',
    heroImage:'destinations/garden-route-card.jpg',
    title: "The Garden Route 7-Day Road-Trip Itinerary (2026)",
    excerpt:
      "Cape Town to Tsitsikamma in a week — the exact route, where to sleep, what to book, and what it really costs for two people.",
    read: "11 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · coastal road",
    heroLabel: "featured · garden route coastline from above",
    intro:
      "The Garden Route is South Africa's most beginner-friendly road trip: a 300 km ribbon of coast, forest and lagoon between Mossel Bay and Storms River, all on excellent tar roads. You don't need a 4x4 and you don't need to be brave — just a week, a rental car and this plan.",
    sections: [
      {
        id: "plan",
        heading: "Before you go",
        body: [
          "Fly into Cape Town, pick up your car at the airport, and drive the route west-to-east so the best stretches land on the back half of the trip. Book the car early — Garden Route stock gets thin over school holidays and the festive season.",
        ],
        cta: {
          icon: "car",
          kicker: "Step 1 · transport",
          title: "A compact auto is perfect for this route — from R520/day",
          cta: "Compare cars",
          href: "/car-rentals",
        },
      },
      {
        id: "day1",
        heading: "Days 1–2 · Cape Town to Mossel Bay",
        body: [
          "Leave the city early and break the four-hour drive at the farm stalls along the N2. Mossel Bay is your gentle introduction to the coast — a working harbour town with a surprisingly good beach and the route's warmest swimming water.",
          "Spend the first night here, then use the morning for the St Blaize cliff-path walk before heading inland to Oudtshoorn if you want to add the Cango Caves and ostrich farms.",
        ],
      },
      {
        id: "day3",
        heading: "Days 3–4 · Knysna & the lagoon",
        body: [
          "Knysna is the heart of the Garden Route and worth two nights. Eat oysters on the Thesen Islands waterfront, take the ferry across the lagoon to the Featherbed Nature Reserve, and watch the sunset from the Knysna Heads.",
        ],
        cta: {
          icon: "plane",
          kicker: "Bargain alert",
          title: "Flights into George (the Garden Route's airport) from R980",
          cta: "Search flights",
          href: "/",
        },
      },
      {
        id: "day5",
        heading: "Days 5–6 · Plettenberg Bay",
        body: [
          "'Plett' is the route's glamorous beach town — long white sands, whale-watching from June to November, and the Robberg Nature Reserve, a three-hour peninsula hike that's the single best walk on the whole route.",
          "This is also the base for Tsitsikamma day trips, so you can stay two nights and explore without repacking.",
        ],
      },
      {
        id: "day7",
        heading: "Day 7 · Tsitsikamma & home",
        body: [
          "End on a high in Tsitsikamma National Park: the suspension bridges over the Storms River mouth, ancient yellowwood forest, and — if you're brave — the world's highest bungee jump at Bloukrans. Drop the car at George or Port Elizabeth airport and fly home, or retrace the N2 back to Cape Town.",
        ],
      },
      {
        id: "budget",
        heading: "What it costs",
        body: ["Here's a realistic per-person budget for two people sharing, over seven days, travelling mid-range in shoulder season:"],
        table: [
          ["Car hire (7 days, compact auto)", "R3,640"],
          ["Fuel (≈1,000 km return)", "R1,500"],
          ["Accommodation (6 nights)", "R7,200"],
          ["Food & activities", "R4,500"],
          ["Per person, all-in", "≈ R8,400"],
        ],
      },
    ],
  },
  {
    slug: "budget-weekend-getaways-joburg",
    cardImage:'guides/joburg-getaway-guide-card.jpg',
    heroImage:'guides/joburg-getaway-guide-hero.jpg',
    cat: "Budget",
    title: "10 Best Budget Weekend Getaways from Joburg",
    excerpt:
      "Bush, mountains and water within two hours of the city — ten weekend escapes that won't wreck your budget, with what to book first.",
    read: "8 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · weekend escape",
    heroLabel: "featured · bushveld lodge at golden hour",
    intro:
      "Living in Joburg has one underrated perk: you're a short drive from bush, mountains and water in almost every direction. Here are ten weekend escapes that punch above their price — most reachable in a normal car, most under two hours away.",
    sections: [
      {
        id: "bush",
        heading: "For a bush fix",
        body: [
          "Pilanesberg and Dinokeng both give you malaria-free Big-Five game viewing within two hours of the city — Dinokeng is barely an hour from OR Tambo. Self-drive day permits keep costs down, or book one night at a mid-range lodge.",
          "For something quieter, the Magaliesberg's smaller reserves and Welgevonden over towards Limpopo offer big-sky bushveld without the crowds.",
        ],
        cta: {
          icon: "car",
          kicker: "Book first",
          title: "Weekend car hire from R385/day — the biggest movable cost",
          cta: "Find a car",
          href: "/car-rentals",
        },
      },
      {
        id: "water",
        heading: "For water & lakeside",
        body: [
          "Hartbeespoort Dam is the classic quick escape — cableway, boat cruises and dam-side cabins under an hour from Sandton. Further out, the Vaal River draws Joburgers for houseboats and lazy riverside lodges.",
          "Warmbaths (Bela-Bela) adds hot springs to the mix, an easy 90-minute run up the N1 and ideal with kids.",
        ],
      },
      {
        id: "mountains",
        heading: "For mountains & hiking",
        body: [
          "The Magaliesberg range has dozens of hiking trails and waterfalls within easy reach, while the Cradle of Humankind pairs Sterkfontein Caves with good walking. For a bigger adventure, the Drakensberg is a four-hour drive but unbeatable for a long weekend.",
        ],
      },
      {
        id: "tips",
        heading: "How to keep it cheap",
        body: [
          "Self-catering beats lodges with meals included if you're watching the budget — most reserves let you bring your own food. Travel in the off-peak shoulder, avoid school holidays, and split a car and accommodation between two couples.",
          "Book the car first: it's the cost that swings most with demand, and locking it in early on a weekend rate is the easiest saving you'll make.",
        ],
      },
    ],
  },
  {
    slug: "travel-during-load-shedding",
    cat: "Practical",
    title: "How to Travel South Africa During Load-Shedding",
    cardImage:'guides/loadshedding-guide-card.jpg',
    heroImage:'guides/loadshedding-guide-hero.jpg',
    excerpt:
      "Load-shedding is part of South African life — here's how to plan around it so it barely touches your trip.",
    read: "6 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · city at night",
    heroLabel: "featured · city skyline at dusk",
    intro:
      "Load-shedding — scheduled power cuts — is a fact of South African life, but it should never derail a trip. With a little planning it becomes a minor background hum rather than a holiday-wrecker. Here's how locals handle it.",
    sections: [
      {
        id: "app",
        heading: "Know the schedule",
        body: [
          "Download an app like EskomSePush before you arrive and set it to the area you're staying in. It tells you exactly when the power will be off — usually in 2 to 4-hour blocks — so you can plan around it rather than be surprised by it.",
          "Stages change daily; stage 2 means a couple of cuts a day, while higher stages mean more frequent ones. Check it each morning like you'd check the weather.",
        ],
      },
      {
        id: "stay",
        heading: "Pick the right place to stay",
        body: [
          "Most hotels, guesthouses and game lodges now run on backup — generators, inverters or solar. When booking, filter or simply ask: 'Do you have backup power during load-shedding?' It's a completely normal question here.",
          "Self-catering places with a gas hob and a few rechargeable lights are effectively load-shedding-proof.",
        ],
      },
      {
        id: "drive",
        heading: "On the road",
        body: [
          "Traffic lights ('robots') go dark during cuts — treat every dead intersection as a four-way stop and go slowly. Keep your fuel tank above half, since some petrol stations can't pump without power, and carry cash as card machines occasionally drop.",
          "Keep a power bank charged for your phone and offline maps downloaded, and you'll barely notice the cuts while you're out exploring anyway.",
        ],
        cta: {
          icon: "car",
          kicker: "Be self-sufficient",
          title: "A reliable rental with a 12V charger keeps you moving — from R385/day",
          cta: "Find a car",
          href: "/car-rentals",
        },
      },
    ],
  },
  {
    slug: "best-time-to-visit-south-africa",
    cat: "Planning",
    cardImage:'guides/best-time-south-africa-guide-card.jpg',
    heroImage:'guides/best-time-south-africa-guide-hero.jpg',
    title: "Best Time to Visit South Africa: A Season-by-Season Guide",
    excerpt:
      "When to go for safari, beaches, whales and wildflowers — and when to travel for the best weather and the lowest prices.",
    read: "9 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · seasons collage",
    heroLabel: "featured · acacia tree at golden hour",
    intro:
      "South Africa is a year-round destination, but the 'best' time depends entirely on what you're here for. Remember the seasons are flipped from the northern hemisphere: summer runs roughly November to March, winter May to September. Here's how to pick your window.",
    sections: [
      {
        id: "winter",
        heading: "Winter (May–September): best for safari",
        body: [
          "The dry winter is prime safari season. Vegetation thins out, animals gather at waterholes, and there are almost no mosquitoes — so Kruger and the bushveld are at their easiest for spotting wildlife. Days are mild and sunny; mornings on open game drives are cold, so pack layers.",
          "It's also the driest, clearest time on the Panorama Route and in the interior. The trade-off is the coast: Cape Town is at its wettest and coldest, so winter is not the time for the Mother City or beaches.",
        ],
      },
      {
        id: "summer",
        heading: "Summer (November–March): beaches & Cape Town",
        body: [
          "Summer is the time for Cape Town, the Garden Route and the coast — long, warm, dry days, buzzing beaches and the wine farms in full swing. The Indian-Ocean coast (Durban, Mozambique) is hot and humid.",
          "This is peak season, especially mid-December to mid-January, when locals holiday too: book months ahead and expect the highest prices. The bush is green, lush and beautiful, but thicker vegetation and afternoon storms make game harder to spot.",
        ],
      },
      {
        id: "shoulder",
        heading: "Shoulder seasons: the sweet spot for value",
        body: [
          "Autumn (April–May) and spring (September–October) are the savvy traveller's choice: gentler weather, thinner crowds and lower prices, while still being good for most activities. Spring brings the Namaqualand wildflowers and the start of whale season.",
          "Southern right whales are best viewed off Hermanus and the Cape coast from roughly June to November, peaking in spring.",
        ],
      },
      {
        id: "quick",
        heading: "Quick guide by activity",
        body: [
          "Safari and Big-Five game viewing: May–September. Cape Town, beaches and wine: November–March. Whale-watching: June–November. Wildflowers: late August–September. Best all-round value and mild weather: April–May or September–October.",
          "If you're combining a safari with Cape Town in one trip, the shoulder months are the best compromise — you'll get decent conditions for both without either being at its worst.",
        ],
      },
      {
        id: "save",
        heading: "When to travel to save money",
        body: [
          "Avoid the mid-December to mid-January festive peak and the school-holiday weeks, when accommodation and car hire roughly double. The cheapest stretches are the shoulder months and deep winter on the coast.",
          "Whatever your dates, the prices that move most are flights and car hire — lock those in early. You can map a realistic budget with our free Travel Budget Calculator before you commit.",
        ],
      },
    ],
  },
  {
    slug: "is-south-africa-safe-for-tourists",
    cat: "Practical",
    cardImage:'guides/sa-safety-guide-card.jpg',
    heroImage:'guides/sa-safety-guide-hero.jpg',
    title: "Is South Africa Safe for Tourists? An Honest Guide",
    excerpt:
      "A straight-talking look at safety in South Africa — the real risks, the sensible precautions, and how millions of visitors travel here happily every year.",
    read: "8 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · cape town street",
    heroLabel: "featured · coastal town viewpoint",
    intro:
      "South Africa has a real reputation for crime, and it's fair to take it seriously — but millions of tourists visit safely every year. The honest answer: with normal big-city common sense, the vast majority of trips are completely trouble-free. Here's how locals stay safe.",
    sections: [
      {
        id: "overview",
        heading: "The honest overview",
        body: [
          "Most crime is concentrated in specific areas that tourists rarely go, and is rarely aimed at visitors. The tourist routes — Kruger, the Garden Route, Cape Town's main areas, the Winelands — are well-travelled and well-policed.",
          "Treat South African cities the way you'd treat any large city anywhere: stay aware, don't flash valuables, and you'll almost certainly be fine.",
        ],
      },
      {
        id: "cities",
        heading: "Common-sense precautions in cities",
        body: [
          "Don't walk around at night in unfamiliar areas — use a ride-hailing app (Uber and Bolt are widely available) after dark. Keep phones and jewellery out of sight on the street, and don't leave bags visible in a parked car.",
          "Ask your accommodation which areas to avoid; locals will give you a frank answer. Withdraw cash inside malls or banks rather than at isolated street ATMs.",
        ],
      },
      {
        id: "driving",
        heading: "Staying safe on the road",
        body: [
          "Keep your doors locked and windows up in stop-start city traffic, and don't leave phones or bags on the passenger seat. At night, some locals treat red lights in quiet areas as a slow-and-go — use your judgement.",
          "On road trips, plan to arrive before dark, keep your fuel topped up, and stick to the main routes. Smash-and-grabs at intersections are the most common issue and are easily avoided by keeping valuables out of sight.",
        ],
      },
      {
        id: "scams",
        heading: "Scams & valuables",
        body: [
          "Watch for distraction tactics at ATMs (never accept 'help'), and only use your card where you can see it. Leave passports and spare cash in your accommodation safe and carry a copy.",
          "Card skimming exists, as it does everywhere — use tap-to-pay where you can and keep an eye on your statements.",
        ],
      },
      {
        id: "emergencies",
        heading: "Emergency numbers",
        body: [
          "Police: 10111. Ambulance: 10177. From a mobile phone you can also dial 112, which routes to emergency services. Save your accommodation's number and your car-hire company's roadside-assistance line before you set off.",
          "It's worth having comprehensive travel insurance, as you would anywhere — for peace of mind more than likelihood.",
        ],
      },
    ],
  },
  {
    slug: "renting-a-car-in-south-africa",
    cardImage: "guides/rent-car-guide-card.jpg",
    heroImage: "guides/rent-car-guide-hero.jpg",
    cat: "Car Hire",
    title: "Renting a Car in South Africa: The Complete Guide",
    excerpt:
      "Everything you need to hire a car in South Africa with confidence — what you need, which class to choose, insurance, fuel, tolls and the fees to watch for.",
    read: "10 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · rental car keys",
    heroLabel: "featured · car on an open road",
    intro:
      "South Africa is one of the best self-drive countries in the world: good roads, clear signage, and distances that make a road trip genuinely rewarding. Hiring a car is straightforward once you know the ground rules. Here's the complete picture.",
    sections: [
      {
        id: "need",
        heading: "What you need to rent",
        body: [
          "You'll need a valid driver's licence held for at least a year, in English (or with an International Driving Permit if yours isn't), and a credit card in the main driver's name for the security deposit. A debit card is sometimes accepted on economy cars but rarely for SUVs or 4x4s.",
          "Most suppliers require drivers to be 21 or older, with a young-driver surcharge under 25. Add any extra drivers at the counter so they're covered by the insurance.",
        ],
      },
      {
        id: "class",
        heading: "Choosing the right class",
        body: [
          "For cities, the Garden Route and Kruger's tar roads, an economy or compact car is perfectly fine and far cheaper to run. For unfenced reserves, gravel and sand tracks, or cross-border trips into Botswana, you'll want a proper SUV or 4x4.",
          "Don't over-buy: a 4x4 costs two to three times more to hire and fuel, and most first-time visitors never need one. Work out the all-in cost — including fuel — with our free Car-Rental Cost Calculator before you book.",
        ],
        cta: {
          icon: "car",
          kicker: "Compare & save",
          title: "See live rates across 20+ brands at SA airports",
          cta: "Compare cars",
          href: "/car-rentals",
        },
      },
      {
        id: "insurance",
        heading: "Insurance & the excess",
        body: [
          "Standard rates include basic cover with a large 'excess' — the amount you're liable for if something happens. You can reduce or waive that excess with an upgrade at the counter, or buy standalone excess insurance separately (often cheaper).",
          "Tyres, windscreen and undercarriage are commonly excluded from basic cover — worth knowing if you'll be on gravel. Photograph the car all round at pickup and note any existing damage.",
        ],
      },
      {
        id: "oneway",
        heading: "One-way & cross-border trips",
        body: [
          "One-way hire — say, pick up in Cape Town and drop in Joburg — is widely available, sometimes with a one-way fee depending on distance. It's perfect for the Garden Route so you don't have to double back.",
          "Taking the car into Botswana, Namibia, Mozambique, Zimbabwe or eSwatini is allowed by many suppliers, but you must arrange a cross-border letter in advance (around R750–R1,500) and some classes are excluded. Sort this at booking, never at the counter.",
        ],
      },
      {
        id: "running",
        heading: "Fuel, tolls & parking",
        body: [
          "Fuel is sold by attendants — you don't pump your own, and a small tip is customary. Keep the tank above half on long rural stretches. Major highways have toll plazas (cash or card), and Gauteng's e-toll system is being wound down but check your rental's policy.",
          "In towns and at attractions you'll often meet 'car guards' who watch your car for a small tip. It's normal and a couple of rand is plenty.",
        ],
      },
    ],
  },
  {
    slug: "driving-in-south-africa",
    cardImage: "guides/sa-roads-guide-card.jpg",
    heroImage: "guides/sa-roads-guide-hero.jpg",
    cat: "Practical",
    title: "Driving in South Africa: Road Rules, Tolls & What to Expect",
    excerpt:
      "Drive on the left, watch for the quirks — a practical rundown of South African road rules, tolls, fuel stops and the local habits that surprise first-timers.",
    read: "7 min read",
    updated: "Updated June 2026",
    author: "Falakhe Sivela · roadtripsa founder",
    authorBio:
      "Joburg-based software developer turned full-time traveller. I've driven the Garden Route six times and Kruger more than I can count — roadtripsa is where I share what actually worked.",
    cardLabel: "guide · open highway",
    heroLabel: "featured · mountain pass road",
    intro:
      "Driving yourself is the best way to see South Africa, and the roads are better than many visitors expect. A few local rules and habits are worth knowing before you pull out of the rental lot — here's what to expect.",
    sections: [
      {
        id: "basics",
        heading: "The basics: drive on the left",
        body: [
          "South Africa drives on the left, with the steering wheel on the right. Speed limits are 120 km/h on highways, 100 on rural roads and 60 in town unless signed otherwise, and they're enforced with cameras. Seatbelts are compulsory and using a handheld phone while driving is illegal.",
          "Carry your licence at all times. If yours isn't in English, bring an International Driving Permit.",
        ],
      },
      {
        id: "fourway",
        heading: "Four-way stops & the 'robot'",
        body: [
          "Traffic lights are called 'robots'. Four-way stops are everywhere: the rule is first to arrive, first to go — take your turn in order. During power cuts, treat any dark intersection as a four-way stop and proceed carefully.",
          "On single-lane highways, slower vehicles often pull onto the wide paved shoulder ('yellow line') to let you pass, and a quick hazard-light flash is the customary thank-you. Be aware the shoulder is also used by pedestrians.",
        ],
      },
      {
        id: "tolls",
        heading: "Tolls & toll roads",
        body: [
          "Major national routes (like the N1, N3 and N4) have toll plazas where you pay by cash or card. Factor these into a long road trip. Gauteng's overhead e-toll gantries are being discontinued, but confirm the policy with your car-hire company so you're not caught by an admin fee.",
        ],
      },
      {
        id: "fuel",
        heading: "Fuel, distances & load-shedding",
        body: [
          "Fuel stations are attended — you don't pump your own, and attendants will check oil and water and clean your windscreen; a small tip is normal. Distances are big, so plan fuel stops on rural routes and keep the tank above half.",
          "During load-shedding some pumps and card machines go down, so carry a little cash. For the full rundown, see our guide on travelling during load-shedding.",
        ],
      },
      {
        id: "wildlife",
        heading: "Animals, potholes & night driving",
        body: [
          "In rural areas and game regions, watch for animals — domestic and wild — on or near the road, especially at dawn and dusk. Potholes can appear on secondary roads after rain.",
          "Where you can, avoid driving after dark on rural routes: unlit roads, pedestrians and animals make it the riskiest time. Plan to reach your destination before sunset.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

/** Card-shaped projection for listing grids (matches <GuideCard /> props). */
export function guideCards() {
  return GUIDES.map((g) => ({
    slug: g.slug,
    cat: g.cat,
    title: g.title,
    read: g.read,
    label: g.cardLabel,
    image: g.cardImage ?? `guides/${g.slug}-card.jpg`,
  }));
}
