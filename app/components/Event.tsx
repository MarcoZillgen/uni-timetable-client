import { EventType } from "../types/EventType";
import { COLORS } from "../constants/Colors";

type EventProps = {
  event: EventType;
  times: { startTime: number; endTime: number };
};

export function Event({ event, times }: EventProps) {
  return (
    <div
      className="w-full absolute p-3 grid place-items-center hover:scale-105 transition-all group ease-linear"
      style={{
        height: `${
          ((event.EndTime - event.StartTime) /
            (times.endTime - times.startTime)) *
          100
        }%`,
        top: `${
          ((event.StartTime - times.startTime) /
            (times.endTime - times.startTime)) *
          100
        }%`,
      }}
    >
      <div
        className="p-4 pl-6 rounded-md h-full shadow-black group-hover:shadow-lg w-full relative box-border justify-between flex flex-col transition-all ease-linear"
        style={{
          backgroundColor: COLORS[event.Color].light,
        }}
      >
        <div
          className="absolute top-0 left-0 rounded-md rounded-e-none w-2 h-full "
          style={{
            backgroundColor: COLORS[event.Color].dark,
          }}
        />
        <h3 className="text-xl font-bold truncate border-b-2 border-white border-opacity-25 pb-2">
          {event.Title}
        </h3>
        <p className="text-sm flex flex-col justify-between truncate">
          <span>{event.Place}</span>
          <span className="flex justify-between w-full">
            <span>{event.EventType}</span>
            <span>
              {event.StartTime} - {event.EndTime}
            </span>
          </span>
          <span></span>
        </p>
      </div>
    </div>
  );
}
