'use client'
import { motion } from 'framer-motion'
import React from 'react'

import JavascriptIcon from '@/assets/langsAndTools/javascript.svg'
import TypeScriptIcon from '@/assets/langsAndTools/typescript.svg'
import FigmaIcon from '@/assets/langsAndTools/figma.svg'
import HtmlIcon from '@/assets/langsAndTools/html.svg'
import NodeIcon from '@/assets/langsAndTools/nodejs.svg'
import SassIcon from '@/assets/langsAndTools/sass.svg'
import CssIcon from '@/assets/langsAndTools/css.svg'
import TanstackIcon from '@/assets/langsAndTools/tanstack-query.svg'

import ReactIcon from '@/assets/libbrariesAndFrameworks/react.svg'
import ReduxIcon from '@/assets/libbrariesAndFrameworks/redux.svg'
import NextIcon from '@/assets/libbrariesAndFrameworks/nextjs.svg'
// import NextUiIcon from '@/assets/libbrariesAndFrameworks/nextui.png'
import TailwindIcon from '@/assets/libbrariesAndFrameworks/tailwindcss.svg'
// import ShadcnIcon from '@/assets/libbrariesAndFrameworks/shadcn.png'
import ZustandIcon from '@/assets/libbrariesAndFrameworks/zustand.svg'

import MongoIcon from '@/assets/db/mongodb.svg'
import { AnimatedTooltip } from '../AnimatedTooltip'

const MySkills = () => {
  const langsAndTools = [
    {
      id: 1,
      name: 'HTML',
      image: HtmlIcon
    },
    {
      id: 2,
      name: 'CSS',
      image: CssIcon
    },
    {
      id: 3,
      name: 'JavaScript',
      image: JavascriptIcon
    },
    {
      id: 4,
      name: 'TypeScript',
      image: TypeScriptIcon
    },
    {
      id: 5,
      name: 'Sass',
      image: SassIcon
    },
    {
      id: 6,
      name: 'Node.js',
      image: NodeIcon
    },
    {
      id: 7,
      name: 'Figma',
      image: FigmaIcon
    },
    {
      id: 8,
      name: 'Tanstack Query',
      image: TanstackIcon
    }
  ]

  const librariesAndFrameworks = [
    {
      id: 9,
      name: 'React',
      image: ReactIcon
    },
    {
      id: 10,
      name: 'Next.js',
      image: NextIcon
    },
    {
      id: 12,
      name: 'Tailwind',
      image: TailwindIcon
    },
    // {
    //   id: 11,
    //   name: 'Next UI',
    //   image: NextUiIcon
    // },

    // {
    //   id: 13,
    //   name: 'Shadcn',
    //   image: ShadcnIcon
    // },
    {
      id: 14,
      name: 'Redux',
      image: ReduxIcon
    },
    {
      id: 15,
      name: 'Zustand',
      image: ZustandIcon
    }
  ]
  const db = [
    {
      id: 16,
      name: 'MongoDB',
      image: MongoIcon
    }
  ]
  return (
    <div className='flex flex-col gap-14 py-10 page'>
      <div className='space-y-2'>
        <div className='gradient-text text-6xl font-bold'>My Skills</div>
        <div className='mt-2 max-w-sm text-2xl font-medium leading-[2] md:max-w-3xl'>I like to take responsibility to craft aesthetic user experience using modern frontend architecture.</div>
      </div>
      <div className='space-y-6'>
        <SkillCard title='LANGUAGES AND TOOLS' items={langsAndTools} />
        <SkillCard title='LIBRARIES AND FRAMEWORKS' items={librariesAndFrameworks} />
        <SkillCard title='DATABASES' items={db} />
      </div>
    </div>
  )
}

const SkillCard = ({ title, items }: { title: string; items: { id: number; name: string; image: string }[] }) => {
  return (
    <div className='space-y-6'>
      <p className='text-lg font-medium tracking-widest'>{title}</p>
      <div className='flex gap-10'>
        {items.map((item, index) => (
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 * index }} key={item.name} className='h-14'>
            <AnimatedTooltip item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MySkills
