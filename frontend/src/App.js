import React from 'react'

import { ThemeProvider } from '@material-ui/core'
import GlobalTheme from './styles/GlobalTheme'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/routes'



function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
