'use client'

import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { HomeIcon } from '@/components/Icon/HomeIcon'
import { ParchmentIcon } from '@/components/Icon/ParchmentIcon'
import { RocketIcon } from '@/components/Icon/RocketIcon'
import { ToolIcon } from '@/components/Icon/ToolIcon'
import { MobileNavBar } from '@/components/NavBar/MobileNavBar'
import { NavBarAnchor, NavBarRoot } from '@/components/NavBar/NavBar'
import { scrollToId } from '@/modules/scroll'

export const HomeNavBar = () => {
  return (
    <>
      <MobileNavBar.Root className="min-[650px]:hidden">
        <MobileNavBar.Anchor anchorId="hero" label="Accueil" Icon={HomeIcon} />
        <MobileNavBar.Anchor anchorId="journey" label="Parcours" Icon={ParchmentIcon} />
        <MobileNavBar.Anchor anchorId="experiences" label="Expériences" Icon={RocketIcon} />
        <MobileNavBar.Anchor anchorId="skills" label="Skills" Icon={ToolIcon} />
      </MobileNavBar.Root>
      <NavBarRoot className="max-[650px]:hidden">
        <NavBarAnchor anchorId="hero">Accueil</NavBarAnchor>
        <NavBarAnchor anchorId="journey">Parcours</NavBarAnchor>
        <NavBarAnchor anchorId="experiences">Expériences</NavBarAnchor>
        <NavBarAnchor anchorId="skills">Compétences</NavBarAnchor>
        <RotatingBorderButton rounded label="Me contacter" onClick={() => scrollToId('contact')} />
      </NavBarRoot>
    </>
  )
}
