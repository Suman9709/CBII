import React, { useEffect, useState } from 'react';
import EventsCard from '../Components/EventsCard';
import { Link } from 'react-router-dom';
import eventsData from '../Api/Events.json'

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, [])

  return (
    <div className="p-4 w-full flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/pastevents/${event.id}`}
            className="block"
          >
            <EventsCard
              img={event.img}
              eventName={event.eventName}
              description={event.description}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsPage;
