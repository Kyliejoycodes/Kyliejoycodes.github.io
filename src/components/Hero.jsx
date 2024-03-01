
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto waveSection`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFDE59]' />
          <div className='w-1 sm:h-80 h-40 sunrise-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FF66C4]'>Kylie</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            University of Waterloo Computer Engineering<br className='sm:block hidden' />
            | Morgan Industries
          </p>
        </div>
        

        <div className='sm:block hidden' style={{boxShadow: '2px 2px 300px rgb(255, 189, 89, 1)', position: 'absolute', top: -350, right: -150,borderRadius: '50%', backgroundColor:'rgb(255, 189, 89, 0.55)', width:'45%', height:'85%' , overflow:'hidden'}}></div>
      
      
      
      
      
      </div>

      <ComputersCanvas className='z-100'/>

      <motion.div className='waves'>
        <div className='waves wave1'></div>
        <div className='waves wave2'></div>
        <div className='waves wave3'></div>
        <div className='waves wave4'></div>
      </motion.div>
      <motion.div className='waves2'>
        <div className='waves wave5'></div>
        <div className='waves wave6'></div>
        <div className='waves wave7'></div>
        <div className='waves wave8'></div>
      </motion.div>




      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    
  );
};

export default Hero;