import * as React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
  const iconcontainer  ={
    width:'20em',
    textAlign:'center',
    margin: '1em auto auto',
    padding: '1em 0 2em 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
  const iconstyle = {}
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <div style={iconcontainer}>
            {socialMediaIcons.map((item) => (
              <div style={iconstyle} key={item.key}>
                {item.icon}
              </div>
            ))}
          </div>
        </Container>
      </Box>
  );
}

const socialMediaIcons = [
  {
    name: "Instagram",
    key: 1,
    link: "https://www.instagram.com",
    icon: <InstagramIcon/>
  },
  {
    name: "Facebook",
    key: 2,
    link: "https://www.facebook.com",
    icon: <FacebookIcon/>
  },
  {
    name: "twitter",
    key: 3,
    link: "https://www.twiiter.com",
    icon: <TwitterIcon/>
  },
  {
    name: "Pinterest",
    key: 4,
    link: "https://www.facebook.com",
    icon: <PinterestIcon/>
  },
];