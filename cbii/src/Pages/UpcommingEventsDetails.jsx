import React, { useEffect, useState } from 'react'
import currentEventsData from '../Api/currentEvents.json'
import { useParams } from 'react-router-dom'
const UpcommingEventsDetails = () => {

    const { id } = useParams()
    const [event, setEvent] = useState(null)

    useEffect(() => {
        const foundEvent = currentEventsData.find(events => events.id === parseInt(id))
        setEvent(foundEvent)
    }, [id])

    if (!event) {
        return <h1 className="text-center mt-10">Event not found.</h1>
    }
    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* poster  */}
            <div className="w-full mb-6">
                <img
                    src={event.img}
                    alt={event.name}
                    className="w-full h-72 object-cover rounded-lg shadow-md"
                />
            </div>

            {/* title and description */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{event.name}</h1>

                {
                    Array.isArray(event.description) ? (
                        event.description.map((para, index) => (
                            <p
                                className="mb-4 text-lg text-gray-700 leading-relaxed"
                                key={index}>{para}</p>
                        ))
                    ) : (
                        event.description.split("\n\n").map((para, index) => (
                            <p key={index}
                                className="mb-4 text-lg text-gray-700 leading-relaxed"
                            >{para}</p>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default UpcommingEventsDetails