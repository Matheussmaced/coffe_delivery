import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CountProvider } from './components/context/CountContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
)
