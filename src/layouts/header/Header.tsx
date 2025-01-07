import { Menu } from 'lucide-react'
import { Diamond } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='py-8 page flex-between'>
      <p>
        <Diamond className='size-[30px]' />
      </p>
      <div className='flex items-center gap-2'>
        <Menu className='size-[30px]' />
      </div>
    </header>
  )
}

export default Header
