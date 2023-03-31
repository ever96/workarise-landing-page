import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PanToolIcon from '@mui/icons-material/PanTool';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const AboutUsWhoWeAre = () => {

  const characteristics = [
    {
      title: 'Passionate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <HandshakeIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
    {
      title: 'Creative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <LightbulbIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
    {
      title: 'Experienced',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <SchoolIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
    {
      title: 'Motivated',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <StarOutlineIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
    {
      title: 'Honest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <PanToolIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
    {
      title: 'Knowledgable',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
      icon: <ImportContactsIcon sx={{fontSize: ["1.5rem", "1.5rem", "2.5rem"]}} />
    },
  ]

  return (
    <section className="w-full flex flex-col items-center py-12 px-3 gap-10 lg:gap-20 lg:py-20">
      <h2 className="text-2xl font-extrabold md:text-3xl lg:text-6xl">
        Who 
        <span style={{
          margin: "0 10px",
          borderBottom: "4px solid",
          borderBottomColor: "#75E5B4"}}>We
        </span> 
        Are
      </h2>
      <ul className='w-full flex items-center justify-center flex-wrap gap-9 lg:w-[85%] lg:mx-auto lg:gap-20'>
        {characteristics.map((characteristic, index) => (
          <li key={`${characteristic.title}/${index}`} className='flex flex-col items-center gap-4'>
            <div className='w-full flex flex-col items-center gap-2 lg:flex-row'>
              {characteristic.icon}
              <p className='text-lg font-bold lg:text-3xl'>{characteristic.title}</p>

            </div>
            <p className='max-w-[300px] text-center font-medium lg:text-xl lg:text-left lg:pl-[48.5px] lg:max-w-[320px]'>{characteristic.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
