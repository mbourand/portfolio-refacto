import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="text-3xl text-center bg-highlight-gradient bg-clip-text text-transparent font-bold mb-6 w-fit mx-auto">
    {children}
  </h1>
);
