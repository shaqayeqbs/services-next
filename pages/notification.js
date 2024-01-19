import React from "react";
import { useQuery } from "react-query";
import { getNotif } from "../src/@core/api/notif";
import Skeleton from "react-loading-skeleton";
import BackButton from "../src/@core/utils/back-button";

function Notification() {
  const {
    data: notifications,
    isLoading,
    isError,
  } = useQuery("notifications", getNotif);

  if (isLoading) {
    // Display loading skeletons while fetching data
    return (
      <div className="container">
        <h2>Loading Notifications</h2>
        {[...Array(5).keys()].map((index) => (
          <div key={index} className="notification-item">
            <Skeleton height={40} />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching notifications: {isError.message}</p>;
  }
  console.log(notifications.data, "dddddddddddddddd");
  return (
    <div className="container p-5">
      <BackButton title="Notifications" />
      {notifications?.data.length == 0 && (
        <div className="p-4 flex items-center w-full h-[700px] justify-center">
          You have no notif yet
        </div>
      )}
      {notifications?.data?.map((notification) => (
        <div key={notification.id} className="notification-item">
          <p>{notification.message}</p>
          <p>{notification.date}</p>
          {/* Add more details or styling based on your data structure */}
        </div>
      ))}
    </div>
  );
}

export default Notification;
