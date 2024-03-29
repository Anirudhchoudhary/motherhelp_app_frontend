import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import "./homebanner.css";

export default function Banner() {
  return (
    <Box sx={{ width: '100%', marginTop: 1, margin: 5, bgcolor: 'background.paper' }}>
        <Grid container spacing={3} item>
            <Grid xs={6} item>
                <div className="banner_details">
                    <img src={process.env.PUBLIC_URL + '/logo512.png'} alt="Home logo"/>
                    <p>
                    we help mother to delivered there tasty food to with every one. share your 
                    specila reciepe and show you magic to everyone. 
                    </p>
                    <Button variant="contained" color="success">
                        Join Us Now
                    </Button>
                </div>
            </Grid>
            <Grid xs={6} item>
                <img src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} alt="Mother home  banner" loading="lazy" />
            </Grid>
        </Grid>
    </Box>
  )
}
