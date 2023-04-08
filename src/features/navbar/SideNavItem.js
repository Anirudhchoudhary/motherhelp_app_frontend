import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CloseIcon from '@mui/icons-material/Close';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useDispatch } from 'react-redux';
import { authenticateStatus } from '../user/userSlice';

const authenticateSideNavList = (
    <React.Fragment>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  )

const unAuthenticateSideNavList = (
  <React.Fragment>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <ContactPageIcon />
        </ListItemIcon>
        <ListItemText primary="Contact us" />
      </ListItemButton>
    </ListItem>
  </React.Fragment>
)
export default function SideNavItem(props) {
  const islogin = useDispatch(authenticateStatus)

  return (
    <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="Motherhelp" />
            </ListItemButton>
          </ListItem>
          {islogin ? authenticateSideNavList: unAuthenticateSideNavList}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
