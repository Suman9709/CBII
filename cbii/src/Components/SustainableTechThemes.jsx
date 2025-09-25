// SustainableTechThemes.jsx
import React from 'react';

const themes = [
    {
        title: "Sustainable Energy & Environment",
        description: "Focus on clean energy, waste reduction and ecosystem protection.",
        icon: "🔋",
        sdgs: ["SDG 7", "SDG 11", "SDG 12", "SDG 13", "SDG 15"],
        bgColor: "#ff7e57",
    },
    {
        title: "Smart Cities & Infrastructure",
        description: "Sensible urban growth with resilient infrastructure and mobility.",
        icon: "🏙️",
        sdgs: ["SDG 9", "SDG 11"],
        bgColor: "#0ab1c8"
    },
    {
        title: "Food Security & Agriculture",
        description: "Sustainable agriculture, circular food systems, reduced waste.",
        icon: "🌱",
        sdgs: ["SDG 2", "SDG 12", "SDG 15"],
        bgColor: "#0ab1c8"
    },
    {
        title: "Healthcare & Wellbeing",
        description: "Accessible health solutions and community wellbeing tech.",
        icon: "🩺",
        sdgs: ["SDG 3", "SDG 9"],
    },
    {
        title: "Governance, Security & Disaster Response",
        description: "Tech for safer communities, strong governance & faster response.",
        icon: "🛡️",
        sdgs: ["SDG 9", "SDG 11", "SDG 16"],
    },
];

const SustainableTechThemes = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className='p-6 mb-4 w-full flex items-center gap-4'>
                {/* Icon with background */}
                <div className='w-16 h-16 flex items-center justify-center bg-blue-700 text-white text-4xl rounded-xl'>
                    ⚡
                </div>

                {/* Text content */}
                <div className='flex flex-col justify-center text-gray-700'>
                    <h2 className="text-2xl font-bold mb-2">Sustainable Tech Themes</h2>
                    <p className="text-gray-600">Five focus areas mapped to UN SDGs</p>
                </div>
            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 hover:shadow-xl transition"
                    >
                        <div className='flex  w-full items-center gap-4'>
                            <div className="text-4xl py-1 rounded-xl" style={{ backgroundColor: theme.bgColor }}>{theme.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg " >{theme.title}</h3>
                                <p className="text-gray-600">{theme.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {theme.sdgs.map((sdg, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {sdg}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SustainableTechThemes;
