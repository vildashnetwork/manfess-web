import React from 'react';
import { SidebarData } from '../Sidenav/SidebarData';
import './Topnav.css';
import { Link } from 'react-router-dom'
// ICONS =================
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
const imgUrl = "src\\assets\\logo.png";
// ==========================
function Topnav() {
  return (
    <header className='header flex-between'>
      <div className='school-logo flex-between'>
       <img src={imgUrl} alt="School logo" width={60}/> 
       <p className='logo-text'>MANFESS</p>
      </div>
      <nav className='pages'>
        <ul className='topnav-links flex-between'>
          {SidebarData.map((item, key) => {
            return (
              <Link key={key} to={item.link}>
                <li className={window.location.pathname == item.link ? "on" : ""} onClick={() => {
                  window.location.pathname = item.link

                }}>
                  <div className='title'>{item.title}</div>
                </li>
              </Link>
            )
          })}

        </ul>

      </nav>
      <div className="others flex-between">
        <div className="search-group">
          <button className="search-icon flex-between">
            <SearchIcon/>
          </button>
          <input className='search' id='search' type="text"  maxLength={60} placeholder='Search students, teachers, ...'/>
        </div>
        <div className="user-current">
          <PersonIcon className='action-icon'/>
        </div>
        <div className="logout">
          <LogoutIcon className='action-icon danger'/>
        </div>
      </div>
    </header>
  )
}

export default Topnav
