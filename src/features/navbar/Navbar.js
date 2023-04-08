import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SideNavItem from './SideNavItem';

import { Link } from "react-router-dom";
import { authenticateStatus } from '../user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function SideNav(props) {
    return (
        <Box>
            <SwipeableDrawer
                anchor="left"
                open={props.isSideNavOpen}
                onClose={props.setisSideNavOpen()}
            >
            <SideNavItem/>
            </SwipeableDrawer>

        </Box>
    )
}

export default function Navbar() {
  const [isSideNavOpen, setisSideNavOpen] = React.useState(false)
  const islogin = useDispatch(authenticateStatus)

  const toggleSideNav = () => {
    setisSideNavOpen(current => !current);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleSideNav}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>

            <SideNav isSideNavOpen={isSideNavOpen} setisSideNavOpen={toggleSideNav}/>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Motherhelp</Link>
          </Typography>
          {!islogin ? <React.Fragment>
            <Link to="signup"> <Button color="inherit">Sign Up</Button> </Link>
            <Link to="login"> <Button color="inherit">Log In</Button></Link> </React.Fragment>
          : <Link to="profile"> <Button color="inherit">profile</Button></Link>}
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}