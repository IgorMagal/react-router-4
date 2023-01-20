import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  if (data.error) {
    return <p>{data.message}</p>;
  }

  return <EventsList events={events} />;
}

export default EventsPage;

export const EventsLoader = async () => {
  const response = await fetch("http://localhost:8080/eventsasdasd");

  if (!response.ok) {
    // return {
    //   error: true,
    //   message: "Could not fetch data for this page",
    // };
    throw new Error("Could not fetch data!");
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
};
