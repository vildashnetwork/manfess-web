import React, { useState } from 'react'
import './Dashboard.css'
import MatricCard from '../../Components/Dashboard/MatricCard'
import SubmissionTable from '../../Components/Dashboard/SubmissionTable'
import NototificationPanel from '../../Components/Dashboard/NotificationPanel'
import SearchIcon from "@mui/icons-material/Search";

function Dashboard() {
 const [query, setquery] = useState("")
  return (
    <div className='dashboard-content '>
      <div className="topheader">
        <h2>Dashboard Overview</h2>
      </div>
      <div className="card-container">
         <MatricCard/>
        
      </div>
      <div className="flex-container">
      <div className="submission-table-container">
        <div className="submission-table-title">
          <h2>School Deptors</h2>
        </div>
        <div className="search-group">
                  <button className="search-icon flex-between">
                    <SearchIcon/>
                  </button>
                  <input
                    className="search"
                    id="search"
                    type="text"
                    value={query}
                    onChange={(e)=>setquery(e.target.value)}
                    maxLength={60}
                    placeholder="Search students ..."
                  />
                </div>
        <SubmissionTable search={query}/>
      </div>
      <aside className='notification-container'>
        <div className="submission-table-title">
          <h2>Notification</h2>

        </div>
          <p>System Alerts and important messages</p>
        <NototificationPanel />
      </aside>
      </div>


      
    </div>
  )
}

export default Dashboard
