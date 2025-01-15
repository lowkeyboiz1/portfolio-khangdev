import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const TracingBeamCustom = ({ children }: { children?: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef, // Watches scroll on this element
    offset: ['start start', 'end end'] // Adjusts when the effect begins and ends
  })

  // Transform scroll progress into a height percentage
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className='relative h-[200vh]'>
      {/* Sticky container */}
      <div className='sticky top-40 h-full' ref={containerRef}>
        <div className='relative h-full'>
          {/* Scrollable content */}
          {children || <div>No content provided</div>}

          {/* Tracing beam */}
          <motion.div className='absolute left-0 top-0 h-full w-[20px] bg-red-500' style={{ height }} />
        </div>
      </div>
    </div>
  )
}
