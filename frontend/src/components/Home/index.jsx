import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  CssBaseline,
  Typography,
  Button
} from '@material-ui/core';

import {
  Person as PersonIcon,
  MeetingRoom as MeettingRoomIcon
} from '@material-ui/icons'

import HomeStyle from '../../styles/HomeStyle'

function Home() {
  const classes = HomeStyle()

  return (
    <header className={classes.header}>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm" >

        <Typography 
          variant="h3" 
          component="h1" 
          className={classes.title}
        >
          Business Survey
        </Typography>
        <Typography
          variant="subtitle1" 
          className={classes.subtitle}
        >
          Please, Login or Register to access the survey and charts
        </Typography>

        <Link to="register" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<MeettingRoomIcon />}
            size="medium"
            variant="contained"
            color="secondary"
            style={{ marginTop: 15 }}
          >
            register
          </Button>
        </Link>

        <Link to="login" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<PersonIcon />}
            size="medium"
            variant="contained"
            color="primary"
            style={{ marginTop: 15 }}
          >
            Login
          </Button>
        </Link>
      </Container>
    </header>
  );
}

export default Home;