import { makeStyles } from '@material-ui/core'

const HomeStyle = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    background: "linear-gradient(359.72deg, #1b9ce2 -17.64%, rgba(27, 156, 226, 0.62) -17.63%, rgba(255, 255, 255, 0) 94.99%), #0067ac",
    height: "100vh"
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
    marginBottom: "50px"
  },
}));

export default HomeStyle