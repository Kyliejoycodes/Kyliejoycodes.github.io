import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import {testimonials} from'../constants';
//future kylie-click on testimonials to alter content



const FeedbackCard = ({index, testimonial, name, designation, company, image, link}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
  <p className= "text-white font-black text-[48px] "></p>


  <div className="mt-1">
     <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
     <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]"><span className="pink-text-gradient">By: </span>{name}</p>
        <p className = "mt-1 text-secondary text-[12px]">{designation} {company}</p>
        <a href={link} target="_blank">Click Here</a>
      </div>
      <img src={image} alt={`feedback-by-${name}`}
      className="w-10 h-10 rounded-full object-cover" />
     </div>
  </div>
 
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className ="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants ={textVariant()}>
          <p className={styles.black-100}>Stay Informed</p>
          <h2 className={styles.sectionHeadText}>Publishings</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-4`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />

        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");