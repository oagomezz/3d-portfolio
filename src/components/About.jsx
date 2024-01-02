import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from "../styles"
import { services } from '../constants/index'
import { fadeIn,  textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right", 'spring', 0.5 * index, 0.75 )}
      className='w-full red-green-gradient p-[2px] rounded-[20px] '>
        <div 
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#333333] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Who am I?</p>
      <h2 className={styles.sectionHeadText}>Biography</h2>
    </motion.div>

    <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
  Welcome, my name is Oscar Gomez, and I am a Full Stack developer and a United States Marine Corps Veteran. I am enthusiastic about writing code and finding solutions to common day problems with the help of technology.
  <br /><br />
  My passion for coding stems from its ability to create anything imaginable through careful planning and implementation. As an individual who strongly believes in the power of technology for good, I am convinced that software development, under the right circumstances, can have a profound and positive impact on society.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')