'use client'

import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { ProjectCard } from '@/components/ProjectsSection/ProjectCard'
import { SectionTitle } from '@/components/Title/SectionTitle'
import { Skills } from '@/modules/skills'
import { TAGS } from '@/modules/tags'
import Link from 'next/link'
import { forwardRef, useEffect, useState } from 'react'

const EXPERIENCES = [
  {
    videoUrl: '/projects/oqee.mp4',
    title: 'OQEE',
    annotation: "2025 - Aujourd'hui",
    description: (
      <div>
        OQEE est la plateforme de streaming Télé/VOD de Free. J'y ai rejoint l'équipe en charge des applications Web et
        SmartTV en avril 2025.
        <br />
        <br />
        Depuis mon arrivée, je tente d'apporter au projet des{' '}
        <strong className="font-semibold text-blue-accent">solutions novatrices</strong> conciliant UX, DX et
        optimisation, face aux contraintes de performance et de compatibilité des SmartTV.
        <br />
        <br />
        Mes principales contributions incluent :
        <div className="flex flex-col gap-3 pl-2 mt-3">
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              Une <strong className="font-semibold text-blue-accent">refonte du lecteur</strong> permettant
              l'intégration de différents décodeurs sans devoir changer le code de l'interface.
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              Le développement d'une{' '}
              <Link
                target="_blank"
                href="https://github.com/mbourand/arrow-navigation"
                className="text-blue-accent underline font-semibold"
              >
                bibliothèque de navigation fléchée automatisée
              </Link>
              , permettant de créer des interfaces navigables à la télécommande sans devoir définir de comportements
              manuellement.
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              L'intégration de tailwindcss via un{' '}
              <strong className="font-semibold text-blue-accent">plugin postcss customisé</strong> permettant de
              l'adopter incrémentalement par un système de scoping et de le rendre compatible sur d'anciens systèmes.
            </span>
          </div>
        </div>
      </div>
    ),
    tags: [TAGS[Skills.React], TAGS[Skills.Cypress], TAGS[Skills.TeamWork]],
    runHref: 'https://oqee.tv'
  },
  {
    videoUrl: '/projects/freemobile.mp4',
    title: 'Free Mobile',
    annotation: '2022 - 2025',
    description: (
      <div>
        En novembre 2022, après avoir terminé le tronc commun de l'école 42, j'ai effectué un stage chez Free en
        recherche et développement.
        <br />
        <br />
        Suite à ce stage, j'ai pu intégrer l'équipe en charge de la refonte de la souscription Free Mobile, travaillant
        alors aux côtés de designers, développeurs et Product Owners.
        <br />
        <br />
        Mes principales contributions incluent :
        <div className="flex flex-col gap-3 pl-2 mt-3">
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              Une <strong className="font-semibold text-blue-accent">refonte intégrale</strong> de l'architecture du
              système de souscription, permettant d'implémenter des nouveaux canaux de souscription en quelques heures
              seulement.
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              La création d'une <strong className="font-semibold text-blue-accent">saisie d'adresse en un champ</strong>
              , suggérant des adresses à partir de l'entrée utilisateur tout en respectant les fortes contraintes de
              performances et de fiabilité.
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <span>-</span>
            <span>
              L'implémentation de systèmes TypeScript avancés, permettant entre autres l'implémentation de{' '}
              <Link
                target="_blank"
                href="https://github.com/mbourand/next-typed-middlewares"
                className="text-blue-accent underline font-semibold"
              >
                middlewares typés sur les routes NextJS
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    ),
    tags: [TAGS[Skills.NextJS], TAGS[Skills.TypeScript], TAGS[Skills.TeamWork]],
    runHref: 'https://mobile.free.fr'
  }
]

export const Experiences = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  const [seeMore, setSeeMore] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 800)
  }, [])

  const visibleProjects = seeMore || !isSmallScreen ? EXPERIENCES : EXPERIENCES.slice(0, 1)

  return (
    <section ref={ref} className="flex flex-col items-center justify-center my-16 w-full overflow-hidden">
      <SectionTitle>Mes Expériences</SectionTitle>
      <div className="flex flex-row gap-16 flex-wrap justify-center">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} slideInDirection={index % 2 === 0 ? 'right' : 'left'} />
        ))}
      </div>
      {!seeMore && isSmallScreen && (
        <RotatingBorderButton className="mt-16" label="Voir d'autres expériences" onClick={() => setSeeMore(true)} />
      )}
    </section>
  )
})

Experiences.displayName = 'Experiences'
