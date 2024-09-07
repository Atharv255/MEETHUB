import React, { useContext } from "react";
import NotificationContext from "../../context/NotificationContext.jsx";

const NotificationList = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  if (notifications.length === 0) {
    return <p>No notifications available.</p>;
  }

  return (
    <div className="notification-list">
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id} className="notification-item">
            <p>{notification.message}</p>
            <button
              onClick={() => removeNotification(notification._id)}
              className="btn-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
