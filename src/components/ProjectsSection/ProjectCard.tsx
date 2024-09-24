import { Tag, TagProps } from "@/components/ProjectsSection/Tag";
import Image from "next/image";
import { useEffect, useRef } from "react";

type ProjectCardProps = {
  title: string;
  annotation: string;
  description: string;
  tags: TagProps[];
};

export const ProjectCard = ({
  title,
  annotation,
  description,
  tags,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !cardGlowRef.current) return;

      const card = cardRef.current.getBoundingClientRect();

      const mousePosition = {
        x: e.clientX - card.left,
        y: e.clientY - card.top,
      };

      const isOverCard =
        mousePosition.x >= 0 &&
        mousePosition.y >= 0 &&
        mousePosition.x <= card.width &&
        mousePosition.y <= card.height;

      if (!isOverCard) {
        cardGlowRef.current.style.opacity = "0%";
        return;
      }

      cardGlowRef.current.style.opacity = "100%";
      cardGlowRef.current.style.transform = `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="relative bg-gray-900/60 p-4 rounded-lg backdrop-blur-[6px] flex flex-col gap-4 overflow-hidden max-w-[650px]"
      >
        <div
          ref={cardGlowRef}
          className="absolute w-[700px] h-[700px] bg-radial-glow-white rounded-full top-0 left-0 transition-opacity duration-[500ms] ease-linear -z-10"
        />
        <div className="w-full aspect-video bg-slate-600 rounded-lg flex justify-center items-center">
          <Image
            className="hover:text-blue-accent text-slate-50"
            src="/run.svg"
            width={64}
            height={64}
            alt=""
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-2xl font-semibold w-fit">{title}</h3>
          <span className="opacity-70 text-sm w-fit">{annotation}</span>
        </div>
        <p>{description}</p>
        <div className="flex flex-row justify-between w-full items-center mt-auto">
          <div className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
