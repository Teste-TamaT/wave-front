import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: ,
      main: '#284D7A',
      // dark:
    },

    secondary: {
      // light: ,
      main: '#20B8AA',
      // dark: ,
    },

    success: {
      // light: ,
      main: '#56F0B9',
      // dark: ,
    },

    text: {
      secondary: '#E9EBED'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
