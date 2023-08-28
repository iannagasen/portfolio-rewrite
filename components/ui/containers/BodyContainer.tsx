"use client"

import React, { FC, ReactNode } from 'react'
import { cn } from '../../../lib/utils';

interface Props {
  className?: string;
  children: ReactNode | ReactNode[]
}

const BodyContainer:FC<Props> = ({ className: cls, children }) => {
  return (
    <div className={cn(cls, 'h-[90vh]' )}>
      {children}
    </div>
  )
}

export default BodyContainer
