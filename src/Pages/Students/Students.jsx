import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './Students.css'
import TeacherCard from '../../Components/Teachers/TeacherCard';
import StudentCard from '../../Components/Students/StudentCard';
import DownloadIcon from '@mui/icons-material/Download';
import IosShareIcon from '@mui/icons-material/IosShare';
function Students() {
const [search,setsearch] = useState("")
  return (
    <>
   { <>
      <div className="topheader flex-between">
        <h2>Students</h2>
        {/* <div className='others-teachers flex-between'> */}
          
          <div className="others flex-between">
            <div className="search-group">
              <button className="search-icon flex-between">
                <SearchIcon />
              </button>
              <input className='search' id='search' value={search} onChange={(e)=>setsearch(e.target.value)} type="text" maxLength={60} placeholder='Search students, teachers, ...' />
            </div>
            <button className="button btn-neutral  btn-neutral">
            <FilterAltIcon style={{
              fontSize:"18px",
            }}/>
            Filters
            </button>
            <button className="button btn-neutral  btn-good">
            <DownloadIcon style={{
              fontSize:"18px",
            }}/>
             Download Reports
            </button>
            <button className="button btn-neutral  btn-good">
            <IosShareIcon style={{
              fontSize:"18px",
            }}/>
              Update Status
            </button>
            <div className="logout">
              {/* <LogoutIcon className='action-icon danger' /> */}
            </div>
          {/* </div> */}

        </div>


      </div>
      <div className='teacher-grid'>

        <StudentCard  query={search}/>
    
      </div>
    </>
    }
</>
  )
}

export default Students
