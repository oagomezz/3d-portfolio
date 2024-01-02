import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({experience}) => {
  return(
    <div className='bg-[#333333] p-1 m-5 rounded-[25px]'>
    <VerticalTimelineElement
    contentStyle={{background: '#b22222', color: '#fff', borderRadius: '25px', margin: '10px'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.name}
          className='w-[60% h-[60%] object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] text-center'>{experience.company_name}</h3>
        <h4 className='text-[16px] text-center pb-3'>{experience.title}</h4>
      </div>
      <hr />
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index) => {
          return (
            <li className='text-[14px] font-extralight' key={index}>{point}</li>
          )
        })}
      </ul>
  </VerticalTimelineElement>
  </div>
)}

const Experience = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <a href='experience'>
          <h2 className={styles.sectionHeadText}>Experience</h2>
        </a>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => 
            <ExperienceCard key={index} experience={experience}
            />
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")