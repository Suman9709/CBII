import React from 'react'
import { Link } from 'react-router-dom';
import hackathonPic from '../Images/EventPoster/hackathon2025.webp'
import sih2025 from '../Images/EventPoster/sih2025.jpg'
import UpcommingEventcard from "../Components/UpcommingEventCard";
import ideathon from '../Images/EventPoster/ideathon5.png'
import codehunt from '../Images/EventPoster/codehunt.png'
import projectExhibition from '../Images/EventPoster/projectexhibition.png'


const DepartmentProject = () => {
    return (
        <div>
            <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-center'> Shivatech Events</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
                <Link to="/events/upcoming/ideathon">
                    <UpcommingEventcard
                        img={ideathon}
                        eventName="Ideathon 2025"
                        description="The Center of Business Incubation and Innovation (CBII) at Shivalik College of Engineering, Dehradun, is committed to fostering entrepreneurship and innovation."
                        buttonName="Know More"
                    />
                </Link>


                <a
                    href="https://forms.gle/fkd49F4ps8feSsWY7"
                    target="_blank"
                >
                    <UpcommingEventcard
                        img={hackathonPic}
                        eventName="Hackathon"
                        description="CBII, Shivalik College of Engineering, will be conducting an Internal Hackathon on 29th September 2025 as the first phase of the Smart India Hackathon (SIH) 2025."
                        buttonName="Register Now"
                    />
                </a>

                <Link to="/event/upcoming/shivatech">
                    <UpcommingEventcard
                        img={codehunt}
                        eventName="Code Hunt"
                        description="Technology is not just about machines—it is about reimagining the future. Shivatech 2025 is a National Level Inter-College Technical Fest, designed to ignite creativity, innovation, and problem-solving among young minds. "
                        buttonName="Register Now"
                    />
                </Link>


                <Link to="/event/upcoming/sciencechampioship">
                    <UpcommingEventcard
                        img={projectExhibition}
                        eventName="Project Exhibition"
                        description="Science Championship 4.0 is a State-Level Inter-School Scientific Innovation Competition curated by CBII, Shivalik College of Engineering to identify, nurture, and inspire the scientific leaders of tomorrow."
                        buttonName="Register Now"
                    />
                </Link>
            </div>
        </div>
    )
}

export default DepartmentProject