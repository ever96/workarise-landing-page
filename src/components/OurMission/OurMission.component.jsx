import Jose from '@assets/images/josePhoto.png'

export const OurMission = () => {
  return (
    <section className="w-full flex flex-col items-center gap-4 px-3 pb-10 text-center md:items-start md:flex-row md:justify-around">
      <div className="flex flex-col gap-4 items-center lg:gap-10">
        <h2 className="text-2xl font-extrabold md:text-3xl lg:text-6xl">
          Our 
          <span style={{
            margin: "0 10px",
            borderBottom: "4px solid",
            borderBottomColor: "#75E5B4"}}>Mission
          </span> 
        </h2>
        <p className='max-w-[433px] font-medium md:text-left md:text-lg lg:text-2xl lg:max-w-[550px]'>Our mission is to create a high quality project management software that includes task management, instant messaging, and give companies the success they deserve.</p>
        <div className='px-3 pt-3 rounded-3xl md:hidden' style={{background: "rgba(28, 204, 127, 0.05)"}}>
          <img className='w-full max-w-[200px] pt-1 md:max-w-[600px] xl:max-w-[700px]' src={Jose} alt="" />

        </div>
        <p className='max-w-[433px] font-medium md:text-left md:text-lg lg:text-2xl lg:max-w-[550px]'>Workarise strives to deliver authority, boldness, and strength to its users. José Bonilla has always believed management is an important key to propery running a business.</p>
      </div>
      <div className='hidden px-3 pt-3 rounded-3xl md:block' style={{background: "rgba(28, 204, 127, 0.05)"}}>
        <img className='w-full max-w-[200px] pt-1 md:max-w-[300px] xl:max-w-[700px]' src={Jose} alt="" />
      </div>

    </section>
  )
}
