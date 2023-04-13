import Logo from '@assets/icons/Logo.svg';
import { Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useIdentifyDevice from '@hooks/useIdentifyDevice';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  const { device } = useIdentifyDevice();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='w-full flex flex-col gap-4 py-10 bg-[#F6F6F680]'>
      <section className='w-[85%] flex flex-col justify-start gap-4 mx-auto md:w-[95%] md:flex-row md:justify-around'>
        <div className='flex flex-col gap-4'>
          <picture>
            <img
              className='w-[130px] lg:w-[160px]'
              src={Logo}
              alt='Workarise Logo'
            />
          </picture>
          <p className='font-medium leading-6 lg:text-lg md:max-w-[250px] lg:max-w-[300px]'>
            Get started using Workarise today and we'll change the way you run
            your business.
          </p>
          <NavLink
            to='https://app.workarise.com/'
            target='_blank'
            className='w-[120px]  p-2 rounded-xl bg-primary-black  text-white text-center font-bold lg:text-lg lg:w-[160px] hover:opacity-70 transition-opacity'>
            Get Started
          </NavLink>
        </div>
        <Divider
          flexItem
          orientation={device === 'desktop' ? 'vertical' : 'horizontal'}
        />
        <div className='flex justify-between md:w-[25%]'>
          <ul className='flex flex-col gap-3'>
            <p className='font-bold text-lg lg:text-xl'>Workarise</p>
            <NavLink
              to='/'
              onClick={scrollToTop}
              className='font-medium text-lg lg:text-xl hover:underline'>
              Home
            </NavLink>
            {/* <NavLink
              to='/about-us'
              onClick={scrollToTop}
              className='font-medium text-lg lg:text-xl hover:underline'>
              About
            </NavLink> */}
            <NavLink
              to='/pricing'
              onClick={scrollToTop}
              className='font-medium text-lg lg:text-xl hover:underline'>
              Pricing
            </NavLink>
            <NavLink
              to='/contact'
              onClick={scrollToTop}
              className='font-medium text-lg lg:text-xl hover:underline'>
              Contact
            </NavLink>
          </ul>
          {device === 'desktop' && <Divider flexItem orientation='vertical' />}
          <ul className='flex flex-col gap-3'>
            <p className='font-bold text-lg lg:text-xl'>About Us</p>
            <li className='font-medium text-lg lg:text-xl'>Team</li>
            <li className='font-medium text-lg lg:text-xl'>Product</li>
            <li className='font-medium text-lg lg:text-xl'>Story</li>
            <li className='font-medium text-lg lg:text-xl'>Careers</li>
          </ul>
        </div>
        <Divider
          flexItem
          orientation={device === 'desktop' ? 'vertical' : 'horizontal'}
        />
        <div className='flex justify-between md:w-[30%]'>
          <ul className='flex flex-col gap-3'>
            <p className='font-bold text-lg lg:text-xl'>Legal</p>
            <li className='font-medium text-lg lg:text-xl'>
              Terms & Conditions
            </li>
            <li className='font-medium text-lg lg:text-xl'>Privacy Policy</li>
            <li className='font-medium text-lg lg:text-xl'>Terms of Use</li>
            <li className='font-medium text-lg lg:text-xl'>Support Us</li>
          </ul>
          {device === 'desktop' && <Divider flexItem orientation='vertical' />}
          <ul className='flex flex-col gap-3 pr-4'>
            <p className='font-bold text-lg lg:text-xl'>Socials</p>
            <NavLink
              to='https://www.facebook.com/Workariseapp'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-lg lg:text-xl hover:opacity-50'>
              <FacebookIcon />
            </NavLink>
            <NavLink
              to='https://www.instagram.com/workarise'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-lg lg:text-xl hover:opacity-50'>
              <InstagramIcon />
            </NavLink>
            <NavLink
              to='https://twitter.com/workarise'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-lg lg:text-xl hover:opacity-50'>
              <TwitterIcon />
            </NavLink>
            <NavLink
              to='https://www.linkedin.com/company/workarise'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-lg lg:text-xl hover:opacity-50'>
              <LinkedInIcon />
            </NavLink>
          </ul>
        </div>
      </section>
    </footer>
  );
};
