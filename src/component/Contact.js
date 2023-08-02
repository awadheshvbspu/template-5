import React from 'react'
import Headline from '../shared/Headline';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variant';

export default function Contact() {
  return (
   <>
    <motion.div className='contact mt-2 mx-auto px-2' id='contact'
     variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
    >
      <Headline  title={'CONTACT'} subtitle={'Feel free to contact me by submitting the form and I will get back to you as soon as possible.'}/>
      <div className='md:w-2/3 mx-auto bg-white md:px-16 px-8 rounded mb-32'>
        <form >
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' placeholder='Enter Your name' className='p-5' />
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' id='email' placeholder='Enter Your Email' className='p-5' />
          <label htmlFor=''>Message:</label>
          <textarea name='message' id='message' cols='20' rows='10' className='p-5 mb-8'></textarea>
          <button className='btn px-14 py-4 shadow-sm'>Submit</button>
        </form>
      </div>
    </motion.div>
   </>
  )
}
