import Image from "next/image";
import {
  forwardRef,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

type AnchorProps = {
  anchorRef: RefObject<HTMLElement>;
};

const Anchor = forwardRef<HTMLButtonElement, PropsWithChildren<AnchorProps>>(
  ({ children, anchorRef }, ref) => (
    <button
      ref={ref}
      onClick={() => {
        anchorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }}
      className="hover:text-blue-accent transition-colors duration-200"
    >
      {children}
    </button>
  )
);
Anchor.displayName = "NavBar.Anchor";

const Root = forwardRef<HTMLDivElement, PropsWithChildren<{}>>(
  ({ children }, ref) => {
    const [lastScrollWasUp, setLastScrollWasUp] = useState(true);
    const lastScrollTop = useRef(0);

    useEffect(() => {
      lastScrollTop.current = window.scrollY;

      const handleScrollState = () => {
        const currentScrollTop = window.scrollY;
        setLastScrollWasUp(currentScrollTop < lastScrollTop.current);
        lastScrollTop.current = currentScrollTop;
      };

      window.addEventListener("scroll", handleScrollState);

      return () => window.removeEventListener("scroll", handleScrollState);
    }, []);

    return (
      <nav
        ref={ref}
        className={twMerge(
          "bg-slate-800/20 w-full max-w-[1200px] fixed top-2 z-40 flex flex-row justify-between gap-8 items-center backdrop-blur-[7px] py-3 px-3 rounded-full left-1/2 -translate-x-1/2 transition-all duration-[250ms] ease-in-out",
          lastScrollWasUp ? "" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-row items-center gap-4 ml-1">
          <Image
            width={232}
            height={232}
            src="/logo.webp"
            alt=""
            className="w-6 h-auto"
            priority
          />
          <span className="text-lg max-[850px]:hidden">Maxime Bourand</span>
        </div>
        <div className="flex flex-row justify-end gap-8 min-[985px]:gap-16">
          {children}
        </div>
      </nav>
    );
  }
);
Root.displayName = "NavBar.Root";

export const NavBar = {
  Anchor,
  Root,
} as const;
