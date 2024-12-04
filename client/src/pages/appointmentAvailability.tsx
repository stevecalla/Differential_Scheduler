import Calendar from "../components/calendar.js";
import {inspectorTimes, clientTimes} from "../data/timeData.js"
// import {getRandomData} from "../data/timeData.js"

// const inspectorTimes = {daysMap : getRandomData()}
// const clientTimes = {daysMap : getRandomData()}
const AppointmentAvailability = () => {
    return (
      
      <section>       
        <h1>Appointment Availability</h1>
        <Calendar
          inspectorTimes={inspectorTimes}
          clientTimes={clientTimes}
        /> 
      </section>
    );
  };
  
  export default AppointmentAvailability;