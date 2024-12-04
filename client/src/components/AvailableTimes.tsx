import React, { useState } from "react";
import {DaysWithRanges} from "./calendar";


interface AvailableTimesProps {
  activeView: "Inspector" | "Client";
  inspectorTimes : DaysWithRanges,
  clientTimes : DaysWithRanges,
  selectedDate: Date | null;
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  inspectorTimes,
  clientTimes,
  selectedDate,
}) => {
  const [activeView, setActiveView] = useState<"Inspector" | "Client">(
    "Inspector"
  );

  if (!selectedDate) {
    return (
      <div className="available-times">
        <h3>No Times Available</h3>
      </div>
    );
  }

  // Determine the currently active times
  const times =
    activeView === "Inspector"
      ? inspectorTimes || []
      : clientTimes || [];

  // Determine the number of columns dynamically
  const columnCount = 5
    //times.length > 21 ? 4 : times.length > 14 ? 3 : times.length > 7 ? 2 : 1
    // ! This print needs to be buttons
    const print = JSON.stringify(times.daysMap.get(selectedDate.toISOString()))

  return (
    <div className="available-times">
      {/* Slider */}
      <div className="available-times-slider">
        <button
          className={activeView === "Inspector" ? "active" : ""}
          onClick={() => setActiveView("Inspector")}
        >
          Inspector
        </button>
        <button
          className={activeView === "Client" ? "active" : ""}
          onClick={() => setActiveView("Client")}
        >
          Client
        </button>
      </div>

      {/* Display Times */}
      <h3>
        {activeView} Times for {selectedDate.toLocaleDateString()}
        {print}
      </h3>
      <div
        className={`available-times-grid ${
          activeView === "Inspector" ? "inspector" : "client"
        }`}
        style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
      >
        {/* {times.map((time, index) => (
          <button key={index} onClick={() => onTimeClick(time)}>
            {time.daysMap}
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default AvailableTimes;
