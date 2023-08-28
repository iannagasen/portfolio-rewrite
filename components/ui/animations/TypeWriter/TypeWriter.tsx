import React, { FC, Ref, forwardRef } from 'react'
import { cn } from '@/lib/utils';

interface Props {
  text: string | string[];
}

// DO NOT REMOVE THE COMMENT
// "before:animate-typewriter-before"
// "after:animate-typewriter-after"
// apparently tailwind loads these class which initializes the 'typewriter' keyframes 
// which is used by typewriter-before-[] typewriter-after-[] plugin
const TypeWriter = forwardRef<HTMLDivElement, Props>(({ text }, ref) => {

  return (
    <div ref={ref} className={cn(
      "relative font-mono inline-block",
      "before:absolute before:bg-background before:top-0 before:bottom-0 before:left-0 before:right-0 before:content-[' ']",
      // "before:animate-typewriter-before",
      "before:typewriter-before-[30]",
      "after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:w-[0.125em] after:bg-black",
      // "after:animate-typewriter-after"
      "after:typewriter-after-[30]"
    )}>
      {text}
    </div>
  )
})

TypeWriter.displayName = 'TypeWriter';

export default TypeWriter
