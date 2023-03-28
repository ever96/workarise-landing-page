import React from 'react'
import Hero from '@assets/images/Hero.png'
import Trace from '@assets/images/TraceImage.png'
import Unison from '@assets/images/UnisonImage.png'

export const HeroImage = () => {
  return (
    <picture className='relative'>
      <img className="w-full max-w-[500px] md:max-w-[700px] lg:max-w-[1000px]" src={Hero} alt="Workarise Demo Image" />

      <img className="absolute top-[-5px] right-0 w-full max-w-[80px] md:max-w-[120px] lg:max-w-[140px]" src={Trace} />
      <img className="absolute bottom-[-5px] left-0 w-full max-w-[100px] md:max-w-[120px] lg:max-w-[140px]" src={Unison} />
    </picture>
  )
}
