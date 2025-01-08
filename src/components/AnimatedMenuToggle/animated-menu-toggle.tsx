'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedMenuToggle = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const [buttonHeight, setButtonHeight] = useState<number>(48)

  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: buttonHeight / 4, top: '-50%' }
  }

  const middleLineVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: 40 }
  }

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -buttonHeight / 4 }
  }

  useEffect(() => {
    const updateHeight = () => {
      if (buttonRef.current) {
        setButtonHeight(buttonRef.current.offsetHeight) // Set the height dynamically
      }
    }

    updateHeight() // Set the initial height
    window.addEventListener('resize', updateHeight) // Update height on window resize

    return () => {
      window.removeEventListener('resize', updateHeight) // Clean up event listener
    }
  }, [])

  return (
    <button ref={buttonRef} className='flex size-12 flex-col items-center justify-center gap-0.5' onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
      <motion.div className='mb-1.5 h-1 w-10 rounded-full bg-white' variants={topLineVariants} animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} />
      <motion.div className='mb-1.5 h-1 w-10 rounded-full bg-white' variants={middleLineVariants} animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} />
      <motion.div className='h-1 w-10 rounded-full bg-white' variants={bottomLineVariants} animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} />
    </button>
  )
}

export default AnimatedMenuToggle
