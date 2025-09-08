import React from 'react'
import './Dashboard.css'
import MatricCard from '../../Components/Dashboard/MatricCard'
import SubmissionTable from '../../Components/Dashboard/SubmissionTable'
import NototificationPanel from '../../Components/Dashboard/NotificationPanel'

function Dashboard() {
 
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
          <h2>Resent Submission</h2>
        </div>
        <SubmissionTable/>
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
