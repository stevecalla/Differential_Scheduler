import React, { useState, useEffect } from "react";
import "./Calendar.css";

interface TimeData {
  [key: string]: string[];
}

const timeData: TimeData = {
  "2024-12-03": ["7:45 AM", "10:00 AM", "1:15 PM", "3:30 PM", "5:45 PM", "8:00 PM"],
  "2024-12-04": ["9:00 AM", "12:30 PM", "4:00 PM"],
  "2024-12-05": ["8:15 AM", "11:00 AM", "1:45 PM", "4:30 PM", "6:15 PM"],
  "2024-12-06": ["7:30 AM", "10:15 AM", "12:00 PM", "2:45 PM", "5:30 PM", "7:15 PM"],
  "2024-12-09": ["8:00 AM", "9:30 AM", "12:00 PM", "3:00 PM", "6:00 PM", "8:30 PM"],
  "2024-12-10": ["7:15 AM", "9:00 AM", "11:45 AM", "2:30 PM", "4:15 PM"],
  "2024-12-11": ["8:30 AM", "10:00 AM", "1:30 PM", "4:00 PM", "6:30 PM", "9:00 PM"],
  "2024-12-12": ["9:15 AM", "11:00 AM", "1:45 PM", "3:30 PM", "5:15 PM"],
  "2024-12-13": ["7:45 AM", "10:30 AM", "12:15 PM", "2:00 PM", "4:45 PM", "6:30 PM", "9:15 PM"],
  "2024-12-14": ["8:00 AM", "9:45 AM", "11:30 AM", "1:15 PM", "3:00 PM"],
  "2024-12-15": ["7:30 AM", "10:00 AM", "12:45 PM", "3:30 PM", "5:15 PM", "7:00 PM", "8:45 PM"],
  "2024-12-16": ["8:15 AM", "10:45 AM", "12:30 PM", "2:15 PM", "5:00 PM"],
  "2024-12-17": ["7:00 AM", "8:45 AM", "10:30 AM", "12:15 PM", "3:00 PM", "4:45 PM", "6:30 PM", "8:15 PM"],
  "2024-12-18": ["7:30 AM", "9:15 AM", "11:00 AM", "12:45 PM", "2:30 PM", "4:15 PM"],
  "2024-12-19": ["8:00 AM", "9:45 AM", "11:30 AM", "1:15 PM", "3:00 PM", "4:45 PM", "6:30 PM"],
  "2024-12-20": ["7:45 AM", "9:30 AM", "11:15 AM", "1:00 PM", "2:45 PM", "4:30 PM", "6:15 PM", "8:00 PM"],
  "2024-12-23": ["8:30 AM", "10:15 AM", "12:00 PM", "1:45 PM", "3:30 PM"],
  "2024-12-24": ["7:15 AM", "8:45 AM", "10:30 AM", "12:15 PM", "2:00 PM", "3:45 PM", "5:30 PM"],
  "2024-12-25": ["8:00 AM", "9:30 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:00 PM"],
  "2024-12-26": ["7:00 AM", "8:30 AM", "10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"],
  "2024-12-27": ["7:45 AM", "9:15 AM", "10:45 AM", "12:15 PM", "1:45 PM", "3:15 PM", "4:45 PM", "6:15 PM", "7:45 PM"]
};

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleSelectDay = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected);
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    const isSameMonth = year === today.getFullYear() && month === today.getMonth();

    const calendarDays: JSX.Element[] = [];

    // Empty cells before the first day
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div className="calendar-cell empty" key={`empty-${i}`} />);
    }

    // Days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const cellDate = new Date(year, month, day);
      const formattedDate = cellDate.toISOString().split("T")[0];
      const isPastDay = cellDate < today && (!isSameMonth || day < today.getDate());
      const hasAvailableTime = !!timeData[formattedDate];
      const isSelected = selectedDate?.toDateString() === cellDate.toDateString();

      calendarDays.push(
        <div
          key={day}
          className={`calendar-cell 
            ${isPastDay ? "past" : ""} 
            ${hasAvailableTime ? "available" : ""} 
            ${isSelected ? "selected" : ""}`}
          onClick={!isPastDay ? () => handleSelectDay(day) : undefined}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const renderAvailableTimes = () => {
    if (!selectedDate) return null;

    const formattedDate = selectedDate.toISOString().split("T")[0];
    const times = timeData[formattedDate];

    if (!times) return <p>No available times for this day.</p>;

    return (
      <div className="available-times">
        <h3>Available Times for {selectedDate.toLocaleDateString()}</h3>
        <ul>
          {times.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    );
  };

  const currentMonthYear = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getFullYear()}`;

  const isPrevDisabled =
    currentDate.getFullYear() === new Date().getFullYear() &&
    currentDate.getMonth() === new Date().getMonth();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} disabled={isPrevDisabled}>
          Prev
        </button>
        <span>{currentMonthYear}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid">{renderCalendarDays()}</div>
      {renderAvailableTimes()}
    </div>
  );
};

export default Calendar;
