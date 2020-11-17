import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  Box,
  IconButton
} from '@material-ui/core'

import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'

import LoginAndRegisterStyle from '../../styles/LoginAndRegisterStyle';

function Register() {
  // Hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  // methods
  const changeEmail = (e) => setEmail(e.target.value)
  const changePassword = (e) => setPassword(e.target.value)
  const changeName = (e) => setName(e.target.value)

  const classes = LoginAndRegisterStyle();

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
            Register
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="email"
              autoFocus
              value={name}
              onChange={changeName}
            />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
          </Button>

            <Link to="login" style={{ textDecoration: "none" }}>
              <Button fullWidth>
                Login
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


export default Register;