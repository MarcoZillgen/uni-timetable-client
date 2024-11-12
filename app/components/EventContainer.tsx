"use client";

import { useState } from "react";
import { EventType } from "../types/EventType";
import { Event } from "./Event";

type EventContainerProps = {
  events: EventType[];
  times: { startTime: number; endTime: number };
};

export function EventContainer({ events, times }: EventContainerProps) {
  const [todayDate, setTodayDate] = useState(new Date());
  setInterval(() => {
    setTodayDate(new Date());
  }, 1000);

  const today = todayDate.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days.indexOf(events[0].Day);

  return (
    <div className="h-full w-full py-1 relative bg-zinc-800 rounded-lg">
      {events.map((event, i) => (
        <Event event={event} times={times} key={i} />
      ))}
      {/* before today */}
      {day < today && (
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-50 rounded-lg" />
      )}
      {/* today */}
      {day == today && (
        <div
          className="absolute top-0 left-0 w-full bg-zinc-900 bg-opacity-50 border-b-2 border-red-500 grid content-end place-content-end"
          style={{
            height: `${
              ((todayDate.getHours() +
                todayDate.getMinutes() / 60 -
                times.startTime) /
                (times.endTime - times.startTime)) *
              100
            }%`,
          }}
        >
          <span className="mr-2">
            {todayDate.getHours()}:
            {todayDate.getMinutes().toString().padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
