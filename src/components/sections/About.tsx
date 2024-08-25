import Image from "next/image";
import { forwardRef, ReactNode } from "react";

export const LifeSection = ({
  children,
  icon,
  label,
}: {
  children: ReactNode;
  label: string;
  icon?: string;
}) => (
  <div className="grid grid-cols-[min-content_1fr] gap-x-6 gap-y-2 w-fit mx-auto group items-center">
    <div className="relative">
      <div className="absolute bg-slate-800 h-[36px] w-[36px] rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bg-slate-100 h-[36px] w-[36px] rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="bg-slate-950 h-[32px] w-[32px] rounded-full flex justify-center items-center group-hover:invert transition-all duration-[350ms] ease-in-out">
        {icon && (
          <Image
            width={24}
            height={24}
            src={icon}
            alt=""
            className="animate-[spin-in_1s_ease-in-out_forwards]"
          />
        )}
      </div>
    </div>
    <h3 className="opacity-40 group-hover:translate-x-2 duration-500 transition-all">
      {label}
    </h3>
    <div className="relative mx-auto h-full">
      <div className="w-[3px] h-full bg-slate-800" />
      <div className="absolute h-full top-0 left-1/2 -translate-x-1/2 w-[3px] bg-slate-100" />
    </div>
    <p className="text-left md:text-justify max-w-[1000px] mt-2 mb-4 min-h-[120px]">
      {children}
    </p>
  </div>
);

export const About = forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <section ref={ref}>
    <h1 className="text-3xl text-center bg-highlight-gradient bg-clip-text text-transparent font-bold mb-6 w-fit mx-auto">
      Mon parcours
    </h1>
    <div className="flex flex-col gap-2">
      <LifeSection label="COMMENCEMENT" icon="/beginnings.svg">
        Depuis mon plus jeune âge, je suis intéressé par l'informatique. Attiré
        par la création de plugins Minecraft, j'ai débuté la programmation en{" "}
        <strong className="text-blue-accent">autodidacte à 13 ans</strong>. Du
        collège à la fin du lycée, j'ai réalisé divers projets, en équipe ou
        parfois seul, comme dans le cas d'une bibliothèque facilitant la
        création de jeux en Java.{" "}
      </LifeSection>
      <LifeSection label="ETUDES" icon="/school.svg">
        En Novembre 2019, je suis entré à l'École 42 après avoir participé à la
        piscine de septembre, à laquelle j'ai{" "}
        <strong className="text-blue-accent">obtenu la troisième place</strong>.
        Je souhaitais rejoindre l'École 42 pour en apprendre plus sur la
        programmation et{" "}
        <strong className="text-blue-accent">
          faire de ma passion mon métier
        </strong>
        . J'y ai acquis une grande part de mes compétences.
      </LifeSection>
      <LifeSection label="INTEGRATION" icon="/work.svg">
        En Novembre 2022, j'ai débuté un stage de 6 mois chez Free, durant ce
        stage, j'ai pu travailler sur des projets aux thèmes divers, traitant
        d'IA, de développement de jeux ou encore de développement web. Au terme
        de ce stage, j'ai pu rejoindre l'équipe{" "}
        <strong className="text-blue-accent">
          en charge du développement des sites de Free Mobile
        </strong>{" "}
        auxquels je contribue depuis plus d'un an.
      </LifeSection>
      <LifeSection label="PASSION" icon="/passion.svg">
        Je réalise également des{" "}
        <strong className="text-blue-accent">
          projets sur mon temps libre
        </strong>
        , comme une traduction complète du jeu Deltarune ou encore un émulateur
        de Gameboy. Je réalise ces projets afin de diversifier les thèmes de mes
        projets et de continuer à apprendre de nouvelles technologies.
      </LifeSection>
    </div>
  </section>
));
