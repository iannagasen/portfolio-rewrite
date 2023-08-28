import React, { FC, useEffect, useRef } from 'react'
import TypeWriter from './TypeWriter';


const typeWriterAnimation = (): {
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
    easing: 'steps(' + 30 + ')',
    delay: 1000 // 1 second delay
  }
  return {keyframes, options};
}

const blinkAnimation = (): {
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
    easing: 'steps(' + 30 + ')',
  }
  return {keyframes, options};
}


const useTypeWriter = (text: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      console.log("CURRENT " + current)
      // current.textContent = '';

      // text.split('').forEach((ch, i) => {
      //   const span = document.createElement('span');
      //   span.textContent = ch;
      //   span.style.display = 'inline';
      //   // span.style.opacity = '0';
      //   setTimeout(() => {
      //     current.appendChild(span);
      //   }, 100)
      // })

      current.style.position = 'relative';
      current.style.display = 'inline-block';

      const before = document.createElement('span');
      const after = document.createElement('span');

      before.textContent = ' ';
      before.style.position = 'absolute';
      before.style.background = '#fcedda';
      before.style.top = '0';
      before.style.left = '0';
      before.style.right = '0';
      before.style.bottom = '0';

      after.textContent = ' ';
      after.style.width = '0.125em';
      after.style.position = 'absolute';
      after.style.background = 'black';
      after.style.top = '0';
      after.style.left = '0';
      after.style.right = '0';
      after.style.bottom = '0';

      const {keyframes: k1, options: o1} = typeWriterAnimation();
      const {keyframes: k2, options: o2} = blinkAnimation();

      before.animate(k1, o1);
      
      after.animate(k1, o1);
      after.animate(k2, o2);
      
      current.insertBefore(before, current.firstElementChild)
      current.appendChild(after);
    }
    
    // return () => clearTimeout(null);
  }, [text])
  

  return (
    <div ref={ref}>
      {text}
    </div>
  )
}


// const useTypeWriter:FC<Props> = ({ text }) => {
//   const typewriterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const current = typewriterRef.current;
//     if (current) {
//       const classes = current.classList;
//       // remove animation
//       current.className = '';
//       // trigger reflow - look for other ways to trigger reflow
//       current.offsetWidth;
//       // reattach animation
//       current.classList.add();
//     }
//   }, [text])  


//   return (
//     <TypeWriter ref={typewriterRef} text={text}/>
//   )
// }

export default useTypeWriter
