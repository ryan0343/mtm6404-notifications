import React from "react";

// Notification - Component that displays each components's name, message, and a clear button below.
Notification = ({ children }) => {
    return <div className="notification"> {children} </div>;
};

export default Notification;
