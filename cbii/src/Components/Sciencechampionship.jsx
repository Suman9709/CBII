import React from 'react';
import sciencechampionship from '../Images/EventPoster/sciencechampionship.png'

const Sciencechampionship = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 py-6 bg-gray-50">
      
      {/* Top Image */}
      <div className="w-full mb-4">
        <img
          src={sciencechampionship}
          alt="Science Championship 4.0"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(118,8,37)] text-center mb-4">
        Science Championship 4.0
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center italic mb-6">
        “Finding the Next Einstein…”
      </h2>

      {/* Event Details */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <p><span className="font-bold">Date:</span> 11th October 2025</p>
        <p><span className="font-bold">Venue:</span> Shivalik Sports Complex, Shivalik College of Engineering, Dehradun</p>
        <p><span className="font-bold">Target Group:</span> Students of Classes 9th – 12th</p>
      </div>

      {/* About the Event */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">About the Event</h3>
        <p className="text-gray-700 mb-3">
          Science Championship 4.0 is a State-Level Inter-School Scientific Innovation Competition curated by Shivalik College of Engineering to identify, nurture, and inspire the scientific leaders of tomorrow.
        </p>
        <p className="text-gray-700 mb-3">
          With the central theme of Science, Society & Environment, this championship gives students the opportunity to think beyond textbooks, challenge existing boundaries, and innovate solutions for the future.
        </p>
        <p className="text-gray-700">
          The event aims to transform curious minds into future innovators, problem-solvers, and scientific thinkers who can bridge the gap between theoretical knowledge and real-world applications.
        </p>
      </div>

      {/* Vision */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Vision</h3>
        <p className="text-gray-700">
          To ignite a lifelong passion for scientific discovery, exploration, and innovation in young students by providing them with a hands-on, collaborative, and engaging platform to showcase their creativity and problem-solving skills.
        </p>
      </div>

      {/* Objectives */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Objectives</h3>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Promote science as an exciting, fun, and practical discipline.</li>
          <li>Encourage students to explore scientific concepts through experiments, working models, and innovation.</li>
          <li>Foster awareness and application of science for solving social, environmental, and technological challenges.</li>
          <li>Provide students with a platform to showcase their creativity and talent.</li>
          <li>Develop critical thinking, teamwork, and problem-solving skills in school students.</li>
        </ul>
      </div>

      {/* Event Categories */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Event Categories</h3>
        <p className="text-gray-700 mb-2">
          Students will compete in Project/Working Model Presentations under the following themes & sub-themes:
        </p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Main Theme:</span> Science, Society, and Environment</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><span className="font-bold">Future Horizons:</span> Speculating about the future of science and technology (AI, robotics, quantum computing, futuristic healthcare, space travel).</li>
          <li><span className="font-bold">Beyond Earth:</span> Innovations in space technology (rockets, satellites, Mars habitats, rovers, telescopes, space habitats).</li>
          <li><span className="font-bold">Green Energy:</span> Renewable resources, eco-friendly fuels, green buildings, and energy conservation.</li>
        </ul>
      </div>

      {/* Suggested Domains */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Suggested Idea Domains for Participants</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Space Technology: Rockets, Mars rovers, satellite tracking, space habitats.</li>
          <li>Agriculture & Food Security: Biotechnology, organic farming, climate-resilient crops, food storage innovations.</li>
          <li>Energy & Sustainability: Solar/wind energy models, biofuels, tidal/ocean energy systems, biomass utilization.</li>
          <li>Health & Medicine: Low-cost diagnostics, nutrition science, biomedical innovations.</li>
          <li>Environmental Issues: Climate change, pollution solutions, disaster preparedness models.</li>
          <li>Mathematics in Life: Real-life applications of algebra, geometry, probability, and optimization.</li>
          <li>Disaster Management: Early warning systems, innovative communication models, disaster mitigation technologies.</li>
        </ul>
      </div>

      {/* Participation Structure */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Participation Structure</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Category: Working Model / Project Presentation.</li>
          <li>Team Size: 3–5 students per team.</li>
          <li>Participation Limit: Up to 5 teams per school.</li>
          <li>Judging Criteria: Innovation, Scientific Approach, Practical Relevance, Presentation, and Societal Impact.</li>
        </ul>
      </div>

      {/* Expected Outcomes */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Expected Outcomes</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Passion & Awareness: Students will develop deeper interest in science and its real-world applications.</li>
          <li>Innovation Thinking: Participants will be exposed to problem-solving for societal challenges.</li>
          <li>Hands-on Training: Students will learn how to transform ideas into physical models.</li>
          <li>Networking & Exposure: Schools will connect with Shivalik College’s incubation ecosystem.</li>
          <li>Future Pathways: Innovative ideas may be nurtured further under CBII for potential incubation.</li>
        </ul>
      </div>

      {/* Why Science Championship */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl p-6 mb-12">
        <h3 className="text-2xl font-semibold mb-3 text-[rgb(118,8,37)]">Why Science Championship 4.0?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>For Schools: Strengthens scientific culture and encourages innovation.</li>
          <li>For Students: Builds confidence, knowledge, and career inspiration in STEM fields.</li>
          <li>For Society: Generates creative ideas to solve real-world challenges in environment, health, and technology.</li>
          <li>For Shivalik College: Establishes leadership in nurturing future scientists and innovators of Uttarakhand and beyond.</li>
        </ul>
        <p className="mt-4 text-gray-700 font-semibold">Science Championship 4.0 isn’t just a competition—it’s a movement to discover and inspire the next Einstein among us.</p>
      </div>

    </div>
  );
};

export default Sciencechampionship;
