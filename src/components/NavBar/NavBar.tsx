'use client'

import { useScrollDirection } from '@/hooks/useScrollDirection'
import { scrollToId } from '@/modules/scroll'
import { forwardRef, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type AnchorProps = {
  anchorId: string
}

export const NavBarAnchor = forwardRef<HTMLButtonElement, PropsWithChildren<AnchorProps>>(
  ({ children, anchorId }, ref) => (
    <button
      ref={ref}
      onClick={() => scrollToId(anchorId)}
      className="hover:text-blue-accent transition-colors duration-200"
    >
      {children}
    </button>
  )
)
NavBarAnchor.displayName = 'NavBarAnchor'

export const NavBarRoot = forwardRef<HTMLDivElement, PropsWithChildren<{ className?: string }>>(
  ({ children, className }, ref) => {
    const lastScrollWasUp = useScrollDirection()

    return (
      <nav
        ref={ref}
        className={twMerge(
          'bg-slate-800/20 w-full max-w-[1200px] fixed top-2 z-40 flex flex-row justify-between gap-8 items-center backdrop-blur-[7px] py-3 px-3 rounded-full left-1/2 -translate-x-1/2 transition-all duration-250',
          lastScrollWasUp ? '' : '-translate-y-full opacity-0',
          className
        )}
      >
        <div className="flex flex-row items-center gap-4 ml-1">
          <img src="/logo.webp" alt="" className="w-6 h-auto" />
          <span className="text-lg max-[850px]:hidden">Maxime Bourand</span>
        </div>
        <div className="flex flex-row justify-end gap-8 min-[985px]:gap-16">{children}</div>
      </nav>
    )
  }
)
NavBarRoot.displayName = 'NavBar.Root'
