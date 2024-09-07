import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext.jsx";
import api from "../services/api.js";

const NotificationsPage = () => {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await api.get(`/notifications/${user.username}`);
        if (response.status === 200) {
          setNotifications(response.data);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    if (user) {
      fetchNotifications();
    }
  }, [user]);

  const handleAction = async (notificationId, action) => {
    try {
      const response = await api.post(
        `/notifications/action/${notificationId}`,
        { action }
      );
      if (response.status === 200) {
        setNotifications(notifications.filter((n) => n._id !== notificationId));
      }
    } catch (error) {
      console.error("Error handling notification action:", error);
    }
  };

  return (
    <div className="notifications-page-container">
      <h2>Your Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            <p>{notification.message}</p>
            <button onClick={() => handleAction(notification._id, "replace")}>
              Replace with Original
            </button>
            <button onClick={() => handleAction(notification._id, "delete")}>
              Delete This Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
