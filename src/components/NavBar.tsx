import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  MenuItem,
  Menu,
} from '@mui/material';
import { Pets, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const NavBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            CLINT DEV
          </Typography>
          <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search>
            <InputBase placeholder='Search...' />
          </Search>
          <Icons>
            <Badge badgeContent={4} color='error'>
              <Mail />
            </Badge>
            <Badge badgeContent={2} color='error'>
              <Notifications />
            </Badge>
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://images.pexels.com/photos/7446143/pexels-photo-7446143.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              onClick={(e) => setIsOpen(true)}
            />
            <Typography variant='h6'>John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={isOpen}
          onClose={(e) => setIsOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default NavBar;
