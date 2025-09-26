import React from 'react';
import ImageCard from '../Components/ImageCard';
import vinarkrverma from '../Images/experts/vinarkrverma.png'
import akshaydwedi from '../Images/experts/akshaydwedi.jpg'
import chandramani from '../Images/experts/chandramani.jpg'
import dilipsharma from '../Images/experts/dilipsharma.jpg'
import millipant from '../Images/experts/millipant.jpg'
import praveenkrsaini from '../Images/experts/praveenkrsaini.jpg'
import rakshasharma from '../Images/experts/rakshasharma.jpg'
import satyendrasingh from '../Images/experts/satyendrasingh.png'
import spsrajput from '../Images/experts/spsrajput.jpg'
import kkchaudhary from '../Images/experts/kkchaudhary.jpg'
import rksharma from '../Images/experts/rksharma.jpg'


const ExpertMentors = () => {
    // Academics Mentors Data
    const keyMentors = [
        {
            name: "Prof. (Dr.) K.K. Chaudhary",
            designation: "Former Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/IIT Delhi",
            img: kkchaudhary
        },
        {
            name: "Prof. (Dr.) Akshay Dwivedi",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/IIT Roorkee",
            img: akshaydwedi
        },
        {
            name: "Prof. (Dr.) Raksha Sharma",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Computer Science/IIT Roorkee",
            img: rakshasharma
        },
        {
            name: "Prof. Milli Pant",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Computer Science/IIT Roorkee (Saharanpur Campus)",
            img: millipant
        },
        {
            name: "Prof. (Dr.) Parveen Kumar Saini",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/NIT Kurukshetra",
            img: praveenkrsaini
        },
        {
            name: "Prof. (Dr.) Rajesh Sharma",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/NIT Hamirpur",
            img: rksharma
        },
        {
            name: "Prof. (Dr.) Dilip Sharma",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/MNIT Jaipur",
            img: dilipsharma
        },
        {
            name: "Prof. (Dr.) S.P.S. Rajput",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/MANIT Bhopal",
            img: spsrajput
        },
        {
            name: "Prof. (Dr.) Satyendra Singh",
            designation: "Professor",
            qualification: "Ph.D.",
            department: "Mechanical Engineering/VMSB UTU Dehradun",
            img: satyendrasingh
        }
    ];

    // industrial mentors
    const industrialMentors = [
        {
            name: "Mr. Somnath Madesiya",
            designation: "Managing Director",
            qualification: "Graduate",
            organization: "Deep Engineers & Sons, Mohali"
        },
        {
            name: "Mr. Vinay Kumar Verma",
            designation: "Senior Manager",
            qualification: "B.Tech.",
            organization: "Axora Resources Limited, Andhra Pradesh",
            img: vinarkrverma

        },
        {
            name: "Mr. Satyabrata Mahana",
            designation: "Senior Manager",
            qualification: "B.Tech.",
            organization: "Vimal Petrothin Pvt Ltd, Roorkee"
        },
        {
            name: "Mr. Chandramani",
            designation: "Managing Director",
            qualification: "BSc. Agriculture",
            organization: "Agri Joy Pvt. Ltd., Dehradun",
            img: chandramani
        }
    ];


    return (
        <section className="py-4 px-4 bg-gray-50">
            <div>
                <div className="text-center relative mb-8">
                    <h1 className="text-4xl font-bold text-gray-700">Academic Mentors</h1>
                    {/* Decorative accent line */}
                    <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyMentors.map((mentor, index) => (
                    <ImageCard
                        key={index}
                        img={mentor.img} // Add imported images here
                        name1={mentor.name}
                        designation={mentor.designation}
                        organisation={mentor.department}
                    />
                ))}
            </div>

            <div className="text-center relative mt-8 mb-8">
                <h1 className="text-4xl font-bold text-gray-700">Industrial Mentors</h1>
                {/* Decorative accent line */}
                <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    industrialMentors.map((mentor, index) => (
                        <ImageCard
                            key={index}
                            img={mentor.img} // Add imported images here
                            name1={mentor.name}
                            designation={mentor.designation}
                            organisation={mentor.organization}
                        />
                    ))
                }
            </div>
        </section>

    )
}

export default ExpertMentors;
