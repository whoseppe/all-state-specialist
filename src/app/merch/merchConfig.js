import hatTruckerBlack from "../../../public/hat_trucker_black.png";
import hatTruckerGray from "../../../public/hat_trucker_gray.png";
import hatTruckerLeatherBlack from "../../../public/hat_trucker_leather_black.png";
import hatTruckerLeatherGray from "../../../public/hat_trucker_leather_gray.png";
import hatNewBlack from "../../../public/hat_new_black.png";
import hatNewLeatherBlack from "../../../public/hat_new_leather_black.png";
import vest from "../../../public/vest.png";
import shirtLongBlack from "../../../public/shirt_long_black.png";
import shirtLongWhite from "../../../public/shirt_long_white.png";
import shirtRegularBlack from "../../../public/shirt_regular_black.png";
import shirtRegularWhite from "../../../public/shirt_regular_white.png";
import longSleeveOrange from "../../../public/longsleeve_orange.png";
import longSleeveGreen from "../../../public/longsleeve_green.png";

export const merch = [
  {
    id: "shirt_long_1",
    title: "Allstate Over Sized Shirts",
    price: {
      sm: "$25",
      md: "$25",
      lg: "$25",
      xl: "$25",
      xxl: "$27",
      xxxl: "$28",
    },
    desc: "4.3 oz./yd², 100% combed ring-spun cotton, 32 singles",
    sizes: ["sm", "md", "lg", "xl", "xxl", "xxxl"],
    features: ["Curved bottom hem"],
    colors: [
      { label: "Black", hex: "#000" },
      { label: "White", hex: "#fff" },
    ],
    images: [shirtLongBlack, shirtLongWhite],
    type: "shirt_long",
  },
  {
    id: "shirt_regular_1",
    title: "Allstate Regular Shirts",
    price: {
      sm: "$20",
      md: "$20",
      lg: "$20",
      xl: "$20",
      xxl: "$22",
      xxxl: "$23",
    },
    desc: "60% combed ring-spun cotton/40% polyester",
    sizes: ["sm", "md", "lg", "xl", "xxl", "xxxl"],
    features: [
      "32 single, 4.3 ounce CVC jersey",
      "Set-in collar of 1x1 CVC baby rib. Side seamed.",
    ],
    colors: [
      { label: "Black", hex: "#000" },
      { label: "White", hex: "#fff" },
    ],
    images: [shirtRegularBlack, shirtRegularWhite],
    type: "shirt_regular",
  },
  {
    id: "",
    title: "Allstate Work Shirts",
    price: {
      sm: "$23",
      md: "$23",
      lg: "$23",
      xl: "$23",
      xxl: "$26",
      xxxl: "$28",
    },
    desc: "50/50 cotton/poly Safety Green, Safety Orange",
    sizes: ["sm", "md", "lg", "xl", "xxl", "xxxl"],
    features: [
      "Non-topstitched, classic width, rib collar",
      "Taped neck and shoulders",
    ],
    colors: [
      { label: "Orange", hex: "#ec8841" },
      { label: "Green", hex: "#D0EA61" },
    ],
    images: [longSleeveOrange, longSleeveGreen],
    type: "longsleeve",
  },
  {
    id: "",
    title: "AllState Trucker Transfer Hats",
    price: { "one-size": "$15" },
    desc: "This two-toned cap features breathable mesh and contrast stitching on the bill.",
    sizes: ["one-size"],
    features: [
      "100% cotton twill front panels and bill (Solids)",
      "7-position adjustable snapback",
    ],
    colors: [
      { label: "Black", hex: "#000" },
      { label: "Heather Gray", hex: "#96978F" },
    ],
    images: [hatTruckerBlack, hatTruckerGray],
    type: "hat_trucker",
  },
  {
    id: "",
    title: "AllState Trucker Leather Patch Hats",
    price: { "one-size": "$20" },
    desc: "This two-toned cap features breathable mesh and contrast stitching on the bill.",
    sizes: ["one-size"],
    features: [
      "Real Leather Patch",
      "100% cotton twill front panels and bill (Solids)",
      "7-position adjustable snapback",
    ],
    colors: [
      { label: "Black", hex: "#000" },
      { label: "Heather Gray", hex: "#96978F" },
    ],
    images: [hatTruckerLeatherBlack, hatTruckerLeatherGray],
    type: "hat_trucker",
  },
  {
    id: "",
    title: "AllState Premium Transfer Hats",
    price: { "one-size": "$20" },
    desc: "This best-selling cap is reminiscent of the one that made New Era famous—complete with a flat bill, high profile and classic snapback closure.",
    sizes: ["one-size"],
    features: ["100% polyester", "7-position adjustable snapback"],
    colors: [{ label: "Black", hex: "#000" }],
    images: [hatNewBlack],
    type: "hat_new",
  },
  {
    id: "",
    title: "AllState Premium Leather Patch Hats",
    price: { "one-size": "$25" },
    desc: "This best-selling cap is reminiscent of the one that made New Era famous—complete with a flat bill, high profile and classic snapback closure.",
    sizes: ["one-size"],
    features: ["100% polyester", "7-position adjustable snapback"],
    colors: [{ label: "Black", hex: "#000" }],
    images: [hatNewLeatherBlack],
    type: "hat_new",
  },
  {
    id: "",
    title: "All State Specialist Safety Vest",
    price: {
      sm: "$30",
      md: "$30",
      lg: "$30",
      xl: "$30",
      xxl: "$30",
    },
    desc: "Safety Vest - ANSI/ISEA 107-2015 | Type R, Class 2",
    sizes: ["sm", "md", "lg", "xl", "xxl"],
    features: [
      '2" Silver Reflective Tape w/ Contrasting Trim',
      "100% Polyester Mesh Material",
      "Zippered Front Closure",
    ],
    colors: [{ label: "Yellow/Orange", hex: "#d1e654" }],
    images: [vest],
    type: "vest",
  },
];

/* 
// {AllState Trucker Transfer Hats - Snap back - Black / Heather Gray $15 
// This two-toned cap features breathable mesh and contrast stitching on the bill. 
// Fabric: 100% cotton twill front panels and bill (Solids); 65/35 polyester/cotton twill front panels and bill (Heathers); 100% polyester mesh mid and back panels
// Structure: Structured
// Profile: Mid
// Closure: 7-position adjustable snapback\
// image: hat_trucker_gray & hat_trucker_black}

// AllState Trucker Leather Patch Hats - Snap back - $20
// Real Leather Patch 
// This two-toned cap features breathable mesh and contrast stitching on the bill. 
// Fabric: 100% cotton twill front panels and bill (Solids); 65/35 polyester/cotton twill front panels and bill (Heathers); 100% polyester mesh mid and back panels
// Structure: Structured
// Profile: Mid
// Closure: 7-position adjustable snapback
// iamge: hat_trucker_leather_black hat_trucker_leather_gray

// AllState Premium Transfer Hats - Snap back - $20
// This best-selling cap is reminiscent of the one that made New Era famous—complete with a flat bill, high profile and classic snapback closure.
// 100% polyester
// Structured
// High-profile
// 7-position adjustable snap closure
// 9FIFTY FIT: Features a classic, throwback look with a flat visor that can curve with a full crown. Includes a structured front panel for stability and an open back with snapback closure.
// image: hat_new_black

// AllState Premium Leather Patch Hats - Snap back - Black / Heather Gray - $25
// Real Leather Patch 
// This best-selling cap is reminiscent of the one that made New Era famous—complete with a flat bill, high profile and classic snapback closure.
// 100% polyester
// Structured
// High-profile
// 7-position adjustable snap closure
// 9FIFTY FIT: Features a classic, throwback look with a flat visor that can curve with a full crown. Includes a structured front panel for stability and an open back with snapback closure.
// image: hat_new_leather_black

// All State Specialist Safety Vest -Small - 2xl Available - $30
// Safety Vest - ANSI/ISEA 107-2015 | Type R, Class 2
// 2" Silver Reflective Tape w/ Contrasting Trim
// 100% Polyester Mesh Material 
// Pockets: One Left Chest 2-Tier & 4-Division Pocket
// One Lower Right Inside Pocket w/ Reinforced Stitching
// Zippered Front Closure
// image: vest




Allstate Over Sized Shirts - Small  - Xl - $25 / XXL - $27 / XXXL - $28
4.3 oz./yd², 100% combed ring-spun cotton, 32 singles
Heather Grey is 90/10 cotton/polyester
Set-in collar 1x1 baby rib
Curved bottom hem
Side seams
image: shirt_long_black && shirt_long_white





Allstate Regular Sized Shirts Black / White  - Small  - Xl - $20 / XXL - $22 / XXXL - $23
60% combed ring-spun cotton/40% polyester,
32 single, 4.3 ounce CVC jersey.
Set-in collar of 1x1 CVC baby rib. Side seamed.
image: shirt_regular_black && shirt_regular_white






Allstate Work Shirts - Safety Orange / Green - Small - XL - $23 / XXL - $26 / XXXL - $28
50/50 cotton/poly Safety Green, Safety Orange
Non-topstitched, classic width, rib collar
Taped neck and shoulders
Rib knit cuffs
image: longsleeve_green && longsleeve_orange






*/
