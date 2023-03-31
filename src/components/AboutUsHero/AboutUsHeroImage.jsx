import Ever from '@assets/images/everPhoto.png'
import Jose from '@assets/images/josePhoto.png'
import ArrowLeft from '@assets/icons/arrowLeft.svg'
import ArrowRight from '@assets/icons/arrowRight.svg'



export const AboutUsHeroImage = () => {
  return (
    <div className='w-full flex justify-center items-center gap-4'>
      <picture className='relative'>
        <img className="w-full min-h-[150px] max-w-[500px] md:max-w-[600px] xl:max-w-[700px]" src={Ever} alt="Ever Photo" />
        <img className='w-[15%] absolute top-4 right-2' src={ArrowLeft} alt="Arrow Left" />
        <p className='absolute top-[80px] right-0 text-xs italic md:text-base md:top-[115px] lg:top-36 lg:text-2xl '>Ever Oliver</p>
      </picture>
      <picture className='relative'>
        <img className="w-full min-h-[150px] max-w-[500px] pt-1 md:max-w-[600px] xl:max-w-[700px]" src={Jose} alt="Jose Photo" />
        <img className='w-[15%] absolute top-3 left-4' src={ArrowRight} alt="Arrow Right" />
        <p className='absolute top-[77.5px] left-1 text-xs italic md:text-base md:top-[117px]  lg:top-[146px] lg:text-2xl'>Jose Bonilla</p>
      </picture>

    </div>
  )
}
