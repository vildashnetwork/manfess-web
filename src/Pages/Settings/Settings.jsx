import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Settings() {
  const [formData, setFormData] = useState({
    Day: "",
    "04:30-05:15": "",
    "05:15-06:00": "",
    "06:00-06:45": "",
    "06:45-07:30": "",
    "07:30-08:15": "",
    "08:15-09:00": "",
    Teachers: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [allTeachers, setAllTeachers] = useState([]);
  const [teachersLoading, setTeachersLoading] = useState(false);

  const timeSlots = [
    "04:30-05:15",
    "05:15-06:00",
    "06:00-06:45",
    "06:45-07:30",
    "07:30-08:15",
    "08:15-09:00",
  ];

  const daysOfWeek = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
  ];

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setTeachersLoading(true);
      const response = await axios.get("https://manfess-backend.onrender.com/api/teachers");

      if (Array.isArray(response.data)) {
        setAllTeachers(response.data);
      } else if (response.data?.teachers) {
        setAllTeachers(response.data.teachers);
      } else if (response.data?.data) {
        setAllTeachers(response.data.data);
      } else {
        setAllTeachers([]);
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
      setAllTeachers([]);
    } finally {
      setTeachersLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      await axios.post(
        "https://manfess-backend.onrender.com/api/teachers/timetable/add",
        formData
      );
      setSuccessMessage("✅ Record inserted successfully!");
      alert("Record inserted successfully!");

      setFormData({
        Day: "",
        "04:30-05:15": "",
        "05:15-06:00": "",
        "06:00-06:45": "",
        "06:45-07:30": "",
        "07:30-08:15": "",
        "08:15-09:00": "",
        Teachers: "",
      });
    } catch (error) {
      console.error("Error inserting record:", error);
      setSuccessMessage("❌ Failed to insert record. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  // ---------------- STYLES ----------------
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "Inter, system-ui, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    width: "1000px",
    marginTop: "40px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "8px",
    textAlign: "center",
    color: "#1e293b",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#64748b",
    textAlign: "center",
    marginBottom: "32px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
    marginBottom: "6px",
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "20px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "12px 28px",
    backgroundColor: loading ? "#93c5fd" : "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: loading ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    minWidth: "160px",
  };

  const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  };

  const fullWidthStyle = { gridColumn: "1 / -1" };

  const timeSlotsGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    marginBottom: "20px",
    overflow: "hidden",
  };

  const timeSlotItemStyle = {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    alignItems: "center",
    borderBottom: "1px solid #e2e8f0",
  };

  const timeLabelStyle = {
    padding: "12px 16px",
    backgroundColor: "#f1f5f9",
    fontWeight: "500",
    fontSize: "14px",
    color: "#475569",
  };

  const messageStyle = (success) => ({
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: success ? "#dcfce7" : "#fee2e2",
    color: success ? "#166534" : "#991b1b",
  });

  // ---------------- RENDER ----------------
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Teacher Timetable Management</h1>
        <p style={subtitleStyle}>Add or update teacher schedule information</p>

        {successMessage && (
          <div style={messageStyle(successMessage.includes("successfully"))}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={formGridStyle}>
            {/* Day Selection */}
            <div style={fullWidthStyle}>
              <label style={labelStyle}>Day of the Week</label>
              <select
                name="Day"
                value={formData.Day}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Select a day</option>
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Teacher Selection */}
            <div style={fullWidthStyle}>
              <label style={labelStyle}>Teacher</label>
              <select
                name="Teachers"
                value={formData.Teachers}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">
                  {teachersLoading ? "Loading..." : "Select a teacher"}
                </option>
                {allTeachers.map((teacher, idx) => (
                  <option
                    key={idx}
                    value={teacher.Name || teacher.name || teacher.id}
                  >
                    {teacher.Name || teacher.name || `Teacher ${idx + 1}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Slots */}
            <div style={fullWidthStyle}>
              <label style={{ ...labelStyle, marginBottom: "12px" }}>
                Time Slots
              </label>
              <div style={timeSlotsGridStyle}>
                {timeSlots.map((slot, idx) => (
                  <div
                    key={slot}
                    style={{
                      ...timeSlotItemStyle,
                      borderBottom:
                        idx === timeSlots.length - 1 ? "none" : "1px solid #e2e8f0",
                    }}
                  >
                    <div style={timeLabelStyle}>{slot}</div>
                    <input
                      type="text"
                      name={slot}
                      value={formData[slot]}
                      onChange={handleChange}
                      placeholder="Enter subject or activity"
                      style={{
                        ...inputStyle,
                        border: "none",
                        borderRadius: "0",
                        marginBottom: 0,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? "Processing..." : "Save Timetable"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
