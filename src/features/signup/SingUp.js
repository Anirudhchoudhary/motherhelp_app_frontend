import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// request stuff
import {requests, makeRequest} from "../../requests";
import { useDispatch } from 'react-redux';
import { setmessage } from '../customalert/customalertSlice';
import { setJwtToken } from '../user/userSlice';


const theme = createTheme();

export default function SignUpForm() {
  const [passwordnotmatch, setpasswordnotmatch] = React.useState(false);
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();

    for(let i=0; i < event.target.length; i++){
      var target_value = event.target[i].value;
      var target_name = event.target[i].name;

      if (target_value !== undefined){
        data.append(target_name, target_value);
      }
    }

    var password1 = data.get('password');
    var passowrd2 = data.get('password_confirm');

    if (password1.localeCompare(passowrd2)){
      setpasswordnotmatch({passwordnotmatch: true})
      dispatch(setmessage({
        'message': "Password is not matching",
        'severity': 'error'
      }))

      return
    }

    let username = data.get("username");
    let email = data.get("email")
    let password = password1;
    requests.post(
      makeRequest["createUser"],{
        "username": username,
        "email": email,
        "password": password
      }).then((response) => {
      dispatch(setJwtToken(response.data))
      // close signup pop up and redirect to home screen
      window.location.assign("/")
    }).catch((error) => {
      console.log(error)
      dispatch(setmessage({
        'message': "A user with same email",
        'severity': 'error'
      }))
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={() => setpasswordnotmatch({passwordnotmatch: false})}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={() => setpasswordnotmatch({passwordnotmatch: false})}
              name="password_confirm"
              label="password confirm"
              type="password"
              id="password_confirm"
              autoComplete="current-password-confirm"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                {""}
              </Grid>
              <Grid item>
                <Link href="login" variant="body2">
                  {"Have account? Log In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
