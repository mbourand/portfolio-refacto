import { Skill } from "@/components/SkillsSection/Skill";
import { SkillCategory } from "@/components/SkillsSection/SkillCategory";
import { SectionTitle } from "@/components/Title/SectionTitle";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const SKILL_CATEGORIES: {
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
    rootMargin: "0px 0px -40% 0px",
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center my-16 w-full max-w-[1100px]"
    >
      <SectionTitle>Mes compétences</SectionTitle>
      <div
        ref={inViewRef}
        className="bg-gray-900/60 p-8 max-[400px]:px-4 rounded-lg backdrop-blur-[6px] flex flex-col gap-8"
      >
        {SKILL_CATEGORIES.map((skillCategory, categoryIndex) => (
          <SkillCategory
            key={skillCategory.label}
            label={skillCategory.label}
            labelClassName={skillCategory.labelClassName}
            className={skillCategory.className}
          >
            {skillCategory.skills.map((skill, index) => (
              <Skill
                key={skill.label}
                visible={inView}
                transitionDelay={(index + categoryIndex) * 200}
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
