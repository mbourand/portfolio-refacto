import { RotatingBorderButton } from "@/components/RotatingBorderButton";
import { Socials } from "@/components/sections/Hero/Socials";
import Image from "next/image";
import { forwardRef } from "react";

export const Hero = forwardRef<HTMLDivElement, { onKnowMoreClick: () => void }>(
  ({ onKnowMoreClick }, ref) => (
    <section
      ref={ref}
      className="max-w-[1300px] relative min-h-screen w-full mx-auto flex flex-col justify-center p-8 max-[750px]:text-center"
    >
      <div className="flex min-[750px]:flex-row flex-col-reverse justify-center gap-12 items-center">
        <div>
          <p className="text-4xl min-[880px]:text-5xl w-fit mb-4 max-[750px]:mx-auto">
            Bonjour, je suis{" "}
            <span className="font-bold bg-highlight-gradient text-transparent bg-clip-text">
              Maxime&nbsp;Bourand
            </span>
          </p>
          <p className="text-2xl min-[880px]:text-3xl w-fit mb-6">
            <strong className="font-bold">
              Développeur Fullstack chez Free Mobile.
            </strong>{" "}
            <span className="opacity-70">
              Autodidacte passionné depuis mes 13 ans et formé à l'Ecole 42.
            </span>
          </p>
          <Socials />

          <RotatingBorderButton
            className="mt-6 max-[750px]:mx-auto"
            label="En savoir plus"
            onClick={onKnowMoreClick}
          />
        </div>
        <div className="min-w-[300px] min-[880px]:min-w-[350px] overflow-hidden rounded-full">
          <Image
            width={1252}
            height={1252}
            className="w-[300px] min-[880px]:w-[350px] hover:scale-105 transition-all duration-300 ease-in-out h-auto"
            src="/maxime-bourand.webp"
            alt="Maxime Bourand souriant dans un jardin entourant un lac"
            priority
          />
        </div>
      </div>
    </section>
  )
);
