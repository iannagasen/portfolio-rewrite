import { cn } from '@/lib/utils';
import React, { FC } from 'react'

interface Props {
  text: string | string[];
}

const TypeWriter:FC<Props> = ({ text }) => {
  return (
    <div className={cn(
      "relative",
      "before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:content-[' '] ",
      "before:animate-typewriter-before",
      "after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-background",
      "after:animate-typewriter-after"
    )}>
      {text}
    </div>
  )
}

export default TypeWriter
