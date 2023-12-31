import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

const FeedbackCard = ({ index, testimonial, name, designation, company }) => {
  return (
    <motion.div 
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className='bg-[#b22222] p-10 rounded-3xl xs:w-[600px] w-full'
    >
      <p className='text-white font-black text-[48px]'></p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'> " {testimonial} "</p>
          <div className='mt-7 flex justify-between items-center gap-1'>
            <div className='flex-2 flex flex-col'>
              <p className='text-white font-medium text-[16px]'>
                - {name}
              </p>
              <p className='mt-1 text-secondary text-[12px]'>
                {designation} of {company}
              </p>
            </div>
          </div>
      </div>
    </motion.div>
  )
}
const References = () => {
  return (
    <div className='mt-12 bg-[#333333] rounded-[20px]' >
      <div className={`${styles.padding} rounded-2xl min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>References</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
            />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(References, "")