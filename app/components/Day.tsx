import { EventType } from "../types/EventType";
import { EventContainer } from "./EventContainer";

type DayProps = {
  dayName: string;
  events: EventType[];
  times: { startTime: number; endTime: number };
};

export function Day({ dayName, events, times }: DayProps) {
  events.sort((a, b) => a.StartTime - b.StartTime);

  return (
    <div className="h-full w-full flex flex-col capitalize rounded-md">
      <h2 className="text-2xl font-thin p-4 text-center w-full rounded-md">
        {dayName}
      </h2>
      <EventContainer events={events} times={times} />
    </div>
  );
}
