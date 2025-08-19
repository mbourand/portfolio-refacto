'use client'

import { scrollToId } from '@/modules/scroll'
import { forwardRef, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type AnchorProps = {
  anchorId: string
  Icon: React.FC<{ className: string }>
  label: string
}

const Anchor = forwardRef<HTMLButtonElement, AnchorProps>(({ Icon, label, anchorId }, ref) => (
  <button className="flex flex-col items-center gap-1 w-12 h-12" ref={ref} onClick={() => scrollToId(anchorId)}>
    <Icon className="w-8 h-8" />
    <p className="text-xs">{label}</p>
  </button>
))
Anchor.displayName = 'MobileNavBar.Anchor'

const Root = forwardRef<HTMLDivElement, PropsWithChildren<{ className: string }>>(({ children, className }, ref) => {
  return (
    <nav ref={ref} className={twMerge('fixed bottom-2 w-full z-50 transition-all duration-[250ms]', className)}>
      <div className="flex flex-row justify-center gap-8 min-[400px]:gap-12 mx-auto bg-gray-900/60 py-3 px-6 rounded-full backdrop-blur-[6px] w-fit">
        {children}
      </div>
    </nav>
  )
})

Root.displayName = 'MobileNavBar.Root'

export const MobileNavBar = {
  Anchor,
  Root
}
