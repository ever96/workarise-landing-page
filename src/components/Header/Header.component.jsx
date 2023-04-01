import { useEffect, useState } from "react";
import Logo from "@assets/icons/Logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import { DesktopMenu } from "./DesktopMenu.component";
import { MobileMenu } from "./MobileMenu.component";
import useIdentifyDevice from "@hooks/useIdentifyDevice"

export const Header= () => {
  const { device } = useIdentifyDevice()
  const [mobileMenu, setMobileMenu] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenu(false)
  }
  const openMobileMenu = () => {
    setMobileMenu(true)
  }

  useEffect(() => {
    device === "desktop" ? setMobileMenu(false) : ""
  }, [device])

  return (
    <header className='w-full shadow-sm'>
      <nav className='w-full flex justify-between items-center px-5 py-4'>
        <picture>
          <img className="w-[130px] lg:w-[160px]" src={Logo} alt="Workarise Logo" />
        </picture>
        <button 
          onClick={openMobileMenu}
          className="w-auto h-[min-content] md:hidden"
        >
          <MenuIcon sx={{fontSize: "2rem"}} />
        </button>
        {device === "mobile" 
          ? <MobileMenu open={mobileMenu} onClose={closeMobileMenu} />
          : <DesktopMenu />
        }

      </nav>
    </header>
  )
}