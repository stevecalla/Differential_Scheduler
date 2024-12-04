import Calendar from "../components/calendar.js";
import {inspectorTimes, clientTimes} from "../data/timeData.js"
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