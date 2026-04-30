/**
 * Client Interface
 * Represents a client with logo for display in the clients section
 */
export interface Client {
  /** Client company name */
  name: string;
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

export const clients: Client[] = clientsData.items = [
  { name: 'IRC', logoSrc: '/images/Logos/IRC.png', order: 1 },
  { name: 'mTuitive', logoSrc: '/images/Logos/mTuitive.png', order: 2 },
  { name: 'Oddball', logoSrc: '/images/Logos/Oddball.png', order: 3 },
  { name: 'First and Third', logoSrc: '/images/Logos/First and Third.png', order: 4 },
  { name: 'Smartbug', logoSrc: '/images/Logos/Smartbug.png', order: 5 },
  { name: 'Synchronous', logoSrc: '/images/Logos/Synchronous.png', order: 6 },
  { name: 'Chubb', logoSrc: '/images/Logos/Chubb.png', order: 7 },
  { name: 'Cheaptickets', logoSrc: '/images/Logos/Cheaptickets.png', order: 8 },
  { name: 'Orbitz', logoSrc: '/images/Logos/Orbitz.png', order: 9 },
  { name: 'Cognizant', logoSrc: '/images/Logos/Cognizant.png', order: 10 },
  { name: 'NIIT', logoSrc: '/images/Logos/NIIT.jpg', order: 11 },
  { name: 'Keltron', logoSrc: '/images/Logos/keltron.png', order: 12 },
].sort((a, b) => a.order - b.order);
