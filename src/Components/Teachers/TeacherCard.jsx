import React, { useEffect, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

function TeacherCard() {
  const [teachers, setTeachers] = useState([])
const [loading, setloading] = useState(false)
  const fetchTeachers = async () => {
    try {
      setloading(true)
      const res = await axios.get("https://manfess-backend.onrender.com/api/teachers")
      setTeachers(res.data)
    } catch (err) {
      console.log(err)
    }finally{
      setloading(false)
    }
  }

  useEffect(() => {
    fetchTeachers()
  }, [])

  return (
    <>
    {loading && <p>loading...</p>}
      {teachers.map((data, idx) => (
        <div className="card teacher-card" key={idx}>
          <div className="teacher-info">
            <div className="teacher-image">
              <img src="/logo.png" alt="Teacher" width={50} />
            </div>
            <div className='teacher-info-details'>
              <h3 className='teacher-name'>{data?.Name}</h3>
              <h5>
                <span>DepartMent :</span>{" "}
                <span className='teacher-name'>{data?.department || "Biology"}</span>
              </h5>
            </div>
          </div>

          <div className='light-gray-p'>
            <span>Number :</span> <span>{data?.Number || "3rd Term"}</span>
          </div>
          {/* <div className='light-gray-p'>
            <span>Submission Status:</span>{" "}
            <span className='tag tag-good'>{data?.Status || "On time"}</span>
          </div> */}
          <hr className='line' />
          <div className="actions flex">
            <button className='button btn-neutral'>{data?.subjects}</button>
            <button className='button btn-good'>
              <EmailIcon /> {data?.Name}
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeacherCard
