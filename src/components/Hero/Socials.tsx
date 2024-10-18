import Image from "next/image";
import Link from "next/link";

export const Socials = () => (
  <div className="flex flex-row min-[750px]:justify-start justify-center gap-x-4 gap-y-1 flex-wrap">
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/maxime-bourand/"
      className="flex flex-row gap-2 items-center group"
    >
      <Image
        className="transition-all group-hover:text-blue-accent mt-[-4px]"
        width={24}
        height={24}
        src="/linkedin.svg"
        alt=""
      />
      <div>
        <span className="transition-all group-hover:text-blue-accent">
          LinkedIn
        </span>
        <div className="h-[1px] w-full bg-white scale-0 group-hover:scale-100 transition-all"></div>
      </div>
    </Link>
    <Link
      target="_blank"
      href="https://github.com/mbourand"
      className="flex flex-row gap-2 items-center group"
    >
      <Image width={24} height={24} src="/github.svg" alt="" />
      <span className="transition-all group-hover:text-blue-accent">
        Github
      </span>
    </Link>
    <div className="flex flex-row gap-2 items-center">
      <Image width={24} height={24} src="/mail.svg" alt="Adresse mail" />
      <span>shirowderable@gmail.com</span>
    </div>
  </div>
);
