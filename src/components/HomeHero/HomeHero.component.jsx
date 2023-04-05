import React from 'react'
import { NavLink } from 'react-router-dom'
import { HomeHeroImage } from './HomeHeroImage.component'

export const HomeHero = () => {
  return (
    <section 
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(28,204,127,1) 180%)"
      }} 
      className='w-full flex flex-col items-center py-12 px-2 gap-4 text-center lg:min-h-[1050px]'
    >
      <h1 className='text-2xl font-extrabold leading-9 md:text-3xl lg:text-6xl'>The Easisest Project <br/> Management Software</h1>
      <div className='flex flex-col items-center gap-4 lg:flex-col-reverse'>
        <HomeHeroImage />
        <div className='flex flex-col items-center gap-4'>
          <p className='text-lg font-medium py-2 md:text-xl lg:text-2xl'>We'll change the way you run your business.</p>
          <NavLink 
            to="https://workarise.com/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-[max-content] text-lg font-extrabold bg-primary-black text-white rounded-xl py-[6px] px-6 md:text-xl lg:text-3xl lg:px-12 hover:opacity-70 transition-opacity" 
          >
            Sign Up Now
          </NavLink>
        </div>
      </div>
    </section>
  )
}
