import { CursorGlow } from "@/components/CursorGlow/CursorGlow";
import { GithubIcon } from "@/components/Icon/GithubIcon";
import { RunIcon } from "@/components/Icon/RunIcon";
import { Tag, TagProps } from "@/components/ProjectsSection/Tag";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  title: string;
  videoUrl: string;
  annotation: string;
  description: string;
  tags: TagProps[];
  className?: string;
  runHref?: string;
  sourceHref?: string;
  slideInDirection?: "left" | "right";
};

export const ProjectCard = ({
  title,
  annotation,
  description,
  tags,
  className,
  videoUrl,
  runHref,
  sourceHref,
  slideInDirection,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [startSlideIn, setStartSlideIn] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px 0px 0px",
  });

  useEffect(() => {
    if (inView) {
      setStartSlideIn(true);
    } else {
      videoRef?.current?.pause();
    }
  }, [inView]);

  return (
    <div
      ref={cardRef}
      className={twMerge(
        "relative bg-gray-900/60 p-4 rounded-lg backdrop-blur-[6px] flex flex-col gap-4 overflow-hidden max-w-[650px] transition-all duration-[670ms]",
        slideInDirection === "left" && "opacity-0 translate-x-[100px]",
        slideInDirection === "right" && "opacity-0 -translate-x-[100px]",
        startSlideIn && "opacity-100 translate-x-0",
        className
      )}
    >
      <CursorGlow containerRef={cardRef} />
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <video
          ref={(e) => {
            ref(e);
            videoRef.current = e;
          }}
          src={videoUrl}
          controls={false}
          autoPlay
          loop
          muted
          preload="metadata"
          className="w-full h-full"
          onMouseEnter={() => videoRef?.current?.play()}
          onMouseLeave={() => videoRef?.current?.pause()}
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
        <div className="flex flex-row self-end items-center gap-4">
          {sourceHref && (
            <Link
              href={sourceHref}
              target="_blank"
              aria-label="Voir le code source"
            >
              <GithubIcon className="text-white hover:text-blue-accent transition-all duration-300 w-[24px] h-[24px]" />
            </Link>
          )}
          {runHref && (
            <Link href={runHref} target="_blank" aria-label="Lancer le projet">
              <RunIcon className="text-white hover:text-blue-accent transition-all duration-300 w-[24px] h-[24px]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
