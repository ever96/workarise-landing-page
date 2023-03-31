import Jose from '@assets/images/josePhoto.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const MeetTheTeam = () => {
  return (
    <section className='w-full flex flex-col px-3 py-5 gap-5 '>
      <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl text-center'>Meet The Team</h2>
      <p className='text-lg font-medium leading-7 text-center'>Meet our creative, strategic, and powerful team.</p>
      <ul className='flex flex-wrap gap-12 justify-center'>
        <li className='flex flex-col items-center gap-3'>
          <div className='px-3 pt-4 bg-[#f6f6f6] max-w-[200px]'>
            <img src={Jose} alt="" />
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>Jose Bonilla</p>
              <p className='font-medium'>Chief Executive Officer</p>
            </div>
            <div className='flex gap-2'>
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
