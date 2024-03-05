
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';




const Footer = () => {
  return (
    <>
    <div className ="xl:mt-2 xl:flex-row">
      <motion.div variants={slideIn('up', "tween", 0.2, 1)} className="bg-secondary p-9 rounded-2xl">
    <div className="flex flex-row gap-8 "> 
          <div className='flex flex-col gap-4 pr-20'>
         <h3 className={styles.sectionHeadText}>Say Hello!</h3>
         <p href='mail-to:kmorgan.dev@gmail.com'>kmorgan.dev@gmail.com</p>
         </div>

      
        <div className="hidden sm:flex flex-wrap flex-row gap-8 pt-10">
      <a href="https://www.linkedin.com/in/kylie-morgan1/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size="3x"/>
      </a>
      <a href="https://www.instagram.com/kylie_morgan._/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="3x"/>
      </a>
      <a href="https://github.com/Kyliejoycodes" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="3x"/>
      </a>
      <a href="https://www.youtube.com/channel/UCRVQVARuZYs-az4cHX8EhDA" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="3x"/>
      </a>
      <a href="mailto:kmorgan.dev@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
      </a>
      <a href="https://discord.com/users/715699914830643220" target="_blank">
        <FontAwesomeIcon icon={faDiscord} size="3x"/>
      </a>
      <a href="https://open.spotify.com/user/domxcjsjovi5jydusocxozeh8?si=5ac62641bfb840bb" target="_blank">
        <FontAwesomeIcon icon={faSpotify} size="3x"/>
      </a>
      </div>
      </div>

      <div className="flex-col gap-8 sm:hidden">
      <a href="https://www.linkedin.com/in/kylie-morgan1/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://www.instagram.com/kylie_morgan._/" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
      </a>
      <a href="https://github.com/Kyliejoycodes" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
      <a href="https://www.youtube.com/channel/UCRVQVARuZYs-az4cHX8EhDA" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="2x"/>
      </a>
      <a href="mailto:kmorgan.dev@gmail.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
      </a>
      <a href="https://discord.com/users/715699914830643220" target="_blank">
        <FontAwesomeIcon icon={faDiscord} size="2x"/>
      </a>
      <a href="https://open.spotify.com/user/domxcjsjovi5jydusocxozeh8?si=5ac62641bfb840bb" target="_blank">
        <FontAwesomeIcon icon={faSpotify} size="2x"/>
      </a>
      </div>
    {/* </div> */}

    </motion.div>
  </div>
  </>
  );
};


export default SectionWrapper(Footer, "footer") //second id allows access to page from navbar