import { Timetable } from "./components/Timetable";
import { EventType } from "./types/EventType";

export default async function Home() {
  const fetchedData = await fetch("http://localhost:8080/api/notion/data").then(
    (res) => res.json()
  );

  const data: { [key: string]: EventType[] } = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  fetchedData.forEach((event: EventType) => {
    if (!data[event.Day]) {
      if (event.Day == "") {
        return;
      }
      throw new Error("Invalid day:" + event.Day);
    }
    data[event.Day].push(event);
  });

  if (data.Saturday.length === 0) {
    delete data.Saturday;
  }
  if (data.Sunday.length === 0) {
    delete data.Sunday;
  }

  return (
    <div className="h-full bg-zinc-900 text-white grid items-center p-12  font-mono">
      <Timetable data={data} />
    </div>
  );
}
