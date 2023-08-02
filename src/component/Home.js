import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import linkedIn from '../asessts/socials/linkedin.svg';
import github from '../asessts/socials/github.svg';
import twitter from '../asessts/socials/twitter.svg';
import youtube from '../asessts/socials/youtube.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variant';

export default function Home() {
  return (
    <>
      <div className='hero h-screen flex items-center justify-center' id='home' >
      <motion.div 
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center md:w-1/2">
        <h1 className='text-5xl font-extrabold text-blue-700 tracking-wider mb-8'> HEY, I'M AWADHESH YADAV</h1>
        <TypeAnimation sequence={[
        'I am a Front-end Developer and Web Developer.',
        1000,
        ]}
        wrapper="span"
        speed={50}
        style={{fontSize:'2em',display:'inline-block'}}
        repeat={Infinity}
        className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
        />
        <p className='text-xl my-8'>A frontend focused Web Developer buildings the Frontend of website and web Application that leads to the success of the overall product</p>
        <button className='btn py-4 px-16'>PROJECTS</button>
      </motion.div>
      {/* social links */}
      <div className='bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block'>
        <div className='py-1'>
          <a href='#' className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={linkedIn} alt='' className='w-10 h-10' />
          </a>
        </div>
        <div className='py-1'>
          <a href='#' className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={github} alt='' className='w-10 h-10' />
          </a>
        </div>
        <div className='py-1'>
          <a href='#' className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={twitter} alt='' className='w-10 h-10' />
          </a>
        </div>
        <div className='py-1'>
          <a href='#' className='p-3 hover:bg-slate-400 block rounded transition-all duration-500'>
            <img src={youtube} alt='' className='w-10 h-10' />
          </a>
        </div>
      </div>
      </div>
    </>
  )
}
