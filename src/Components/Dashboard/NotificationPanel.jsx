import axios from "axios";
import React, { useEffect, useState } from "react";

function NotificationPanel() {
  const [noti, setNoti] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNoti = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://manfess-backend.onrender.com/api/notifications"
      );
      setNoti(res.data);
    } catch (err) {
      console.log("====================================");
      console.log(err);
      console.log("====================================");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    <>
      <br />
      <br />
      {loading && <p>Loading...</p>}

      {noti.length === 0 && !loading && <p>No notifications available</p>}

      {noti.map((item, idx) => (
        <div key={idx} className="message-unit">
          <div className="message-content">
            <h4>{item?.title || `Notification ${idx + 1}`} -  <span>{new Date(item?.Date).toLocaleDateString()}</span>
</h4>
            <p>{item?.message}</p>
          </div>
          <div className="message-type tag tag-good">
           <span>{idx+1}</span>
          </div>
        </div>
      ))}
    </>
  );
}

export default NotificationPanel;
