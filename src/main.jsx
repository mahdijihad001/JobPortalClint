import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Page/Home/Home.jsx'
import JobDetails from './Page/FeaturedJobs/JobDetails.jsx'
import LogIn from './Page/Auth/LogIn.jsx'
import SingUp from './Page/Auth/SingUp.jsx'
import ArticlesDescription from './Page/Articles/ArticlesDescription.jsx'
import AllJobs from './Page/FeaturedJobs/AllJobs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/singUp' element={<SingUp/>}/>
          <Route path='/jobDetails' element={<JobDetails/>}/>
          <Route path='/ariicleDes' element={<ArticlesDescription/>} />
          <Route path='/alljobs' element={<AllJobs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
