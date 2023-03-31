import Hero from '@assets/images/Hero.png'
import Trace from '@assets/images/TraceImage.png'
import Unison from '@assets/images/UnisonImage.png'
import Calendar from '@assets/images/CalendarHero.png'
import Projects from '@assets/images/ProjectsHero.png'
import Tasks from '@assets/images/TasksHero.png'
import Team from '@assets/images/TeamHero.png'
import './HomeHeroImage.css'


export const HomeHeroImage = () => {
  return (
    <picture className='relative'>
      <img className="w-full max-w-[500px] md:max-w-[600px] xl:max-w-[700px]" src={Hero} alt="Workarise Demo Image" />

      <img className="trace" src={Trace} />
      <img className="unison" src={Unison} />
      <img className="projects" src={Projects} />
      <img className="calendar" src={Calendar} />
      <img className="team" src={Team} />
      <img className="tasks" src={Tasks} />
    </picture>
  )
}
