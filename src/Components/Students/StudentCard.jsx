import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
function StudentCard() {
  return (
    <>
    <div className="card student-card flex-column">
        <div className="student-info flex-row">
            <div className="image ">
                <img src="src\\assets\\logo.png" alt="" srcSet=""  width={50}/>
            </div>
            <div className="  student-details ">
                <h3>Student Name</h3>
                <div className=" p student-id">Student Id : <span className="id">00123</span></div>
            </div>

        </div>
    
                    <hr className='line' />
        <p className=" p min-pad light-gray-p">
            Email : <span className='email'>achenyubk35@gmail.com</span>
        </p>
        <p className=" p  min-pad light-gray-p" style={{marginTop:"-12PX"}}>
            Class : <span className='class'>Form 3N</span>
        </p>
         <hr className='line' />
         <div className="flex-row student-batch" style={{paddingTop:"10px" ,gap:"10px"}}>
            <div className="tag flex-row"> <CheckIcon className="inline-icon"/> Hello</div>
            <div className="tag  flex-row tag-good "> <AccessTimeIcon className="inline-icon"/> Grades</div>
            <div className="tag flex-row tag-danger"><RemoveCircleOutlineIcon  className="inline-icon"/>Icongrateful</div>
         </div>
         <button className="button btn-neutral" style={{width:"130px",justifyContent:"center"}}>View Details</button>

    </div>
      
    </>
  )
}

export default StudentCard
