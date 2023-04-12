import { useState } from 'react';
import { Switch } from '@mui/material'
import stackFront from '@assets/icons/stackFrontIcon.png'
import unisonFront from '@assets/icons/unisonFrontIcon.png'
import virtuosoFront from '@assets/icons/virtuosoFrontIcon.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const ChoosePlan = ({section}) => {

  const [monthly, setMonthly] = useState(false)

  const featureIncludedIcon = <CheckCircleOutlineIcon sx={{color: "green.main", fontSize: "1.3rem"}} />

  const featureNotIncludedIcon = <CheckCircleOutlineIcon sx={{color: "#55555540", fontSize: "1.3rem"}} />

  const plans = [
    {
      title: "Free",
      description: "Free software with limited features, for individual accounts.",
      icon: stackFront,
      alt: "Stack Front Icon",
      price: {
        monthly: 0,
        annually: 0,
      },
      includedFeatures: [
        "Create Tasks", "Until 3 Team size", "Gantt Chart", "Notifications", "Organizations"
      ],
      notIncludedFeatures: [
        "Meetings", "Personal Support", "Unlimited Tasks", "Unlimited guests"
      ]
    },
    {
      title: "Pro",
      description: "Professional experience with all but team features included.",
      icon: unisonFront,
      alt: "Unison Front Icon",
      price: {
        monthly: 6.99,
        annually: 5.25,
      },
      includedFeatures: [
        "Free Plan Features", "Teams with more than 3 users", "Meetings", "Personal Support", "Unlimited Tasks", "Unlimited Guests"
      ],
      notIncludedFeatures: [
         "Team Plan Features"
      ]
    },
    {
      title: "Team",
      description: "Everything included from Free and Pro with Team features.",
      icon: virtuosoFront,
      alt: "Virtuoso Front Icon",
      price: {
        monthly: 9.99,
        annually: 8.25,
      },
      includedFeatures: [
        "Coming soon", 
      ],
      notIncludedFeatures: [],
    }
  ]

  return (
    <section className={`w-full flex flex-col items-center gap-4 px-4 ${section === "home" ? 'py-10 lg:pt-32' : 'pt-6 lg:pt-10'}  lg:gap-8`}>
      {section === "home" && (
        <>
          <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl'>Choose Your Plan</h2>
          <p className='font-bold md:text-lg lg:text-2xl'>Get the plan that fits your needs</p>
        </>
      )}
      <div className='flex items-center justify-center gap-2'>
        <p className='font-bold lg:text-xl'>Monthly</p>
        <Switch onChange={e => setMonthly(e.target.checked)} color='green' className='text-primary-green'  />
        <p className='font-bold lg:text-xl'>Annually</p>
      </div>
      <div className='w-full flex items-center gap-5 snap-x overflow-x-auto pt-3 pb-10 px-5 overflow-y-hidden lg:justify-evenly'>
        {plans.map((plan, index) => (
          <article key={`${plan.title}/${index}`} className={`min-w-[288px] max-w-[310px] min-h-[684px] ${section === "comparePlans" ? 'bg-white' : ''} flex flex-col gap-5 overflow-hidden shrink-0 shadow-md rounded-2xl py-10 px-8 lg:gap-7 lg:max-w-[330px] lg:min-h-[756px]`}>
            <div className='flex gap-4'>
              <img src={plan.icon} alt={plan.alt} />
              <h3 className='text-2xl font-bold md:text-3xl lg:text-4xl'>{plan.title}</h3>
            </div>
            <p className='font-medium leading-5 text-gray-600'>{plan.description}</p>
            <div className='flex items-end gap-1'>
              <span className='text-5xl font-semibold lg:text-7xl'>${monthly ? plan.price.annually : plan.price.monthly}</span>
              <p className='font-medium text-lg text-gray-500'>/{!monthly ? "monthly" : "annually"}</p>
            </div>
            <p className='font-bold text-lg'>{plan.title} includes</p>
            <ul className='flex flex-col gap-3'>
              {plan.includedFeatures.map((feature, index) => (
                <li key={`${feature}/${index}`} className='flex items-center gap-2'>
                  {featureIncludedIcon}
                  <p className='font-medium'>{feature}</p>
                </li>
              ))}
              {plan.notIncludedFeatures && plan.notIncludedFeatures.map((feature, index) => (
                <li key={`${feature}/${index}`} className='flex items-center gap-2'>
                  {featureNotIncludedIcon}
                  <p className='font-medium text-[#55555540]'>{feature}</p>
                </li>
              ))}              
            </ul>
            <button className='w-[60%] mx-auto p-2 rounded-xl bg-primary-black  text-white text-lg font-bold lg:w-[90%] lg:text-xl hover:opacity-70 transition-opacity'>Get {plan.title} Plan</button>
          </article>
        ))}
      </div>
    </section>
  )
}
