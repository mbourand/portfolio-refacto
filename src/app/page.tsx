"use client";

import { About } from "@/components/JourneySection/Journey";
import { Projects } from "@/components/ProjectsSection/Projects";
import { Glow } from "@/components/Hero/Glow";
import { Hero } from "@/components/Hero/Hero";
import { PointLinkGridCanvas } from "@/components/Animation/PointLinkGridCanvas";
import { Skills } from "@/components/SkillsSection/Skills";
import { useRef } from "react";
import { RotatingBorderButton } from "@/components/Button/RotatingBorderButton";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PointLinkGridCanvas />
      <Glow />
      <header>
        <NavBar.Root>
          <NavBar.Anchor anchorRef={heroRef}>Accueil</NavBar.Anchor>
          <NavBar.Anchor anchorRef={journeyRef}>Parcours</NavBar.Anchor>
          <NavBar.Anchor anchorRef={experiencesRef}>Projets</NavBar.Anchor>
          <NavBar.Anchor anchorRef={skillsRef}>Compétences</NavBar.Anchor>
          <RotatingBorderButton
            rounded
            label="Me contacter"
            onClick={() => {}}
          />
        </NavBar.Root>
      </header>
      <main className="min-h-screen flex flex-col items-center">
        <Hero
          ref={heroRef}
          onKnowMoreClick={() =>
            journeyRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
        />
        <About ref={journeyRef} />
        <Projects ref={experiencesRef} />
        <Skills ref={skillsRef} />
      </main>
    </>
  );
}
