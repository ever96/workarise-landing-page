import TraceOn from '@assets/images/traceOnPhrase.png'
import TraceOff from '@assets/images/traceOffPhrase.png'
import joseFace from '@assets/images/joseFace.png'

export const CEOPhrase = () => {
  return (
    <section className="w-full flex flex-col py-12 px-3 gap-3 lg:py-20 lg:w-[80%] lg:mx-auto">
      <img className='max-w-[80px] md:max-w-[120px] lg:max-w-[160px]' src={TraceOn} alt="" />
      <div className='flex flex-col items-center gap-5'>
        <img className='max-w-[60px] md:max-w-[80px]' src={joseFace} alt="Jose Face" />
        <p className='max-w-[480px] text-xl font-medium text-center lg:text-4xl lg:max-w-[750px]'>“<span className='font-extrabold'>Workarise</span> is dedicated to the <span className='font-extrabold'>highest quality</span>  of project management software delivered with <span className='font-extrabold'>Authority</span>, <span className='font-extrabold'>Boldness</span>, and <span className='font-extrabold'>Strength</span>.”</p>
        <p className='text-lg text-center font-medium lg:text-2xl'><span className='font-extrabold'>José Bonilla -</span> Workarise Founder and CEO</p>
      </div>
      <div className='flex justify-end pt-8'> 
        <img className='max-w-[80px] md:max-w-[120px] lg:max-w-[160px]' src={TraceOff} alt="" />

      </div>
    </section>
  )
}
