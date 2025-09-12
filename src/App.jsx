/* ======================================================================================= */
/* START FROM HERE  PLEASE LETS LEAVE THIS  DOCUMENT EMPTY WE WILL USE IT AS A COMPILER 
*/ // components containing pages for each sequence and o-levl and a-level mocks too
/* ====================================================================================== */

import './App.css'
import './Pages/Shared/Shared.css'
import Sidebar from './Pages/Shared/Sidenav/Sidebar'
// import Router from './Router'

// import './App.css'
// import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Teachers from './Pages/Teachers/Teachers'
import Students from './Pages/Students/Students'
import Attendance from './Pages/Attendance/Attendance'
import Marks from './Pages/Marks/Marks'
import Reports from './Pages/Reports/Reports'
import Settings from './Pages/Settings/Settings'
import NotFound from './Pages/NotFound/NotFound'
import Topnav from './Pages/Shared/Topnav/Topnav'
import Footer from './Pages/Shared/Footer/Footer'
import LoginPage from './Pages/Login/Login'
import MockOlevel from './Pages/Marks/marksroutes/MockOlevel'
import MockAlevel from "./Pages/Marks/marksroutes/MockAlevel"
import PreMockOlevel from "./Pages/Marks/marksroutes/PreMockOlevel"
import PreMockAlevel from "./Pages/Marks/marksroutes/PreMockAlevel"

// import FirstSequence from './Pages/Marks/marksroutes/Firstsequence'
// import Secondsequence from './Pages/Marks/marksroutes/Secondsequence'
// import Thirdsequence from './Pages/Marks/marksroutes/Thirdsequence'
// import Forthsequence from './Pages/Marks/marksroutes/Forthsequence'
// import Fifthsequence from './Pages/Marks/marksroutes/Fifthsequence'
// import Sixthsequence from './Pages/Marks/marksroutes/Sixthsequence'



import FirstSequence from "./Pages/Marks/marksroutes/Firstsequence"
import Secondsequence from './Pages/Marks/marksroutes/Secondsequence'
import Thirdsequence from './Pages/Marks/marksroutes/Thirdsequence'
import Forthsequence from './Pages/Marks/marksroutes/Forthsequence'
import Fifthsequence from './Pages/Marks/marksroutes/Fifthsequence'
import Sixthsequence from './Pages/Marks/marksroutes/Sixthsequence'
import TimeTables from './Pages/Settings/TimeTables'

// Teachers
// Students
// Attendance
// Marks
// Reports
// Settings
// NotFound
// Footer
// import Dashboard from './Pages/Dashboard'
// import Mail from './Pages/Mail'
// import Analytics from './Pages/Analytics'
// import NotFound from './Pages/NotFound'
function App() {

 //we will stilll look for a more secured method but lets ly low with htis one
 // my other method can slow down processes for now lets not authenticate the token each time they login

  return (
    <>
    {localStorage.getItem("admin-token") ?  <div className='page-container'>
      <Topnav className="top-nav"></Topnav>
      <div className="inner-grid">
        
        <Sidebar className="side-nav"></Sidebar>
        <main className='main'>
          <Routes>
            <Route path='/' exact element={<Dashboard />} ></Route>
            <Route path='/teachers' element={<Teachers />} ></Route>
            <Route path='/students' element={<Students />} ></Route>
            {/* <Route path='/attendance' element={<Attendance />} ></Route> */}
            <Route path='/marks' element={<Marks />} ></Route>
            <Route path='/reports' element={<Reports />} ></Route>
            <Route path='/settings' element={<Settings />} ></Route>
             <Route path='/marks/mock-olevel' element={<MockOlevel />} ></Route>
         <Route path='/marks/mock-alevel' element={<MockAlevel/>} ></Route>
         {/*<Route path='/marks/first-sequence' element={<FirstSequence/>} ></Route>
         <Route path='/marks/second-sequence' element={<Secondsequence/>} ></Route>
         <Route path='/marks/third-sequence' element={<Thirdsequence/>} ></Route>
         <Route path='/marks/fourth-sequence' element={<Forthsequence/>} ></Route>
         <Route path='/marks/fifth-sequence' element={<Fifthsequence/>} ></Route>
         <Route path='/marks/sixth-sequence' element={<Sixthsequence/>} ></Route> */}
            <Route path='/marks/premock-olevel' element={<PreMockOlevel/>} ></Route>
            <Route path='/marks/premock-alevel' element={<PreMockAlevel/>} ></Route>



            <Route path='/marks/first-sequence' element={<FirstSequence/>} ></Route>
             <Route path='/marks/second-sequence' element={<Secondsequence/>} ></Route>

              <Route path='/marks/third-sequence' element={<Thirdsequence/>} ></Route> 
              <Route path='/marks/fourth-sequence' element={<Forthsequence/>} ></Route>
            <Route path='/marks/fifth-sequence' element={<Fifthsequence/>} ></Route>
             <Route path='/marks/sixth-sequence' element={<Sixthsequence/>} ></Route>
<Route path='/timetables' element={<TimeTables/>} ></Route>

            <Route path='*' element={<NotFound />} ></Route>
          </Routes>

        </main>
      </div>


      <Footer className="footer"></Footer>

    </div>: <LoginPage/>}
    </>
   
  )
}

export default App
