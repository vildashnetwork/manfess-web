import React from 'react'
import './Teachers.css'
import TeacherCard from '../../Components/Teachers/TeacherCard'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Teachers() {
  return (
    <>
      <div className="topheader flex-between">
        <h2>Teachers</h2>
        <button className='button btn-neutral'><FilterAltIcon></FilterAltIcon></button>
        

      </div>
      <div className='teacher-grid'>

        <TeacherCard />
      </div>
    </>



  )
}

export default Teachers
