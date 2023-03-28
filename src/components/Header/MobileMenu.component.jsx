import { Box, Divider, Drawer, IconButton, List, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { sxStyles } from './Header.styles'
import { menuItems } from './menuItems';
import { NavLink } from 'react-router-dom';

export const MobileMenu = ({open, onClose}) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box 
        sx={sxStyles.mobileMenu} 
        onClick={onClose} 
        onKeyDown={onClose}
      >
        <Stack sx={{width: "100%", justifyContent: "space-between",alignItems: "center", flexDirection: "row"}}>
          <Typography variant="h2" fontSize="1.5rem">Workarise Menu</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <List sx={{width: "100%", display: "flex", flexDirection: "column", gap: "20px",}}>
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
        </List>
      </Box>
    </Drawer>
  )
}
