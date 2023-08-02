import React from 'react';
import  ProjectsDetail  from '../shared/ProjectsDetail';
import { motion } from 'framer-motion';
import Headline from '../shared/Headline';
import { fadeIn } from "../Variant";
import img1 from '../asessts/dopefolio.jpeg';

export default function Projects() {
  return (
    <>
        <div className='max-w-7xl mx-auto md:py-8 px-7' id="projects">
            <Headline title={'PROJECTS'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>
            <div>


                {ProjectsDetail.map((project) => <div key={project.id}>
                    <motion.div 
                    variants={fadeIn("up", 0.3)}
                    initial=""
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="projects items-center gap-5 my-20">
                        <div className="">
                        {/* <img src={project.image} alt="not support" className="h-20 w-20" /> */}
                        <img src={img1} alt="" />
                        
                        </div>
                        <div className="md:w-10/12 text-center md:text-left px-2">
                        <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                        <p className="text-lg text-[#666] leading-6 mb-6">{project.description}</p>
                        <button className="btn py-3 px-7">Case Study</button>
                        </div>
                    </motion.div>
                </div>)}
                </div>
                </div>
    </>
  )
}
