import { useMenuStore } from '@/store/useMenuStore'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const anim = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Donate', href: '#donate' }
]

export default function Menu() {
  const { isMenuOpen, toggleMenu } = useMenuStore()
  return (
    <motion.div
      style={{ display: isMenuOpen ? 'flex' : 'none' }}
      className='fixed z-[110] flex h-[90vh] w-full flex-col items-center justify-center'
      variants={anim}
      initial='initial'
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      {menuItems.map((item, index) => (
        <AnimatePresence key={item.href}>
          <motion.div
            onClick={() => toggleMenu(false)}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            exit={{ opacity: 0, y: -100 }}
          >
            <Link className='m-2 text-[3vw] font-bold' href={item.href}>
              {item.label}
            </Link>
          </motion.div>
        </AnimatePresence>
      ))}
    </motion.div>
  )
}
