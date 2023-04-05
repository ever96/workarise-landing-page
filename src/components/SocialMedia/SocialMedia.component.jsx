import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

export const SocialMedia = () => {

  const socialNetworks = [
    {
      title: "Facebook",
      icon: <FacebookIcon sx={{fontSize: "3.5rem"}} />,
      link: "https://www.facebook.com/Workariseapp"
    },
    {
      title: "Instagram",
      icon: <InstagramIcon sx={{fontSize: "3.5rem"}} />,
      link: "https://www.instagram.com/workarise"
    },
    {
      title: "Twitter",
      icon: <TwitterIcon sx={{fontSize: "3.5rem"}} />,
      link: "https://twitter.com/workarise"
    },
    {
      title: "LinkedIn",
      icon: <LinkedInIcon sx={{fontSize: "3.5rem"}} />,
      link: "https://www.linkedin.com/company/workarise"
    },
  ]

  return (
    <section className='w-full flex flex-col items-center px-3 pb-24 gap-3 text-center'>
      <h1 className="text-2xl font-extrabold md:text-3xl lg:text-6xl">Join us on social media</h1>
      <p className='text-lg font-medium lg:text-2xl'>Be the first one to learn about special promotions, upcoming features, and more!</p>
      <ul className='w-full flex items-center justify-around flex-wrap gap-12 pt-5 lg:justify-center lg:gap-32'>
        {socialNetworks.map((item, index) => (
          <NavLink key={`${item.title}-${index}`} to={item.link} target="_blank" rel="noopener noreferrer" className="min-w-[83px] min-h-[83px] relative bg-[#FFB5004D] rounded-[50%] hover:opacity-70 transition-opacity" >
            <div className='absolute top-8 left-5 flex flex-col items-center text-center lg:left-7'>
              {item.icon}
              <p className='font-medium lg:text-lg'>{item.title}</p>
            </div>
          </NavLink>
        ))}
      </ul>
    </section>
  )
}
