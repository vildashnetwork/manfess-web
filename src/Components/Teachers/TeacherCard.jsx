import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

function TeacherCard() {
  return (
    <>
    <div className="card teacher-card">
        <div className="teacher-info">
          <div className="teacher-image">
            <img src="src\\assets\\logo.png" alt="" srcset="" width={50} />
          </div>
          <div className='teacher-info-details'>
            <h3 className='teacher-name'>Dr. Emily Carter</h3>
            <h5><span>Subject :</span> <span className='teacher-name'>Biology</span></h5>
          </div>
         
        </div>
         <div className='light-gray-p'><span>Term :</span> <span>3rd Term</span></div>
         <div className='light-gray-p'><span>Submission Status:</span> <span className=' tag tag-good'>On time</span></div>
         <hr className='line'/>
         <div className="actions flex">
          <button className=' button btn-neutral'>View Profile</button>
          <button className='button btn-good'> <EmailIcon/>Send Message</button>
         </div>
    </div>

      
    </>
  )
}

export default TeacherCard
