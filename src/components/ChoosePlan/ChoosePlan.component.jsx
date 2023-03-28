import { Switch } from '@mui/material'
import stackFront from '@assets/icons/stackFrontIcon.png'
import uniconFront from '@assets/icons/uniconFrontIcon.png'
import virtuosoFront from '@assets/icons/virtuosoFrontIcon.png'

export const ChoosePlan = () => {

  const plans = [
    {
      title: "Free",
      description: "Free software with limited features, for individual accounts.",
      icon: stackFront,
      price: {
        monthly: 0,
        anually: 0,
      },
      includedFeatures: [
        "Ut enim ad", "Minim veniam",
      ],
      notIncludedFeatures: [
        "Enim ad minim", "Ouis nostrud", "Nisi ut aliquip", "Ad veniam"
      ]
    },
    {
      title: "Pro",
      description: "Professional experience with all but team features included.",
      icon: stackFront,
      price: {
        monthly: 9,
        anually: 35,
      },
      includedFeatures: [
        "Ut enim ad", "Minim veniam", "Enim ad minim", "Ouis nostrud"
      ],
      notIncludedFeatures: [
         "Nisi ut aliquip", "Ad veniam"
      ]
    },
    {
      title: "Pro",
      description: "Professional experience with all but team features included.",
      icon: stackFront,
      price: {
        monthly: 9,
        anually: 35,
      },
      includedFeatures: [
        "Ut enim ad", "Minim veniam", "Enim ad minim", "Ouis nostrud"
      ],
      notIncludedFeatures: [
         "Nisi ut aliquip", "Ad veniam"
      ]
    }
  ]

  return (
    <section className='w-full flex flex-col items-center gap-4 text-center py-10 px-4 lg:pt-32 lg:gap-8'>
      <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl'>Choose Your Plan</h2>
      <p className='md:text-lg lg:text-2xl'>Get the plan that fits your needs</p>
      <div className='flex items-center justify-center gap-2'>
        <p>Monthly</p>
        <Switch color='green' className='text-primary-green'  />
        <p>Annually</p>
      </div>
    </section>
  )
}
