import { ThemeProvider } from '@mui/system'
import AppRouting from './routes/AppRouting'
import { theme } from './styles/muiTheme'
import './App.css'
import '@fontsource/barlow'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouting />
    </ThemeProvider>
  )
}

export default App
