import React, { useState } from 'react';

import {
  Button,
  Container, CssBaseline, NativeSelect, Typography
} from '@material-ui/core'

import SurveyStyle from '../../styles/SurveyStyle';

function Survey() {
  // styles
  const classes = SurveyStyle()

  // questions state hooks
  const [
    how_many_people_have_your_business,
    set_how_many_people_have_your_business
  ] = useState('1-100')

  const [
    how_many_people_are_on_your_team,
    set_how_many_people_are_on_your_team
  ] = useState('1-10')

  const [
    what_is_your_satisfaction_with_the_company,
    set_what_is_your_satisfaction_with_the_company
  ] = useState('neutro')

  const [
    how_do_you_rate_your_boss,
    set_how_do_you_rate_your_boss
  ] = useState('neutro')


  // questions state handlers
  const handle_how_many_people_have_your_business = (e) => {
    set_how_many_people_have_your_business(e.target.value)
  }

  const handle_how_many_people_are_on_your_team = (e) => {
    set_how_many_people_are_on_your_team(e.target.value)
  }

  const handle_what_is_your_satisfaction_with_the_company = (e) => {
    set_what_is_your_satisfaction_with_the_company(e.target.value)
  }

  const handle_how_do_you_rate_your_boss = (e) => {
    set_how_do_you_rate_your_boss(e.target.value)
  }

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <form className={classes.form}>
        {/* question 1 */}
        <div>
          <Typography
            variant="h5"
            component="h3"
            className={classes.question}
          >
            Quantas pessoas tem na sua empresa?</Typography>
          <NativeSelect
            required
            onChange={handle_how_many_people_have_your_business}
            value={how_many_people_have_your_business}
          >
            <option value="1-100">1-100</option>
            <option value="100-500">100-500</option>
            <option value="500-2000">500-2000</option>
            <option value="2000-10000">2000-10000</option>
            <option value="+10000">mais de 10000</option>
          </NativeSelect>

        </div>

        {/* question 2 */}
        <div>
          <Typography
            variant="h5"
            component="h3"
            className={classes.question}
          >
            Quantas pessoas tem na sua equipe?</Typography>
          <NativeSelect
            required
            onChange={handle_how_many_people_are_on_your_team}
            value={how_many_people_are_on_your_team}
          >
            <option value="1-10">1-10</option>
            <option value="10-20">10-20</option>
            <option value="20-80">20-40</option>
            <option value="80-150">40-80</option>
            <option value="+150">mais de 150</option>
          </NativeSelect>
        </div>

        {/* question 3 */}
        <div>
          <Typography
            variant="h5"
            component="h3"
            className={classes.question}
          >
            Qual a sua satisfação com a empresa?</Typography>
          <NativeSelect
            required
            onChange={handle_what_is_your_satisfaction_with_the_company}
            value={what_is_your_satisfaction_with_the_company}
          >
            <option value="pessimo">péssimo</option>
            <option value="ruim">ruim</option>
            <option value="neutro">neutro</option>
            <option value="bom">bom</option>
            <option value="excelente">excelente</option>
          </NativeSelect>
        </div>

        {/* question 4 */}
        <div>
          <Typography
            variant="h5"
            component="h3"
            className={classes.question}
          >
            Como você avalia o seu chefe?</Typography>
          <NativeSelect
            required
            onChange={handle_how_do_you_rate_your_boss}
            value={how_do_you_rate_your_boss}
          >
            <option value="pessimo">péssimo</option>
            <option value="ruim">ruim</option>
            <option value="neutro">neutro</option>
            <option value="bom">bom</option>
            <option value="excelente">excelente</option>
          </NativeSelect>
        </div>

        <Button
          variant="contained"
          color="primary"
          size="large"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Survey;
