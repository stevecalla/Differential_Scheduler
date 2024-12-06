import json from './api_response_sample.json' with { type: "json" };
import { ClockTime, TimePeriod } from './timeslots';

const eventArray: TimePeriod[] = [];

for (let i = 0; i < json.items.length; i++) {
let startTime = json.items[0].start.dateTime;
let endTime = json.items[0].end.dateTime;
let availability = json.items[0].transparency;

let available = true;

if (availability === "transparent") {
    available = true;
}

else {
    available = false;
}

let startTimeHr= startTime.slice(11, 13) as unknown as number;
let startTimeMin = startTime.slice(14,16) as unknown as number;
let endTimeHr = endTime.slice(11,13) as unknown as number;
let endTimeMin = endTime.slice(14,16) as unknown as number;

let startTimeConvert: ClockTime =  { hours: startTimeHr, minutes: startTimeMin }
let endTimeConvert: ClockTime =  { hours: endTimeHr, minutes: endTimeMin }

let eventPeriod: TimePeriod = {start: startTimeConvert, end: endTimeConvert, availability: available}

eventArray.push(eventPeriod);
}

export default eventArray;



// console.log(startTimeConvert);
// console.log(endTimeConvert);
