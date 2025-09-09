// src/Pages/Marks/marksroutes/ThirdSequence.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export default function Thirdsequence() {
  const navigate = useNavigate();
  const printableRef = useRef(null);

  const [marksData, setMarksData] = useState([]);
 const [loading, setloading] = useState(false)
  const getresult = async ()=>{
    try{
      setloading(true)
 const res = await axios.get("https://manfess-backend.onrender.com/api/thirdsequence ")
       setMarksData(res.data)
    }catch(error){
      console.log(error);
      
    }finally{
      setloading(false)
    }
  }
  useEffect(()=>{
    getresult()
  },[])

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 800 : false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 800);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

 

  const getAverage = (s) => {
    const sum = (s.math || 0) + (s.english || 0) + (s.science || 0) + (s.history || 0);
    return +(sum / 4).toFixed(2);
  };

  // Export CSV as and excel sheet 
  // this function is very important i thought of it because it is a school they flow well with excel
  const exportCSV = () => {
    if (!marksData || marksData.length === 0) {
      alert("No data to export");
      return;
    }

     const headers = ["Sequence", "Student Name","Class","Department","Subject", "Subject_Code", "Mark"];
    const rows = marksData.map((s) => [s.sequence, s.studentName ,s.Class, s.Department, s.Subject, s.Subject_Code, s.Mark]);
 
    const csvLines = [headers.join(","), ...rows.map((r) => r.join(","))];
    const csvContent = csvLines.join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "first-sequence-marks.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
 
    window.print();
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f3f7f9 0%, #ffffff 100%)",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: "50px"
  };

  const headerStyle = {
    padding: "28px 24px",
    background: "linear-gradient(90deg, #0ea861, #22c55e)",
    color: "#fff",
    boxShadow: "0 6px 18px rgba(16, 185, 129, 0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const headerLeftStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const headerTitleStyle = {
    margin: 0,
    fontSize: "32px",
    fontWeight: 800,
    letterSpacing: "-0.02em",
  };

  const headerSubStyle = {
    marginTop: "6px",
    fontSize: "13px",
    opacity: 0.95,
  };

  const navButtonStyle = (hovered) => ({
    background: "#ffffff",
    color: "#0f9d58",
    border: "none",
    padding: "10px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 700,
    boxShadow: hovered ? "0 8px 20px rgba(16,185,129,0.18)" : "0 4px 10px rgba(16,185,129,0.12)",
    transform: hovered ? "translateY(-2px)" : "translateY(0)",
    transition: "all 180ms ease",
  });

  const mainContentWrap = {
    width: "95%",
    maxWidth: 1400,
    margin: "24px auto",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 18,
  };

  const actionsBar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 18,
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
  };

  const actionsLeft = { display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" };

  const actionButton = (variant = "solid", hovered = false) => {
    const base = {
      padding: "10px 16px",
      borderRadius: 12,
      fontWeight: 700,
      cursor: "pointer",
      border: "none",
      boxShadow: hovered ? "0 10px 30px rgba(2,6,23,0.08)" : "0 6px 18px rgba(2,6,23,0.06)",
      transition: "all 160ms ease",
    };

    if (variant === "solid") return Object.assign({}, base, { background: "#0f9d58", color: "#fff" });
    if (variant === "ghost") return Object.assign({}, base, { background: "#fff", color: "#0f9d58", border: "1px solid #d1f7e0" });
    return base;
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 12px 36px rgba(2,6,23,0.06)",
    overflow: "hidden",
  };

  const tableContainer = {
    width: "100%",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: 860,
    fontSize: 15,
  };

  const thStyle = {
    textAlign: "left",
    padding: "18px 16px",
    background: "#0f9d58",
    color: "#fff",
    fontWeight: 800,
    position: "sticky",
    top: 0,
    zIndex: 2,
  };

  const tdStyle = {
    padding: "14px 16px",
    borderBottom: "1px solid #eef2f6",
    verticalAlign: "middle",
  };

  const rowStyle = (isHovered) => ({
    background: isHovered ? "linear-gradient(90deg, #f5fffa, #ffffff)" : "#fff",
    transition: "background 140ms ease",
  });

  const mobileCard = {
    background: "#fff",
    borderRadius: 12,
    padding: 14,
    boxShadow: "0 8px 24px rgba(2,6,23,0.06)",
  };

  const footerStyle = {
    padding: "18px 24px",
    background: "linear-gradient(90deg, #0ea861, #22c55e)",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  };
const [query, setquery] = useState("")
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div style={headerLeftStyle}>
          <h1 style={headerTitleStyle}>First Sequence</h1>
          <div style={headerSubStyle}>Large, clear layout — occupies most of the page and shrinks gracefully on small screens.</div>
        </div>

        <div>
          <button
            style={navButtonStyle(hoveredBtn === "back")}
            onMouseEnter={() => setHoveredBtn("back")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => navigate(-1)}
            aria-label="Back to dashboard"
          >
            Back to Dashboard
          </button>
        </div>
      </header>

      <main style={mainContentWrap}>
        <div style={actionsBar}>
          <div style={actionsLeft}>
            <button
              style={Object.assign({}, actionButton("solid", hoveredBtn === "print"))}
              onMouseEnter={() => setHoveredBtn("print")}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={handlePrint}
            >
              Print
            </button>

            <button
              style={Object.assign({}, actionButton("ghost", hoveredBtn === "csv"))}
              onMouseEnter={() => setHoveredBtn("csv")}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={exportCSV}
            >
              Export CSV
            </button>

            <button
              style={Object.assign({}, actionButton("ghost", hoveredBtn === "pdf"))}
              onMouseEnter={() => setHoveredBtn("pdf")}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={handleExportPDF}
            >
              Export PDF
            </button>

            <button
              style={Object.assign({}, actionButton("solid", hoveredBtn === "add"))}
              onMouseEnter={() => setHoveredBtn("add")}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() => alert("Add student — replace with modal or form logic")}
            >
              Download And Publish 
            </button>
          </div>

          <div style={{ color: "#0b2540", fontWeight: 700 }}>{ loading? "loading..":`${marksData.length} records`}</div>
        </div>
<div className="search-group">
          <button className="search-icon flex-between">
            {/* <SearchIcon/> */}
          </button>
          <input
            className="search"
            id="search"
            type="text"
            maxLength={60}
            value={query}
            onChange={(e)=> setquery(e.target.value)}
            placeholder="Search students ..."
          />
        </div>
        <div style={cardStyle} ref={printableRef}>
          {!isMobile && (
            <div style={tableContainer}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Student Name</th>
                    <th style={thStyle}>Class</th>
                    <th style={thStyle}>Subject</th>
                    <th style={thStyle}>Subject_Code</th>
                    <th style={thStyle}>Mark</th>
                    <th style={thStyle}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {marksData
                 .filter(item =>
  item.studentname.toLowerCase().includes(query.toLowerCase()) || 
  item.Subject.toLowerCase().includes(query.toLowerCase()) 
)

                  .map((s) => (
                    <tr
                      key={s.id}
                      style={Object.assign({}, rowStyle(hoveredRow === s.id))}
                      onMouseEnter={() => setHoveredRow(s.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                    > 
                      <td style={tdStyle}>{s.sequence}</td>
                      <td style={tdStyle}>{s.studentname}</td>
                      <td style={tdStyle}>{s.Class}</td>
                      <td style={tdStyle}>{s.Department}</td>
                      <td style={tdStyle}>{s.Subject}</td>
                      <td style={tdStyle}>{s.Subject_Code}</td>
                      <td style={tdStyle}>{s.Mark}</td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isMobile && (
            <div style={{ display: "grid", gap: 12 }}>
              {marksData.map((s) => (
                <div key={s.id} style={mobileCard}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 16 }}>{s.studentName}</div>
                    <div style={{ fontWeight: 800 }}>{getAverage(s)}</div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
                    <div style={{ padding: 10, background: "#f8fafb", borderRadius: 8 }}>Math: <strong>{s.math}</strong></div>
                    <div style={{ padding: 10, background: "#f8fafb", borderRadius: 8 }}>English: <strong>{s.english}</strong></div>
                    <div style={{ padding: 10, background: "#f8fafb", borderRadius: 8 }}>Science: <strong>{s.science}</strong></div>
                    <div style={{ padding: 10, background: "#f8fafb", borderRadius: 8 }}>History: <strong>{s.history}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer style={footerStyle}>First Sequence Marks — clean, large layout with inline styles (no CSS frameworks)</footer>

      {/* Print-only CSS using a template string (keeps code readable and closed properly) */}
      <style>
        {`@media print {
            body * { visibility: visible; }
            header, footer, button { display: none !important; }
            main { width: 100% !important; }
            @page { size: A4; margin: 12mm; }
          }`}
      </style>
    </div>
  );
}
