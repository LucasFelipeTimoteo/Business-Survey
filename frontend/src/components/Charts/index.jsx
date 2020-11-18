import React from 'react'

import {
  Container,
  IconButton,
  Typography
} from '@material-ui/core';

import { Home as HomeIcon } from '@material-ui/icons'

import ChartsStyle from '../../styles/ChartsStyle';

function Charts() {
  const classes = ChartsStyle()

  return (
    <>
      <IconButton>
        <HomeIcon size="large" color="primary" />
      </IconButton>

      <Container
        style={{ background: "whitesmoke" }}
        maxWidth="sm"
      >
        {/* chart 1 */}
        <div className={classes.questionChartContainer}>
          <Typography variant="h5" component="h3">
            Quantas pessoas tem na sua empresa?
          </Typography>
          <div id="chart"></div>
        </div>
        {/* chart 2 */}
        <div className={classes.questionChartContainer}>
          <Typography variant="h5" component="h3">
            Quantas pessoas tem sua equipe?
        </Typography>
        <div id="chart"></div>
        </div>
        {/* chart 3 */}
        <div className={classes.questionChartContainer}>
          <Typography variant="h5" component="h3">
            qual a sua satisfação com a empresa?
        </Typography>
        <div id="chart"></div>
        </div>
        {/* chart 4 */}
        <div className={classes.questionChartContainer}>
          <Typography variant="h5" component="h3">
            como você avalia seu chefe?
        </Typography>
        <div id="chart"></div>
        </div>



      </Container>
    </>
  );
}

export default Charts;