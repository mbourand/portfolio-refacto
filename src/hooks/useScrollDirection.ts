import { useEffect, useRef, useState } from 'react'

export const useScrollDirection = () => {
  const [lastScrollWasUp, setLastScrollWasUp] = useState(true)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    lastScrollTop.current = window.scrollY

    const handleScrollState = () => {
      const isScrollTooSlow = Math.abs(window.scrollY - lastScrollTop.current) < 5
      if (isScrollTooSlow) return

      const currentScrollTop = window.scrollY
      setLastScrollWasUp(currentScrollTop < lastScrollTop.current)
      lastScrollTop.current = currentScrollTop
    }

    window.addEventListener('scroll', handleScrollState)

    return () => window.removeEventListener('scroll', handleScrollState)
  }, [])

  return lastScrollWasUp
}
