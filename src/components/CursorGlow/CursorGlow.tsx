import { useCursorGlow } from '@/hooks/useCursorGlow'
import { RefObject, useRef } from 'react'

type CursorGlowProps = {
  containerRef: RefObject<HTMLElement>
}

export const CursorGlow = ({ containerRef }: CursorGlowProps) => {
  const glowRef = useRef<HTMLDivElement>(null)

  useCursorGlow({ glowRef, containerRef })

  return (
    <div
      ref={glowRef}
      className="absolute w-[700px] h-[700px] bg-radial-glow-white rounded-full top-0 left-0 transition-opacity duration-[500ms] ease-linear -z-10"
    />
  )
}
