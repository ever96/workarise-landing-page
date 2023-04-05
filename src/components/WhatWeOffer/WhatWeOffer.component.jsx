import RuleIcon from '@mui/icons-material/Rule';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import InboxIcon from '@mui/icons-material/Inbox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const WhatWeOffer = () => {

  const offers = [
    {
      title: "Manage Tasks",
      description: "Manage your team's tasks through our task management page.",
      icon: <RuleIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Manage Tasks Icon"
    },
    {
      title: "Instant Messaging",
      description: "Be able to message your team whenever in a single click.",
      icon: <TextsmsIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Instant Messaging Icon"
    },
    {
      title: "Manage Your Team",
      description: "Keep track of team members and groups.",
      icon: <PeopleAltIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Manage your Team Icon"
    },
    {
      title: "Manage Projects",
      description: "Stay up to date your project's timeline.",
      icon: <AppsIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Manage Projects Icon"
    },
    {
      title: "Communication",
      description: "Be able to contact all clients, employers, and employees.",
      icon: <InboxIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Communication Icon"
    },
    {
      title: "Track It All",
      description: "Keep track of projects, tasks, and meetings with our calendar.",
      icon: <CalendarMonthIcon sx={{color: "green.main", fontSize: "3rem"}} />,
      alt: "Track It All Icon",
    },
  ]

  return (
    <section className='w-full flex flex-col items-center pt-12 gap-4 text-center lg:gap-6 lg:pt-20'>
      <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl'>
        What We <span className="lg:ml-2.5" style={{borderBottom: "4px solid", borderBottomColor: "#75E5B4"}}>Offer</span>
      </h2>
      <p className="max-w-[800px] text-lg font-medium px-4 md:text-xl lg:text-2xl">Workarise offers you an easy and simple way to manage your business. You will be able to secure your team and tasks all in one platform.</p>
      <ul className="w-full flex items-center justify-center px-5 py-10 bg-[#F6F6F680] flex-wrap gap-8 lg:mt-14 lg:gap-20 lg:py-24">
        {offers.map((offer, index) => (
          <li key={`${offer.title}-${index}`} className='flex gap-4'>
            <div className='h-[80px] p-4 rounded-full bg-primary-black'>
              {offer.icon}
            </div>
            <div className='flex flex-col text-left'>
              <p className='text-lg font-bold md:text-xl lg:text-3xl'>{offer.title}</p>
              <p className="max-w-[255px] max-h-[56px] font-normal lg:text-lg lg:max-w-[270px]">{offer.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
