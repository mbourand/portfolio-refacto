'use client'

import { BeginningIcon } from '@/components/Icon/BeginningIcon'
import { PassionIcon } from '@/components/Icon/PassionIcon'
import { SchoolIcon } from '@/components/Icon/SchoolIcon'
import { WorkIcon } from '@/components/Icon/WorkIcon'
import { SectionTitle } from '@/components/Title/SectionTitle'
import { forwardRef, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'

export const LifeSection = ({
  children,
  Icon,
  label
}: {
  children: ReactNode
  label: string
  Icon: React.FC<{ className: string }>
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -20% 0px'
  })

  return (
    <div
      ref={ref}
      className="grid grid-cols-[min-content_1fr] gap-x-6 gap-y-2 w-fit mx-auto group items-center px-2 min-[600px]:px-8"
    >
      <div className="relative">
        <div className="absolute bg-slate-700 h-[36px] w-[36px] rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div
            className={twMerge(
              'absolute bg-slate-100 h-full w-full -z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-full transition-all duration-800 rounded-full',
              inView && '-translate-y-0'
            )}
          />
        </div>
        <div className="bg-slate-950 h-[32px] w-[32px] rounded-full flex justify-center items-center group-hover:invert transition-all duration-350 ease-in-out">
          <Icon className={twMerge('w-6 h-6', inView ? 'animate-[spin-in_800ms_ease-in-out_forwards]' : 'opacity-0')} />
        </div>
      </div>
      <h3
        className={twMerge(
          'group-hover:translate-x-2 duration-500 transition-all -translate-x-16 opacity-0',
          inView && 'opacity-60 translate-x-0'
        )}
      >
        {label}
      </h3>
      <div className="relative mx-auto h-full">
        <div className="relative w-[3px] h-full bg-slate-700 overflow-hidden">
          <div
            className={twMerge(
              'absolute h-full top-0 left-1/2 -translate-x-1/2 w-[3px] delay-450 bg-slate-100 origin-top -translate-y-full transition-all duration-1500',
              inView && 'translate-y-0'
            )}
          />
        </div>
      </div>
      <p
        className={twMerge(
          'text-left md:text-justify max-w-[1000px] md:text-lg mt-2 mb-4 min-h-[120px] opacity-0 translate-y-16 transition-all delay-200 duration-700 ease-in-out',
          inView && 'opacity-100 translate-y-0'
        )}
      >
        {children}
      </p>
    </div>
  )
}

export const About = forwardRef<HTMLDivElement, { id?: string }>(({ id }, ref) => (
  <section id={id} ref={ref} className="my-16">
    <SectionTitle>Mon Parcours</SectionTitle>
    <div className="flex flex-col gap-2">
      <LifeSection label="COMMENCEMENT" Icon={BeginningIcon}>
        Depuis mon plus jeune âge, je suis intéressé par l'informatique. Attiré par la création de plugins Minecraft,
        j'ai débuté la programmation en <strong className="text-blue-accent">autodidacte à 13 ans</strong>. Du collège à
        la fin du lycée, j'ai réalisé divers projets, en équipe ou parfois seul, comme dans le cas d'une bibliothèque
        facilitant la création de jeux en Java.{' '}
      </LifeSection>
      <LifeSection label="ETUDES" Icon={SchoolIcon}>
        En Novembre 2019, je suis entré à l'École 42 après avoir terminé la piscine de septembre, à laquelle j'ai{' '}
        <strong className="text-blue-accent">obtenu la troisième place</strong>. Je souhaitais rejoindre l'École 42 pour
        en apprendre plus sur la programmation et{' '}
        <strong className="text-blue-accent">faire de ma passion mon métier</strong>. Grâce à cette formation, j'ai pu
        acquiérir des compétences techniques et une méthodologie de travail.
      </LifeSection>
      <LifeSection label="INTEGRATION" Icon={WorkIcon}>
        En Novembre 2022, j'ai débuté un stage de 6 mois chez Free, durant ce stage, j'ai pu travailler sur des projets
        aux thèmes divers, traitant d'IA, de développement de jeux ou encore de développement web. Au terme de ce stage,
        j'ai pu rejoindre l'équipe{' '}
        <strong className="text-blue-accent">en charge du développement des sites de Free Mobile</strong> auxquels j'ai
        contribué pendant près d'un an et demi.
      </LifeSection>
      <LifeSection label="PASSION" Icon={PassionIcon}>
        Je réalise également des <strong className="text-blue-accent">projets sur mon temps libre</strong>, comme une
        traduction complète du jeu Deltarune ou encore un émulateur de Gameboy. Je réalise ces projets afin de
        diversifier les thèmes de mes projets et de continuer à apprendre de nouvelles technologies.
      </LifeSection>
    </div>
  </section>
))

About.displayName = 'About'
