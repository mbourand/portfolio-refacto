'use client'

import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'
import { Socials } from '@/components/Hero/Socials'
import { scrollToId } from '@/modules/scroll'
import { forwardRef } from 'react'

export const Hero = forwardRef<HTMLDivElement, { knowMoreScrollId: string; id?: string }>(
  ({ knowMoreScrollId, id }, ref) => (
    <section
      id={id}
      ref={ref}
      className="max-w-[1300px] relative min-h-screen w-full mx-auto flex flex-col justify-center p-8 max-[750px]:text-center"
    >
      <div className="flex min-[750px]:flex-row flex-col-reverse justify-center gap-12 items-center">
        <div>
          <p className="text-4xl min-[880px]:text-5xl w-fit mb-4 max-[750px]:mx-auto">
            Bonjour, je suis{' '}
            <span className="bg-highlight-gradient bg-[length:200%] hover:bg-right bg-clip-text text-transparent font-semibold transition-all duration-700 ease-in-out">
              Maxime&nbsp;Bourand
            </span>
          </p>
          <p className="text-2xl min-[880px]:text-3xl w-fit mb-6">
            <strong className="font-semibold">Développeur Front-end chez Free.</strong>{' '}
            <span className="opacity-70">Autodidacte passionné depuis mes 13 ans et formé à l'Ecole 42.</span>
          </p>
          <Socials />
          <RotatingBorderButton
            className="mt-6 max-[750px]:mx-auto"
            label="En savoir plus"
            onClick={() => scrollToId(knowMoreScrollId)}
          />
        </div>
        <div className="min-w-[300px] min-[880px]:min-w-[350px] overflow-hidden rounded-full relative group">
          <img
            className="w-[300px] min-[880px]:w-[350px] group-hover:scale-105 group-hover:blur-[2px] transition-all duration-300 ease-in-out h-auto"
            src="/maxime-bourand.webp"
            alt="Maxime Bourand souriant dans un jardin entourant un lac"
          />
          <img
            className="absolute top-0 left-0 w-[300px] min-[880px]:w-[350px] group-hover:scale-105 transition-all duration-300 ease-in-out h-auto"
            src="/maxime-bourand-nobg.webp"
            alt="Maxime Bourand souriant dans un jardin entourant un lac"
          />
        </div>
      </div>
    </section>
  )
)

Hero.displayName = 'Hero'
