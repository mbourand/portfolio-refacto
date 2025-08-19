'use client'

import { RotatingBorderButton } from '@/components/Button/RotatingBorderButton'

export function ScrollToTopButton() {
  return (
    <RotatingBorderButton
      className="mt-12"
      label="Retourner en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
  )
}
