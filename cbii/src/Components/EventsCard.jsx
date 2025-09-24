import React from 'react';

const EventsCard = ({ img, eventName, description, buttonName }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-96 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      {/* Image Section - 50% height */}
      <div className="h-[65%] w-full relative overflow-hidden">
        <img
          src={img}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Optional overlay for text or gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content Section - 50% height */}
      <div className="h-1/2 w-full px-6 py-4 flex flex-col justify-between">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{eventName}</h2>
          <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
        </div>
        {/* <div className="flex justify-center mt-4">
          <button className="btn btn-primary transition-transform duration-300 hover:scale-105">
            {buttonName}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default EventsCard;
