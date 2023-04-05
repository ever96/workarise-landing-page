import Trace from '@assets/images/TraceImage.png'
import Virtuoso from '@assets/images/VirtuosoImage.png'
import Unison from '@assets/images/UnisonImage.png'

export const HomeWhoWeAre = () => {

  const teamCharacteristics = [
    {
      title: "Start Up",
      description: "We are a startup that specializes in project management software to redefine the word productivity",
      image: Trace,
      altImage: "Trace Image"
    },
    {
      title: "A Creative Team",
      description: "We expect to combine good UX and engineering to deliver the best experience in project management",
      image: Virtuoso,
      altImage: "Virtuoso Image"
    },
    {
      title: "International",
      description: "Our team members are spread across different parts of the world, each with their own cultural backgrounds, experiences, and insights",
      image: Unison,
      altImage: "Unison Image"
    },
  ]

  return (
    <section className="w-full flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl font-extrabold md:text-3xl lg:text-6xl">
        Who 
        <span style={{
          margin: "0 10px",
          borderBottom: "4px solid",
          borderBottomColor: "#75E5B4"}}>We
        </span> 
        Are
      </h2>
      <ul className="w-full flex flex-col items-center justify-center px-5 py-10 gap-8 md:flex-row lg:mt-14 lg:gap-20 lg:px-10 lg:justify-around">
        {teamCharacteristics.map((characteristic, index) => (
          <li key={`${characteristic.title}-${index}`} className='flex flex-col items-center justify-center gap-4 '>
            <img className="w-[70px] min-h-[50px] max-w-[120px]" src={characteristic.image} alt={characteristic.altImage} />
            <p className='text-xl font-bold md:text-2xl lg:text-3xl'>{characteristic.title}</p>
            <p className='max-w-[340px] min-h-[72px] font-medium lg:text-lg'>{characteristic.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
