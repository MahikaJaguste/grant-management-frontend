const Notifications = ({ notificationLoader }) => {
  const { data: notifications, isLoading } = notificationLoader();

  return (
    <div className="container mt-4">
      <h3>Notifications</h3>
      <ul className="list-group">
        {isLoading && <p>Loading notifications...</p>}
        {notifications && notifications.map((notification, index) => (
          <li key={index} className="list-group-item">
            <strong>{notification.title}</strong>
            <br />
            {notification.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
