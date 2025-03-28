import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type SkillCategoryProps = {
  label: string
  children: ReactNode
  className?: string
  labelClassName?: string
}

export const SkillCategory = ({ label, children, className, labelClassName }: SkillCategoryProps) => (
  <div className={twMerge('rounded-[30px] overflow-hidden', className)}>
    <p className={twMerge('w-fit px-8 pt-[6px] pb-2 rounded-ee-[30px] text-sm', labelClassName)}>{label}</p>
    <div className="grid grid-cols-[repeat(2,max-content)] min-[620px]:grid-cols-[repeat(3,max-content)] min-[800px]:grid-cols-[repeat(4,max-content)] min-[1200px]:grid-cols-[repeat(6,max-content)] gap-16 p-8">
      {children}
    </div>
  </div>
)
