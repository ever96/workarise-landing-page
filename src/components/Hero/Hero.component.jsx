import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeroImage } from './HeroImage.component'

export const Hero = () => {
  return (
    <section 
      style={{
        background: "rgb(193, 217, 206)",
        background: "linear-gradient(to left,rgb(172, 189, 182) 0%,rgb(172, 205, 190) 0%,rgb(244, 243, 243) 94%)"
      }} 
      className='w-full flex flex-col items-center py-12 px-2 gap-4 text-center lg:min-h-[1050px]'
    >
      <h1 className='text-2xl font-extrabold leading-9 md:text-3xl lg:text-6xl'>The Easisest Project <br/> Management Software</h1>
      <div className='flex flex-col items-center gap-4 lg:flex-col-reverse'>
        <HeroImage />
        <div className='flex flex-col items-center gap-4'>
          <p className='text-lg font-medium py-2 md:text-xl lg:text-2xl'>We'll change the way you run your business.</p>
          <NavLink 
            to="https://workarise.com/" 
            target="_blank" 
            className="w-[max-content] text-lg font-extrabold bg-primary-black text-white rounded-xl py-[6px] px-6 md:text-xl lg:text-3xl lg:px-12" 
            end
          >
            Sign Up Now
          </NavLink>
        </div>
      </div>
    </section>
  )
}
