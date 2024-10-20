import { RotatingBorderButton } from "@/components/Button/RotatingBorderButton";
import { LinkedInIcon } from "@/components/Icon/LinkedInIcon";
import { MailIcon } from "@/components/Icon/MailIcon";
import { SectionTitle } from "@/components/Title/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

export const Contact = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center my-16 w-full max-w-[1100px]"
    >
      <SectionTitle>Mon profil vous intéresse&nbsp;?</SectionTitle>
      <div className="bg-gray-900/60 backdrop-blur-[6px] rounded-lg p-8 flex flex-row max-[676px]:flex-col gap-8 justify-center items-center">
        <div className="w-[150px] overflow-hidden rounded-full relative group">
          <Image
            width={1252}
            height={1252}
            className="w-[150px] group-hover:scale-105 group-hover:blur-[2px] transition-all duration-300 ease-in-out h-auto"
            src="/maxime-bourand.webp"
            alt="Maxime Bourand souriant dans un jardin entourant un lac"
            placeholder="blur"
            blurDataURL="/maxime-bourand-blur.webp"
          />
          <Image
            width={1252}
            height={1252}
            className="absolute top-0 left-0 w-[150px] group-hover:scale-105 transition-all duration-300 ease-in-out h-auto"
            src="/maxime-bourand-nobg.webp"
            alt="Maxime Bourand souriant dans un jardin entourant un lac"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <span className="transition-all group-hover:text-blue-accent text-2xl font-semibold">
            Retrouvez-moi sur ces réseaux
          </span>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/maxime-bourand/"
            className="flex flex-row gap-2 items-center group"
          >
            <LinkedInIcon className="w-8 h-8 mt-[-8px]" />
            <div className="relative">
              <span className="transition-all group-hover:text-blue-accent text-xl">
                LinkedIn
              </span>
              <div className="absolute bottom-0 h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
            </div>
          </Link>
          <div className="flex flex-row gap-2 items-center">
            <MailIcon className="w-8 h-8" />
            <span className="transition-all group-hover:text-blue-accent text-xl">
              me@mbourand.fr
            </span>
          </div>
        </div>
      </div>
      <RotatingBorderButton
        className="mt-12"
        label="Retourner en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </section>
  );
});

Contact.displayName = "Contact";
