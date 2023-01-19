import React from "react";
import { useParams } from "react-router";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>This is the EventDetailPage component for {params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
