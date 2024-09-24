import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Glow = () => {
  const [glowDivScrolled, setGlowDivScrolled] = useState(false);

  useEffect(() => {
    const a = () => {
      if (window.scrollY === 0) setGlowDivScrolled(false);
      else setGlowDivScrolled(true);
    };

    window.addEventListener("scroll", a);

    return () => window.removeEventListener("scroll", a);
  }, []);

  return (
    <div
      className={twMerge(
        "fixed bottom-0 translate-y-1/2 h-[500px] bg-radial-glow w-[120%] left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out"
      )}
    />
  );
};
