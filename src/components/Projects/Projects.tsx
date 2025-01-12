import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PinContainer } from '../PinContainer'
import { useIsMobile } from '@/hooks/use-mobile'
import { typeOfProject } from '@/utils/constans'

const Projects = () => {
  const targetRef = useRef(null)
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const projects = [
    {
      title: 'Trello Clone',
      href: 'https://trello-web-yv1v.vercel.app/',
      description: 'A Trello clone built with Fullstack (Next.js, Tailwind CSS, ExpressJS, NextUI, MongoDB).'
    },
    {
      title: 'Vua Thợ Website',
      href: 'https://vuatho.com',
      description: 'Multiple webview applications integrated with the Vua Thợ mobile app.'
    },
    {
      title: 'Youtube Clone',
      href: 'https://youtube-clone-tau-ashy.vercel.app/',
      description: 'A Youtube clone built with Fullstack (React.js, Tailwind CSS, Nodejs, ExpressJS, MongoDB).'
    },
    {
      title: 'Shop T-Shirt 3D',
      href: 'https://shop-threejs.vercel.app',
      description: 'A 3D shop for T-Shirt use Three.js.'
    },
    {
      title: 'Blog (In Progress)',
      description: 'A blog built with Next.js, Tailwind CSS, Contentlayer.',
      status: typeOfProject.IN_PROGRESS
    },
    {
      title: 'Source Code Management (In Progress)',
      description: 'A source code management system built with Next.js, Tailwind CSS, ExpressJS, MongoDB.',
      status: typeOfProject.IN_PROGRESS
    }
  ]

  const x = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? `-${projects.length * 100}%` : '-200%'])

  return (
    <section id='projects' ref={targetRef} className='relative h-[150vh] w-full page'>
      <div className='sticky top-40'>
        <div className='gradient-text text-4xl font-bold xl:text-6xl'>My Projects</div>
        <div className='mt-2 max-w-sm text-lg font-medium leading-[1.25] md:max-w-lg xl:text-2xl xl:leading-[2]'>
          Some things I&apos;ve built with love, expertise and a pinch of magical ingredients.
        </div>
        <div className='flex w-full items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex h-full min-h-[500px] w-full gap-20'>
            {projects.map((project) => {
              return (
                <div key={project.title} className='flex w-full items-center justify-center'>
                  <PinContainer title={project.title} href={project.href} containerClassName='!size-full'>
                    <div className='flex size-[400px] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2'>
                      <h3 className='!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100'>{project.title}</h3>
                      <div className='!m-0 !p-0 text-base font-normal'>
                        <span className='text-slate-500'>{project.description}</span>
                      </div>
                      <div className='mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500' />
                    </div>
                  </PinContainer>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
