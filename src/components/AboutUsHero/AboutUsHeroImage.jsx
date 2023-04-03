import Ever from '@assets/images/everPhoto.png'
import Jose from '@assets/images/josePhoto.png'
import ArrowLeft from '@assets/icons/arrowLeft.svg'
import ArrowRight from '@assets/icons/arrowRight.svg'



export const AboutUsHeroImage = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4'>
      <picture className='relative'>
          <img className="w-full min-h-[150px] max-w-[500px] md:max-w-[600px] xl:max-w-[600px]" src={Ever} alt="Ever Photo" />
          <div className='w-full h-full flex flex-col gap-3 items-end absolute top-[2.45px]'>
            <img className='w-[15%]' src={ArrowLeft} alt="Arrow Left" />
            <p className='text-xs italic md:text-base lg:text-2xl'>Ever Oliver</p>
          </div>
      </picture>
      <picture className='relative'>
        <img className="w-full min-h-[150px] max-w-[500px] pt-1 md:max-w-[600px] xl:max-w-[600px]" src={Jose} alt="Jose Photo" />
        <div className='w-full h-full flex flex-col gap-3 absolute top-0'>
          <img className='w-[15%]' src={ArrowRight} alt="Arrow Right" />
          <p className='text-xs italic md:text-base  lg:text-2xl'>Jose Bonilla</p>

        </div>
      </picture>

    </div>
  )
}
