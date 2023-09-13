import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyle } from './components/styles/global'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
