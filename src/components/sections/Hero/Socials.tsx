import Image from "next/image";

export const Socials = () => (
  <div className="flex flex-row min-[750px]:justify-start justify-center gap-x-4 gap-y-1 flex-wrap">
    <div className="flex flex-row gap-2 items-center">
      <Image width={24} height={24} src="/linkedin.svg" alt="" />
      <span>LinkedIn</span>
    </div>
    <div className="flex flex-row gap-2 items-center">
      <Image width={24} height={24} src="/github.svg" alt="" />
      <span>Github</span>
    </div>
    <div className="flex flex-row gap-2 items-center">
      <Image width={24} height={24} src="/mail.svg" alt="Adresse mail" />
      <span>shirowderable@gmail.com</span>
    </div>
  </div>
);
