
import React from "react";
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import bikepic from "../assets/bikepic.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full sunrise-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
   <> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='image'>
      <motion.p

      


        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] parentofpicture'
      >

        Hi I’m Kylie Joy. I am a Computer Engineering Student at the University of Waterloo, and the founder of Morgan Industries, the name behind multiple innovative Web Applications, and Historical Preservation efforts; Specializing in ethical technology and history education.<br></br> My life and businesses creed is to <b>improve the consumption <br></br>of technologies and history, to promote a mindful next generation.</b>
         My personal passions extrude beyond just <br></br>technology development. I pursue anything automotive <br></br>related, particularly working on projects alongside Morgan <br></br>Indutries employees restoring antique military vehicles. I've <br></br>enjoyed practicing shotokan karate for the past 12 years, and <br></br>building video games and projects. Teaching is very important <br></br>to me, and something I do often with karate, computer science, and math/science.

      </motion.p>
      {/* <img className="shadow-card rounded-[400px] static right-20" id="picture" src="./assets/bikepic.png"></img> */}
      <img className="shadow-card rounded-[400px] static right-20" id="picture" src={bikepic} alt="Bike Pic" />


      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")