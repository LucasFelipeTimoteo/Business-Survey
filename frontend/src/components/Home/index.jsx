import React from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  CssBaseline,
  Typography,
  Button,
  AppBar
} from '@material-ui/core';

import {
  Person as PersonIcon,
  MeetingRoom as MeettingRoomIcon,
  Equalizer as BarChartIcon
} from '@material-ui/icons'

import HomeStyle from '../../styles/HomeStyle'

function Home() {
  const classes = HomeStyle()

  return (
    <header className={classes.header}>
      <CssBaseline />

      <AppBar className={classes.appBar}>

        <Link to="login" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<PersonIcon />}
            size="small"
            variant="outlined"
            className={classes.loginButton}
          >
            Login
          </Button>
        </Link>

        <Link to="register" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<MeettingRoomIcon />}
            size="small"
            variant="outlined"
            className={classes.registerButton}
          >
            register
          </Button>
        </Link>

      </AppBar>

      <Container className={classes.container} maxWidth="sm" >

        <Typography
          variant="h3"
          component="h1"
          className={classes.title}
        >
          Business Survey
          <BarChartIcon fontSize="large" />
        </Typography>
        <Typography
          variant="subtitle2"
          className={classes.subtitle}
        >
          fill out a survey about your business and have access to charts
        </Typography>

        <Link to="survey" style={{ textDecoration: "none" }}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.goToSurveyButton}
          >
            Go to Survey
        </Button>
        </Link>

      </Container>
    </header>
  );
}

export default Home;