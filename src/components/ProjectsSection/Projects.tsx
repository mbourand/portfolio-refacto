import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { ProjectCard } from '@/components/ProjectsSection/ProjectCard'
import { SectionTitle } from '@/components/Title/SectionTitle'
import { Skills } from '@/modules/skills'
import { TAGS } from '@/modules/tags'
import { forwardRef, useState } from 'react'

const PROJECTS = [
  {
    videoUrl: '/projects/freemobile.mp4',
    title: 'Free Mobile',
    annotation: "2022 - Aujourd'hui",
    description:
      "En novembre 2022, après avoir terminé le tronc commun de l'école 42, j'ai effectué un stage chez Free en recherche et développement à la suite duquel j'ai pu intégrer l'équipe en charge du maintien et de la refonte des sites de Free Mobile, travaillant alors aux côtés de designers, développeurs et Product Owners.",
    tags: [TAGS[Skills.NextJS], TAGS[Skills.TypeScript], TAGS[Skills.TeamWork]],
    runHref: 'https://mobile.free.fr'
  },
  {
    videoUrl: '/projects/deltarunefr.mp4',
    title: 'Deltarune FR',
    annotation: "2018 - Aujourd'hui",
    description:
      "Deltarune FR est la traduction communautaire française du jeu DELTARUNE. J'ai fondé ce projet en 2018 avec une équipe d'environ 10 personnes. Suite à une fusion une autre équipe travaillant sur le jeu, notre équipe compte une vingtaine de membres pour une communauté de milliers de joueurs.",
    tags: [TAGS[Skills.VueJS], TAGS[Skills.CPP], TAGS[Skills.TeamWork]],
    runHref: 'https://deltarune.fr',
    sourceHref: 'https://github.com/mbourand/deltarune-fr-patcher'
  },
  {
    videoUrl: '/projects/fractals.mp4',
    title: 'Fractals',
    annotation: '2023',
    description:
      'Fractals est un visualisateur de fractales réalisé en C++ avec OpenGL, OpenCL et ImGui. Il permet de naviguer dans les fractales de Mandelbrot, Julia, Newton et Phoenix en temps réel, ainsi que de générer un rendu de Buddhabrot.',
    tags: [TAGS[Skills.CPP], TAGS[Skills.OpenCL]],
    runHref: 'https://github.com/mbourand/fractals/releases/tag/v1.0.0',
    sourceHref: 'https://github.com/mbourand/fractals'
  },
  {
    videoUrl: '/projects/melimelodies.mp4',
    title: 'Méli-Mélodies',
    annotation: "2023 - Aujourd'hui",
    description:
      "Méli-Mélodies est une chorale créée en 1985. J'ai réalisé pour elle un site vitrine ainsi qu'un espace membre permettant d'apprendre des chants et un espace administrateur permettant de modifier en temps réel le contenu du site.",
    tags: [TAGS[Skills.NextJS], TAGS[Skills.AdonisJS], TAGS[Skills.Docker]],
    runHref: 'https://melimelodies.com'
  },
  {
    videoUrl: '/projects/gameboyemulator.mp4',
    title: 'Gameboy Emulator',
    annotation: '2024 - En cours',
    description:
      "L'objectif de ce projet est de créer un programme reproduisant le fonctionnement des composants électroniques d'une Gameboy afin de pouvoir lancer des jeux Gameboy sur ordinateur. Ce projet est encore en cours de développement, mais permet déjà de jouer à certains jeux simples.",
    tags: [TAGS[Skills.CSharp], TAGS[Skills.MonoGame]]
  },
  {
    videoUrl: '/projects/undertaleddd.mp4',
    title: 'Undertale DDD',
    annotation: '2022',
    description:
      "Undertale DDD est un jeu basé sur une animation éponyme que j'ai créé pour apprendre les bases de Unity. Le jeu consiste en un combat de RPG, vous pouvez combattre, vous soigner, ou essayer d'épargner l'ennemi. Pendant le tour de l'ennemi, vous devez éviter un patterne de projectiles pour survivre.",
    tags: [TAGS[Skills.CSharp], TAGS[Skills.Unity]],
    runHref: 'https://drive.google.com/file/d/1c5i9XCD5DYV3nq0LwcrpkgfRshReQMQI/view?usp:drive_link',
    sourceHref: 'https://github.com/mbourand/undertale-ddd'
  }
]

export const Projects = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  const [seeMore, setSeeMore] = useState(false)

  const visibleProjects = seeMore ? PROJECTS : PROJECTS.slice(0, 2)

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center my-16 w-full overflow-hidden max-w-[1400px]"
    >
      <SectionTitle>Mes Projets</SectionTitle>
      <div className="flex flex-row gap-16 flex-wrap justify-center">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} slideInDirection={index % 2 === 0 ? 'right' : 'left'} />
        ))}
      </div>
      {!seeMore && (
        <RotatingBorderButton className="mt-8" label="Voir d'autres projets" onClick={() => setSeeMore(true)} />
      )}
    </section>
  )
})

Projects.displayName = 'Projects'
