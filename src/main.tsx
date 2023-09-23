import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CountProvider } from './components/context/CountContext.tsx'
import { CoffeCardProvider } from './components/context/CoffeeCardContext.tsx'
import { AddToCarProvider } from './pages/@Home/components/Body/context/AddToCarContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoffeCardProvider>
      <CountProvider>
        <AddToCarProvider>
          <App />
        </AddToCarProvider>
      </CountProvider>
    </CoffeCardProvider>
  </React.StrictMode>,
)
