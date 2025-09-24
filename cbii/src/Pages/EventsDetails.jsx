import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import eventsData from '../Api/Events.json'

const EventsDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null)

    useEffect(() => {
        const foundEvent = eventsData.find(event => event.id === parseInt(id));
        setEvent(foundEvent)
    }, [id])

    if (!event) {
        return <h1 className="text-center mt-10">Event not found.</h1>
    }

    return (
        <div className='w-full max-w-3xl mx-auto mt-2'>
            {/* Poster Image */}
            <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden ">
                <img
                    src={event.img}
                    alt={event.eventName}
                    className="w-full h-full object-contain object-center"
                />
            </div>


            {/* Title & Description */}
            <div className="mt-6 p-6 bg-gray-50 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-2">{event.eventName}</h1>
                <div className=" h-1 w-36 bg-[#841B31] rounded-full"></div>
                <p className="text-gray-700 mt-4">{event.description}</p>
            </div>
        </div>
    )
}

export default EventsDetails
