import { AnimatedMenuToggle } from '@/components/AnimatedMenuToggle'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 pt-8 backdrop-blur-sm page flex-between'>
      <div className='h-20'>
        <Image src='/logo.png' alt='vika dev logo' width={100} height={100} className='size-full object-cover' />
      </div>
      <AnimatedMenuToggle />
    </header>
  )
}

export default Header
