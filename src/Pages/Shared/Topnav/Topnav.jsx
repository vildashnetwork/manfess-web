import React, { useEffect, useState } from "react";
import { SidebarData } from "../Sidenav/SidebarData";
import "./Topnav.css";
import { Link } from "react-router-dom";
// ICONS =================
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

import imgUrl from "../../../assets/logo.png";

function Topnav() {
  const [admin, setAdmin] = useState(null);

  const logout = () => {
    localStorage.removeItem("admin-token");
    window.location.reload();
  };

  const token = localStorage.getItem("admin-token");

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(
          `https://manfess-backend.onrender.com/api/admin/me`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
        setAdmin(res.data); 
      } catch (error) {
        console.log("Error fetching admin:", error);
      }
    };
    if (token) fetchAdmin();
  }, [token]);

  // Get first letter for avatar
  const firstLetter = admin?.Name
    ? admin.Name.charAt(0).toUpperCase()
    : "?";

  return (
    <header className="header flex-between">
      <div className="school-logo flex-between">
        <img src={imgUrl} alt="School logo" width={60} />
        <p className="logo-text">MANFESS</p>
      </div>

      <nav className="pages">
        <ul className="topnav-links flex-between">
          {SidebarData.map((item, key) => {
            return (
              <Link key={key} to={item.link}>
                <li
                  className={
                    window.location.pathname === item.link ? "on" : ""
                  }
                  onClick={() => {
                    window.location.pathname = item.link;
                  }}
                >
                  <div className="title">{item.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>

      <div className="others flex-between">
        {/* Search */}
        <div className="search-group">
          <button className="search-icon flex-between">
            <SearchIcon />
          </button>
          <input
            className="search"
            id="search"
            type="text"
            maxLength={60}
            placeholder="Search students, teachers, ..."
          />
        </div>

        {/* Profile Section */}
        <div className="user-current">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 8px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              width: "fit-content",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#00A86B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                marginRight: "7px",
              }}
            >
              {firstLetter}
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {admin?.Name || "Loading..."}
            </h2>
          </div>
        </div>

        {/* Logout */}
        <div className="logout" onClick={logout}>
          <LogoutIcon className="action-icon danger" />
        </div>
      </div>
    </header>
  );
}

export default Topnav;
