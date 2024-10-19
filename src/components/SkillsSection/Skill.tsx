import Image from "next/image";
import { twMerge } from "tailwind-merge";

type SkillProps = {
  src: string;
  label: string;
  transitionDelay: number;
  visible?: boolean;
};

export const Skill = ({ src, label, transitionDelay, visible }: SkillProps) => (
  <div
    className={twMerge(
      "w-20 flex flex-col items-center gap-4 group relative h-full justify-between transition-all duration-500",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[25px]"
    )}
    style={{ transitionDelay: `${transitionDelay}ms` }}
  >
    <Image
      className="w-20 h-20 object-contain group-hover:scale-[105%] transition-all duration-500"
      src={src}
      width={300}
      height={300}
      alt=""
    />
    <p>{label}</p>
  </div>
);
