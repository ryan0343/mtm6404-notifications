import React, { useState } from 'react';
import notificationsData from './notifications';
import Notification from './utilities/Notification.jsx';
import './App.css'

function App() {
  const [notificationsList, setNotificationsList] = useState(notificationsData);

  // handler to remove a single notification
  const removeNotification = (id) => {
    setNotificationsList((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id))
  }

  const removeAllNotifications = () => {
    setNotificationsList([]);
  }

  // NotificationList - Component that displays all individual components by mapping over the notifications data
  const NotificationList = ({ notificationsList }) => {
    return (
      <div className='notificationsList'>
        <h1 className="mt-3">Notifications ({notificationsList.length})</h1>
        {notificationsList.length > 0 ? 
          <div className='btn-Container'>
            <button onClick={removeAllNotifications}>Remove All</button>
          </div> 
          : <strong>No Notifications Found</strong>
        }

        {notificationsList.map(notification => 
          <Notification key={notification.id}>
            <p><strong>{notification.name}</strong>: {notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Clear</button>
          </Notification>
        )}
      </div>
    );
  }

  return (
    <>
      <NotificationList notificationsList={notificationsList} />
    </>
  )
}

export default App
