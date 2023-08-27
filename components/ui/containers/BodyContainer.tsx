import React, { FC, ReactNode } from 'react'
import { cn } from '../../../lib/utils';

interface Props {
  className?: string;
  children: ReactNode | ReactNode[]
}

const BodyContainer:FC<Props> = ({ className, children }) => {
  return (
    <div className={cn('h-[90vh]', className)}>
      {children}
    </div>
  )
}

export default BodyContainer
