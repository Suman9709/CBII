import React from "react";
import chairmansir from '../Images/chairman_img.png';
import vicechairman from '../Images/ViceChairman_ShivalikCollege.jpg';

const Managements = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-700 mb-4">Management's Message</h2>
                    <div className="w-24 h-1 bg-[rgb(118,8,37)] mx-auto"></div>
                </div>

                {/* Chairman */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12 md:flex">
                    {/* Image and Name */}
                    <div className="md:w-1/3 bg-[rgb(118,8,37)] flex flex-col items-center justify-center p-8 space-y-1">
                        <img
                            src={chairmansir} // placeholder image
                            alt="Chairman Sri Sunil Kumar"
                            className="w-40 h-40 object-cover rounded-full border-4 border-white"
                        />
                        <h3 className="text-2xl font-bold text-white text-center">Sri Sunil Kumar</h3>
                        <p className="text-white font-medium text-center">Hon’ble Chairman</p>
                    </div>
                    {/* Content */}
                    <div className="md:w-2/3 p-8">
                        <div className="text-gray-700 text-justify space-y-4">
                            <p><strong>Rijan Educational Society</strong></p>
                            <p>At Rijan Educational Society, we firmly believe that education must go beyond classrooms and contribute meaningfully to innovation, entrepreneurship, and societal growth. The establishment of the Centre for Business, Innovation & Incubation (CBII) is a step forward in this direction.</p>
                            <p>CBII has been envisioned as a dynamic platform where creativity meets technology, and ideas are nurtured into impactful solutions. It aims to inspire young minds to think innovatively, embrace challenges, and develop sustainable solutions that address real-world problems.</p>
                            <p>As Chairman, I take great pride in witnessing our students, faculty, and budding entrepreneurs work together in this vibrant ecosystem. CBII not only provides mentorship, infrastructure, and industry linkages but also instills the confidence and skills needed to transform ideas into successful ventures.</p>
                            <p>I invite students, startups, and industry collaborators to leverage the opportunities at CBII and contribute to building a self-reliant and progressive nation. Together, let us shape a future driven by innovation, entrepreneurship, and excellence.</p>
                        </div>
                    </div>
                </div>

                {/* Vice Chairman */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12 md:flex ">
                    {/* Image and Name */}
                    <div className="md:w-1/3 bg-[rgb(118,8,37)] flex flex-col items-center justify-center p-8 space-y-1.5">
                        <img
                            src={vicechairman} // placeholder image
                            alt="Vice Chairman Sri Ajay Kumar"
                            className="w-40 h-40 object-cover object-center rounded-full border-4 border-white"
                        />
                        <h3 className="text-2xl font-bold text-white text-center">Sri Ajay Kumar</h3>
                        <p className="text-white font-medium text-center"> Hon’ble Vice Chairman</p>
                    </div>
                    {/* Content */}
                    <div className="md:w-2/3 p-8">
                        <div className="text-gray-700 text-justify space-y-4">
                            <p><strong>Rijan Educational Society</strong></p>
                            <p>Innovation and entrepreneurship are the cornerstones of progress in today’s rapidly evolving world. With this vision, the Centre for Business, Innovation & Incubation (CBII) has been established to serve as a hub for nurturing creativity, fostering research-driven ideas, and empowering aspiring entrepreneurs.</p>
                            <p>CBII is designed to provide a collaborative platform where students, startups, and industry experts come together to explore opportunities, share knowledge, and co-create solutions for the future. It bridges the gap between academic learning and practical implementation, preparing our youth to become leaders, innovators, and changemakers.</p>
                            <p>As Vice Chairman, I am committed to supporting this initiative that not only strengthens our educational ecosystem but also contributes to the larger mission of nation-building. I encourage every student and innovator to take advantage of the resources, mentorship, and opportunities at CBII to bring their ideas to life.</p>
                            <p>Together, let us create a culture of innovation that inspires excellence and drives sustainable growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Managements;
