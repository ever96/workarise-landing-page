import { NavLink } from 'react-router-dom';
import { AboutUsHeroImage } from './AboutUsHeroImage';

export const AboutUsHero = () => {
  return (
    <section
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(28,204,127,1) 180%)',
      }}
      className='w-full flex flex-col items-center pt-12 pb-12 px-2 gap-4 lg:gap-10 lg:pb-0'>
      <h1 className='text-2xl font-extrabold text-center leading-9 md:text-3xl lg:text-6xl'>
        The Smarter Way to <br /> Manage your Business.
      </h1>
      <div className='flex flex-col items-center gap-4 lg:flex-col-reverse'>
        <AboutUsHeroImage />
        <div className='flex flex-col items-center gap-4'>
          <div className='w-full flex gap-4 items-center justify-center'>
            <NavLink
              to='/pricing'
              className='w-[max-content] text-lg font-extrabold bg-white text-primary-black rounded-xl py-[6px] px-6 md:text-xl lg:text-3xl lg:px-12 hover:opacity-70 transition-opacity'>
              Join Us
            </NavLink>
            <NavLink
              to='https://workarise.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-[max-content] text-lg font-extrabold bg-primary-black text-white rounded-xl py-[6px] px-6 md:text-xl lg:text-3xl lg:px-12 hover:opacity-70 transition-opacity'>
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
