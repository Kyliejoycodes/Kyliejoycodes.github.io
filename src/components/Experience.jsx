import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import{styles} from '../styles';
import {experiences} from '../constants';
// import { timelinePics } from '../constants';
import {SectionWrapper} from '../hoc';
import {textVariant} from '../utils/motion';

import clickhere from "../assets/clickhere.png";
import howto from "../assets/howto.png";
import samsungpic from "../assets/samsungpic.jpg";
import bestbuypic from "../assets/bestbuypic.jpg";
import bestbuypic2 from "../assets/bestbuypic2.jpg";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
  contentStyle={{background:'#FFBD59', color: '#fff'}}
  contentArrowStyle={{borderRight : '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
  <div className="flex justify-center items-center w-full h-full">
    <img
    src={experience.icon}
    alt={experience.company_name}
    className="w-[60%] h-[60%] object-contain"
    />
  </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
      <p className="text-secondarysecondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-1">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}

    </ul>

</VerticalTimelineElement>
)

// const TimelinePic = ({timelinePic, index}) => (
//   <img src={timelinePic.icon} key={index}/>
  
// )


const Experience = () => {
  return (
    <>
    
    {/*<p className={styles.sectionSubText}>Employment and Co-ops</p>
    <h2 className={styles.sectionHeadText}>Experiences</h2>
    </motion.div> */}
    <div variants={textVariant()}>
    <p className={styles.sectionSubText}>Employment and Co-ops</p>
    <h2 className={styles.sectionHeadText}>Experiences</h2>
    </div>
{/* <motion.div variants={textVariant()}> */}
      {/* <a href="https://drive.google.com/drive/u/0/folders/1X5VlmDTinKm13FVZBr7tJTza-3iHDkfI" target="_blank" >
      <img id="cninfo" src="src/assets/clickhere.png"></img>
      </a> 
          <a href="https://www.canva.com/design/DAFXbbZwU0E/eIG-ynchymGfmgUeXZGzdQ/view?utm_content=DAFXbbZwU0E&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" >
      <img id="canva" src="src/assets/howto.png"></img>
      </a> 
      <img id="samsungpic" src="/assets/samsungpic.jpg"/>
      <img id="bestbuypic" src="/assets/bestbuypic.jpg"/>
      <img id="bestbuypic2" src="/assets/bestbuypic2.jpg"/> */}

    {/* <div className='mt-20 flex flex-wrap gap-10'>
        {timelinePics.map((timelinePic,index) => (
          <TimelinePic key={index} timelinePic={timelinePic}/>
        ))}</div> */}


      <VerticalTimeline>
      <div>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}</div>
      </VerticalTimeline>
      <h1 className='text-[24px] text-white font-bold' style={{ paddingTop: '40px' }}>Non Tech-Related Employment: </h1>
      <p className='text-[18px]'>Golf: Pheasant Run(2021-2023), Mill Run(2021-2022), Red Crest Resort(2020-2021), Cardinal Golf Club(2020-2021)</p>
      <p className='text-[18px]'>Karate: Community Martial Arts Shotokan Karate Teacher(2018-2022)</p>
      {/* </motion.div> */}

      {/* </div> */}


      

      <div className="hidden sm:flex">    

    <a href="https://drive.google.com/drive/u/0/folders/1X5VlmDTinKm13FVZBr7tJTza-3iHDkfI" target="_blank" >
      <img id="cninfo" src={clickhere} className='top:500px'></img>
      </a>
     <a href="https://www.canva.com/design/DAFXbbZwU0E/eIG-ynchymGfmgUeXZGzdQ/view?utm_content=DAFXbbZwU0E&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" >
      <img id="canva" src={howto} className='top:500px'></img>
      </a> 
      <img id="samsungpic" src={samsungpic}className='top:500px'/>
      <img id="bestbuypic" src={bestbuypic} className='top:500px'/>
      <img id="bestbuypic2" src={bestbuypic2} className='top:500px'/>        
      <div className="sketchfab-embed-wrapper"> 
      <iframe id='dog' title="Dog" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c05d5172368b4d9f9b6751832c73f854/embed?autospin=1&camera=0&preload=1"> </iframe> 
      </div>
      </div>
      
      {/* <div className="smallpictures flex flex-wrap justify-center gap-4 mt-8">
        <a href="https://drive.google.com/drive/u/0/folders/1X5VlmDTinKm13FVZBr7tJTza-3iHDkfI" target="_blank">
          <img src={clickhere} alt="click here" className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"/>
        </a>
        <a href="https://www.canva.com/design/DAFXbbZwU0E/eIG-ynchymGfmgUeXZGzdQ/view?utm_content=DAFXbbZwU0E&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
          <img src={howto} alt="how to" className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"/>
        </a>
        <img src={samsungpic} alt="samsung" className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"/>
        <img src={bestbuypic} alt="best buy" className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"/>
        <img src={bestbuypic2} alt="best buy 2" className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"/>
      </div> */}
    </>
  )
}

export default SectionWrapper(Experience, "work")