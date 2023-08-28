import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

// IMPLEMENTING LIST:
// if list: 
//  - gaano katagal matapos yung isang block
//    - 1s + 4s = 5s
//  - after 5s (render time ng isang block)
//    - isunod agad yung next
const useTypeWriter = (text: string | string[]) => {
  const textList = Array.isArray(text) ? text : [ text ];
  const textListMemo = useMemo(() => textList, [textList])
  const ref = useRef<HTMLDivElement>(null);
  
  
  useEffect(() => {
    const current = ref.current;
    let timer: NodeJS.Timeout;

    if (current) {
      current.style.position = 'relative';
      current.style.display = 'inline-block';
      
      textListMemo.forEach((t, i) => {
        const size = t.length;
        console.log(size);
        const before = createBeforePseudo(size);
        const after = createAfterPseudo(size);
      
        current.insertBefore(before, current.firstElementChild)
        current.appendChild(after);
      
        if (Array.isArray(textListMemo) && i != 0) {
          console.log("IAN " + i)
          timer = setTimeout(() => {
            current.textContent = t;
            current.style.animation = 'none';
            current.offsetWidth; // trigger reflow
            const before = createBeforePseudo(size);
            const after = createAfterPseudo(size);
            current.insertBefore(before, current.firstElementChild)
            current.appendChild(after);
          }, 5000) // 5s = 1s + 4s; buffer + rendering time
        }
      })
    }
    
    return () => clearTimeout(timer);
  }, [textListMemo]);
  
  
  return (
    <div ref={ref}>
      {textListMemo[0]}
    </div>
  )
}

const awaitTimeout = async () => {

}

const createBeforePseudo = (steps: number) => {
  const before = document.createElement('span');
  
  before.textContent = ' ';
  before.style.position = 'absolute';
  before.style.background = '#fcedda';
  before.style.top = '0';
  before.style.left = '0';
  before.style.right = '0';
  before.style.bottom = '0';
  
  const {keyframes: k1, options: o1} = typeWriterAnimation(steps);
  before.animate(k1, o1);

  return before;
}

const createAfterPseudo = (steps: number) => {
  const after = document.createElement('span');
  after.textContent = ' ';
  after.style.width = '0.125em';
  after.style.position = 'absolute';
  after.style.background = 'black';
  after.style.top = '0';
  after.style.left = '0';
  after.style.right = '0';
  after.style.bottom = '0';

  const {keyframes: k1, options: o1} = typeWriterAnimation(steps);
  const {keyframes: k2, options: o2} = blinkAnimation(steps);
      
  after.animate(k1, o1);
  after.animate(k2, o2);

  return after;
}

const typeWriterAnimation = (steps: number): {
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
} => {
  const keyframes: Keyframe[] = [
    { left: '0%' },
    { left: '100%' }
  ]
  const options: KeyframeAnimationOptions = {
    duration: 4000, // 4 seconds
    iterations: 1,
    fill: 'forwards',
    easing: 'steps(' + steps + ')',
    delay: 1000 // 1 second delay
  }
  return {keyframes, options};
}

const blinkAnimation = (steps: number): {
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
} => {
  const keyframes: Keyframe[] = [
    { background: 'transparent' }
  ]
  const options: KeyframeAnimationOptions = {
    duration: 750, // 4 seconds
    iterations: 9999,
    fill: 'both',
    easing: 'steps(' + steps + ')',
  }
  return {keyframes, options};
}

export default useTypeWriter
