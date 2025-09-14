import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import axios from "axios";
import StudentCardPlaceHolder from "./StudentCardPlaceHolder";
function StudentCard({query}) {
  const [students, setStudents] = useState([]);
const [loading, setloading] = useState(false)
  const fetchStudents = async () => {
    try {
        setloading(true)
      const res = await axios.get(
        "https://manfess-backend.onrender.com/api/students/all/students"
      );
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    }finally{
        setloading(false)
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
    {loading && <StudentCardPlaceHolder/>}
      {students
      .filter(item=>
        item.FirstName.toLowerCase().includes(query.toLowerCase())
      )
      .map((student) => (
        <div key={student.id} className="card student-card flex-column">
          <div className="student-info flex-row">
            <div className="image">
              <img
                src="/logo.png"
                alt="student"
                width={50}
              />
            </div>
            <div className="student-details">
              <h3>{student.FirstName + "  " +student.LastName}</h3>
              <div className="p student-id">
                Level : <span className="id">{student.level}</span>
              </div>
            </div>
          </div>

          <hr className="line" />
          <p className="p min-pad light-gray-p">
            Date Of Birth : <span className="email">{student.DOB}</span>
          </p>
          <p
            className="p min-pad light-gray-p"
            style={{ marginTop: "-12px" }}
          >
            FeesComplete : <span className="class">{student.FeesComplete}</span>
          </p>
          <hr className="line" />
          <div
            className="flex-row student-batch"
            style={{ paddingTop: "10px", gap: "10px" }}
          >
            <div className="tag flex-row">
              <CheckIcon className="inline-icon" /> Fees
            </div>
            {student.BalanceLeft > 0 ?  
            <div className="tag flex-row tag-danger">
              <RemoveCircleOutlineIcon className="inline-icon" />
              Deptor
            </div>:
            <div className="tag flex-row tag-good">
              <AccessTimeIcon className="inline-icon" /> Paid
            </div>
            }
          </div>
          <button
            className="button btn-neutral"
            style={{ width: "130px", justifyContent: "center" }}
          >
            {student?.Department}
          </button>
        </div>
      ))}
    </>
  );
}

export default StudentCard;
