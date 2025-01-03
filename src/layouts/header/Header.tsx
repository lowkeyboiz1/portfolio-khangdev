import { Menu } from 'lucide-react'
import { Diamond } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='mx-auto flex w-full max-w-[1200px] items-center justify-between px-10 py-8'>
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
