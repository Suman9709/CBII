import React from 'react'
import { Link } from 'react-router-dom';
import hackathonPic from '../Images/EventPoster/hackathon2025.webp'
import sih2025 from '../Images/EventPoster/sih2025.jpg'
import UpcommingEventcard from "../Components/UpcommingEventCard";
import ideathon from '../Images/EventPoster/ideathon5.png'
import codehunt from '../Images/EventPoster/codehunt.png'
import projectExhibition from '../Images/EventPoster/projectexhibition.png'
import shivatech from '../Images/EventPoster/shivatech2025.webp'
import formutech from '../Images/EventPoster/formutech.jpg'
import herboinnovate from '../Images/EventPoster/herboinnovate.jpg'
import smarthealthmodel from '../Images/EventPoster/smarthealthmodel.jpg'

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
                    description="he Project Exhibition provides a platform for students to showcase their innovative projects, prototypes, and research models across diverse domains of science, engineering, and technology."
                    buttonName="Register Now"
                    fileUrl="/docs/project_exihibition.pdf"
                />
                {/* </Link> */}
            </div>

            <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-center mb-2'> Departmental Events</h1>


            <div className='flex flex-col'>
                <div className='w-full p-2 '>
                    <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Computer Science and Engineering</h1>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Coding Treasure-hunt"
                        description="Unravel puzzles and coding clues to advance through a digital treasure trail."
                        buttonName="Register Now"
                        fileUrl="/docs/cse.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Gigabit"
                        description="A progressive problem-solving contest where difficulty scales with each cleared round. "
                        buttonName="Register Now"
                        fileUrl="/docs/cse.pdf"
                    />

                    {/* <Link to="/event/upcoming/sciencechampioship"> */}
                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Coding Quiz"
                        description="Battle of coding brains with MCQs, debugging, and rapid-fire coding trivia."
                        buttonName="Register Now"
                        fileUrl="/docs/cse.pdf"
                    />
                    {/* </Link> */}
                </div>

                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Electronics and Communication Engineering</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">


                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Lego Compitition"
                        description="Making lego(Robot)that will detect the obstacles, using ultrasonic and microphone sensors, where ultrasonic sensor will detect the obstacles by waves reflation and microphone will listen the sound of clapping. "
                        buttonName="Register Now"
                        fileUrl="/docs/ece.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="CircuitSim Expo"
                        description=" Bridge theory and practice through simulation-driven circuit design and integration. "
                        buttonName="Register Now"
                        fileUrl="/docs/ece.pdf"
                    />



                    {/* <Link to="/event/upcoming/sciencechampioship"> */}
                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Virtual to Practical Electronics"
                        description="Virtual to Practical Electronics challenges students to design circuits on simulation software, testing creativity and technical skills. "
                        buttonName="Register Now"
                        fileUrl="/docs/ece.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Solder War"
                        description="Solder Wars is an exciting hands-on competition where participants battle against time and precision using their soldering skills."
                        buttonName="Register Now"
                        fileUrl="/docs/ece.pdf"
                    />
                    {/* </Link> */}
                </div>

                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Mechenical Engineering</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">


                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Best out of Waste"
                        description="Turn scraps into marvels with sustainable and innovative creations."
                        buttonName="Register Now"
                        fileUrl="/docs/me.pdf"
                    />



                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Roborace"
                        description="Test the limits of speed and control in high intensity robotic racing challenges."
                        buttonName="Register Now"
                        fileUrl="/docs/me.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Dgital Design"
                        description=" Unleash creativity in 3D model-based design innovation. "
                        buttonName="Register Now"
                        fileUrl="/docs/me.pdf"
                    />


                </div>

                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Civil Engineering</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">


                    <UpcommingEventcard
                        img={shivatech}
                        eventName="High-Rise Hustle"
                        description="Teams compete to build the tallest and most stable free standing structure within a time limit. (Materials: Paper, cardboard, or newspapers, Straws or spaghetti sticks, Tape, rubber bands, or glue."
                        buttonName="Register Now"
                        fileUrl="/docs/civil.pdf"
                    />



                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Quake the Build"
                        description="Teams build a small model of a building/structure from simple materials (popsicle sticks, straws, cardboard, glue, etc.). "
                        buttonName="Register Now"
                        fileUrl="/docs/civil.pdf"
                    />
                </div>


                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Bachelor of Business Administration</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Old Product, New Story"
                        description="A creativity-based event where participants are given an existing product and challenged to rebrand it with a fresh marketing story, slogan, or positioning. "
                        buttonName="Register Now"
                        fileUrl="/docs/bba.pdf"
                    />
                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Brand Tambola"
                        description="An engaging twist on the traditional game of Tambola, where numbers are replaced with brand logos, taglines, or product names. "
                        buttonName="Register Now"
                        fileUrl="/docs/bba.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Negotiation Duels"
                        description="A role-play competition where participants engage in simulated business negotiations. Each team is assigned roles such as buyer, seller, or mediator and must use persuasion, communication, and strategy to secure the best deal.  "
                        buttonName="Register Now"
                    // fileUrl="/docs/project_exihibition.pdf"
                    />
                </div>

                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Bachelor of Pharmacy</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">

                    <UpcommingEventcard
                        img={herboinnovate}
                        eventName="HerboInnovate"
                        description="Exhibition of self-prepared formulations inspired by Ayurveda and natural products including nutraceuticals, herbal extracts, cosmeceuticals, and wellness products with scientific justification and modern relevance."
                        buttonName="Register Now"
                        fileUrl="/docs/pharma.pdf"
                    />
                    <UpcommingEventcard
                        img={formutech}
                        eventName="FormuTech"
                        description="Presentation of self-prepared allopathic pharmaceutical dosage forms such as tablets, capsules, suspensions, ointments, and novel drug delivery prototypes highlighting the art and science of formulation."
                        buttonName="Register Now"
                        fileUrl="/docs/pharma.pdf"
                    />

                    <UpcommingEventcard
                        img={smarthealthmodel}
                        eventName="Smart Health Models"
                        description="Demonstration of innovative working models showcasing the application of pharmacy and healthcare practices in improving patient care, drug delivery, and diagnostics."
                        buttonName="Register Now"
                        fileUrl="/docs/pharma.pdf"
                    />
                </div>


                <h1 className='text-3xl text-[rgb(118,8,37)] mt-4 font-bold text-start mb-2 mx-6'> Bachelor of Science in Agriculture</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 ">

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Farm Hack"
                        description="An agri-innovation challenge to develop cost-effective, scalable solutions for farming . "
                        buttonName="Register Now"
                        fileUrl="/docs/agriculture.pdf"
                    />
                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Agri Nova"
                        description="Showcase of futuristic agricultural technologies blending sustainability and smart farming. "
                        buttonName="Register Now"
                        fileUrl="/docs/agriculture.pdf"
                    />

                    <UpcommingEventcard
                        img={shivatech}
                        eventName="Pitch the Plough"
                        description="Entrepreneurial pitching competition tailored for agri-tech and rural innovations.  "
                        buttonName="Register Now"
                        fileUrl="/docs/agriculture.pdf"
                    />
                </div>
            </div>
        </div>
    )
}

export default DepartmentProject