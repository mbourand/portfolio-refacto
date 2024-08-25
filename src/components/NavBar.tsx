import { forwardRef, PropsWithChildren, RefObject } from "react";

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
  ({ children }, ref) => (
    <nav
      ref={ref}
      className="w-full p-4 fixed z-40 flex flex-row justify-end gap-8"
    >
      {children}
    </nav>
  )
);
Root.displayName = "NavBar.Root";

export const NavBar = {
  Anchor,
  Root,
} as const;
