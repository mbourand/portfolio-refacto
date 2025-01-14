'use client'

import { About } from '@/components/JourneySection/Journey'
import { Projects } from '@/components/ProjectsSection/Projects'
import { Glow } from '@/components/Hero/Glow'
import { Hero } from '@/components/Hero/Hero'
import { PointLinkGridCanvas } from '@/components/Animation/PointLinkGridCanvas'
import { Skills } from '@/components/SkillsSection/Skills'
import { useRef } from 'react'
import { MobileNavBar } from '@/components/NavBar/MobileNavBar'
import { ToolIcon } from '@/components/Icon/ToolIcon'
import { ParchmentIcon } from '@/components/Icon/ParchmentIcon'
import { RocketIcon } from '@/components/Icon/RocketIcon'
import { NavBar } from '@/components/NavBar/NavBar'
import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { HomeIcon } from '@/components/Icon/HomeIcon'
import { scrollToRef } from '@/modules/scroll'
import { Contact } from '@/components/ContactSection/Contact'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)
  const experiencesRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <PointLinkGridCanvas />
      <Glow />
      <header>
        <MobileNavBar.Root className="min-[650px]:hidden">
          <MobileNavBar.Anchor anchorRef={heroRef} label="Accueil" Icon={HomeIcon} />
          <MobileNavBar.Anchor anchorRef={journeyRef} label="Parcours" Icon={ParchmentIcon} />
          <MobileNavBar.Anchor anchorRef={experiencesRef} label="Projets" Icon={RocketIcon} />
          <MobileNavBar.Anchor anchorRef={skillsRef} label="Compét." Icon={ToolIcon} />
        </MobileNavBar.Root>
        <NavBar.Root className="max-[650px]:hidden">
          <NavBar.Anchor anchorRef={heroRef}>Accueil</NavBar.Anchor>
          <NavBar.Anchor anchorRef={journeyRef}>Parcours</NavBar.Anchor>
          <NavBar.Anchor anchorRef={experiencesRef}>Projets</NavBar.Anchor>
          <NavBar.Anchor anchorRef={skillsRef}>Compétences</NavBar.Anchor>
          <RotatingBorderButton rounded label="Me contacter" onClick={() => scrollToRef(contactRef)} />
        </NavBar.Root>
      </header>
      <main className="min-h-screen flex flex-col items-center">
        <Hero ref={heroRef} onKnowMoreClick={() => scrollToRef(journeyRef)} />
        <About ref={journeyRef} />
        <Projects ref={experiencesRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>
    </>
  )
}
