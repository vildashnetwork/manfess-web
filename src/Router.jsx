// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Mail from './Pages/Mail'
import Analytics from './Pages/Analytics'
import NotFound from './Pages/NotFound'


function Router() {



    // youtube.com/watch?v=SLfhMt5OUPI
    return (
        <div className='app'>

            <Sidebar></Sidebar>
            <Routes>
                <Route path='/' exact element={<Home />} ></Route>
                <Route path='/analytics' element={<Analytics />} ></Route>
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/mail' element={<Mail />} ></Route>
                <Route path='*' element={<NotFound />} ></Route>
            </Routes>


        </div>
    )
}

export default Router
