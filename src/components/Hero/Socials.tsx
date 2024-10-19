import { GithubIcon } from "@/components/Icon/GithubIcon";
import { LinkedInIcon } from "@/components/Icon/LinkedInIcon";
import { MailIcon } from "@/components/Icon/MailIcon";
import Image from "next/image";
import Link from "next/link";

export const Socials = () => (
  <div className="flex flex-row min-[750px]:justify-start justify-center gap-x-4 gap-y-1 flex-wrap">
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/maxime-bourand/"
      className="flex flex-row gap-2 items-center group"
    >
      <LinkedInIcon className="w-6 h-6 mt-[-4px]" />
      <div>
        <span className="transition-all group-hover:text-blue-accent">
          LinkedIn
        </span>
        <div className="h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </div>
    </Link>
    <Link
      target="_blank"
      href="https://github.com/mbourand"
      className="flex flex-row gap-2 items-center group"
    >
      <GithubIcon className="w-6 h-6" />
      <div>
        <span className="transition-all group-hover:text-blue-accent">
          Github
        </span>
        <div className="h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-200" />
      </div>
    </Link>
    <div className="flex flex-row gap-2 items-center">
      <MailIcon className="w-6 h-6" />
      <span>shirowderable@gmail.com</span>
    </div>
  </div>
);
