"use client";

import { clients, clientsData } from "@/data/clients";
import Section from "./ui/Section";
import Marquee from "./ui/Marquee";
import Image from "next/image";

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 64;

interface LogoItemProps {
  name: string;
  url: string;
  logoSrc: string;
}

function LogoItem({ name, url, logoSrc }: LogoItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block shrink-0 mx-4"
    >
      <div className="relative h-14 md:h-20 w-[140px] flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-primary/10 blur-md opacity-0 scale-125 transition-all duration-300 group-hover:opacity-100" />
        <Image
          src={logoSrc}
          alt={name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
           className="object-contain marquee-logo hover:marquee-logo-hover relative z-10 w-auto h-full"
        />
      </div>
    </a>
  );
}

export default function ClientsSection() {
  const { heading } = clientsData;

  return (
    <Section id="clients" heading={heading} maxWidth="6xl">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <Marquee pauseOnHover duration={40}>
          {clients.map((client) => (
            <LogoItem key={client.name} {...client} />
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
