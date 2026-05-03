/**
 * Client Interface
 * Represents a client with logo for display in the clients section
 */
export interface Client {
  /** Client company name */
  name: string;
  /** Client website URL */
  url: string;
  /** Path to client logo image */
  logoSrc: string;
  /** Display order (lower numbers appear first) */
  order: number;
}

/**
 * Clients Section Data
 *
 * Contains section heading and client list.
 * Used by ClientsSection component to display logo grid.
 */
export const clientsData = {
  heading: "CLIENTS",
  items: [] as Client[],
};

export const clients: Client[] = (clientsData.items = [
  {
    name: "IRC",
    url: "https://www.rescue.org/",
    logoSrc: "/images/Logos/IRC.png",
    order: 1,
  },
  {
    name: "mTuitive",
    url: "https://www.mtuitive.com/",
    logoSrc: "/images/Logos/mTuitive.png",
    order: 2,
  },
  {
    name: "Oddball",
    url: "https://www.oddball.io/",
    logoSrc: "/images/Logos/oddball.png",
    order: 3,
  },
  {
    name: "First and Third",
    url: "https://www.firstandthird.com/",
    logoSrc: "/images/Logos/first-and-third.png",
    order: 4,
  },
  {
    name: "Smartbug",
    url: "https://www.smartbugmedia.com/",
    logoSrc: "/images/Logos/smartbug.png",
    order: 5,
  },
  {
    name: "Synchronoss",
    url: "https://www.synchronoss.com/",
    logoSrc: "/images/Logos/synchronoss.png",
    order: 6,
  },
  {
    name: "Chubb",
    url: "https://www.chubb.com/",
    logoSrc: "/images/Logos/chubb.png",
    order: 7,
  },
  {
    name: "Cheaptickets",
    url: "https://www.cheaptickets.com/",
    logoSrc: "/images/Logos/cheaptickets.png",
    order: 8,
  },
  {
    name: "Orbitz",
    url: "https://www.orbitz.com/",
    logoSrc: "/images/Logos/orbitz.png",
    order: 9,
  },
  {
    name: "Cognizant",
    url: "https://www.cognizant.com/",
    logoSrc: "/images/Logos/cognizant.png",
    order: 10,
  },
  {
    name: "NIIT",
    url: "https://www.niit.com/",
    logoSrc: "/images/Logos/NIIT.jpg",
    order: 11,
  },
  {
    name: "Keltron",
    url: "https://www.keltron.org/",
    logoSrc: "/images/Logos/keltron.png",
    order: 12,
  },
].sort((a, b) => a.order - b.order));
