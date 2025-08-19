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
import { NavBarAnchor, NavBarRoot } from '@/components/NavBar/NavBar'
import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { HomeIcon } from '@/components/Icon/HomeIcon'
import { scrollToId } from '@/modules/scroll'
import { Contact } from '@/components/ContactSection/Contact'
import { Experiences } from '@/components/ExperiencesSection/Experiences'
import { HomeNavBar } from '@/app/_components/HomeNavBar'

export default function Home() {
  return (
    <>
      <PointLinkGridCanvas />
      <Glow />
      <header>
        <HomeNavBar />
      </header>
      <main className="min-h-screen flex flex-col items-center">
        <Hero knowMoreScrollId="journey" id="hero" />
        <About id="journey" />
        <Experiences id="experiences" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </main>
    </>
  )
}
