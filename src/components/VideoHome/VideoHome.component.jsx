export const VideoHome = () => {
  return (
    <section className='w-full flex flex-col items-center gap-4 text-center py-10 px-4 lg:pt-32 lg:gap-8'>
      <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl'>Ready To Manage Your Business?</h2>
      <p className='text-xl font-bold pb-5 md:text-2xl lg:text-4xl'>Let us Help!</p>
      <iframe className="w-[90vw] h-[40vh] md:w-[600px] md:h-[50vh] lg:w-[850px] lg:h-[70vh] xl:w-[1200px] xl:h-[90vh]" src="https://www.youtube.com/embed/ChaWggL8I40?vq=hd720&rel=0" title="Welcome to Workarise" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </section>
  )
}
