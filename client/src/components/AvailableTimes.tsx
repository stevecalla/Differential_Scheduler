import React, { useState } from "react";
import { TimeRange } from "./calendar";

interface AvailableTimesProps {
  activeView: "Inspector" | "Client";
  times: TimeRange[];
  selectedDate: Date | null;
  onTimeClick: (time: TimeRange) => void;
}

const AvailableTimes: React.FC<AvailableTimesProps> = ({
  inspectorTimes,
  clientTimes,
  selectedDate,
  onTimeClick,
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
      ? inspectorTimes[selectedDate.toISOString().split("T")[0]] || []
      : clientTimes[selectedDate.toISOString().split("T")[0]] || [];

  // Determine the number of columns dynamically
  const columnCount = 5
    //times.length > 21 ? 4 : times.length > 14 ? 3 : times.length > 7 ? 2 : 1;

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
      </h3>
      <div
        className={`available-times-grid ${
          activeView === "Inspector" ? "inspector" : "client"
        }`}
        style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
      >
        {times.map((time, index) => (
          <button key={index} onClick={() => onTimeClick(time)}>
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvailableTimes;
