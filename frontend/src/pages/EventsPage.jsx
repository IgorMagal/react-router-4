import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", name: "event1" },
  { id: "e2", name: "event2" },
  { id: "e3", name: "event3" },
  { id: "e4", name: "event4" },
  { id: "e5", name: "event5" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((e) => {
          return (
            <li key={e.id}>
              <Link to={e.id}>{e.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventsPage;
