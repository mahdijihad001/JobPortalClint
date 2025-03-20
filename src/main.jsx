import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
