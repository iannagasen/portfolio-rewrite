import React, { FC } from 'react'
import NavBarHeader from '@/components/core/_Header/NavBarHeader';
import Home from './_Sections/_Home/Home';
import About from './_Sections/_About/About';

const Main:FC<{}>= () => {
  return (
    <div className='max-w-[80vw] w-full mx-auto font-secondary'>
      <NavBarHeader />
      <Home />
      <About />
    </div>
  )
}

export default Main