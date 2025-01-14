import { twMerge } from 'tailwind-merge'

export const Glow = () => (
  <div
    className={twMerge(
      'fixed bottom-0 translate-y-1/2 h-[500px] bg-radial-glow w-[120%] left-1/2 -translate-x-1/2 transition-all duration-1000 ease-in-out'
    )}
  />
)
