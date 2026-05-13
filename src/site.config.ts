// =============================================================================
// DUMMY-DATA – ersätt allt nedan med kundens riktiga uppgifter innan deploy.
// "Sollentuna Bilservice" och relaterad info är PÅHITTAD för demo-syfte.
// =============================================================================

export const site = {
  name: "Sollentuna Bilservice",
  shortName: "SBS",
  tagline:
    "Service, reparation och däckbyte. Lokala mekaniker i Sollentuna sedan 2012.",
  city: "Sollentuna",
  ownerName: "Mikael Holm",
  yearStarted: 2012,
  phone: "08-555 23 45",
  email: "info@sollentunabilservice.se",
  address: {
    street: "Hammarbyvägen 41",
    postal: "192 70 Sollentuna",
    mapsUrl: "https://www.google.com/maps?q=Sollentuna",
  },
  social: {
    facebook: "https://facebook.com/sollentunabilservice",
    instagram: "https://instagram.com/sollentunabilservice",
  },
  hours: [
    { day: "Måndag", time: "07:00–17:00" },
    { day: "Tisdag", time: "07:00–17:00" },
    { day: "Onsdag", time: "07:00–17:00" },
    { day: "Torsdag", time: "07:00–17:00" },
    { day: "Fredag", time: "07:00–16:00" },
    { day: "Lördag", time: "09:00–13:00" },
    { day: "Söndag", time: "Stängt" },
  ],
};

export type ServiceIcon =
  | "wrench"
  | "gear"
  | "tire"
  | "brake"
  | "battery"
  | "ac"
  | "oil"
  | "diagnostic"
  | "key";

export interface Service {
  no: string;
  name: string;
  short: string;
  duration: string;
  price: string;
  icon: ServiceIcon;
}

export const services: Service[] = [
  { no: "01", name: "Service", short: "Oljebyte, filter och 30-punkters kontroll.", duration: "1–2 tim", price: "fr. 1 495 kr", icon: "oil" },
  { no: "02", name: "Stor service", short: "Service plus kamrem, bromsvätska, tändstift.", duration: "Halv dag", price: "fr. 3 500 kr", icon: "gear" },
  { no: "03", name: "Reparation", short: "Felsökning, bromsar, kopplingar, motor.", duration: "Per timme", price: "695 kr/tim", icon: "diagnostic" },
  { no: "04", name: "Däckbyte", short: "Av- och påmontering, balansering.", duration: "30 min", price: "595 kr/axel", icon: "tire" },
  { no: "05", name: "Däckhotell", short: "Förvaring per säsong, tvätt ingår.", duration: "—", price: "fr. 695 kr/säsong", icon: "key" },
  { no: "06", name: "AC-service", short: "Påfyllning, läcksökning, filterbyte.", duration: "1 tim", price: "fr. 990 kr", icon: "ac" },
  { no: "07", name: "Batteribyte", short: "Test plus byte. Pris inkl. nytt batteri.", duration: "30 min", price: "fr. 1 800 kr", icon: "battery" },
  { no: "08", name: "Besiktningshjälp", short: "Vi går igenom bilen inför besiktning.", duration: "1 tim", price: "fr. 595 kr", icon: "wrench" },
  { no: "09", name: "Bromsservice", short: "Byte av belägg och skivor fram eller bak.", duration: "2 tim", price: "fr. 1 800 kr", icon: "brake" },
];

export const lottieAnimations = {
  wheel: "https://assets-v2.lottiefiles.com/a/296bc58e-116b-11ee-b93e-73a6db565534/3zNoMbUYrP.lottie",
  tireRepair: "https://assets-v2.lottiefiles.com/a/6d4aba9c-118b-11ee-89ea-438b8fa825c7/eeW6nLHF3O.lottie",
  sedan: "https://assets-v2.lottiefiles.com/a/2bc0eb9e-116a-11ee-91a8-a7bbd390e829/ZQbapIUDLZ.lottie",
  car: "https://assets-v2.lottiefiles.com/a/b5c02198-bdb7-4a33-ae57-6c88eca3f97c/2cFriLZ3MB.lottie",
  e28: "https://assets-v2.lottiefiles.com/a/b8b47642-c933-4211-aff2-13b4366b1837/RVd9G5ePZL.lottie",
};

export const stats = [
  { value: "14", suffix: "+", label: "År i området" },
  { value: "3", suffix: "", label: "Mekaniker på plats" },
  { value: "12", suffix: " mån", label: "Garanti på arbete" },
  { value: "4.8", suffix: " ★", label: "Av 5 på Google" },
];

export interface Review {
  rating: number;
  text: string;
  customer: string;
  car: string;
  date: string;
}

export const reviews: Review[] = [
  {
    rating: 5,
    text: "Mikael upptäckte ett fel som Volvo-verkstaden missat förra året. Sparade mig 8 000 kr i onödig reparation.",
    customer: "Anna L.",
    car: "Volvo V70",
    date: "2026",
  },
  {
    rating: 5,
    text: "Tog hand om min BMW som om det var deras egen. Fast pris, snabb leverans, vänligt bemötande.",
    customer: "Janne P.",
    car: "BMW 320d",
    date: "2025",
  },
  {
    rating: 5,
    text: "Bästa verkstaden i Sollentuna. Punkt slut. Vi har varit kunder i åtta år och aldrig blivit besvikna.",
    customer: "Petra O.",
    car: "Toyota Auris",
    date: "2025",
  },
];

export interface Project {
  no: string;
  title: string;
  description: string;
  year: string;
  category: string;
}

export const projects: Project[] = [
  { no: "01", title: "Volvo V70 — Kamremsbyte", description: "Komplett kamrems- och vattenpumpsbyte. Inkluderar nya tändstift och oljebyte.", year: "2026", category: "Service" },
  { no: "02", title: "BMW 320d — Bromsservice", description: "Nya bromsskivor och belägg fram och bak. Bromsvätskebyte.", year: "2026", category: "Bromsar" },
  { no: "03", title: "Audi A4 — AC-service", description: "Läcksökning, byte av torkare och påfyllning av köldmedium.", year: "2025", category: "AC" },
  { no: "04", title: "Toyota Corolla — Stor service", description: "Service plus byte av kamrem, kuggrem, tändstift och bromsvätska.", year: "2025", category: "Service" },
  { no: "05", title: "VW Passat — Koppling", description: "Komplett kopplingsbyte med svänghjul. Provkörning och justering.", year: "2025", category: "Reparation" },
  { no: "06", title: "Volvo XC60 — Vinterbyte", description: "Av- och påmontering, balansering, däckhotell-förvaring för sommaren.", year: "2025", category: "Däck" },
];

export interface TeamMember {
  no: string;
  name: string;
  role: string;
  yearsHere: number;
  speciality: string;
}

export const team: TeamMember[] = [
  {
    no: "01",
    name: "Mikael Holm",
    role: "Grundare / Mekaniker",
    yearsHere: 14,
    speciality: "Motor och växellåda. 15 år på Volvo-verkstad innan jag startade här.",
  },
  {
    no: "02",
    name: "Joel Lindberg",
    role: "Mekaniker",
    yearsHere: 9,
    speciality: "El, AC och hybridbilar. Tar gärna de kluriga felsökningarna.",
  },
  {
    no: "03",
    name: "Erik Östlund",
    role: "Mekaniker / Däck",
    yearsHere: 3,
    speciality: "Däckverkstad och bromsservice. Snabb, noggrann och ärlig.",
  },
];
