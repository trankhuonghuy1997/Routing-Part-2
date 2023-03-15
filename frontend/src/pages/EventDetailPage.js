import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
};
export default EventDetailPage;

export const loader = async ({ requets, params }) => {
  const id = params.some_id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch events", status: 500 })
    );
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const id = params.some_id;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not delete events", status: 500 })
    );
  }
  return redirect("/events");
};
