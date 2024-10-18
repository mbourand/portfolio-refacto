import { CursorGlow } from "@/components/CursorGlow/CursorGlow";
import { Tag, TagProps } from "@/components/ProjectsSection/Tag";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  title: string;
  annotation: string;
  description: string;
  tags: TagProps[];
  className?: string;
};

export const ProjectCard = ({
  title,
  annotation,
  description,
  tags,
  className,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={twMerge(
        "relative bg-gray-900/60 p-4 rounded-lg backdrop-blur-[6px] flex flex-col gap-4 overflow-hidden max-w-[650px]",
        className
      )}
    >
      <CursorGlow containerRef={cardRef} />
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
  );
};
