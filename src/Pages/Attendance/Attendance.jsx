import React, { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Calendar from '../../Components/Attendance/Calendar';
import './Attendance.css'
import dayjs from 'dayjs';
function Attendances(){
  return(<div>Hello</div>)
}
function Attendance() {
  const [date,setDate] = useState(dayjs(new Date()).format("DD MMM, YYYY"))
  return (
    <>
      <div className="topheader flex-between">
        <h2>Attendance</h2>
        {/* <div className='others-teachers flex-between'> */}

        <div className="others flex-between">
          <button className="button btn-neutral">
            <FilterAltIcon style={{
              fontSize: "18px",
            }} />
            Filter
          </button>
          <button className="button  btn-good">
            <FilterAltIcon style={{
              fontSize: "18px",
            }} />
            Update Status
          </button>
          <div className="logout">
            {/* <LogoutIcon className='action-icon danger' /> */}
          </div>
          {/* </div> */}

        </div>


      </div>
      <div className="teacher-grid flex-column">
        <h3 style={{marginBottom:"-20px"}}>Attendance Calendar</h3> 
        <p className="p">View Attendance records  and daily Summary</p>
      </div>
      <div className='teacher-grid white-bg'>
        <div className="flex-row">
          <Calendar  />

        </div>
        {/* <div className='attendance-summary'>
          <h3>Summary <span>{date}</span> </h3>
        </div> */}

      </div>

    </>
    
  )
}

export default Attendance
