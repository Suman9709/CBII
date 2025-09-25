// EventPhaseCard.jsx
import React from 'react';

const EventPhaseCard = ({ phaseTag, title, content }) => {
    return (
        <div className={`w-full max-w-4xl mx-auto my-4 p-6 bg-white shadow-md rounded-lg border-l-4
    ${phaseTag === "PHASE 1"
                ? "border-blue-600"
                : phaseTag === "PHASE 2"
                    ? "border-red-600"
                    : "border-green-600"
            }`}
        >
            {/* Phase Tag */}
            {phaseTag && (
                <h3 className="text-xl font-bold text-blue-700 mb-2">{phaseTag}</h3>
            )}

            {/* Title */}
            {title && (
                <h2 className="text-md text-black mb-4">{title}</h2>
            )}

            {/* Content */}
            {content && content.length > 0 && (
                <div className="text-gray-700 space-y-4">
                    {content.map((block, index) => {
                        if (block.type === "list") {
                            return (
                                <div key={index}>
                                    {block.heading && (
                                        <h4 className="font-semibold mb-1">{block.heading}</h4>
                                    )}
                                    <ul className="list-disc list-inside ml-4">
                                        {block.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        if (block.type === "paragraph") {
                            return (
                                <p key={index} className="leading-relaxed">
                                    {block.text}
                                </p>
                            );
                        }

                        return null;
                    })}
                </div>
            )}
        </div>
    );
};

export default EventPhaseCard;
