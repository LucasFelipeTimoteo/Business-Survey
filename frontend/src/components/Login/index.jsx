import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Box,
  Checkbox,
  IconButton
} from '@material-ui/core'

import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

import LoginAndRegisterStyle from '../../styles/LoginAndRegisterStyle';

import api from '../../api'

function Login() {
  // Hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = LoginAndRegisterStyle();

  // methods
  const changeEmail = (e) => setEmail(e.target.value)
  const changePassword = (e) => setPassword(e.target.value)

  // api
  const login = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    const data = new URLSearchParams([...formData])

    api.post('/login', data)
  }

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <IconButton>
          <ArrowBackIcon fontSize="large" color="primary" />
        </IconButton>
      </Link>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Login
        </Typography>
          <form
            className={classes.form}
            onSubmit={login}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={changeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
          </Button>

            <Link to="register" style={{ textDecoration: "none" }}>
              <Button fullWidth>
                Register
            </Button>
            </Link>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </>
  );
}


export default Login;