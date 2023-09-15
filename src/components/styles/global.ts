import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
}

body{
  max-width: 70rem;
  margin: auto;
  color: ${(props) => props.theme['base-text']};
}

html{
  font-family: 'Roboto', sans-serif;
}

`
