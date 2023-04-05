import Ever from '@assets/images/everPhoto.png'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BalanceIcon from '@mui/icons-material/Balance';
import ShieldIcon from '@mui/icons-material/Shield';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleIcon from '@mui/icons-material/People';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export const OurValues = () => {

  const values = [
    {
      title: "Improvement",
      description: "We are actively seeking to improve our product and our company.",
      icon: <TrendingUpIcon />
    },
    {
      title: "Balance",
      description: "We believe in a balanced work and home life to be the best versions of ourself.",
      icon: <BalanceIcon />
    },
    {
      title: "Improvement",
      description: "We are always on the look-out for inprovement in our product and company.",
      icon: <ShieldIcon />
    },
    {
      title: "Innovation",
      description: "Here at Workarise, we are actively building and designing the #1 product for users like you.",
      icon: <LightbulbIcon />
    },
    {
      title: "Teamwork",
      description: "We take the phrase, “teamwork makes the dream work” very seriously.",
      icon: <PeopleIcon />
    },
    {
      title: "Fun",
      description: "We seek to have fun within our work and company to produce the best results.",
      icon: <SentimentVerySatisfiedIcon />
    },
  ]

  return (
    <section className="w-full flex flex-col items-center gap-4 px-3 pt-16 pb-10 md:px-7 lg:px-10 md:items-center md:flex-row-reverse md:justify-around lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-10 lg:gap-14">
        <h2 className="text-2xl font-extrabold text-center md:text-3xl lg:text-6xl lg:text-left">
          Our 
          <span style={{
            marginLeft: "10px",
            borderBottom: "4px solid",
            borderBottomColor: "#75E5B4"}}>Values
          </span> 
        </h2>
        <ul className='flex items-center justify-center flex-wrap gap-9 lg:gap-10 max-w-[800px]'>
          {values.map((value, index) => (
            <li key={`${value.title}/${index}`} className='flex flex-col items-center gap-4'>
              <div className='w-full flex flex-col items-center gap-2 lg:flex-row'>
                {value.icon}
                <p className='text-lg font-bold lg:text-3xl'>{value.title}</p>

              </div>
              <p className='max-w-[300px] text-center font-medium lg:text-xl lg:text-left lg:pl-[48.5px] lg:max-w-[320px]'>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden px-3 pt-3 rounded-3xl lg:block' style={{background: "rgba(28, 204, 127, 0.05)"}}>
        <img className='w-full max-w-[200px] pt-1 md:max-w-[300px] xl:max-w-[700px]' src={Ever} alt="Ever Photo" />
      </div>
    </section>
  )
}
