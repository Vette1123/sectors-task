import '@/styles/global.css'

import React from 'react'
import App from '@/App'
import { ThemeProvider } from '@/providers/theme-provider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Toaster />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
