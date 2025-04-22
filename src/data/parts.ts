// Sample parts data
export const partsData = [
  {
    id: "p1",
    name: "Performance Exhaust System",
    price: 799.99,
    category: "Exhaust",
    brand: "PowerFlow",
    compatibility: ["m1", "m4"],
    description: "Boost performance and add a deep, aggressive sound with this premium titanium exhaust system. Includes all mounting hardware and is 30% lighter than stock.",
    features: [
      "Titanium construction",
      "Removable baffle",
      "30% weight reduction",
      "5-10% power increase",
      "Deep, aggressive tone"
    ],
    image: "https://images.pexels.com/photos/5249845/pexels-photo-5249845.jpeg",
    inStock: true
  },
  {
    id: "p2",
    name: "LED Headlight Conversion Kit",
    price: 199.99,
    category: "Lighting",
    brand: "LumiTech",
    compatibility: ["m1", "m2", "m3", "m4", "m5", "m6"],
    description: "Upgrade your visibility with this plug-and-play LED headlight kit. Provides 200% more illumination than standard halogen bulbs with a pure white 6000K color temperature.",
    features: [
      "6000K white color temperature",
      "200% brighter than stock",
      "50,000 hour lifespan",
      "Plug-and-play installation",
      "Includes anti-flicker module"
    ],
    image: "https://images.pexels.com/photos/10999484/pexels-photo-10999484.jpeg",
    inStock: true
  },
  {
    id: "p3",
    name: "Racing Brake Lever Set",
    price: 129.99,
    category: "Controls",
    brand: "RideTech",
    compatibility: ["m1", "m2", "m4", "m6"],
    description: "CNC machined from billet aluminum, these adjustable brake and clutch levers provide precise control and a customized feel. Available in multiple colors.",
    features: [
      "6-position adjustment",
      "Billet aluminum construction",
      "Foldable design prevents breakage in case of a fall",
      "Precision ball bearings for smooth operation",
      "Anodized finish resists corrosion"
    ],
    image: "https://images.pexels.com/photos/212997/pexels-photo-212997.jpeg",
    inStock: true
  },
  {
    id: "p4",
    name: "Performance Air Filter",
    price: 69.99,
    category: "Engine",
    brand: "FlowMaster",
    compatibility: ["m1", "m2", "m3", "m4", "m5", "m6"],
    description: "Increase airflow and horsepower with this washable and reusable high-flow air filter. Designed to fit the stock airbox with no modifications required.",
    features: [
      "Washable and reusable",
      "15% increased airflow over stock",
      "Cotton gauze filter material",
      "Oil-free design",
      "1-3 HP gain"
    ],
    image: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg",
    inStock: true
  },
  {
    id: "p5",
    name: "Premium Sport Tires (Set)",
    price: 299.99,
    category: "Tires",
    brand: "GripTech",
    compatibility: ["m1", "m2", "m4", "m6"],
    description: "Dual-compound sport tires designed for maximum grip on both wet and dry surfaces. Features a harder center compound for increased mileage and softer edges for cornering confidence.",
    features: [
      "Dual-compound design",
      "Silica-enriched rubber for wet grip",
      "Radial construction",
      "Zero degree steel belt technology",
      "Race-derived tread pattern"
    ],
    image: "https://images.pexels.com/photos/12529759/pexels-photo-12529759.jpeg",
    inStock: true
  },
  {
    id: "p6",
    name: "Quickshifter Kit",
    price: 349.99,
    category: "Electronics",
    brand: "ShiftTech",
    compatibility: ["m1", "m4"],
    description: "Achieve faster, smoother upshifts without rolling off the throttle. This quickshifter kit includes all necessary sensors and control module for seamless integration.",
    features: [
      "Plug-and-play installation",
      "Adjustable activation pressure",
      "Auto-blip for clutchless downshifts",
      "Waterproof control module",
      "CAN-bus compatible"
    ],
    image: "https://images.pexels.com/photos/3334453/pexels-photo-3334453.jpeg",
    inStock: false
  },
  {
    id: "p7",
    name: "Carbon Fiber Fender Kit",
    price: 249.99,
    category: "Body",
    brand: "CarbonWorks",
    compatibility: ["m1", "m2", "m4", "m6"],
    description: "Lightweight carbon fiber front and rear fenders provide a race-inspired look while reducing weight. UV-resistant clear coat prevents yellowing and fading.",
    features: [
      "3K carbon fiber weave",
      "UV-resistant clear coat",
      "50% lighter than stock plastic",
      "Direct bolt-on replacement",
      "Includes all mounting hardware"
    ],
    image: "https://images.pexels.com/photos/9685084/pexels-photo-9685084.jpeg",
    inStock: true
  },
  {
    id: "p8",
    name: "Touring Windshield",
    price: 179.99,
    category: "Body",
    brand: "WindGuard",
    compatibility: ["m3", "m5"],
    description: "Taller touring windshield provides excellent wind protection for long-distance riding comfort. Made from high-quality polycarbonate with anti-scratch coating.",
    features: [
      "6 inches taller than stock",
      "Polycarbonate construction",
      "Anti-scratch coating",
      "UV-resistant material prevents yellowing",
      "Tool-free installation"
    ],
    image: "https://images.pexels.com/photos/14947460/pexels-photo-14947460.jpeg",
    inStock: true
  },
  {
    id: "p9",
    name: "Motorcycle Cover",
    price: 79.99,
    category: "Accessories",
    brand: "WeatherShield",
    compatibility: ["m1", "m2", "m3", "m4", "m5", "m6"],
    description: "Heavy-duty waterproof cover protects your motorcycle from the elements. Features heat-resistant panels for use immediately after riding and reinforced grommets for security cable.",
    features: [
      "Waterproof and UV-resistant",
      "Heat-resistant panels for exhaust area",
      "Soft inner lining prevents scratches",
      "Elastic bottom for secure fit",
      "Includes storage bag"
    ],
    image: "https://images.pexels.com/photos/1252125/pexels-photo-1252125.jpeg",
    inStock: true
  },
  {
    id: "p10",
    name: "High Performance Chain Kit",
    price: 159.99,
    category: "Drivetrain",
    brand: "DriveMaster",
    compatibility: ["m1", "m2", "m4", "m6"],
    description: "Complete chain and sprocket kit featuring X-ring technology for extended life and reduced maintenance. Includes front and rear sprockets with optimal gearing for improved acceleration.",
    features: [
      "X-ring design for extended life",
      "7075-T6 aluminum rear sprocket",
      "Chromoly steel front sprocket",
      "Pre-stretched to minimize break-in period",
      "Includes master link"
    ],
    image: "https://images.pexels.com/photos/3378217/pexels-photo-3378217.jpeg",
    inStock: true
  },
  {
    id: "p11",
    name: "Gel Comfort Seat",
    price: 239.99,
    category: "Ergonomics",
    brand: "ComfortRide",
    compatibility: ["m3", "m5"],
    description: "Upgrade to all-day riding comfort with this gel-infused seat. Features a waterproof marine-grade vinyl cover and progressive-density foam structure to eliminate pressure points.",
    features: [
      "Gel-core technology",
      "Progressive-density foam",
      "Waterproof marine-grade vinyl cover",
      "Anti-slip surface texture",
      "Direct bolt-on replacement"
    ],
    image: "https://images.pexels.com/photos/8985236/pexels-photo-8985236.jpeg",
    inStock: true
  },
  {
    id: "p12",
    name: "Hard Saddlebags Set",
    price: 599.99,
    category: "Luggage",
    brand: "TourMaster",
    compatibility: ["m3", "m5"],
    description: "Weather-resistant hard saddlebags provide secure storage for all your gear. Features quick-release mounting system, integrated locks, and reflective accents for visibility.",
    features: [
      "35L capacity per side",
      "Weather-sealed construction",
      "One-touch opening system",
      "Integrated keyed locks",
      "Includes all mounting hardware"
    ],
    image: "https://images.pexels.com/photos/14415929/pexels-photo-14415929.jpeg",
    inStock: true
  }
];