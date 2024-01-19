/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useExpertStore from "../src/store/booked-experts";

import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import BackButton from "../src/@core/utils/back-button";
import Order from "../src/@core/icons/svgs/order/order";
import Link from "next/link";

// ... (imports)

const CalendarPage = () => {
  const router = useRouter();
  const defaultValue = {
    year: 2023,
    month: 11,
    day: 17,
  };

  const { bookedExperts, addExpert, removeExpert } = useExpertStore();

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  useEffect(() => {
    // Dispatch an action to fetch booked experts if needed
    // For demonstration purposes, setting empty array initially
    // You may dispatch an action to fetch data from the server here
    // dispatch(fetchBookedExperts());
    return () => {
      // Cleanup function when component is unmounted
      console.log("CalendarPage component unmounted");
    };
  }, []);

  const handleNavigateToOtherPage = () => {
    // Navigate to another page
    router.push("/other-page");
  };

  return (
    <div className="p-4 w-full container">
      <div className="mb-4">
        <BackButton title="Calender" />
      </div>
      <div className="flex items-center justify-center">
        <div className="calendar-container">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="#9c88ff"
            calendarClassName="custom-calendar "
            // calendarTodayClassName="w-full w-full !m-0"
          />
        </div>
      </div>
      <h3 className="mb-4 ml-4  font-bold text-md">Service Booking</h3>

      {/* Check if there are booked experts */}
      {bookedExperts.length > 0 ? (
        <div className="m-auto  w-full">
          {/* Render booked experts */}
          {bookedExperts.map((expert) => (
            <div
              key={expert.id}
              className="m-2 p-1 flex justify-center bg-[white]"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-[79px] h-[79px] rounded-lg"
              />
              <div className="w-full text-left ">
                <p className="font-bold mt-1 ml-2 w-full text-left text">
                  {expert.name}
                </p>
                <p className="!text-s text-left ml-2 text-mutedText">
                  {expert.category}
                </p>
                <button
                  onClick={() => router.push(`/experts/${expert.id}`)}
                  className=" !px-2 !text-s text-primary "
                >
                  View More Details
                </button>
              </div>
              <div>
                <Link
                  href="/messages?view=calls"
                  onClick={() => router.push(`/experts/${expert.id}`)}
                  className="button !py-1 max-w-[80px] !my-2 ml-1 !text-s "
                >
                  Call
                </Link>
                <Link
                  href="/messages?view=chats"
                  onClick={() => router.push(`/experts/${expert.id}`)}
                  className="button !p-1 !my-2 max-w-[80px]  !w-fit ml-1 !px-10 !text-s "
                >
                  Message
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-auto flex justify-center w-full">
          {/* Render order icon */}
          <Order />
        </div>
      )}

      {/* Conditional message based on whether there are booked experts */}
      {bookedExperts?.length > 0 ? (
        <div>{/* <p className="font-bold">Your booked experts:</p> */}</div>
      ) : (
        <div className="text-center">
          <p className="font-bold">You have no service booking</p>
          <p className="text-mutedText m-0">
            You have not booked services at this date.
          </p>
          <button
            className="button mdmax-w-[700px] inline-block !mb-20 max-w-[96%] mx-auto !mt-5"
            onClick={handleNavigateToOtherPage}
          >
            + Book New Service
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
