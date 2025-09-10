import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import axios from 'axios';
function MatricCard() {

    const [students, setStudents] = useState([]);
    const [loading, setloading] = useState(false)

  const [noti, setNoti] = useState([]);

  const getNoti = async () => {
    try {
      setloading(true);
      const res = await axios.get(
        "https://manfess-backend.onrender.com/api/notifications"
      );
      setNoti(res.data);
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);

    const [teachers, setTeachers] = useState([])

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
        fetchTeachers()
      }, []);
    
      const filterdeptor = students.filter(item=> item.BalanceLeft>0)
    return (
        <>
            <div className="card">
                <div className="card-title">
                    <h3 className="card-title-heading"> Total Students</h3>
                    <div className="card-title-icon text-good">
                        <SchoolIcon className='mu-icon' />
                    </div>
                </div>
                <div className="number text-good">
                    {loading? "?.." :students?.length}
                </div>
                <div className="average-balance">
                   <p>total students</p>
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    <h3 className="card-title-heading"> Total Teachers</h3>
                    <div className="card-title-icon text-good">
                        <PeopleIcon className='mu-icon' />
                    </div>
                </div>
                <div className="number   text-good">
                    {loading? "?..": teachers?.length}
                </div>
                <div className="average-balance">
                   <p> all teachers</p>
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    <h3 className="card-title-heading">Deptors</h3>
                    <div className="card-title-icon ">
                        <ImportContactsIcon className='mu-icon' />
                    </div>
                </div>
                <div className="number   text-warning">
                   {loading? "?..": filterdeptor?.length}
                </div>
                <div className="average-balance">
                   <p>all deptors in school</p>
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    <h3 className="card-title-heading"> Teachers <br /> Alerts</h3>
                    <div className="card-title-icon">
                        <WarningAmberIcon className='mu-icon text-danger' />
                    </div>
                </div>
                <div className="number   text-danger">
                    {loading && "?.."}
                    {noti.length}
                </div>
                <div className="average-balance">
                   <p>pushed to thier app</p>
                </div>
            </div>
            <div className="card">
                <div className="card-title">
                    <h3 className="card-title-heading"> Upcoming Events</h3>
                    <div className="card-title-icon">
                        <DateRangeIcon className='mu-icon' />
                    </div>
                </div>
                <div className="number   text-normal">
                    5
                </div>
                <div className="average-balance">
                   <p>Next Event in 2 days</p>
                </div>
            </div>
        </>
    )
}

export default MatricCard
