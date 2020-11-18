import { makeStyles } from '@material-ui/core'

const SurveyStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    
    paddingLeft: "5vw",
    minHeight: "100vh",
  },

  question: {
    marginBottom: "12px"
  }
}));

export default SurveyStyle