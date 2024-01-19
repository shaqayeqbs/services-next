import React from "react";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const StepThree = ({ selectedDate, selectedTime, onTimeChange }) => {
  const timeOptions = [
    { label: "09:00 AM", value: "09:00" },
    { label: "10:00 AM", value: "10:00" },
    { label: "11:00 AM", value: "11:00" },
    { label: "12:00 AM", value: "12:00" },
    { label: "1:00 PM", value: "13:00" },
    { label: "2:00 PM", value: "14:00" },
    { label: "3:00 PM", value: "15:00" },
    { label: "4:00 PM", value: "16:00" },
  ];

  const handleDateChange = (date) => {
    console.log("Selected Date:", date); // Log the selected date
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-center">
        {/* Calendar component */}
        <div className="calendar-container">
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            colorPrimary="red"
            calendarSelectedDayClassName="bg-primary"
            calendarClassName="custom-calendar "
          />
        </div>
      </div>

      {/* Time selection buttons */}
      <h2 className="font-bold my-6">Select starting time</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        {timeOptions.map((option) => (
          <button
            key={option.value}
            onClick={handleDateChange}
            className={`inline-block whitespace-nowrap text-center text text-primary py-1 px-5 border-2 border-primary mx-1 hover:bg-primary hover:text-white rounded-2xl ${
              selectedTime === option.value ? "bg-primary text-white" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
