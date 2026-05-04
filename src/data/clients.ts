export interface Client {
  name: string;
  url: string;
  logoSrc: string;
}

export const clientsData = {
  heading: "CLIENTS",
} as const;

export const clients: Client[] = [
  {
    name: "IRC",
    url: "https://www.rescue.org/",
    logoSrc: "/images/logos/IRC.png",
  },
  {
    name: "mTuitive",
    url: "https://www.mtuitive.com/",
    logoSrc: "/images/logos/mTuitive.png",
  },
  {
    name: "Oddball",
    url: "https://www.oddball.io/",
    logoSrc: "/images/logos/oddball.png",
  },
  {
    name: "First and Third",
    url: "https://www.firstandthird.com/",
    logoSrc: "/images/logos/first-and-third.png",
  },
  {
    name: "Smartbug",
    url: "https://www.smartbugmedia.com/",
    logoSrc: "/images/logos/smartbug.png",
  },
  {
    name: "Synchronoss",
    url: "https://www.synchronoss.com/",
    logoSrc: "/images/logos/synchronoss.png",
  },
  {
    name: "Chubb",
    url: "https://www.chubb.com/",
    logoSrc: "/images/logos/chubb.png",
  },
  {
    name: "Cheaptickets",
    url: "https://www.cheaptickets.com/",
    logoSrc: "/images/logos/cheaptickets.png",
  },
  {
    name: "Orbitz",
    url: "https://www.orbitz.com/",
    logoSrc: "/images/logos/orbitz.png",
  },
  {
    name: "Cognizant",
    url: "https://www.cognizant.com/",
    logoSrc: "/images/logos/cognizant.png",
  },
  {
    name: "NIIT",
    url: "https://www.niit.com/",
    logoSrc: "/images/logos/NIIT.jpg",
  },
  {
    name: "Keltron",
    url: "https://www.keltron.org/",
    logoSrc: "/images/logos/keltron.png",
  },
];
