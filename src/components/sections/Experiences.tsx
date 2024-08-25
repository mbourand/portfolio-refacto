import { SectionTitle } from "@/components/SectionTitle";
import { forwardRef } from "react";

export const Experiences = forwardRef<HTMLDivElement, {}>(({}, ref) => (
  <section
    ref={ref}
    className="relative flex flex-col items-center justify-center py-12 bg-slate-950"
  >
    <SectionTitle>Mon expérience</SectionTitle>
  </section>
));
