import { RotatingBorderButton } from "@/components/Button/RotatingBorderButton";
import { ProjectCard } from "@/components/ProjectsSection/ProjectCard";
import { SectionTitle } from "@/components/Title/SectionTitle";
import { Skills } from "@/modules/skills";
import { TAGS } from "@/modules/tags";
import { forwardRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

export const Projects = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  const [seeMore, setSeeMore] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center py-12 w-full overflow-hidden"
    >
      <SectionTitle>Mes Projets</SectionTitle>
      <div
        ref={inViewRef}
        className="flex flex-row gap-16 flex-wrap justify-center"
      >
        <ProjectCard
          className={twMerge(
            "transition-all duration-[670ms]",
            inView
              ? "translate-x-0 opacity-100"
              : "opacity-0 -translate-x-[100px]"
          )}
          title="Free Mobile"
          annotation="2022 - Aujourd'hui"
          description="
          En novembre 2022, après avoir terminé le tronc commun de l'école 42,
          j'ai effectué un stage chez Free en recherche et développement à la suite duquel
          j'ai pu intégrer l'équipe en charge du maintien et de la refonte des sites de Free Mobile,
          travaillant alors aux côtés de designers, développeurs et Product Owners."
          tags={[
            TAGS[Skills.NextJS],
            TAGS[Skills.TypeScript],
            TAGS[Skills.TeamWork],
          ]}
        />

        <ProjectCard
          className={twMerge(
            "transition-all duration-[670ms]",
            inView
              ? "translate-x-0 opacity-100"
              : "opacity-0 translate-x-[100px]"
          )}
          title="Deltarune FR"
          annotation="2018 - Aujourd'hui"
          description="Deltarune FR est la traduction communautaire française du jeu
        DELTARUNE. J'ai fondé ce projet en 2018 avec une équipe d'environ 10
        personnes. Suite à une fusion une autre équipe travaillant sur le jeu, notre équipe compte une
        vingtaine de membres pour une communauté de milliers de joueurs."
          tags={[TAGS[Skills.VueJS], TAGS[Skills.TeamWork]]}
        />

        {seeMore && (
          <>
            <ProjectCard
              title="Fractals"
              annotation="2023"
              description="Fractals est un visualisateur de fractales réalisé en C++ avec OpenGL, OpenCL et ImGui.
        Il permet de naviguer dans les fractales de Mandelbrot, Julia,
        Newton et Phoenix en temps réel, ainsi que de générer un rendu de Buddhabrot."
              tags={[TAGS[Skills.CPP], TAGS[Skills.OpenCL]]}
            />

            <ProjectCard
              title="Méli-Mélodies"
              annotation="2023 - Aujourd'hui"
              description="Méli-Mélodies est une chorale créée en 1985. J'ai réalisé pour elle un site vitrine
        ainsi qu'un espace membre permettant d'apprendre des chants et un espace administrateur
        permettant de modifier en temps réel le contenu du site."
              tags={[
                TAGS[Skills.NextJS],
                TAGS[Skills.AdonisJS],
                TAGS[Skills.Docker],
              ]}
            />

            <ProjectCard
              title="Generative Adversarial Network"
              annotation="2023"
              description="Ce projet consiste en la réalisation d'un modèle d'intelligence artificielle permettant la génération d'images à la volée en se basant sur des données d'entainement. Il est basé sur l'architecture de StyleGAN 2, une architecture longtemps reconnue comme la meilleure pour la génération d'images"
              tags={[TAGS[Skills.Python], TAGS[Skills.PyTorch]]}
            />

            <ProjectCard
              title="Undertale DDD"
              annotation="2022"
              description="Undertale DDD est un jeu basé sur une animation éponyme que j'ai créé
        pour apprendre les bases de Unity. Le jeu consiste en un combat de RPG,
        vous pouvez combattre, vous soigner, ou essayer d'épargner l'ennemi.
        Pendant le tour de l'ennemi, vous devez éviter un patterne de
        projectiles pour survivre."
              tags={[TAGS[Skills.CSharp], TAGS[Skills.Unity]]}
            />
          </>
        )}
      </div>
      {!seeMore && (
        <RotatingBorderButton
          className="mt-8"
          label="Voir d'autres projets"
          onClick={() => setSeeMore(true)}
        />
      )}
    </section>
  );
});

Projects.displayName = "Projects";
