// Sample motorcycle data
export const motorcyclesData = [
  {
    id: "m1",
    name: "Razor GTX-1000",
    brand: "Razor",
    year: 2025,
    price: 12999,
    engineSize: 998,
    engineType: "Inline-4",
    power: "182 HP",
    category: "Sport",
    color: "Red/Black",
    mileage: 0,
    condition: "New",
    features: [
      "Quickshifter",
      "Traction Control",
      "Ride Modes",
      "LED Lighting",
      "TFT Display"
    ],
    description: "The Razor GTX-1000 is the flagship sports bike with cutting-edge technology and blistering performance. Featuring a 998cc inline-four engine producing 182 HP, the GTX-1000 offers exhilarating acceleration and precise handling. Advanced electronics include multiple riding modes, traction control, and anti-wheelie systems to keep the power manageable. The aerodynamic bodywork is designed for maximum stability at high speeds.",
    specs: {
      displacement: "998cc",
      compression: "13.2:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed",
      frontSuspension: "Fully adjustable inverted fork, 120mm travel",
      rearSuspension: "Adjustable monoshock, 130mm travel",
      frontBrake: "Dual 320mm discs, 4-piston radial calipers",
      rearBrake: "Single 220mm disc, single-piston caliper",
      tires: {
        front: "120/70 ZR17",
        rear: "190/55 ZR17"
      },
      seatHeight: "830mm",
      weight: "198kg (wet)",
      fuelCapacity: "17L"
    },
    images: [
      "https://images.pexels.com/photos/2393821/pexels-photo-2393821.jpeg",
      "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg",
      "https://images.pexels.com/photos/163210/motorcycle-motor-vehicle-freedom-163210.jpeg"
    ],
    relatedModels: ["m2", "m4"]
  },
  {
    id: "m2",
    name: "Phantom 650",
    brand: "Phantom",
    year: 2024,
    price: 7499,
    engineSize: 649,
    engineType: "Parallel Twin",
    power: "78 HP",
    category: "Naked",
    color: "Blue",
    mileage: 5,
    condition: "New",
    features: [
      "ABS",
      "Slipper Clutch",
      "LED Headlight",
      "Digital Display",
      "Adjustable Suspension"
    ],
    description: "The Phantom 650 is a versatile naked bike that combines smooth power delivery with nimble handling. Perfect for both city commuting and weekend canyon carving, the 649cc parallel-twin engine delivers a broad powerband with plenty of torque throughout the rev range. The upright riding position offers all-day comfort, while the lightweight chassis provides exceptional maneuverability in tight spaces.",
    specs: {
      displacement: "649cc",
      compression: "11.8:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed",
      frontSuspension: "41mm inverted fork, adjustable preload",
      rearSuspension: "Monoshock with adjustable preload and rebound",
      frontBrake: "Dual 300mm discs, 2-piston calipers",
      rearBrake: "Single 240mm disc, single-piston caliper",
      tires: {
        front: "120/70 ZR17",
        rear: "180/55 ZR17"
      },
      seatHeight: "810mm",
      weight: "187kg (wet)",
      fuelCapacity: "15L"
    },
    images: [
      "https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg",
      "https://images.pexels.com/photos/1715195/pexels-photo-1715195.jpeg",
      "https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg"
    ],
    relatedModels: ["m1", "m3"]
  },
  {
    id: "m3",
    name: "Ranger ADV",
    brand: "Ranger",
    year: 2024,
    price: 15799,
    engineSize: 1084,
    engineType: "V-Twin",
    power: "102 HP",
    category: "Adventure",
    color: "Green/Black",
    mileage: 120,
    condition: "Used",
    features: [
      "Electronic Suspension",
      "Cornering ABS",
      "Cruise Control",
      "Heated Grips",
      "Luggage Rack",
      "Skid Plate"
    ],
    description: "The Ranger ADV is the ultimate adventure motorcycle, designed to take you anywhere with confidence. The robust 1084cc V-twin engine delivers impressive low-end torque and reliable power across all terrains. With 21-inch front and 18-inch rear tubeless spoked wheels, the Ranger ADV is ready for both on and off-road adventures. The adjustable windscreen, comfortable seat, and upright ergonomics make long-distance touring a pleasure.",
    specs: {
      displacement: "1084cc",
      compression: "10.5:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed with quickshifter",
      frontSuspension: "Electronic semi-active 48mm inverted fork, 230mm travel",
      rearSuspension: "Electronic semi-active monoshock, 220mm travel",
      frontBrake: "Dual 310mm discs, 4-piston radial calipers",
      rearBrake: "Single 260mm disc, single-piston caliper",
      tires: {
        front: "90/90-21",
        rear: "150/70-18"
      },
      seatHeight: "850mm (adjustable)",
      weight: "238kg (wet)",
      fuelCapacity: "24.5L"
    },
    images: [
      "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
      "https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg",
      "https://images.pexels.com/photos/1413414/pexels-photo-1413414.jpeg"
    ],
    relatedModels: ["m5", "m6"]
  },
  {
    id: "m4",
    name: "Blazer 750",
    brand: "Razor",
    year: 2023,
    price: 9999,
    engineSize: 749,
    engineType: "Inline-4",
    power: "140 HP",
    category: "Sport",
    color: "Black",
    mileage: 1200,
    condition: "Used",
    features: [
      "ABS",
      "Traction Control",
      "LED Lights",
      "Quick Shifter",
      "Digital Display"
    ],
    description: "The Blazer 750 is a mid-weight sports bike that punches well above its class. The 749cc inline-four engine revs eagerly to its 14,000 RPM redline, delivering excellent top-end power while maintaining a tractable midrange. The compact chassis and aggressive geometry offer razor-sharp handling on twisty roads and track days alike. Despite its sporting intentions, the ergonomics are surprisingly comfortable for longer rides.",
    specs: {
      displacement: "749cc",
      compression: "12.8:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed",
      frontSuspension: "Fully adjustable 41mm inverted fork, 120mm travel",
      rearSuspension: "Adjustable monoshock, 130mm travel",
      frontBrake: "Dual 310mm discs, 4-piston calipers",
      rearBrake: "Single 220mm disc, single-piston caliper",
      tires: {
        front: "120/70 ZR17",
        rear: "180/55 ZR17"
      },
      seatHeight: "820mm",
      weight: "190kg (wet)",
      fuelCapacity: "16L"
    },
    images: [
      "https://images.pexels.com/photos/1045535/pexels-photo-1045535.jpeg",
      "https://images.pexels.com/photos/5901025/pexels-photo-5901025.jpeg",
      "https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg"
    ],
    relatedModels: ["m1", "m2"]
  },
  {
    id: "m5",
    name: "Voyager 1800",
    brand: "Cruiser",
    year: 2024,
    price: 19499,
    engineSize: 1795,
    engineType: "V-Twin",
    power: "92 HP",
    category: "Touring",
    color: "Midnight Blue",
    mileage: 0,
    condition: "New",
    features: [
      "Heated Seats",
      "Cruise Control",
      "GPS Navigation",
      "Premium Audio System",
      "Adjustable Windshield",
      "Rider Backrest"
    ],
    description: "The Voyager 1800 is the ultimate touring motorcycle for riders who demand luxury and comfort. Featuring a powerful 1795cc V-twin engine tuned for smooth long-distance cruising, the Voyager delivers effortless power even when fully loaded with passenger and luggage. The plush seats, comprehensive wind protection, and advanced infotainment system make all-day riding a pleasure. With 37 gallons of storage capacity in the saddlebags and top case, there's plenty of room for extended road trips.",
    specs: {
      displacement: "1795cc",
      compression: "9.8:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed with overdrive",
      frontSuspension: "49mm telescopic fork, 150mm travel",
      rearSuspension: "Air-adjustable twin shocks, 120mm travel",
      frontBrake: "Dual 320mm discs, 4-piston calipers",
      rearBrake: "Single 320mm disc, 2-piston caliper",
      tires: {
        front: "130/70R18",
        rear: "180/60R16"
      },
      seatHeight: "750mm",
      weight: "398kg (wet)",
      fuelCapacity: "22.5L"
    },
    images: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
      "https://images.pexels.com/photos/2611685/pexels-photo-2611685.jpeg",
      "https://images.pexels.com/photos/4577722/pexels-photo-4577722.jpeg"
    ],
    relatedModels: ["m3", "m6"]
  },
  {
    id: "m6",
    name: "Street King 500",
    brand: "Phantom",
    year: 2025,
    price: 5999,
    engineSize: 471,
    engineType: "Parallel Twin",
    power: "47 HP",
    category: "Naked",
    color: "Orange",
    mileage: 0,
    condition: "New",
    features: [
      "ABS",
      "LED Lighting",
      "Digital Display",
      "USB Charging Port",
      "Adjustable Clutch Lever"
    ],
    description: "The Street King 500 is the perfect entry-level motorcycle for new riders or experienced riders looking for a lightweight, nimble commuter. The 471cc parallel-twin engine provides enough power for exciting rides while remaining manageable for less experienced riders. The upright riding position and narrow profile make navigating through traffic a breeze, while the advanced LCD display provides all necessary information at a glance.",
    specs: {
      displacement: "471cc",
      compression: "10.7:1",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "6-speed",
      frontSuspension: "41mm telescopic fork, 120mm travel",
      rearSuspension: "Pro-Link single shock with 5-step preload adjustment",
      frontBrake: "Single 320mm disc, 2-piston caliper",
      rearBrake: "Single 240mm disc, single-piston caliper",
      tires: {
        front: "120/70 ZR17",
        rear: "160/60 ZR17"
      },
      seatHeight: "785mm",
      weight: "168kg (wet)",
      fuelCapacity: "13.7L"
    },
    images: [
      "https://images.pexels.com/photos/2393839/pexels-photo-2393839.jpeg",
      "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg",
      "https://images.pexels.com/photos/3378289/pexels-photo-3378289.jpeg"
    ],
    relatedModels: ["m2", "m4"]
  }
];