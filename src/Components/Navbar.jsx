import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('currentuser'));
  const admin = JSON.parse(localStorage.getItem('currentadmin'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logout() {
    localStorage.removeItem('currentuser');
    // Use navigate instead of href for client-side routing
    // navigate('/login');
  }

  function logouts() {
    localStorage.removeItem('currentadmin');
    // Use navigate instead of href for client-side routing
    // navigate('/signin');
  }

  const isHomeScreen = window.location.pathname === '/home';
  const isAdminscreen = window.location.pathname === '/admin';
  const isLoginscreen = window.location.pathname === '/signin';
  const isBookingscreen = window.location.pathname.includes('/book');
  const isProfilescreen = window.location.pathname === '/profile';
  const isPanelscreen = window.location.pathname === '/panel';

  return (
    <div>
      <nav>
        <div>
          <Link to={isPanelscreen ? '/panel' : isBookingscreen || isProfilescreen || isHomeScreen ? '/home' : '/'}>
            Emirates
          </Link>
        </div>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {isAdminscreen || isLoginscreen ? (
            <MenuItem component={Link} to="/signin" onClick={handleClose}>
              Login
            </MenuItem>
          ) : user && (isHomeScreen || isBookingscreen || isProfilescreen) ? (
            <>
              <MenuItem>
                <Button
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                  endIcon={<AccountCircleIcon />}
                >
                  {user.name}
                </Button>
              </MenuItem>
              <MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => { logout(); handleClose(); }}>Logout</MenuItem>
              </MenuItem>
            </>
          ) : admin && isPanelscreen ? (
            <>
              <MenuItem>
                <Button
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                  endIcon={<AccountCircleIcon />}
                >
                  {admin.name}
                </Button>
              </MenuItem>
              <MenuItem onClick={() => { logouts(); handleClose(); }}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem component={Link} to="/register" onClick={handleClose}>
                Register
              </MenuItem>
              <MenuItem component={Link} to="/login" onClick={handleClose}>
                Login
              </MenuItem>
            </>
          )}
        </Menu>
      </nav>
    </div>
  );
};

export default Navbar;
