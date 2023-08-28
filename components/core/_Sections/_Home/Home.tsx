import React, { FC, useEffect, useState } from 'react'
import BodyContainer from '@/components/ui/containers/BodyContainer';
import TypeWriter from '@/components/ui/animations/TypeWriter/TypeWriter';
import { incrementer } from '@/utility/constants';
import useTypeWriter from '@/components/ui/animations/TypeWriter/useTypeWriter';

const HOME_DETAILS = {
  salutation: "Hi, I'm",
  name: 'Ian Neil Agasen',
  description: [
    'A fullstack software developer',
    'A Programmer'
  ]
}

const Home:FC<{}> = () => {
  // this is the index from HOME_DETAILS.description array
  const [currentDescription, setCurrentDescription] = useState<number>(0);

  const typewriter = useTypeWriter(HOME_DETAILS.description[0]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrentDescription((c) => incrementer(HOME_DETAILS.description, c));
  //   }, 8000);
  
  //   return () => clearTimeout(timer);
  // }, [currentDescription])
  
  console.log(HOME_DETAILS.description[currentDescription])
  console.log(currentDescription);

  return (
    <BodyContainer>
      <div className='text-[3rem]'>
        {HOME_DETAILS.salutation}
      </div>
      <div className='font-mono font-extrabold text-[3rem]'>
        {HOME_DETAILS.name}
      </div>
      <div className='font-mono text-[2rem] text-secondary opacity-75'>
        {/* <TypeWriter text={HOME_DETAILS.description[currentDescription]}/> */}
        {typewriter}
      </div>
    </BodyContainer>
  )
}

export default Home
