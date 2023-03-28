import { NavLink } from "react-router-dom"
import { menuItems } from "./menuItems"

export const DesktopMenu = () => {
  return (
    <ul className="hidden md:flex gap-3">
      {menuItems.map((item, index) => (
        <li className="flex items-center justify-center" key={`${item.name}-${index}`}>
          <NavLink
            className={({isActive}) => `min-w-[96px] h-11 rounded-3xl p-2 text-center font-bold ${isActive ? "bg-primary-black text-white" : ""}` } 
            to={item.path} 
            end
            target={item.outside ? "_blank" : ""}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
