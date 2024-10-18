import { CursorGlow } from "@/components/CursorGlow/CursorGlow";
import { SectionTitle } from "@/components/Title/SectionTitle";
import Image from "next/image";
import { forwardRef, ReactNode, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type SkillProps = {
  src: string;
  label: string;
  transitionDelay: string;
  visible?: boolean;
};

export const SkillCategory = ({
  label,
  children,
  className,
  labelClassName,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
}) => (
  <div
    className={twMerge(
      "border-[3px] rounded-[30px] overflow-hidden",
      className
    )}
  >
    <p
      className={twMerge(
        "w-fit px-8 pt-[6px] pb-2 rounded-ee-[30px] text-sm",
        labelClassName
      )}
    >
      {label}
    </p>
    <div className="grid grid-cols-[repeat(2,max-content)] min-[620px]:grid-cols-[repeat(3,max-content)] min-[800px]:grid-cols-[repeat(4,max-content)] min-[1200px]:grid-cols-[repeat(6,max-content)] gap-16 p-8">
      {children}
    </div>
  </div>
);

export const Skill = ({ src, label, transitionDelay, visible }: SkillProps) => (
  <div
    className={twMerge(
      "w-20 flex flex-col items-center gap-4 group relative h-full justify-between transition-all duration-500",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[25px]"
    )}
    style={{ transitionDelay }}
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

const SKILLS_CATEGORIES: {
  label: string;
  className: string;
  labelClassName: string;
  skills: { label: string; src: string }[];
}[] = [
  {
    label: "Développement Web",
    className: "border-yellow-400 bg-yellow-400/10",
    labelClassName: "bg-yellow-400 text-black",
    skills: [
      { label: "NextJS", src: "/skills/nextjs.svg" },
      { label: "React", src: "/skills/react.svg" },
      { label: "Typescript", src: "/skills/typescript.png" },
      { label: "Javascript", src: "/skills/javascript.png" },
      { label: "AdonisJS", src: "/skills/adonisjs.svg" },
      { label: "Playwright", src: "/skills/playwright.svg" },
    ],
  },
  {
    label: "Développement Logiciel",
    className: "border-purple-800 bg-purple-800/10",
    labelClassName: "bg-purple-800",
    skills: [
      { label: "C", src: "/skills/c.png" },
      { label: "C++", src: "/skills/cpp.png" },
      { label: "C#", src: "/skills/csharp.svg" },
      { label: "Java", src: "/skills/java.png" },
      { label: "Python", src: "/skills/python.png" },
      { label: "OpenCL", src: "/skills/opencl.png" },
    ],
  },
  {
    label: "Autres",
    className: "border-white bg-white/5",
    labelClassName: "bg-white text-black",
    skills: [
      { label: "Unity", src: "/skills/unity.png" },
      { label: "Gamemaker", src: "/skills/gamemaker.png" },
      { label: "Docker", src: "/skills/docker.png" },
      { label: "Nginx", src: "/skills/nginx.svg" },
      { label: "Git", src: "/skills/git.png" },
      { label: "PyTorch", src: "/skills/pytorch.svg" },
    ],
  },
];

export const Skills = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -20% 0px",
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center py-12 w-full max-w-[1100px]"
    >
      <SectionTitle>Mes compétences</SectionTitle>
      <div
        ref={inViewRef}
        className="bg-gray-900/60 p-8 max-[400px]:px-4 rounded-lg backdrop-blur-[6px] flex flex-col gap-8"
      >
        {SKILLS_CATEGORIES.map((skillCategory, index) => (
          <SkillCategory
            label={skillCategory.label}
            labelClassName={skillCategory.labelClassName}
            className={skillCategory.className}
          >
            {skillCategory.skills.map((skill, index) => (
              <Skill
                key={index}
                visible={inView}
                transitionDelay={`${index * 200}ms`}
                {...skill}
              />
            ))}
          </SkillCategory>
        ))}
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
