import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { Setting2, LogoutCurve, Profile } from 'iconsax-react'
import UserInfo from './UserInfo'
import { useAuth } from '../../contexts/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import baseUrl from '../../utils/Util'
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  //@ts-ignore
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="پروفایل من">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            minWidth: '180px',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <UserInfo
            userInfo={{
              //@ts-ignore 
              firstName: user && user.userName,
               //@ts-ignore
               lastName: user && user.lastName,
               //@ts-ignore
               name: user && user.userName,
            }}
          />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Profile color="#d9e3f0" />
          </ListItemIcon>
          پروفایل من
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Setting2 color="#d9e3f0" />
          </ListItemIcon>
          تنظیمات
        </MenuItem>
        <MenuItem
          onClick={() => {
            //@ts-ignore
            signOut()
            navigate(`${baseUrl}`)
          }}
        >
          <ListItemIcon>
            <LogoutCurve color="#d9e3f0" variant="Outline" />
          </ListItemIcon>
          خروج
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
