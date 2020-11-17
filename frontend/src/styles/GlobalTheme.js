import { createMuiTheme } from '@material-ui/core'
import "fontsource-roboto"

const  GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0067ac"
    },
    secondary: {
      main: "rgb(255, 174, 0)"
    }
  },
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
  }
})

export default GlobalTheme