import React from 'react'
import unison from '@assets/icons/unisonIcon.png'
import virtuoso from '@assets/icons/virtuosoIcon.png'
import stack from '@assets/icons/stackIcon.png'
import Dashboard from '@assets/images/Dashboard.png'
import Tasks from '@assets/images/Tasks.png'
import HomeDashboard from '@assets/images/HomeDashboard.png'

export const MainFeatures = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-2 gap-5 text-center md:text-left md:px-4 lg:py-20 lg:px-8">
      <article className='w-full flex flex-col items-center justify-center gap-4 md:flex-row-reverse'>
        <div className='flex flex-col items-center gap-4'>
          <img className='w-12' src={unison} alt="Unison Icon" />
          <div>
            <p className='text-lg font-bold md:text-xl lg:text-3xl'>Simple Management</p>
            <p className="max-w-[350px] font-normal lg:text-lg">The project management Dashboard offers users a clean and easy to use chart so every team member will be up to date on their latest and upcoming tasks.</p>
          </div>
        </div>
        <img className='w-full max-w-[500px] md:max-w-[550px] lg:max-w-[900px]' src={Dashboard} alt="Workarise Dashboard Demo" />
      </article>
      <article className='w-full flex flex-col items-center justify-center gap-4 md:flex-row'>
        <div className='flex flex-col items-center gap-4'>
          <img className='w-12' src={virtuoso} alt="Virtuoso Icon" />
          <div>
            <p className='text-lg font-bold md:text-xl lg:text-3xl'>Organized Tasks</p>
            <p className="max-w-[350px] font-normal lg:text-lg">The project management Dashboard offers users a clean and easy to use chart so every team member will be up to date on their latest and upcoming tasks.</p>
          </div>
        </div>
        <img className='w-full max-w-[500px] md:max-w-[550px] lg:max-w-[900px]' src={Tasks} alt="Workarise Dashboard Demo" />
      </article>
      <article className='w-full flex flex-col items-center justify-center gap-4 pt-8 md:flex-row-reverse'>
        <div className='flex flex-col items-center gap-4'>
          <img className='w-12' src={stack} alt="Stack Icon" />
          <div>
            <p className='text-lg font-bold md:text-xl lg:text-3xl'>Successful Business</p>
            <p className="max-w-[350px] font-normal lg:text-lg">Our clean Home Dashboard will allow you to easily access all tasks, messages, team members, and the calendar all from the home screen.</p>
          </div>
        </div>
        <img className='w-full max-w-[500px] md:max-w-[550px] lg:max-w-[900px]' src={HomeDashboard} alt="Workarise Home Dashboard Demo" />
      </article>
    </section>
  )
}
