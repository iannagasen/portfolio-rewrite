import { cn } from '@/lib/utils';
import React, { FC } from 'react'

interface Props {
  name: string;
  buttonSelected: string;
  clickHandler: (name: string) => void;
}

const NavLink:FC<Props> = ({ name, buttonSelected, clickHandler }) => {
  return (
    <li 
      className={cn(
        'capitalize', 
        name === buttonSelected && 'border-[0.1em] border-secondary rounded-xl px-[0.3em] text-secondary',
        'hover:border-[0.1em] hover:border-secondary hover:rounded-xl hover:px-[0.3em] hover:text-secondary'
      )}
      onClick={() => clickHandler(name)}
    >
      {name}
    </li>
  )
}

export default NavLink
