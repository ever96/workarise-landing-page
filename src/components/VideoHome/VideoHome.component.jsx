import testVideo from '@assets/videos/testVideo.mp4'

export const VideoHome = () => {
  return (
    <section className='w-full flex flex-col items-center gap-4 text-center py-10 px-4 lg:pt-32 lg:gap-8'>
      <h2 className='text-2xl font-extrabold md:text-3xl lg:text-6xl'>Ready To Manage Your Business?</h2>
      <p className='text-xl font-bold pb-5 md:text-2xl lg:text-4xl'>Let us Help!</p>
      <video src={testVideo}  controls />
    </section>
  )
}
