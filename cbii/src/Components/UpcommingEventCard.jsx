import React from 'react';

const UpcommingEventcard = ({ img, eventName, description, buttonName, titleSize, fileUrl }) => {
    // Handle download when "Register Now" is clicked
    const handleDownload = () => {
        if (fileUrl) {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.setAttribute("download", fileUrl.split("/").pop()); // download with file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    // Decide which button text to show
    const isRegister = buttonName === "Register Now";
    const displayName = buttonName || "Know More";

    return (
        <div className="w-full max-w-md border border-gray-100 rounded-2xl shadow-xl overflow-hidden flex flex-col h-96 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">

            {/* Image Section */}
            <div className="h-[50%] w-full flex items-start overflow-hidden">
                <img
                    src={img}
                    alt={eventName}
                    className="w-full h-full object-contain object-center transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="h-1/2 w-full px-6 py-4 flex flex-col justify-between">
                <div className="text-center">
                    {titleSize && (
                        <h2 className={`${titleSize} font-bold text-gray-800 text-center`}>
                            {eventName}
                        </h2>
                    )}
                    <h2 className="font-bold text-gray-800 text-center">
                        {eventName}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={isRegister ? handleDownload : undefined}
                        className="btn btn-primary transition-transform duration-300 hover:scale-105"
                    >
                        {displayName}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpcommingEventcard;
