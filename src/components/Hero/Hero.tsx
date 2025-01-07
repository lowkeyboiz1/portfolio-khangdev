'use client'

import { Cover } from '@/components/Cover'
import ScratchToReveal from '@/components/ui/scratch-to-reveal'
import { useCursorStore } from '@/store/useCursorStore'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import { Facebook, Github, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import ShinyButton from '@/components/ui/shiny-button'
import HyperText from '@/components/ui/hyper-text'

const Hero = () => {
  const { toggleCursor, isCursorVisible } = useCursorStore()
  const containerRef = useRef(null)
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/lowkeyboiz1',
      icon: Github
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lowkeyboiz1/',
      icon: Instagram
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/lowkeyboiz1',
      icon: Facebook
    }
  ]

  const handleMouseOver = () => {
    if (!isCursorVisible) return
    toggleCursor(false)
  }

  const handleMouseLeave = () => {
    if (isCursorVisible) return
    toggleCursor(true)
  }
  const handleComplete = () => {
    if (!containerRef.current) return
    const rect = (containerRef.current as HTMLDivElement).getBoundingClientRect() // Get the bounding box of the container

    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    }

    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
      origin: {
        x: (rect.left + rect.right) / 2 / window.innerWidth, // X position centered
        y: (rect.top + rect.bottom) / 2 / window.innerHeight // Y position centered
      }
    })

    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 0.75,
      shapes: ['circle'],
      origin: {
        x: (rect.left + rect.right) / 2 / window.innerWidth, // X position centered
        y: (rect.top + rect.bottom) / 2 / window.innerHeight // Y position centered
      }
    })
  }
  return (
    <div className='grid grid-cols-3 gap-10 space-y-10 py-44 page' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className='col-span-2 space-y-6'>
        <h1 className='relative z-20 mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl'>
          Hi, I&apos;m <Cover>Vika</Cover>, <br />a{' '}
          <span className='relative'>
            <span className='text-white'>Frontend Developer</span>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className='bg-default from-default absolute -bottom-1 left-0 h-2 rounded-full bg-gradient-to-r to-[#ff8c00]'
            />
          </span>
        </h1>
        <div className='flex items-center gap-5'>
          {socialLinks.map((link) => (
            <Link href={link.url} key={link.name}>
              <link.icon className='hover:text-default size-[30px] duration-200' />
            </Link>
          ))}
        </div>
        <ShinyButton className='px-10 py-4'>
          <HyperText delay={500} duration={400} className='text-xl'>
            Let&apos;s talk
          </HyperText>
        </ShinyButton>
      </motion.div>
      <motion.div ref={containerRef} initial={{ opacity: 0, y: -100, scale: 0.5, rotate: -45 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} transition={{ duration: 0.4 }}>
        <ScratchToReveal
          width={320}
          height={320}
          minScratchPercentage={70}
          className='flex items-center justify-center overflow-hidden rounded-2xl border-2'
          onComplete={handleComplete}
          gradientColors={['#FFA07A', '#FFA68D', '#FFD39B']}
        >
          <div className='size-full'>
            <Image src='/hero.jpg' alt='hero' width={320} height={320} className='size-full object-cover' />
          </div>
        </ScratchToReveal>
      </motion.div>
    </div>
  )
}

export default Hero
