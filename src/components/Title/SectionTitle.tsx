import { ReactNode } from 'react'

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h1 className="px-4 text-4xl text-center bg-highlight-gradient bg-size-[200%] hover:bg-right bg-clip-text pb-1 text-transparent font-semibold mb-10 w-fit mx-auto transition-all duration-700 ease-in-out">
    {children}
  </h1>
)
