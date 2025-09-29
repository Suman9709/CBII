import React from 'react'
import ideathon from '../Images/ideathon-02.png'

import cbiiLogo from '../Images/Logo/cbii_Logo.png'
import awadh from '../Images/Logo/awadh.svg'
import shivalik from '../Images/Logo/shivalik.png'
import startUpUttrakhand from '../Images/Logo/startuputtrakhand.png'
import ihubdivyasamprk from '../Images/Logo/ihubdivyasampark.png'

import elonMusk from '../Images/ElonMusk.webp'
import samAltman from '../Images/Sam Altman.webp'
import dhavalShah from '../Images/Dhaval shah.webp'
import zepto from '../Images/Aadit Zepto.webp'

import startUpProcess from '../Images/startup process.png'


import { Link } from 'react-router-dom'
import EventPhaseCard from './EventPhaseCard'
import ideathonData from '../Api/ideathonData.json'
import SustainableTechThemes from './SustainableTechThemes'
import RegistrationCard from './RegistrationCard'
import WinnerCard from './WinnerCard'
import ContactCard from './ContactCard'
const Ideathon = () => {

    const entrepreneurs = [
        { name: "Elon Musk", image: elonMusk, description: "Founded Zip2, in 1995 at the age of 24." },
        { name: "Sam Altman", image: samAltman, description: "Founded Open-AI in 2015 at the age of 30." },
        { name: "Dhaval Shah", image: dhavalShah, description: "Founded PharmEasy in 2015 at the age of 28." },
        { name: "Aadit Palicha", image: zepto, description: "Started KiranaKart, at the age of just 17." },
    ]


    return (
        <div className="ideathon-container mb-4">
            {/* Hero Section / Poster */}
            <div className="w-full relative">
                <img
                    src={ideathon}
                    alt="ideathon poster"
                    className="w-full h-auto object-cover filter brightness-50"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-6 md:p-8">
                    <h1 className="text-xl sm:text-2xl md:text-6xl  font-bold text-center mb-2 mt-4">
                        IDEATHON 2025
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg text-center mb-4 max-w-xs sm:max-w-md">
                        SOLVING SOCIETAL CHALLENGES
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-2 w-3/4 justify-center items-center">
                        <a
                            href="https://shivalikcollege.edu.in/wp-content/uploads/2025/09/school-level-india-edition_compressed.pdf" // starts with / to reference public folder root
                            download
                            target="_blank"

                            className="flex flex-col items-center text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-lg shadow-lg w-full"
                        >
                            <span className="text-xs sm:text-sm">Download brochure</span>
                            <span className="text-[10px] sm:text-xs leading-none">(Institute/University/Startup level)</span>
                        </a>

                        <a
                            href="https://shivalikcollege.edu.in/wp-content/uploads/2025/09/school-level-india-edition_compressed.pdf"
                            download
                            target="_blank"

                            className="flex flex-col items-center text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded-lg shadow-lg w-full"
                        >
                            <span className="text-xs sm:text-sm">Download brochure</span>
                            <span className="text-[10px] sm:text-xs leading-none">(School level)</span>
                        </a>
                    </div>

                    {/* Register Button */}
                    <a
                        href="#registration"
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-6 rounded-lg shadow-lg text-sm sm:text-base border border-white mt-1"
                    >
                        Register now
                    </a>
                </div>

            </div>



            {/* details */}
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-10 my-10">
                        <img src={shivalik} alt="" className="w-auto h-28" />
                        <img src={cbiiLogo} alt="" className="w-auto h-28" />
                        <img src={ihubdivyasamprk} alt="" className="w-auto h-28" />
                        <img src={awadh} alt="" className="w-auto h-16" />
                        <img src={startUpUttrakhand} alt="" className="w-auto h-20" />
                    </div>

                    {/* Entrepreneurs */}
                    <div className="text-center my-10 flex flex-col items-center gap-2">
                        <h1 className="text-3xl text-blue-600 font-bold">
                            From Zero to Unicorn: Meet the Visionaries
                        </h1>
                        <div className="h-[3px] w-1/2 bg-blue-600 rounded-xl"></div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 justify-items-center">
                            {entrepreneurs.map((entrepreneur, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center w-full max-w-xs"
                                >
                                    <img
                                        src={entrepreneur.image}
                                        alt={entrepreneur.name}
                                        className="mb-4 w-40 h-64 object-cover rounded"
                                    />
                                    <h2 className="text-xl font-bold text-center mb-2">
                                        {entrepreneur.name}
                                    </h2>
                                    <p className="text-gray-600 text-center text-sm">
                                        {entrepreneur.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stages of Entrepreneurship */}
                    <div className="flex flex-col items-center my-10 w-full">
                        <span className="bg-blue-700 font-bold text-white text-center p-4 rounded-xl text-xl">
                            Stages of Entrepreneurship
                        </span>
                        <img
                            src={startUpProcess}
                            alt="startUpProcess"
                            className="w-full sm:w-3/4 lg:w-3/4 h-auto mt-8 object-center"
                        />
                    </div>

                    {/* Ideathon 2025 Phases */}
                    <div>
                        <div className="flex justify-center items-center gap-3 my-10 text-3xl font-bold text-blue-700">
                            <h1>Ideathon 2025</h1>
                            <div className="w-4 h-[3px] bg-blue-700 rounded-xl"></div>
                            <h1>Phases</h1>
                        </div>

                        <div>
                            {ideathonData.phases.map((phase, index) => (
                                <EventPhaseCard
                                    key={index}
                                    phaseTag={phase.phaseTag}
                                    title={phase.title}
                                    content={phase.content}
                                />
                            ))}
                        </div>

                        <div>
                            <SustainableTechThemes />
                        </div>

                        {/* Register Now */}
                        <div className="flex flex-col flex-wrap gap-6 justify-center mt-12" id='registration'>
                            <div className='flex items-center justify-center p-2 bg-blue-600 text-white border border-blue-700 rounded-xl w-1/4 mx-auto mb-4'>
                                <h1 className='text-center text-3xl'>Register Now</h1>
                            </div>
                            <div className='flex flex-col flex-wrap md:flex-row gap-6 justify-center items-center'>
                                <RegistrationCard
                                    category="CATEGORY 1-A"
                                    title="Institutes / University / Startups (Uttarakhand Edition)"
                                    description="For innovative teams from institutes, colleges, and startups. Apply here to showcase your ideas."
                                    lastDate="1st Oct 2025"
                                    cardBg="bg-blue-50"
                                    titleColor="text-blue-700"
                                    buttonBg="bg-blue-500"
                                    link={"https://shivalikcollege.edu.in/ideathon/ideathon-registration/"}
                                />

                                <RegistrationCard
                                    category="CATEGORY 2-A"
                                    title="School Level (Uttarakhand Edition)"
                                    description="For school students (Grade 5–12) ready to innovate and solve societal challenges. Apply through the school-level form."
                                    lastDate="5th Oct 2025"
                                    cardBg="bg-purple-50"
                                    titleColor="text-purple-700"
                                    buttonBg="bg-purple-500"
                                    link={"https://shivalikcollege.edu.in/ideathon/school-ideathon-registration/"}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefits of Participation */}
                    <div>
                        <div className='w-full flex flex-col justify-center items-center  my-10 '>
                            <p className='text-blue-700 text-bold text-2xl mb-3'>Benefits of Participation </p>
                            <h1 className='text-2xl'>Categoty 1: Institute/ University/ Startups</h1>
                            <p className='text-sm'>Prizes, incubation, mentorship & funding opportunities via CBII</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 justify-items-center">
                            <WinnerCard
                                position={"1st Position"}
                                money={"₹ 50,000"}
                                stage={"Top Winner"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"2nd Position"}
                                money={"₹ 25,000"}
                                stage={"Runner up"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"3rd Position"}
                                money={"₹ 20,000"}
                                stage={"Top 3"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"4th - 5th Position"}
                                money={""}
                                stage={"Shortlisted"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                        </div>



                        <div className='w-full flex flex-col justify-center items-center  my-10 '>
                            <p className='text-blue-700 text-bold text-2xl mb-3'>Benefits of Participation </p>
                            <h1 className='text-2xl'>School Student's</h1>
                            <p className='text-sm'>Prizes, incubation, mentorship & funding opportunities via CBII</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 my-10 justify-items-center">
                            <WinnerCard
                                position={"1st Position"}
                                money={"₹ 25,000"}
                                stage={"Top Winner"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"2nd Position"}
                                money={"₹ 15,000"}
                                stage={"Runner up"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"3rd Position"}
                                money={"₹ 10,000"}
                                stage={"Top 3"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                            <WinnerCard
                                position={"4th - 5th Position"}
                                money={""}
                                stage={"Shortlisted"}
                                workspace={"Co-working space & infrastructure support"}
                                mentors={"Mentorship from industry experts & faculty"}
                                funding={
                                    "Access to seed funding (up to Rs. 5lac seed money) & investor network"
                                }
                                training={"Technnical & business development training "}
                                network={"Networking events & startup showcases"}
                                cardColor={"border-blue-700"}
                            />
                        </div>
                    </div>



                    {/* contact */}
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-center text-xl sm:text-2xl md:text-3xl text-blue-700 font-bold '>FOR FURTHER ENQUIRY, CONTACT</h1>

                        <div className='flex  flex-wrap gap-4 justify-center mt-6 mb-12 '>
                            <ContactCard
                                name={"Mr. Yashendra Sharma"}
                                number={" 9317227139"}
                                email={"yashender.sharma@shivalikcollege.edu.in"}
                            />
                            <ContactCard
                                name={"Dr. Abhishek Jha"}
                                number={" 8236823641"}
                                email={"abhishek.jha@sce.org.in"}
                            />
                            <ContactCard
                                name={"Mr. Ashish Kumar Gupta"}
                                number={"  9557502208"}
                                email={" ashish.gupta@sce.org.in"}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ideathon