import React from 'react';

const ImageCard = ({ img, name1, designation, organisation, qualifications }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-96">

      {/* Image Section - 50% height */}
      <div className="h-1/2 w-full relative">
        <img
          src={img}
          alt={name1}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section - 50% height */}
      <div className="h-1/2 w-full p-4 flex flex-col justify-center items-center text-center bg-white rounded-b-xl shadow-md relative">


        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-[rgb(118,8,37)] transition-colors duration-300">{name1}</h2>

        <p className="text-gray-600 mb-1 font-small">{designation}</p>
        <p className="text-gray-600 mb-1 italic">{organisation}</p>

        {/* Optional subtle hover lift */}
        <div className="absolute inset-0 rounded-b-xl transition-transform duration-300 hover:translate-y-[-4px]"></div>
      </div>

    </div>
  );
};

export default ImageCard;
