import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Reports() {
  const [formData, setFormData] = useState({ message: "" });
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = "https://manfess-backend.onrender.com/api/notifications";

  // Fetch notifications on mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data } = await axios.get(API_BASE);
      setNotifications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ message: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) return alert("Message cannot be empty.");
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/add`, { message: formData.message });
      setFormData({ message: "" });
      fetchNotifications();
    } catch (err) {
      console.error("Error adding notification:", err);
      alert("Failed to add notification.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setNotifications(notifications.filter((n) => n.id !== id));
      if (selectedNotification?.id === id) setSelectedNotification(null);
    } catch (err) {
      console.error("Error deleting notification:", err);
      alert("Failed to delete notification.");
    }
  };

  // ================= Inline Styles =================
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f0fdf4",
    display: "flex",
    padding: "24px",
    width: "1050px" ,
    gap: "24px",
    fontFamily: "Inter, sans-serif",
  };

  const mainCardStyle = {
    flex: 2,
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
  };

  const sidebarStyle = {
    flex: 1,
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#065f46",
  };

  const textareaStyle = {
    width: "100%",
    border: "1px solid #d1fae5",
    borderRadius: "10px",
    padding: "12px",
    marginBottom: "16px",
    fontSize: "14px",
    outline: "none",
    minHeight: "120px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    alignSelf: "flex-start",
    boxShadow: "0 4px 14px rgba(22,163,74,0.2)",
  };

  const notificationListStyle = {
    flex: 1,
    overflowY: "auto",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px",
  };

  const notificationItemStyle = {
    backgroundColor: "#ecfdf5",
    padding: "14px",
    borderRadius: "10px",
    marginBottom: "12px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  const deleteButtonStyle = {
    padding: "6px 12px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "12px",
    cursor: "pointer",
    marginLeft: "8px",
  };

  const viewButtonStyle = {
    padding: "6px 12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "12px",
    cursor: "pointer",
    marginLeft: "8px",
  };

  const selectedCardStyle = {
    backgroundColor: "#fefce8",
    padding: "18px",
    borderRadius: "12px",
    marginTop: "16px",
    border: "1px solid #fde68a",
  };

  return (
    <div style={containerStyle}>
      {/* Main Area */}
      <div style={mainCardStyle}>
        <h2 style={titleStyle}>Create Notification</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <textarea
            name="message"
            placeholder="Type your notification message..."
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            required
          />
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Saving..." : "Save Notification"}
          </button>
        </form>
      </div>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h2 style={titleStyle}>All Notifications</h2>
        <div style={notificationListStyle}>
          {notifications.length === 0 && (
            <p style={{ fontSize: "14px", color: "#6b7280" }}>No notifications yet.</p>
          )}
          {notifications.map((n) => (
            <div key={n.id} style={notificationItemStyle}>
              <div>
                <p style={{ fontWeight: "600", marginBottom: "4px" }}>{n.message}</p>
                <p style={{ fontSize: "12px", color: "#6b7280" }}>{new Date(n.Date).toLocaleDateString()}</p>
              </div>
              <div>
                <button style={viewButtonStyle} onClick={() => setSelectedNotification(n)}>
                  View
                </button>
                <button style={deleteButtonStyle} onClick={() => handleDelete(n.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedNotification && (
          <div style={selectedCardStyle}>
            <h3 style={{ fontWeight: "700", marginBottom: "8px" }}>Notification Details</h3>
            <p>
              <strong>ID:</strong> {selectedNotification.id}
            </p>
            <p>
              <strong>Message:</strong> {selectedNotification.message}
            </p>
            <p>
              <strong>Date:</strong> {selectedNotification.Date
    ? new Date(selectedNotification.Date).toLocaleDateString()
    : "N/A"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
