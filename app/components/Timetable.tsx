import { Day } from "./Day";
import { EventType } from "../types/EventType";

const times = {
  startTime: 24,
  endTime: 0,
};

type TimetableProps = {
  data: { [key: string]: EventType[] };
};

export function Timetable({ data }: TimetableProps) {
  Object.values(data).forEach((events) => {
    events.forEach((event) => {
      if (event.StartTime < times.startTime) {
        times.startTime = event.StartTime;
      }
      if (event.EndTime > times.endTime) {
        times.endTime = event.EndTime;
      }
    });
  });

  return (
    <div className="h-full p-4 gap-4 flex flex-col">
      <h1 className="text-5xl my-4 ">Timetable</h1>
      <div className="relative h-full">
        <div className="h-full w-full flex justify-between gap-8">
          {Object.keys(data).map((dayName) => (
            <Day dayName={dayName} key={dayName} times={times} events={data[dayName]} />
          ))}
        </div>
        <div className="absolute t-0 l-0 "></div>
      </div>
    </div>
  );
}
