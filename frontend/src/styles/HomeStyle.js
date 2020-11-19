import { makeStyles } from '@material-ui/core'

const HomeStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    background: "linear-gradient(359.72deg, #1b9ce2 -17.64%, rgba(27, 156, 226, 0.62) -17.63%, #e1e5e6 94.99%), #0067ac",
    height: "100vh"
  },
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "none",
    background: "transparent"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: theme.spacing(30)
  },
  title: {
    color: "white",
    fontWeight: "bolder"
  },
  subtitle: {
    color: "white",
    fontWeight: 200,
    margin: "10px 0 50px 0"
  },
  loginButton: {
    color: "#6cb1d8",
    borderColor: "#6cb1d8",
    margin: "10px 15px",
  },
  registerButton: {
    background: "#094f7e",
    color: "#6cb1d8",
    borderColor: "#094f7e",
    margin: "10px 15px",
    '&:hover': {
      borderColor: '#6cb1d8'
    }
  },
  goToSurveyButton: {
    borderRadius: "30px",
    padding: "10px 50px",
    color: "black",
    fontWeight: "500",
  }
}));

export default HomeStyle