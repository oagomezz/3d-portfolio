import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div className="bg-[#333333] p-2 rounded-[20px] sm: w-[360px] w-full">
    <motion.div variants={fadeIn('', '', index * 0.5, 0.75)} >
      <Tilt
        options={{ 
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[black] p-5 rounded-[20px] sm: w-[360px] w-full">
          
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-contain rounded-2xl" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
      </Tilt>
    </motion.div>
    </div>
  )
}
const Works = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Portfolio</h2>
      <div className='grid gap-10 grid-cols-3 mt-20'>
        {projects.map((project,index) => (
          <ProjectCard 
          key={`project-${index}`} 
          index={index}
          {...project}
          />
        ))}
      </div>
    </div>
)}

export default SectionWrapper(Works, 'works')