// RegistrationCard.jsx
import React from "react";

const RegistrationCard = ({
    category,
    title,
    titleColor = "text-gray-800",
    description,
    lastDate,
    cardBg,
    buttonBg,
    buttonText = "Register Now",
    link
}) => {
    return (
        <div className={`${cardBg} shadow-xl rounded-2xl p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 border border-blue-400`}>
            <div className="text-center">
                <p className={`${titleColor} text-sm font-semibold`}>{category}</p>
                <h2 className={`${titleColor} text-xl md:text-2xl font-bold mt-1`}>{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>

            <div className="text-center flex flex-col gap-4 items-center">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full shadow-md mb-4">
                    ⏳ Last Date: {lastDate}
                </span>
                <a
                    href={link}
                    target="_blank"
                    className={`${buttonBg} w-2/3 text-center text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition`}
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default RegistrationCard;
