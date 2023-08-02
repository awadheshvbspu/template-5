import React from 'react'
import Headline from '../shared/Headline';
import skills from './Skills';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variant';

export default function About() {
  return (
    <>
      <div className='max-w-7xl mx-auto my-14  md:py-8 px-7' id='about'>
        <Headline title={'ABOUT ME'} subtitle={'Here you will find more information about me, What I do, and my current skills mostly in terms of programming and technology'} />
        {/* About content */}
        <div className='flex items-center justify-start flex-col md:flex-row'>
        {/* left side */}
          <motion.div className='md:w-1/2 my-8'
           variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
          >
          <div className='md:w-10/12 text-lg text-[#151111] mb-8'>
            <h4 className='text-2xl font-bold mb-8'>Got ot know me!</h4>
            <p className='mb-5'>I'm a <strong>FrontEnd Web Developer</strong> building the Frony-end of Websites and web Application that leads to the success of the overall product.Check out some of my work inthe Projects section</p>
            <p className='mb-5'>I also like sharing content related to the Dev community.Feel free to Connect or follow me on my LinkedIn where I post useful content to Web Developement and Programming.</p>
          </div>
          </motion.div>
          {/* right side */}
          <motion.div className='md:w-1/2 my-8'
           variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.5 }}
          >
          <h4 className='text-2xl font-bold mb-8'>My Skills</h4>
          <div className='flex flex-wrap gap-3 md:w-10/12'>
            {skills.map((skill)=>
            <p key={skill.id} className='bg-slate-300 text-black py-2 px-4 rounded'>{skill.title}</p>
            )}
          </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
