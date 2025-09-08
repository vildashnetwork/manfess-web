import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div className='sidebar'>

            <ul>
                {SidebarData.map((item, key) => {
                    return (
                    <Link key={key} to={item.link}>
                        <li id={window.location.pathname == item.link ? "active" : ""} onClick={() => {
                        window.location.pathname = item.link

                    }}>
                        <div className='icon'>
                            {item.icon}
                        </div>
                        <div className='title'>{item.title}</div>
                    </li>
                     </Link>
                )
                })}
            </ul>
        </div>
    )
}