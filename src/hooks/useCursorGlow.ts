import { RefObject, useEffect } from 'react'

type CursorGlowProps = {
  glowRef: RefObject<HTMLElement>
  containerRef: RefObject<HTMLElement>
}

export const useCursorGlow = ({ glowRef, containerRef }: CursorGlowProps) => {
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !glowRef.current) return

      const card = containerRef.current.getBoundingClientRect()

      const mousePosition = {
        x: e.clientX - card.left,
        y: e.clientY - card.top
      }

      const isOverCard =
        mousePosition.x >= 0 && mousePosition.y >= 0 && mousePosition.x <= card.width && mousePosition.y <= card.height

      if (!isOverCard) {
        glowRef.current.style.opacity = '0%'
        return
      }

      glowRef.current.style.opacity = '100%'
      glowRef.current.style.transform = `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => window.removeEventListener('mousemove', onMouseMove)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
