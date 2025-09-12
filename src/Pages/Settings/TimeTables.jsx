// src/pages/TimeTables.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const TimeTables = () => {
  const [teachers, setTeachers] = useState([]);
  const [timetablesByTeacher, setTimetablesByTeacher] = useState({}); // { teacherName: [rows...] }
  const [loading, setLoading] = useState(true);
  const [loadingMap, setLoadingMap] = useState({}); // per-teacher loading
  const [error, setError] = useState(null);

  const TEACHERS_URL = "https://manfess-backend.onrender.com/api/teachers";
  const TIMETABLE_URL = "https://manfess-backend.onrender.com/api/teachers/timetable";

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadAll = async () => {
    setError(null);
    setLoading(true);
    setTimetablesByTeacher({});
    try {
      // fetch teachers
      const { data: teachersData } = await axios.get(TEACHERS_URL);
      // ensure array
      const list = Array.isArray(teachersData) ? teachersData : [];
      setTeachers(list);

      // for each teacher, make POST to get their timetable
      // build array of requests
      const requests = list.map((t) =>
        axios.post(TIMETABLE_URL, { teacherName: String(t?.Name || "").trim() }).catch((err) => ({ __error: true, err }))
      );

      // Mark per-teacher loading
      const lm = {};
      list.forEach((t) => (lm[String(t?.Name || "").trim()] = true));
      setLoadingMap(lm);

      const results = await Promise.all(requests);

      const map = {};
      results.forEach((res, idx) => {
        const teacherName = String(list[idx]?.Name || "").trim();
        if (!res || res.__error) {
          map[teacherName] = { error: true, rows: [] };
        } else {
          // expect res.data to be an array of rows:
          // { Day, "04:30-05:20", "05:20-06:10", ... , Teachers, id }
          map[teacherName] = { error: false, rows: Array.isArray(res.data) ? res.data : [] };
        }
      });

      setTimetablesByTeacher(map);
    } catch (err) {
      console.error("Error loading teachers/timetables:", err);
      setError("Failed to load timetables. Try refreshing.");
    } finally {
      setLoading(false);
      setLoadingMap({});
    }
  };

  const refreshTeacher = async (teacher) => {
    const name = String(teacher?.Name || "").trim();
    setLoadingMap((m) => ({ ...m, [name]: true }));
    try {
      const { data } = await axios.post(TIMETABLE_URL, { teacherName: name });
      setTimetablesByTeacher((prev) => ({ ...prev, [name]: { error: false, rows: Array.isArray(data) ? data : [] } }));
    } catch (err) {
      console.error("refresh teacher error", err);
      setTimetablesByTeacher((prev) => ({ ...prev, [name]: { error: true, rows: [] } }));
    } finally {
      setLoadingMap((m) => ({ ...m, [name]: false }));
    }
  };

  // layout/time slots consistent order
  const TIME_SLOTS = ["04:30-05:20", "05:20-06:10", "06:10-07:00", "07:00-07-50", "07-50-09-00"];

  // ================= Inline Styles (green-themed, modern) =================
  const pageStyle = {
    minHeight: "100vh",
    padding: "28px",
    width: "1000px",
    background: "linear-gradient(180deg, #f7fdf7 0%, #f1fbf1 100%)",
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    gap: "16px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: 700,
    color: "#0f5132", // deep green
  };

  const subtitleStyle = {
    fontSize: "13px",
    color: "#256029",
    opacity: 0.9,
  };

  const controlRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const buttonPrimary = {
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(22,163,74,0.18)",
  };

  const buttonAlt = {
    backgroundColor: "transparent",
    color: "#0f5132",
    border: "1px solid rgba(15,81,50,0.12)",
    padding: "8px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 600,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "18px",
    alignItems: "stretch",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "14px",
    padding: "18px",
    boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
    display: "flex",
    
    flexDirection: "column",
    gap: "12px",
    minHeight: "220px",
  };

  const cardHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const avatarStyle = {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#16a34a 0%, #4ade80 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: "20px",
    boxShadow: "0 6px 16px rgba(16,163,82,0.14)",
  };

  const nameStyle = {
    fontSize: "16px",
    fontWeight: 700,
    color: "#0f5132",
    marginBottom: "2px",
  };

  const metaStyle = {
    fontSize: "12px",
    color: "#166534",
    opacity: 0.8,
  };

  const tableWrapperStyle = {
    marginTop: "8px",
    overflowX: "auto",
    borderRadius: "10px",
    border: "1px solid #e6f4ea",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
    minWidth: "560px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px 12px",
    background: "linear-gradient(90deg, rgba(16,185,129,0.06), rgba(16,185,129,0.02))",
    color: "#065f46",
    fontWeight: 700,
    borderBottom: "1px solid #e6f4ea",
    position: "sticky",
    top: 0,
    zIndex: 2,
  };

  const tdStyle = {
    padding: "10px 12px",
    borderBottom: "1px solid #f0faf0",
    color: "#064e3b",
  };

  const emptyCellStyle = {
    ...tdStyle,
    color: "#6b7280",
    fontStyle: "italic",
  };

  const smallMuted = {
    fontSize: "12px",
    color: "#4b5563",
    opacity: 0.9,
  };

  const errorBox = {
    padding: "12px",
    backgroundColor: "#ffefef",
    color: "#9b1c1c",
    borderRadius: "10px",
    border: "1px solid #ffd7d7",
    marginBottom: "12px",
  };

  // =======================================================================

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div>
          <div style={titleStyle}>Teachers' Time Tables</div>
          <div style={subtitleStyle}> MANFESS STAFS TIMESTABLE</div>
        </div>
        <div style={controlRowStyle}>
          <button style={buttonAlt} onClick={() => { setTeachers([]); setTimetablesByTeacher({}); loadAll(); }}>
            Clear & Reload
          </button>
          <button
            style={buttonPrimary}
            onClick={() => {
              // quick client-side reload
              setLoading(true);
              setError(null);
              setTimeout(() => loadAll(), 120);
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh All"}
          </button>
        </div>
      </div>

      {error && <div style={errorBox}>{error}</div>}

      {/* Grid of teacher cards */}
      <div style={gridStyle}>
        {loading && (
          // show placeholder skeleton cards while loading
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={cardStyle}>
              <div style={cardHeaderStyle}>
                <div style={{ ...avatarStyle, opacity: 0.18 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ width: "60%", height: 14, background: "#eefaf0", borderRadius: 6 }} />
                  <div style={{ width: "40%", height: 10, background: "#f1faf1", borderRadius: 6, marginTop: 8 }} />
                </div>
                <div style={{ width: 80, height: 32, background: "#effaf2", borderRadius: 10 }} />
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3a8" }}>
                Loading timetable...
              </div>
            </div>
          ))
        )}

        {!loading && teachers.length === 0 && (
          <div style={{ ...cardStyle, gridColumn: "1/-1", textAlign: "center", color: "#4b5563" }}>
            No teachers found. Try refresh.
          </div>
        )}

        {!loading &&
          teachers.map((t, idx) => {
            const name = String(t?.Name || "").trim();
            const avatarLetter = name ? name[0].toUpperCase() : "?";
            const tt = timetablesByTeacher[name] || { error: false, rows: [] };
            const rows = tt.rows || [];

            return (
              <div key={idx + "-" + name} style={cardStyle}>
                {/* header */}
                <div style={cardHeaderStyle}>
                  <div style={avatarStyle}>{avatarLetter}</div>
                  <div style={{ flex: 1 }}>
                    <div style={nameStyle}>{name || "Unknown Teacher"}</div>
                    <div style={metaStyle}>
                      {t?.department ? `${t.department} • ${t?.subjects || ""}` : <span style={smallMuted}>No department info</span>}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{ ...buttonAlt, padding: "8px 10px", fontSize: 13 }}
                      onClick={() => refreshTeacher(t)}
                    >
                      {loadingMap[name] ? "..." : "Reload"}
                    </button>
                  </div>
                </div>

                {/* table */}
                <div style={tableWrapperStyle}>
                  {tt.error ? (
                    <div style={{ padding: 14 }}>
                      <div style={{ color: "#9b1c1c", fontWeight: 700, marginBottom: 6 }}>Failed to load</div>
                      <div style={smallMuted}>Click reload to try again</div>
                    </div>
                  ) : rows.length === 0 ? (
                    <div style={{ padding: 14 }}>
                      <div style={smallMuted}>No timetable rows found for this teacher.</div>
                    </div>
                  ) : (
                    <table style={tableStyle}>
                      <thead>
                        <tr>
                          <th style={{ ...thStyle, minWidth: 160 }}>Day</th>
                          {TIME_SLOTS.map((slot) => (
                            <th key={slot} style={thStyle}>
                              {slot}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {rows.map((r, ridx) => (
                          <tr key={ridx}>
                            <td style={tdStyle}>{r.Day || "N/A"}</td>
                            {TIME_SLOTS.map((slot) => {
                              const val = r[slot];
                              return (
                                <td key={slot} style={val ? tdStyle : emptyCellStyle}>
                                  {val ? String(val) : "—"}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TimeTables;
