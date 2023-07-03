import { BallCanvas } from './canvas/'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        <div className='w-25 h-25' key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech