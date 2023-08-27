'use client'

import React, { FC, useState } from 'react'
import NavLink from './NavLink';

const NavBarHeader:FC<{}> = () => {
  const [btnSelected, setBtnSelected] = useState<string>('name');
  const handleClick = (name: string): void => {
    setBtnSelected(name);
  }
  
  const navLinkProps = {
    buttonSelected: btnSelected,
    clickHandler: handleClick
  }

  return (
    <div className='flex justify-between h-[10vh] p-[1.6rem] m-[0.2em] font-secondary text-2xl items-center'>
      <div className='font-bold'>Some Logo</div>
      <ul className='flex gap-6 items-center'>
        <NavLink name='home' {...navLinkProps} />
        <NavLink name='about' {...navLinkProps} />
        <NavLink name='portfolio' {...navLinkProps} />
        <NavLink name='services' {...navLinkProps} />
        <NavLink name='contact' {...navLinkProps} />
      </ul>
    </div>
  )
}

export default NavBarHeader