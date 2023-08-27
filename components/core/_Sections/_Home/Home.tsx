import React, { FC } from 'react'
import { HOME_DETAILS } from '@/utility/constants';
import BodyContainer from '@/components/ui/containers/BodyContainer';
import TypeWriter from '@/components/ui/animations/TypeWriter/TypeWriter';

const Home:FC<{}> = () => {
  return (
    <BodyContainer>
      <div className='text-[3rem]'>
        {HOME_DETAILS.salutation}
      </div>
      <div className='font-mono font-extrabold text-[3rem]'>
        {HOME_DETAILS.name}
      </div>
      <div className='font-main text-[2rem] text-secondary opacity-75'>
        <TypeWriter text={HOME_DETAILS.description}/>
      </div>
    </BodyContainer>
  )
}

export default Home
