"use client";

import { NavBar } from "@/components/NavBar";
import { About } from "@/components/sections/About";
import { Experiences } from "@/components/sections/Experiences";
import { Hero } from "@/components/sections/Hero/Hero";
import { PointLinkGridCanvas } from "@/components/sections/PointLinkGridCanvas";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PointLinkGridCanvas />
      <header>
        <NavBar.Root>
          <NavBar.Anchor anchorRef={heroRef}>Accueil</NavBar.Anchor>
          <NavBar.Anchor anchorRef={journeyRef}>À propos</NavBar.Anchor>
          <NavBar.Anchor anchorRef={experiencesRef}>Expériences</NavBar.Anchor>
        </NavBar.Root>
      </header>
      <main className="relative min-h-screen flex flex-col items-center">
        <Hero
          ref={heroRef}
          onKnowMoreClick={() =>
            journeyRef.current?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
            })
          }
        />
        <About ref={journeyRef} />
        <Experiences ref={experiencesRef} />
      </main>
    </>
  );
}
