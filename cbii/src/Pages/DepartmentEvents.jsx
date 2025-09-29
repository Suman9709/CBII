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


                
                    <UpcommingEventcard
                        img={hackathonPic}
                        eventName="Hackathon"
                        description="Hackathon 2025 – A 30-hour innovation marathon by CBII where bright minds collaborate to code, create prototypes, and develop real-world solutions. It’s a battle of creativity, technology, and endurance to transform ideas into impactful innovations."
                        buttonName="Register Now"
                        fileUrl="/docs/hackathon2025.pdf"
                    />
              

                
                    <UpcommingEventcard
                        img={codehunt}
                        eventName="Code Hunt"
                        description="Code Hunt – A fast-paced competitive coding challenge where participants race against time to solve algorithmic puzzles and logical problems. It tests programming skills, problem-solving ability, and speed, rewarding those who can crack codes under pressure."
                        buttonName="Register Now"
                        fileUrl="/docs/code_hunt.pdf"
                    />
                


                {/* <Link to="/event/upcoming/sciencechampioship"> */}
                    <UpcommingEventcard
                        img={projectExhibition}
                        eventName="Project Exhibition"
                        description="Science Championship 4.0 is a State-Level Inter-School Scientific Innovation Competition curated by CBII, Shivalik College of Engineering to identify, nurture, and inspire the scientific leaders of tomorrow."
                        buttonName="Register Now"
                        fileUrl="/docs/project_exihibition.pdf"
                    />
                {/* </Link> */}
            </div>
        </div>
    )
}

export default DepartmentProject