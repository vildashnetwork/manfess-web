import React, { useEffect, useState } from "react";
import axios from "axios";

function SubmissionTable({ search }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://manfess-backend.onrender.com/api/students/all/students"
      );
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Filter students with balance > 0
  const filterDeptor = students.filter((item) => item.BalanceLeft > 0);

  // Convert search input to lowercase once
  const searchQuery = search ? search.toLowerCase() : "";

  const filteredStudents = filterDeptor.filter((item) =>
    item.FirstName.toLowerCase().includes(searchQuery) ||
    (item.FirstName.toLowerCase() + " " + item.LastName.toLowerCase()).includes(searchQuery) ||
    item.level.toLowerCase().includes(searchQuery) ||
    item.Department.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            {/* <th>Date Of Birth</th> */}
            <th>Department</th>
            <th>Class</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
          {!loading && filteredStudents.length === 0 && (
            <tr>
              <td colSpan="4">No records found</td>
            </tr>
          )}
          {!loading &&
            filteredStudents.map((item, idx) => (
              <tr key={idx}>
                <td>{item.FirstName + " " + item.LastName}</td>
                {/* <td>{item.DOB}</td> */}
                <td>{item.Department}</td>
                <td className="status tag-good">{item.level}</td>
                <td>{item.BalanceLeft}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default SubmissionTable;
