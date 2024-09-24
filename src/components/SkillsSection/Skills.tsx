import { SectionTitle } from "@/components/Title/SectionTitle";
import { forwardRef } from "react";

export const Skills = forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <section
    ref={ref}
    className="relative flex flex-col items-center justify-center py-12 h-[1000px]"
  >
    <SectionTitle>Mes compétences</SectionTitle>
  </section>
));

Skills.displayName = "Skills";
