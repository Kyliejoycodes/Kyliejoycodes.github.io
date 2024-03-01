import React from "react";
import {Tilt} from "react-tilt"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { school } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SchoolCard = ({ index, title, description, icon }) => (
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
        className='bg-sunrise-gradient rounded-[20px] py-3 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >


        <h3 className='text-white text-[20px] font-bold '>
          {title}
        </h3>
        <p className='text-white text-[14px]'>{description}</p>
        <img
          src={icon}
          alt={title}
          className='w-8 h-8 object-contain'
        />
      </div>
    </motion.div>
  </Tilt>
);

const School = () => {
  return (
   <> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Awards and Acheivements</p>
        <h2 className={styles.sectionHeadText}>Education + Extracurriculars</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {school.map((school, index) => (
          <SchoolCard key={school.title} index={index} {...school} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(School, "school")